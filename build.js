#!/usr/bin/env node

// Build script for LøberLab widgets
// Converts widget source files (HTML/CSS/JS) to self-contained .min.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WIDGETS = {
  skadefinder: 'skadefinder.js',
  loebetjek: 'loebetjek.js'
};

function build(name) {
  const srcFile = WIDGETS[name];
  if (!srcFile) {
    console.error(`Unknown widget: ${name}. Available: ${Object.keys(WIDGETS).join(', ')}`);
    process.exit(1);
  }

  const outFile = srcFile.replace('.js', '.min.js');
  const src = fs.readFileSync(path.join(__dirname, srcFile), 'utf8');
  const lines = src.split('\n');

  // --- 1. Extract CSS (line 1, between <style> and </style>) ---
  const cssMatch = lines[0].match(/^<style>(.*)<\/style>$/);
  if (!cssMatch) {
    console.error(`${srcFile}: Line 1 is not a <style> tag`);
    process.exit(1);
  }
  // Escape double quotes inside CSS so it's safe inside a JS "..." string
  const css = cssMatch[1].replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  // --- 2. Find structure boundaries ---
  const scriptLines = [];
  lines.forEach((line, i) => {
    if (line.trim() === '<script>' || line.trim() === '</script>') {
      scriptLines.push(i + 1); // 1-indexed
    }
  });

  // Expect: <script> at lines[1], </script> at lines[2], <script> at lines[3], </script> at lines[4]
  if (scriptLines.length !== 4) {
    console.error(`${srcFile}: Expected 4 script tags, found ${scriptLines.length}`);
    process.exit(1);
  }

  // HTML is between end of <style> (line 2) and first <script>
  const htmlStart = 1; // 0-indexed, line 2
  const htmlEnd = scriptLines[0] - 2; // line before first <script>, 0-indexed
  const html = lines.slice(htmlStart, htmlEnd + 1).filter(l => l.trim()).join('\n');

  // Modal helpers: between first <script> and first </script>
  const modalStart = scriptLines[0]; // 0-indexed line after <script>
  const modalEnd = scriptLines[1] - 2; // 0-indexed line before </script>
  const modalJs = lines.slice(modalStart, modalEnd + 1).join('\n');

  // Main IIFE: between second <script> and second </script>
  const mainStart = scriptLines[2]; // 0-indexed line after <script>
  const mainEnd = scriptLines[3] - 2; // 0-indexed line before </script>
  const mainJs = lines.slice(mainStart, mainEnd + 1).join('\n');

  // --- 3. Minify JS with terser ---
  const tmpModal = path.join(__dirname, `.tmp_modal_${name}.js`);
  const tmpMain = path.join(__dirname, `.tmp_main_${name}.js`);

  // Combine modal helpers + main IIFE into single JS block
  const combinedJs = modalJs + '\n' + mainJs;
  fs.writeFileSync(tmpMain, combinedJs);

  let minJs;
  try {
    minJs = execSync(`npx --yes terser "${tmpMain}" --compress --mangle`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  } catch (err) {
    console.error(`Terser failed for ${name}:`, err.message);
    process.exit(1);
  } finally {
    try { fs.unlinkSync(tmpMain); } catch(e) {}
  }

  // --- 4. Escape HTML for JS single-quoted string ---
  // Remove newlines, keep indentation. Only escape ' and \ (not " — safe in single-quoted JS)
  const htmlEscaped = html
    .replace(/\n/g, '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");

  // --- 5. Assemble min.js ---
  const output = [
    '!function(){',
    'var e=document.createElement("style");',
    `e.textContent="${css}";`,
    'document.head.appendChild(e);',
    "var d=document.createElement('div');",
    `d.innerHTML='${htmlEscaped}';`,
    'document.body.appendChild(d);',
    minJs.trim(),
    '}();'
  ].join('');

  fs.writeFileSync(path.join(__dirname, outFile), output);
  console.log(`Built ${outFile} (${(output.length / 1024).toFixed(1)} KB)`);
}

// --- CLI ---
const args = process.argv.slice(2);
if (args.length === 0) {
  Object.keys(WIDGETS).forEach(build);
} else {
  args.forEach(build);
}
