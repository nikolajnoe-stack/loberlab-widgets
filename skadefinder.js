(function() {
  var style = document.createElement("style");
  style.textContent = ".ll-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;visibility:hidden;transition:opacity 0.3s ease,visibility 0.3s ease}.ll-modal-overlay.active{opacity:1;visibility:visible}.ll-modal-container{position:relative;width:100%;max-width:500px;max-height:90vh;overflow-y:auto;border-radius:16px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);transform:scale(0.95) translateY(20px);transition:transform 0.3s ease}.ll-modal-overlay.active .ll-modal-container{transform:scale(1) translateY(0)}.ll-modal-close{position:absolute;top:16px;right:16px;width:44px;height:44px;border-radius:50%;background:#F7F8FA;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;transition:background 0.2s ease}.ll-modal-close:hover{background:#E0E2E6}.ll-trigger-wrapper{display:flex;justify-content:center;margin:32px 0}.ll-trigger-btn{display:inline-flex;align-items:center;gap:10px;padding:16px 28px;background:#EEFA70;color:#21232C;border:none;border-radius:12px;font-family:'Albert Sans',sans-serif;font-size:16px;font-weight:600;cursor:pointer;transition:transform 0.2s ease,box-shadow 0.2s ease;box-shadow:0 4px 12px rgba(0,0,0,0.1)}.ll-trigger-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(238,250,112,0.5)}.ll-skadefinder *{box-sizing:border-box;margin:0;padding:0;font-family:'Albert Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}.ll-skadefinder{padding:24px;background-color:#FFF;border-radius:16px}.ll-container{max-width:448px;margin:0 auto}.ll-card{padding:0;border-radius:0;background-color:transparent;border:none}.ll-header{display:flex;align-items:center;gap:12px;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #E0E2E6}.ll-logo-box{width:40px;height:40px;border-radius:8px;background-color:#EEFA70;display:flex;align-items:center;justify-content:center}.ll-header-text h1{font-size:16px;font-weight:600;color:#21232C;margin:0;letter-spacing:0.3px}.ll-header-text p{font-size:12px;color:#535865;margin:0}.ll-progress{margin-bottom:24px}.ll-progress-bar{height:4px;border-radius:4px;background-color:#E0E2E6}.ll-progress-fill{height:100%;border-radius:4px;background-color:#407A95;transition:width 0.3s ease}.ll-step-title{font-size:20px;font-weight:600;color:#21232C;margin-bottom:4px}.ll-step-desc{font-size:14px;color:#535865;margin-bottom:24px}.ll-options{display:flex;flex-direction:column;gap:8px}.ll-options.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ll-option{width:100%;padding:12px;text-align:left;border-radius:8px;background-color:#F7F8FA;border:1px solid #E0E2E6;cursor:pointer;transition:all 0.2s ease}.ll-option:hover{border-color:#535865;background-color:#EBEDF0}.ll-option.selected{background-color:#E8F4F8;border-color:#407A95}.ll-option-label{font-size:14px;font-weight:500;color:#21232C}.ll-option-desc{font-size:12px;color:#535865;margin-top:2px}.ll-option-icon{font-size:18px;margin-right:8px}.ll-option-check{width:20px;height:20px;border-radius:50%;background-color:#407A95;display:flex;align-items:center;justify-content:center;margin-left:auto}.ll-option-row{display:flex;align-items:center;justify-content:space-between}.ll-btn{width:100%;padding:12px;border-radius:50px;font-size:14px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;border:none;transition:opacity 0.2s ease}.ll-btn-primary{background-color:#EEFA70;color:#21232C}.ll-btn-primary:disabled{opacity:0.4;cursor:not-allowed}.ll-btn-dark{background-color:#21232C;color:#FFF}.ll-btn-back{background:none;border:none;font-size:14px;color:#407A95;cursor:pointer;margin-top:12px;padding:8px}.ll-btn-link{background:none;border:none;font-size:14px;color:#407A95;cursor:pointer;width:100%;text-align:center;margin-top:12px}.ll-result-box{padding:20px;border-radius:12px;background-color:#F7F8FA;margin-bottom:16px}.ll-match-badge{display:inline-block;padding:2px 8px;border-radius:50px;background-color:#EEFA70;color:#21232C;font-size:12px;margin-bottom:12px}.ll-result-name{font-size:24px;font-weight:700;color:#21232C;margin-bottom:4px}.ll-result-fullname{font-size:14px;color:#535865;margin-bottom:12px}.ll-result-desc{font-size:14px;color:#21232C}.ll-other-matches{margin-bottom:24px}.ll-other-label{font-size:12px;color:#535865;margin-bottom:8px}.ll-other-tags{display:flex;flex-wrap:wrap;gap:8px}.ll-other-tag{font-size:12px;padding:4px 8px;border-radius:50px;background-color:#FFF;border:1px solid #E0E2E6;color:#535865;cursor:pointer;transition:all 0.2s ease;font-family:inherit}.ll-other-tag:hover{border-color:#407A95;background-color:#E8F4F8;color:#21232C}.ll-prognosis-number{font-size:36px;font-weight:700;color:#21232C;text-align:center}.ll-prognosis-unit{font-size:16px;color:#21232C;text-align:center;margin-bottom:16px}.ll-bento-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px}.ll-bento-card{padding:12px;border-radius:10px;background-color:#F7F8FA}.ll-bento-label{font-size:11px;color:#535865;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.3px}.ll-bento-value{font-size:14px;font-weight:600;color:#21232C}.ll-lead-box{padding:16px;border-radius:8px;background-color:rgba(238,250,112,0.15);border:1px solid #EEFA70;margin-bottom:16px}.ll-lead-title{font-size:14px;font-weight:500;color:#21232C;margin-bottom:4px}.ll-lead-desc{font-size:12px;color:#535865;margin-bottom:12px}.ll-input{width:100%;padding:10px 12px;border-radius:8px;border:1px solid #E0E2E6;background-color:#FFF;font-size:14px;margin-bottom:8px}.ll-input:focus{outline:none;border-color:#407A95}.ll-input-row{display:flex;gap:8px}.ll-input-row .ll-input{flex:1}.ll-select{appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23535865' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px}.ll-input-hint{font-size:11px;color:#535865;margin:4px 0 12px 0}.ll-booking-box{padding:16px;border-radius:8px;background-color:#21232C;margin-bottom:16px}.ll-booking-title{font-size:14px;font-weight:500;color:#FFF;margin-bottom:4px}.ll-booking-desc{font-size:12px;color:#E0E2E6;margin-bottom:12px}.ll-disclaimer{font-size:12px;color:#535865;text-align:center;margin-bottom:16px}.ll-success-box{padding:16px;border-radius:8px;background-color:#F7F8FA;margin-bottom:16px;display:flex;align-items:center;gap:12px}.ll-success-icon{width:32px;height:32px;border-radius:50%;background-color:#407A95;display:flex;align-items:center;justify-content:center;flex-shrink:0}.ll-success-text h4{font-size:14px;font-weight:500;color:#21232C;margin:0}.ll-success-text p{font-size:12px;color:#535865;margin:0}.ll-center{text-align:center}.ll-mb-4{margin-bottom:16px}.ll-mb-6{margin-bottom:24px}.ll-mt-4{margin-top:16px}.ll-mt-6{margin-top:24px}.ll-hidden{display:none!important}.ll-body-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:8px 0}.ll-body-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:20px 16px;background:#fff;border:1px solid #E0E2E6;border-radius:12px;cursor:pointer;transition:all 0.2s ease}.ll-body-btn:hover{border-color:#407A95;background:#F7F8FA;transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.08)}.ll-body-btn:active{transform:translateY(0)}.ll-body-icon{font-size:32px;line-height:1}.ll-body-label{font-family:'Albert Sans',sans-serif;font-size:14px;font-weight:500;color:#21232C}.ll-demo-box{padding:16px;border-radius:8px;background-color:#F7F8FA;margin-bottom:16px}.ll-demo-title{font-size:14px;font-weight:500;color:#21232C;margin-bottom:4px}.ll-demo-desc{font-size:12px;color:#535865;margin-bottom:12px}.ll-consent{display:flex;align-items:flex-start;gap:8px;margin:12px 0}.ll-consent input[type=\"checkbox\"]{width:18px;height:18px;margin-top:2px;accent-color:#407A95;cursor:pointer;flex-shrink:0}.ll-consent label{font-size:11px;color:#535865;line-height:1.4;cursor:pointer}.ll-btn-dark:disabled{opacity:0.4;cursor:not-allowed}.ll-btn-row{display:flex;gap:8px}.ll-btn-row .ll-btn{flex:1}.ll-btn-secondary{background-color:#F7F8FA;color:#21232C;border:1px solid #E0E2E6}.ll-btn-secondary:hover{background-color:#EBEDF0}.ll-btn-secondary:disabled{opacity:0.4;cursor:not-allowed}.ll-plan-list{display:flex;flex-direction:column;gap:0;margin-bottom:20px}.ll-plan-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid #E0E2E6}.ll-plan-item:last-child{border-bottom:none}.ll-plan-icon{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}.ll-plan-icon.unlocked{background-color:#E8F4F8;color:#407A95}.ll-plan-icon.locked{background-color:#F7F8FA;color:#535865}.ll-plan-text{flex:1}.ll-plan-label{font-size:13px;font-weight:600;color:#21232C;margin-bottom:2px}.ll-plan-detail{font-size:12px;color:#535865;line-height:1.4}.ll-plan-item.blurred .ll-plan-text{filter:blur(5px);user-select:none;pointer-events:none}.ll-plan-item.blurred .ll-plan-label,.ll-plan-item.blurred .ll-plan-detail{color:#535865}.ll-unlock-box{padding:20px;border-radius:12px;background:linear-gradient(135deg,rgba(238,250,112,0.15) 0%,rgba(64,122,149,0.08) 100%);border:1px solid #EEFA70;margin-bottom:16px;text-align:center}.ll-unlock-title{font-size:16px;font-weight:600;color:#21232C;margin-bottom:4px}.ll-unlock-desc{font-size:13px;color:#535865;margin-bottom:16px}.ll-email-row{display:flex;gap:8px}.ll-email-row .ll-input{flex:1;margin-bottom:0}.ll-email-row .ll-btn{width:auto;padding:10px 20px;white-space:nowrap;border-radius:8px}.ll-consent-mini{font-size:10px;color:#535865;margin-top:8px;line-height:1.3;text-align:left}.ll-consent-mini a{color:#407A95;text-decoration:underline}.ll-upsell-box{padding:24px;border-radius:12px;background-color:#FFF;border:1px solid #E0E2E6;margin-bottom:16px}.ll-upsell-stat{display:flex;align-items:center;gap:10px;padding:12px;border-radius:8px;background-color:#FFF8E8;margin-bottom:16px}.ll-upsell-stat-icon{font-size:20px;flex-shrink:0}.ll-upsell-stat-text{font-size:13px;color:#21232C;font-weight:500;line-height:1.4}.ll-upsell-features{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}.ll-upsell-feature{display:flex;align-items:center;gap:10px;font-size:13px;color:#21232C}.ll-upsell-feature-icon{width:20px;height:20px;border-radius:50%;background-color:#E8F4F8;display:flex;align-items:center;justify-content:center;flex-shrink:0}.ll-btn-skip{background:none;border:none;font-size:12px;color:#535865;cursor:pointer;width:100%;text-align:center;margin-top:12px;padding:8px;opacity:0.7;transition:opacity 0.2s}.ll-btn-skip:hover{opacity:1}.ll-prognosis-highlight{display:inline-block;padding:4px 12px;border-radius:50px;background-color:rgba(238,250,112,0.3);color:#21232C;font-size:13px;font-weight:500;margin-top:8px;margin-bottom:16px}.ll-plan-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.ll-plan-week{font-size:11px;color:#407A95;font-weight:600;text-transform:uppercase;letter-spacing:0.3px}";
  document.head.appendChild(style);

  var div = document.createElement("div");
  div.innerHTML = "<div class=\"ll-modal-overlay\" id=\"ll-modal-overlay\" onclick=\"window.llCloseModalOnOverlay(event)\">\n  <div class=\"ll-modal-container\" role=\"dialog\" aria-modal=\"true\" aria-label=\"LøberLab Skadefinder\">\n    <button class=\"ll-modal-close\" onclick=\"window.llCloseModal()\" aria-label=\"Luk\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#535865\" stroke-width=\"2\">\n        <path d=\"M6 18L18 6M6 6l12 12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      </svg>\n    </button>\n    <div class=\"ll-skadefinder\" id=\"ll-skadefinder\">\n      <div class=\"ll-container\">\n        <div class=\"ll-card\">\n          <div class=\"ll-header\">\n            <div class=\"ll-logo-box\">\n              <svg width=\"24\" height=\"29\" viewBox=\"0 0 679 814\" fill=\"none\">\n                <g transform=\"translate(-141.039,-111.732)\">\n                  <g transform=\"matrix(8.31127,0,0,8.31127,99.1558,-1033)\">\n                    <path d=\"M64.353,235.663L54.023,235.663C52.919,235.663 52.023,234.767 52.023,233.663C52.023,232.558 52.919,231.663 54.023,231.663L62.943,231.663L81.842,178.685L54.023,178.685C52.919,178.685 52.023,177.79 52.023,176.685C52.023,175.581 52.919,174.685 54.023,174.685L84.679,174.685C85.329,174.685 85.938,175.002 86.313,175.533C86.688,176.064 86.781,176.745 86.562,177.357L66.237,234.335C65.953,235.132 65.199,235.663 64.353,235.663Z\" fill=\"#21232C\"/>\n                    <path d=\"M59.898,227.003L55.646,227.003L70.815,183.354L75.067,183.354L59.898,227.003Z\" fill=\"#21232C\"/>\n                    <path d=\"M79.348,170.03L47.859,170.03C46.755,170.03 45.859,169.134 45.859,168.03C45.859,166.925 46.755,166.03 47.859,166.03L79.348,166.03C80.452,166.03 81.348,166.925 81.348,168.03C81.348,169.134 80.452,170.03 79.348,170.03Z\" fill=\"#21232C\"/>\n                    <path d=\"M27.365,137.732L37.695,137.732C38.8,137.732 39.695,138.627 39.695,139.732C39.695,140.836 38.8,141.732 37.695,141.732L28.775,141.732L9.877,194.709L37.695,194.709C38.8,194.709 39.695,195.605 39.695,196.709C39.695,197.814 38.8,198.709 37.695,198.709L7.04,198.709C6.39,198.709 5.78,198.393 5.405,197.862C5.03,197.33 4.937,196.65 5.156,196.037L25.481,139.06C25.766,138.263 26.519,137.732 27.365,137.732Z\" fill=\"#21232C\"/>\n                    <path d=\"M31.821,146.391L36.072,146.391L20.903,190.041L16.652,190.041L31.821,146.391Z\" fill=\"#21232C\"/>\n                    <path d=\"M12.371,203.365L43.859,203.365C44.964,203.365 45.859,204.26 45.859,205.365C45.859,206.469 44.964,207.365 43.859,207.365L12.371,207.365C11.267,207.365 10.371,206.469 10.371,205.365C10.371,204.26 11.267,203.365 12.371,203.365Z\" fill=\"#21232C\"/>\n                  </g>\n                </g>\n              </svg>\n            </div>\n            <div class=\"ll-header-text\">\n              <h1>Skadefinder</h1>\n              <p>Find din løbeskade</p>\n            </div>\n          </div>\n          <div class=\"ll-progress\" id=\"ll-progress\">\n            <div class=\"ll-progress-bar\">\n              <div class=\"ll-progress-fill\" id=\"ll-progress-fill\"></div>\n            </div>\n          </div>\n          <div id=\"ll-step-content\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  document.body.appendChild(div);

window.llOpenModal = window.llOpenModal || function() {
  var mo = document.getElementById('ll-modal-overlay');
  if (mo) { mo.classList.add('active'); document.body.style.overflow = 'hidden'; }
};
window.llCloseModal = window.llCloseModal || function() {
  var mo = document.getElementById('ll-modal-overlay');
  if (mo) { mo.classList.remove('active'); document.body.style.overflow = ''; }
};
window.llCloseModalOnOverlay = window.llCloseModalOnOverlay || function(e) {
  if (e.target.id === 'll-modal-overlay') window.llCloseModal();
};


  // ============================================
  // KONFIGURATION
  // ============================================
  var C = {
    confirmationUrl: 'https://www.loberlab.dk/skadefinder-confirmation',
    klaviyoPublicKey: 'WDVWey',
    klaviyoListId: 'WWrXtB',
    sheetsWebhook: 'https://hook.eu2.make.com/wwi4im6vu5x49w8rw580u97q83o88mhn'
  };

  // ============================================
  // KROPSOMRÅDER
  // ============================================
  var B = [
    { id: 'foot', label: 'Fod', icon: '🦶' },
    { id: 'lower_leg', label: 'Underben', icon: '🦴' },
    { id: 'knee', label: 'Knæ', icon: '🦵' },
    { id: 'thigh', label: 'Lår', icon: '🦵' },
    { id: 'hip', label: 'Hofte/balde', icon: '🍑' },
    { id: 'back', label: 'Ryg', icon: '🧍' }
  ];

  // ============================================
  // PRÆCISE LOKATIONER
  // ============================================
  var P = {
    foot: [
      { id: 'heel', label: 'Under hælen', injuryArea: 'foot' },
      { id: 'arch', label: 'I fodbuen/svangen', injuryArea: 'foot' },
      { id: 'forefoot', label: 'Forfoden', injuryArea: 'foot' },
      { id: 'toes', label: 'Mellem tæerne', injuryArea: 'foot' },
      { id: 'top', label: 'Oversiden af foden', injuryArea: 'foot' },
      { id: 'ankle_outer', label: 'Ydersiden af anklen', injuryArea: 'ankle' },
      { id: 'ankle_inner', label: 'Indersiden af anklen', injuryArea: 'ankle' },
      { id: 'achilles_insertion', label: 'Akillessenen ved hælen', injuryArea: 'achilles' }
    ],
    lower_leg: [
      { id: 'shin_inner', label: 'Langs indersiden af skinnebenet', injuryArea: 'shin' },
      { id: 'shin_front', label: 'Forsiden af skinnebenet', injuryArea: 'shin' },
      { id: 'shin_specific', label: 'Ét bestemt punkt på skinnebenet', injuryArea: 'shin' },
      { id: 'calf_upper', label: 'Øverst i læggen', injuryArea: 'calf' },
      { id: 'calf_middle', label: 'Midt på læggen', injuryArea: 'calf' },
      { id: 'calf_lower', label: 'Nederst i læggen (mod achilles)', injuryArea: 'achilles' },
      { id: 'achilles_tendon', label: 'Akillessenen (midt på)', injuryArea: 'achilles' },
      { id: 'achilles_upper', label: 'Akillessenen (øverst mod læggen)', injuryArea: 'achilles' },
      { id: 'ankle_outer', label: 'Ydersiden af anklen', injuryArea: 'ankle' },
      { id: 'ankle_inner', label: 'Indersiden af anklen', injuryArea: 'ankle' }
    ],
    knee: [
      { id: 'front', label: 'Foran/omkring knæskallen', injuryArea: 'knee' },
      { id: 'outer', label: 'Ydersiden af knæet', injuryArea: 'knee' },
      { id: 'inner', label: 'Indersiden af knæet', injuryArea: 'knee' },
      { id: 'below', label: 'Under knæskallen', injuryArea: 'knee' },
      { id: 'back', label: 'Bagsiden af knæet', injuryArea: 'knee' }
    ],
    thigh: [
      { id: 'front', label: 'Forsiden (quadriceps)', injuryArea: 'thigh' },
      { id: 'back', label: 'Bagsiden (baglår)', injuryArea: 'thigh' },
      { id: 'back_upper', label: 'Øverst i baglåret (ved balden)', injuryArea: 'thigh' },
      { id: 'inner', label: 'Indersiden', injuryArea: 'thigh' },
      { id: 'outer', label: 'Ydersiden', injuryArea: 'thigh' }
    ],
    hip: [
      { id: 'front', label: 'Foran i lysken', injuryArea: 'hip' },
      { id: 'side', label: 'Siden af hoften', injuryArea: 'hip' },
      { id: 'back', label: 'Bagsiden/balden', injuryArea: 'hip' },
      { id: 'deep', label: 'Dybt inde i hoften', injuryArea: 'hip' }
    ],
    back: [
      { id: 'lower_center', label: 'Nederst i ryggen (midt)', injuryArea: 'back' },
      { id: 'lower_side', label: 'Nederst i ryggen (siden)', injuryArea: 'back' },
      { id: 'si_joint', label: 'Ved SI-leddet (over balden)', injuryArea: 'back' },
      { id: 'radiating', label: 'Udstråling til ben/balde', injuryArea: 'back' }
    ]
  };

  // ============================================
  // LOKATION MAPPING
  // ============================================
  var L = {
    heel: 'heel', arch: 'arch', forefoot: 'forefoot', toes: 'toes', top: 'top',
    ankle_outer: 'outer', ankle_inner: 'inner', achilles_insertion: 'insertion',
    shin_inner: 'inner', shin_front: 'front', shin_specific: 'specific',
    calf_upper: 'upper', calf_middle: 'middle', calf_lower: 'upper',
    achilles_tendon: 'tendon', achilles_upper: 'upper',
    front: 'front', outer: 'outer', inner: 'inner', below: 'below', back: 'back',
    back_upper: 'back_upper', side: 'side', deep: 'deep',
    lower_center: 'lower_center', lower_side: 'lower_side', si_joint: 'si_joint', radiating: 'radiating'
  };

  // ============================================
  // SMERTEKARAKTER
  // ============================================
  var pc = [
    { id: 'dull', label: 'Murrende/dunkende', d: 'En dyb, vedvarende smerte' },
    { id: 'sharp', label: 'Skarp/stikkende', d: 'Intens, præcis smerte' },
    { id: 'burning', label: 'Brændende', d: 'Varm, sviende fornemmelse' },
    { id: 'stiff', label: 'Stiv/øm', d: 'Stramhed og ømhed' }
  ];

  // ============================================
  // TIMING
  // ============================================
  var to = [
    { id: 'morning', label: 'Første skridt om morgenen', d: 'Værst når jeg står op' },
    { id: 'start', label: 'Start af løbetur', d: 'Aftager ofte efter opvarmning' },
    { id: 'during', label: 'Under løb', d: 'Kommer frem undervejs' },
    { id: 'after_distance', label: 'Efter bestemt distance', d: 'Kommer efter fx 2-3 km' },
    { id: 'after', label: 'Efter løb', d: 'Værst i timerne efter' },
    { id: 'always', label: 'Konstant', d: 'Mærkes også i hvile' }
  ];

  // ============================================
  // ONSET
  // ============================================
  var oo = [
    { id: 'gradual', label: 'Gradvist over tid', d: 'Startede småt og er blevet værre' },
    { id: 'sudden', label: 'Pludseligt', d: 'Kom under en specifik træning' }
  ];

  // ============================================
  // VARIGHED
  // ============================================
  var D = [
    { id: 'acute', label: 'Under 2 uger', d: 'Nyligt opstået', m: 1 },
    { id: 'subacute', label: '2-6 uger', d: 'Har stået på et stykke tid', m: 1.3 },
    { id: 'chronic_early', label: '6 uger - 3 måneder', d: 'Længerevarende', m: 1.6 },
    { id: 'chronic_late', label: 'Over 3 måneder', d: 'Langvarig skade', m: 2 }
  ];

  // ============================================
  // FORVÆRRENDE FAKTORER
  // ============================================
  var A = {
    foot: [
      { id: 'first_steps', l: 'Første skridt efter hvile' },
      { id: 'barefoot', l: 'Gang uden sko' },
      { id: 'long_standing', l: 'Stå længe' },
      { id: 'push_off', l: 'Afsæt ved løb' },
      { id: 'tight_shoes', l: 'Stramme sko' },
      { id: 'morning_steps', l: 'Første skridt om morgenen' },
      { id: 'calf_raise', l: 'Hæve sig på tæer' },
      { id: 'uneven', l: 'Ujævnt underlag' },
      { id: 'stairs_down', l: 'Trapper ned' },
      { id: 'turning', l: 'Retningsskift' },
      { id: 'stairs', l: 'Trapper' }
    ],
    lower_leg: [
      { id: 'running', l: 'Løb generelt' },
      { id: 'hard_surface', l: 'Hårdt underlag' },
      { id: 'push_off', l: 'Afsæt ved løb' },
      { id: 'hills_up', l: 'Løb op ad bakke' },
      { id: 'speed', l: 'Højere tempo' },
      { id: 'jumping', l: 'Hop og spring' },
      { id: 'morning_steps', l: 'Første skridt' },
      { id: 'calf_raise', l: 'Hæve sig på tæer' },
      { id: 'stretching', l: 'Stræk af læggen' },
      { id: 'touching', l: 'Tryk på området' },
      { id: 'uneven', l: 'Ujævnt underlag' },
      { id: 'turning', l: 'Retningsskift' },
      { id: 'stairs_down', l: 'Trapper ned' },
      { id: 'stairs', l: 'Trapper' },
      { id: 'first_steps', l: 'Første skridt efter hvile' },
      { id: 'long_standing', l: 'Stå længe' }
    ],
    knee: [
      { id: 'stairs_down', l: 'Trapper ned' },
      { id: 'stairs_up', l: 'Trapper op' },
      { id: 'hills_down', l: 'Løb ned ad bakke' },
      { id: 'hills_up', l: 'Løb op ad bakke' },
      { id: 'running', l: 'Løb generelt' },
      { id: 'squatting', l: 'Squat/knæbøjninger' },
      { id: 'sitting', l: 'Sidde længe med bøjet knæ' },
      { id: 'jumping', l: 'Hop og spring' },
      { id: 'after_distance', l: 'Smerte efter bestemt distance' },
      { id: 'better_warmup', l: 'Bedres efter opvarmning' }
    ],
    thigh: [
      { id: 'sprinting', l: 'Sprint/acceleration' },
      { id: 'hills', l: 'Bakker op' },
      { id: 'hills_down', l: 'Bakker ned' },
      { id: 'running', l: 'Løb generelt' },
      { id: 'after_distance', l: 'Smerte efter bestemt distance' },
      { id: 'stretching', l: 'Stræk' },
      { id: 'kicking', l: 'Spark/afsæt' },
      { id: 'sitting', l: 'Sidde længe' }
    ],
    hip: [
      { id: 'lifting_leg', l: 'Løfte benet' },
      { id: 'stairs', l: 'Trapper' },
      { id: 'sitting', l: 'Sidde længe' },
      { id: 'lying_on_side', l: 'Ligge på siden' },
      { id: 'running', l: 'Løb generelt' },
      { id: 'stretching', l: 'Udstrækning' },
      { id: 'deep_squat', l: 'Dyb squat' },
      { id: 'rotation', l: 'Rotation i hoften' },
      { id: 'getting_in_car', l: 'Stige ind/ud af bil' },
      { id: 'clicking', l: 'Klik/låsning i hoften' }
    ],
    back: [
      { id: 'running', l: 'Løb generelt' },
      { id: 'sitting', l: 'Sidde længe' },
      { id: 'bending', l: 'Bøje forover' },
      { id: 'standing', l: 'Stå længe' },
      { id: 'morning_stiff', l: 'Morgenstivhed' },
      { id: 'hills', l: 'Bakkeløb' },
      { id: 'speed_work', l: 'Fartleg/intervaller' },
      { id: 'coughing', l: 'Hoste/nyse' }
    ]
  };

  // ============================================
  // RED FLAGS (advarselstegn)
  // ============================================
  var RF = {
    _common: [
      { id: 'night_pain', l: 'Natsmerte der vækker mig' },
      { id: 'fever', l: 'Feber eller almensymptomer' },
      { id: 'weight_loss', l: 'Uforklaret vægttab' }
    ],
    back: [
      { id: 'bladder_bowel', l: 'Ændret blære- eller tarmfunktion' },
      { id: 'saddle_numbness', l: 'Følelsesløshed i skridtet' },
      { id: 'progressive_weakness', l: 'Tiltagende svaghed i begge ben' }
    ],
    knee: [
      { id: 'acute_swelling', l: 'Pludselig kraftig hævelse' },
      { id: 'locking', l: 'Knæet låser eller giver efter' },
      { id: 'no_weight_bear', l: 'Kan ikke støtte på benet' }
    ],
    hip: [
      { id: 'acute_swelling', l: 'Pludselig kraftig hævelse' },
      { id: 'no_weight_bear', l: 'Kan ikke støtte på benet' },
      { id: 'groin_lump', l: 'Synlig hævelse eller knude i lysken' }
    ],
    foot: [
      { id: 'acute_swelling', l: 'Pludselig kraftig hævelse' },
      { id: 'no_weight_bear', l: 'Kan ikke støtte på foden' },
      { id: 'discoloration', l: 'Misfarvning eller kraftig rødme' }
    ],
    lower_leg: [
      { id: 'calf_swollen_red', l: 'Hævet, rød og varm læg (ét ben)' },
      { id: 'no_weight_bear', l: 'Kan ikke støtte på benet' },
      { id: 'acute_swelling', l: 'Pludselig kraftig hævelse' }
    ],
    thigh: [
      { id: 'acute_swelling', l: 'Pludselig kraftig hævelse' },
      { id: 'no_weight_bear', l: 'Kan ikke støtte på benet' },
      { id: 'bruising', l: 'Kraftig misfarvning/blåmærke' }
    ]
  };

  function getRedFlags(area) {
    var specific = RF[area] || [];
    return specific.concat(RF._common);
  }

  // ============================================
  // SKADEDATABASE
  // ============================================
  var I = [
    { id: 'runners_knee', n: 'Forreste knæsmerter', f: 'Patellofemoralt smertesyndrom (PFSS)', a: 'knee', loc: ['front', 'below'], ch: ['dull', 'sharp'], ti: ['during', 'after', 'start'], on: ['gradual'], ag: ['stairs_down', 'hills_down', 'squatting', 'sitting', 'better_warmup'], de: 'Smerte omkring og bag knæskallen.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'itb_syndrome', n: 'IT-bånds-irritation (knæ)', f: 'Distal ITBS-præsentation', a: 'knee', loc: ['outer'], ch: ['sharp', 'burning'], ti: ['during', 'after_distance'], on: ['gradual'], ag: ['hills_down', 'stairs_down', 'after_distance'], de: 'Smerte på ydersiden af knæet fra IT-båndet. Årsagen sidder typisk i lår eller hofte.', w: { mild: 4, moderate: 8, severe: 12 } },
    { id: 'patellar_tendinopathy', n: 'Springerknæ', f: 'Patellar tendinopati', a: 'knee', loc: ['below'], ch: ['sharp', 'dull'], ti: ['start', 'during'], on: ['gradual'], ag: ['jumping', 'stairs_up', 'squatting'], de: 'Smerte under knæskallen.', w: { mild: 6, moderate: 12, severe: 20 } },
    { id: 'pes_anserinus', n: 'Pes anserinus tendinopati', f: 'Pes anserinus bursit/tendinopati', a: 'knee', loc: ['inner'], ch: ['dull', 'sharp'], ti: ['during', 'after', 'start'], on: ['gradual'], ag: ['stairs_down', 'stairs_up', 'running', 'sitting'], de: 'Smerte på indersiden af knæet.', w: { mild: 4, moderate: 8, severe: 12 } },
    { id: 'popliteus_injury', n: 'Knæhasesmerte', f: 'Popliteus tendinopati', a: 'knee', loc: ['back'], ch: ['dull', 'sharp'], ti: ['during', 'after'], on: ['gradual'], ag: ['hills_down', 'running', 'squatting'], de: 'Knæhasesmerte.', w: { mild: 4, moderate: 8, severe: 12 } },
    { id: 'shin_splints', n: 'Skinnebensbetændelse', f: 'Medial tibial stress syndrom', a: 'shin', loc: ['inner'], ch: ['dull', 'sharp'], ti: ['start', 'during'], on: ['gradual'], ag: ['running', 'hard_surface', 'jumping'], de: 'Skinnebenssmerter.', w: { mild: 6, moderate: 8, severe: 12 } },
    { id: 'stress_fracture_shin', n: 'Stressfraktur i skinneben', f: 'Tibial stressfraktur', a: 'shin', loc: ['specific', 'front'], ch: ['sharp'], ti: ['during', 'always'], on: ['gradual'], ag: ['running', 'jumping', 'touching'], de: 'Stressbrud i skinnebenet. Stop løb og søg læge – fortsat belastning kan forværre bruddet.', w: { mild: 8, moderate: 12, severe: 20 } },
    { id: 'calf_strain', n: 'Lægskade', f: 'Forstrækning af gastrocnemius/soleus', a: 'calf', loc: ['upper', 'middle'], ch: ['sharp', 'dull'], ti: ['during', 'after'], on: ['sudden', 'gradual'], ag: ['push_off', 'speed', 'jumping', 'stretching'], de: 'Lægmuskelskade.', w: { mild: 6, moderate: 8, severe: 12 } },
    { id: 'achilles_proximal', n: 'Proksimal akillestendinopati', f: 'Akillessene tendinopati (øvre del)', a: 'achilles', loc: ['upper'], ch: ['stiff', 'dull', 'sharp'], ti: ['morning', 'start', 'during'], on: ['gradual'], ag: ['morning_steps', 'hills_up', 'calf_raise', 'stretching'], de: 'Smerte øverst i akillessenen.', w: { mild: 10, moderate: 16, severe: 24 } },
    { id: 'achilles_tendinopathy', n: 'Akillessenetendinopati', f: 'Akillessene tendinopati (midten)', a: 'achilles', loc: ['tendon'], ch: ['stiff', 'dull', 'sharp'], ti: ['morning', 'start'], on: ['gradual'], ag: ['morning_steps', 'hills_up', 'calf_raise'], de: 'Smerte midt på akillessenen.', w: { mild: 10, moderate: 16, severe: 24 } },
    { id: 'achilles_insertional', n: 'Insertionel akillestendinopati', f: 'Insertionel akillessene tendinopati', a: 'achilles', loc: ['insertion'], ch: ['sharp', 'dull'], ti: ['morning', 'start', 'always'], on: ['gradual'], ag: ['morning_steps', 'hills_up', 'calf_raise'], de: 'Smerte nederst på akillessenen.', w: { mild: 12, moderate: 20, severe: 30 } },
    { id: 'plantar_fasciitis', n: 'Plantar fasciitis', f: 'Plantar fasciopati', a: 'foot', loc: ['heel', 'arch'], ch: ['sharp', 'stiff'], ti: ['morning', 'start'], on: ['gradual'], ag: ['first_steps', 'barefoot', 'long_standing'], de: 'Hælsmerte – typisk værst ved første skridt om morgenen.', w: { mild: 10, moderate: 18, severe: 28 } },
    { id: 'metatarsal_stress', n: 'Stressfraktur i mellemfod', f: 'Metatarsal stressfraktur', a: 'foot', loc: ['forefoot', 'top'], ch: ['sharp'], ti: ['during', 'always'], on: ['gradual'], ag: ['push_off', 'long_standing'], de: 'Stressbrud i mellemfoden. Stop løb og søg læge for vurdering og evt. billeddiagnostik.', w: { mild: 8, moderate: 12, severe: 16 } },
    { id: 'morton_neuroma', n: 'Mortons neurom', f: 'Interdigitalt neurom', a: 'foot', loc: ['toes'], ch: ['burning', 'sharp'], ti: ['during', 'always'], on: ['gradual'], ag: ['tight_shoes', 'push_off'], de: 'Nervesmerte i forfoden.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'metatarsalgia', n: 'Metatarsalgi', f: 'Forfodssmerter', a: 'foot', loc: ['forefoot'], ch: ['dull', 'burning'], ti: ['during', 'after'], on: ['gradual'], ag: ['long_standing', 'tight_shoes', 'barefoot', 'push_off'], de: 'Smerter under forfoden.', w: { mild: 4, moderate: 8, severe: 12 } },
    { id: 'extensor_tendinopathy', n: 'Fodrygssmerte', f: 'Ekstensor tendinopati', a: 'foot', loc: ['top'], ch: ['dull', 'sharp'], ti: ['during', 'after'], on: ['gradual'], ag: ['tight_shoes', 'push_off', 'long_standing'], de: 'Smerte på fodryggen.', w: { mild: 4, moderate: 6, severe: 10 } },
    { id: 'hip_flexor_strain', n: 'Hoftefleksor-skade', f: 'Iliopsoas forstrækning/tendinopati', a: 'hip', loc: ['front'], ch: ['sharp', 'dull'], ti: ['during', 'after'], on: ['gradual', 'sudden'], ag: ['lifting_leg', 'stairs', 'running'], de: 'Smerte i lysken.', w: { mild: 6, moderate: 8, severe: 12 } },
    { id: 'piriformis_syndrome', n: 'Dyb baldesmerte', f: 'Dyb gluteal smerte', a: 'hip', loc: ['back'], ch: ['dull', 'burning'], ti: ['always', 'after'], on: ['gradual'], ag: ['sitting', 'lying_on_side', 'stretching'], de: 'Dyb smerte i balden.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'greater_trochanteric', n: 'Hoftesmerter på siden', f: 'Greater trochanteric pain syndrome', a: 'hip', loc: ['side'], ch: ['dull', 'sharp', 'stiff'], ti: ['during', 'after', 'always'], on: ['gradual'], ag: ['lying_on_side', 'stairs', 'running'], de: 'Smerte på hoften.', w: { mild: 8, moderate: 14, severe: 20 } },
    { id: 'hip_impingement', n: 'Smerter relateret til hofteledet', f: 'Hofteledsrelateret smerte (FAI, dysplasi m.fl.)', a: 'hip', loc: ['front', 'deep'], ch: ['sharp', 'dull', 'stiff'], ti: ['during', 'after', 'always'], on: ['gradual'], ag: ['deep_squat', 'rotation', 'getting_in_car', 'sitting', 'clicking', 'running', 'stairs'], de: 'Smerte relateret til hofteledet. Kan skyldes FAI, dysplasi eller andre ledrelaterede tilstande – nærmere undersøgelse anbefales.', w: { mild: 12, moderate: 20, severe: 30 } },
    { id: 'hamstring_strain', n: 'Baglårsskade (distal)', f: 'Distal hamstring forstrækning', a: 'thigh', loc: ['back'], ch: ['sharp', 'dull'], ti: ['during', 'after'], on: ['sudden', 'gradual'], ag: ['sprinting', 'hills', 'stretching'], de: 'Baglårsskade.', w: { mild: 6, moderate: 8, severe: 14 } },
    { id: 'proximal_hamstring', n: 'Proksimal baglårsskade', f: 'Proksimal hamstring tendinopati', a: 'thigh', loc: ['back_upper'], ch: ['dull', 'sharp'], ti: ['during', 'after', 'always'], on: ['gradual'], ag: ['sitting', 'hills', 'stretching', 'sprinting'], de: 'Smerte øverst i baglåret.', w: { mild: 8, moderate: 16, severe: 30 } },
    { id: 'quad_strain', n: 'Forlårsskade', f: 'Quadriceps forstrækning', a: 'thigh', loc: ['front'], ch: ['sharp', 'dull'], ti: ['during', 'after'], on: ['sudden', 'gradual'], ag: ['kicking', 'hills', 'sprinting'], de: 'Forlårsskade.', w: { mild: 6, moderate: 8, severe: 12 } },
    { id: 'adductor_strain', n: 'Adduktorskade', f: 'Adduktor forstrækning/tendinopati', a: 'thigh', loc: ['inner'], ch: ['sharp', 'dull'], ti: ['during', 'after'], on: ['sudden', 'gradual'], ag: ['sprinting', 'stretching', 'kicking'], de: 'Inderlårssmerte.', w: { mild: 6, moderate: 8, severe: 14 } },
    { id: 'itb_thigh', n: 'Løberknæ', f: 'Iliotibial bånd syndrom (ITBS)', a: 'thigh', loc: ['outer'], ch: ['dull', 'stiff', 'sharp', 'burning'], ti: ['during', 'after', 'after_distance'], on: ['gradual'], ag: ['hills', 'hills_down', 'sitting', 'stretching', 'after_distance', 'running'], de: 'Stramhed og smerte på ydersiden af låret fra IT-båndet. Kan give udstrålende smerte til ydersiden af knæet.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'ankle_sprain', n: 'Forstuvet ankel', f: 'Lateral ankelforstuvning', a: 'ankle', loc: ['outer'], ch: ['sharp', 'dull'], ti: ['always', 'during'], on: ['sudden'], ag: ['uneven', 'turning'], de: 'Forstuvet ankel.', w: { mild: 6, moderate: 8, severe: 14 } },
    { id: 'peroneal_tendinopathy', n: 'Peroneustendinopati', f: 'Peroneal tendinopati', a: 'ankle', loc: ['outer'], ch: ['dull', 'sharp'], ti: ['during', 'after'], on: ['gradual'], ag: ['uneven', 'turning', 'push_off'], de: 'Ydre ankelsmerte.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'posterior_tibialis', n: 'Posterior tibialis tendinopati', f: 'Tibialis posterior tendinopati', a: 'ankle', loc: ['inner'], ch: ['dull', 'sharp'], ti: ['during', 'after'], on: ['gradual'], ag: ['push_off', 'stairs', 'uneven'], de: 'Indre ankelsmerte.', w: { mild: 6, moderate: 12, severe: 20 } },
    { id: 'lower_back_pain', n: 'Lænderygsmerte', f: 'Uspecifik lænderygsmerte', a: 'back', loc: ['lower_center', 'lower_side'], ch: ['dull', 'stiff'], ti: ['during', 'after', 'always'], on: ['gradual'], ag: ['running', 'sitting', 'bending', 'standing', 'morning_stiff'], de: 'Smerte i lænden.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'si_joint_dysfunction', n: 'SI-ledsdysfunktion', f: 'Sakroiliakal ledsdysfunktion', a: 'back', loc: ['si_joint', 'lower_side'], ch: ['dull', 'sharp'], ti: ['during', 'after', 'always'], on: ['gradual'], ag: ['running', 'standing', 'hills', 'sitting'], de: 'SI-ledssmerte.', w: { mild: 6, moderate: 10, severe: 16 } },
    { id: 'lumbar_disc', n: 'Diskuspåvirkning', f: 'Lumbal diskusaffektion', a: 'back', loc: ['lower_center', 'radiating'], ch: ['sharp', 'burning'], ti: ['always', 'during'], on: ['sudden', 'gradual'], ag: ['bending', 'sitting', 'coughing', 'morning_stiff'], de: 'Smerte med udstråling til ben. Søg akut læge ved blære-/tarmforstyrrelser, følelsesløshed i skridtet eller tiltagende svaghed i benene.', w: { mild: 10, moderate: 18, severe: 30 } },
    { id: 'knee_arthrosis', n: 'Knæartrose', f: 'Artrose i knæleddet', a: 'knee', loc: ['front', 'inner'], ch: ['dull', 'stiff'], ti: ['morning', 'start', 'during'], on: ['gradual'], ag: ['stairs_down', 'sitting', 'squatting', 'better_warmup'], de: 'Kronisk ledsmerte med morgenstivhed. Artrose er en langvarig tilstand der responderer godt på styrketræning og tilpasset belastning.', w: { mild: 12, moderate: 20, severe: 40 } },
    { id: 'hip_arthrosis', n: 'Hofteartrose', f: 'Artrose i hofteleddet', a: 'hip', loc: ['front', 'deep', 'side'], ch: ['dull', 'stiff'], ti: ['morning', 'start', 'always'], on: ['gradual'], ag: ['sitting', 'deep_squat', 'rotation', 'getting_in_car', 'stairs'], de: 'Kronisk hoftesmerte med stivhed. Artrose er en langvarig tilstand der responderer godt på styrketræning og tilpasset belastning.', w: { mild: 12, moderate: 20, severe: 36 } },
    { id: 'ankle_arthrosis', n: 'Ankelartrose', f: 'Artrose i ankelleddet', a: 'ankle', loc: ['outer', 'inner'], ch: ['dull', 'stiff'], ti: ['morning', 'start'], on: ['gradual'], ag: ['morning_steps', 'first_steps', 'long_standing'], de: 'Kronisk ankelsmerte med stivhed. Artrose er en langvarig tilstand der responderer godt på styrketræning og tilpasset belastning.', w: { mild: 12, moderate: 20, severe: 36 } }
  ];

  // ============================================
  // GENOPTRÆNINGSPLANER (per skade)
  // ============================================
  // ---- PLAN-MAPPING: 31 skader → 8 kategorier ----
  var planMapping = {
    // Sene-skader (tendon)
    achilles_tendinopathy: 'tendon',
    achilles_insertional: 'tendon',
    achilles_proximal: 'tendon',
    peroneal_tendinopathy: 'tendon',
    posterior_tibialis: 'tendon',
    proximal_hamstring: 'tendon',
    patellar_tendinopathy: 'tendon',
    greater_trochanteric: 'tendon',
    popliteus_injury: 'tendon',
    pes_anserinus: 'tendon',
    plantar_fasciitis: 'tendon',
    extensor_tendinopathy: 'tendon',
    adductor_strain: 'tendon',
    hip_flexor_strain: 'tendon',
    shin_splints: 'tendon',

    // Knogle-stress (bone_stress)
    metatarsal_stress: 'bone_stress',
    stress_fracture_shin: 'bone_stress',

    // Muskelskader (muscle)
    calf_strain: 'muscle',
    hamstring_strain: 'muscle',
    quad_strain: 'muscle',
    piriformis_syndrome: 'muscle',

    // Knæ – forreste (knee_anterior)
    runners_knee: 'knee_anterior',

    // Knæ – lateralt (knee_lateral)
    itb_syndrome: 'knee_lateral',
    itb_thigh: 'knee_lateral',

    // Led / brusk (joint)
    ankle_sprain: 'joint',
    hip_impingement: 'joint',

    // Ryg (back)
    lower_back_pain: 'back',
    lumbar_disc: 'back',
    si_joint_dysfunction: 'back',

    // Fod (foot)
    morton_neuroma: 'foot',
    metatarsalgia: 'foot',

    // Artrose (arthrosis)
    knee_arthrosis: 'arthrosis',
    hip_arthrosis: 'arthrosis',
    ankle_arthrosis: 'arthrosis'
  };

  // ---- 8 PLAN-TEMPLATES ----
  var plans = {

    tendon: [
      { week: 'Uge 1-2', label: 'Smertekontrol med isometrisk belastning', detail: 'Isometriske holds 4x45 sek dagligt. Reducer løbevolumen 30-50% – du behøver ikke stoppe helt.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Pludselige stigninger i tempo og bakkeløb. Sener reagerer på belastningsændringer, ikke belastning i sig selv.', locked: false },
      { week: 'Uge 3-6', label: 'Progressiv sene-rehabilitering', detail: 'Tung, langsom styrketræning 3x/uge der opbygger senens kapacitet. Gradvist stigende belastning.', locked: true },
      { week: 'Uge 7+', label: 'Returnering til fuld løbetræning', detail: 'Trinvis øgning af distance og intensitet via struktureret løbeplan med energilagring.', locked: true },
      { week: '', label: 'De 3 vigtigste øvelser for din sene', detail: 'Skadespecifikke øvelser du kan starte med allerede i dag.', locked: true }
    ],

    bone_stress: [
      { week: 'Uge 1-4', label: 'Aflastning og heling', detail: 'Løbepause er nødvendig. Erstat med cykling eller svømning for at vedligeholde kondition.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Al vægtbærende aktivitet der giver smerte. Knoglevæv kræver reel hvile for at hele.', locked: false },
      { week: 'Uge 5-8', label: 'Gradvis belastningsintroduktion', detail: 'Gang → hurtig gang → let jogging. Opbyg knoglens tolerance langsomt og systematisk.', locked: true },
      { week: 'Uge 9+', label: 'Sikker opbygning til fuld løb', detail: 'Struktureret program der sikrer du ikke får tilbagefald. Inkluderer styrke og ernæring.', locked: true },
      { week: '', label: 'Forebyggende styrke- og kostplan', detail: 'De vigtigste tiltag for at styrke knoglerne og mindske risiko for ny stressfraktur.', locked: true }
    ],

    muscle: [
      { week: 'Uge 1-2', label: 'Akut fase – beskyt og belast let', detail: 'Let bevægelighed og submaksimal styrke. Ingen udspænding i den akutte fase.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Kraftig udstrækning og sprint-lignende bevægelser de første 2 uger. Musklen skal have ro til heling.', locked: false },
      { week: 'Uge 3-5', label: 'Styrke og belastningsopbygning', detail: 'Excentrisk og tungt styrkearbejde der genopbygger musklens kapacitet og tolerance.', locked: true },
      { week: 'Uge 6+', label: 'Fuld returnering med sprint-progression', detail: 'Progressiv løbeplan fra jogging til tempo og interval med løbetests.', locked: true },
      { week: '', label: 'Øvelser du kan starte med i dag', detail: 'Skadespecifikke øvelser tilpasset den ramte muskelgruppe.', locked: true }
    ],

    knee_anterior: [
      { week: 'Uge 1-2', label: 'Smertekontrol og quadriceps-aktivering', detail: 'Isometriske quad-øvelser 3x45 sek dagligt. Reducer løbevolumen 30-50%.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Lange perioder med bøjet knæ, dybe squats og trapper ned i højt tempo – det belaster leddet ekstra.', locked: false },
      { week: 'Uge 3-6', label: 'Progressivt knæ-styrkeprogram', detail: 'Excentrisk og koncentrisk quadriceps-træning med gradvist stigende belastning.', locked: true },
      { week: 'Uge 7+', label: 'Returnering til fuld løbetræning', detail: 'Trinvis opbygning af distance og intensitet med fokus på løbekadence.', locked: true },
      { week: '', label: '3 øvelser du kan starte med i dag', detail: 'Wall sit, terminal knee extension og step-downs – målrettet dit knæ.', locked: true }
    ],

    knee_lateral: [
      { week: 'Uge 1-2', label: 'Akut smertelindring og hofteaktivering', detail: 'Foam rolling af yderlår og gluteus-aktivering. Reducer løbedistance midlertidigt.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Bakkeløb nedad og lange ture på hårdt underlag – det øger trækket på ydersiden af knæet.', locked: false },
      { week: 'Uge 3-6', label: 'Hofte- og gluteus-styrkelse', detail: 'Målrettet program med clamshells, hip abduction og single-leg øvelser for stabilitet.', locked: true },
      { week: 'Uge 7+', label: 'Løbeteknik og distance-opbygning', detail: 'Kadence-optimering og gradvis distance-øgning med løbeplan.', locked: true },
      { week: '', label: 'De vigtigste øvelser for dit knæ', detail: 'Side plank, monster walks og Bulgarian split squats – tilpasset IT-båndet.', locked: true }
    ],

    joint: [
      { week: 'Uge 1-2', label: 'Bevægelighed og let stabilitetstræning', detail: 'Fokus på smertefri range of motion og proprioceptiv træning. Tilpas løbevolumen.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Bevægelser der provokerer smerte i yderstilling. Arbejd inden for den smertefri zone.', locked: false },
      { week: 'Uge 3-6', label: 'Stabilitet og styrke omkring leddet', detail: 'Progressivt styrkeprogram der stabiliserer leddet og opbygger tolerance.', locked: true },
      { week: 'Uge 7+', label: 'Returnering til fuld løbetræning', detail: 'Struktureret opbygning med fokus på kontrol og ledstabilitet.', locked: true },
      { week: '', label: 'Øvelser til ledstabilitet', detail: 'Skadespecifikke stabilitetsøvelser du kan starte med i dag.', locked: true }
    ],

    back: [
      { week: 'Uge 1-2', label: 'Smertekontrol og bevægelighed', detail: 'Undgå ikke bevægelse – find smertefrie varianter. Let gang og mobility-øvelser dagligt.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Lang stillesiddende adfærd og tunge løft. Varier din position hyppigt i løbet af dagen.', locked: false },
      { week: 'Uge 3-6', label: 'Core-stabilitet og ryg-styrkelse', detail: 'Gradueret styrkeprogram for core, hofte og ryg der genopbygger ryggens tolerance.', locked: true },
      { week: 'Uge 7+', label: 'Fuld returnering til løb', detail: 'Struktureret opbygning med fokus på løbeteknik og bækkenkontrol.', locked: true },
      { week: '', label: '3 ryg-øvelser du kan starte i dag', detail: 'Bird dog, dead bug og modificeret side plank – specifikt for løbere med rygsmerter.', locked: true }
    ],

    foot: [
      { week: 'Uge 1-2', label: 'Smertekontrol og fodstøtte', detail: 'Tilpas fodtøj, reducer løbevolumen. Isometrisk fodstyrke og let tå-mobilitet dagligt.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Barfodsgang på hårdt underlag og fladt fodtøj uden støtte i den akutte fase.', locked: false },
      { week: 'Uge 3-6', label: 'Progressiv fod- og lægstyrke', detail: 'Hælhævninger, tå-curls og intrinsic fod-øvelser med gradvist stigende belastning.', locked: true },
      { week: 'Uge 7+', label: 'Fuld returnering med løbeplan', detail: 'Trinvis opbygning med fokus på underlag og fodtøj. Struktureret plan.', locked: true },
      { week: '', label: 'Øvelser specifikt for din fod', detail: 'Short foot exercise, hælhævninger og towel curls – start i dag.', locked: true }
    ],

    arthrosis: [
      { week: 'Uge 1-2', label: 'Smertekontrol og tilpasset belastning', detail: 'Find dit sweet spot for løb. Start styrketræning 2-3×/uge. Brug lyskryds-modellen.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Morgenstivhed er normalt – det forbedres typisk efter 10-15 min opvarmning. Søg hjælp ved akut hævelse, natsmerte eller feber.', locked: false },
      { week: 'Uge 3-6', label: 'Progressiv styrketræning', detail: 'Tung styrketræning 2-3×/uge er den mest effektive behandling for artrose. Progressiv belastning.', locked: true },
      { week: 'Uge 7+', label: 'Struktureret løbeopbygning', detail: 'Start med 10-15 min, øg max 10-15% ugentligt. Variér underlag.', locked: true },
      { week: '', label: 'Øvelser specifikt for dit led', detail: 'Målrettede styrkeøvelser for netop dit led – start i dag.', locked: true }
    ],

    _default: [
      { week: 'Uge 1-2', label: 'Smertekontrol og tilpasset belastning', detail: 'Identificer smertefri bevægelser og start med let styrketræning.', locked: false },
      { week: '', label: 'Vær opmærksom på', detail: 'Aktiviteter der provokerer smerten, indtil symptomerne er under kontrol.', locked: false },
      { week: 'Uge 3-6', label: 'Progressiv genoptræning', detail: 'Målrettet styrkeprogram med gradvist stigende belastning.', locked: true },
      { week: 'Uge 7+', label: 'Fuld returnering til løb', detail: 'Struktureret løbeplan med fokus på at opbygge tolerance.', locked: true },
      { week: '', label: 'Skadespecifikke øvelser', detail: 'De 3-5 vigtigste øvelser for netop din skade.', locked: true }
    ]
  };

  function getPlan(injuryId) {
    var templateKey = planMapping[injuryId] || '_default';
    return plans[templateKey] || plans._default;
  }

  // ============================================
  // STATE
  // ============================================
  function generateSessionId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxx-xxxx-xxxx'.replace(/x/g, function() { return (Math.random() * 16 | 0).toString(16); });
  }

  var s = {
    step: 0,
    sessionId: generateSessionId(),
    answers: {
      area: null, injuryArea: null, location: null,
      character: null, timing: null, onset: null,
      aggravators: [], duration: null
    },
    results: [],
    severity: null,
    gender: null,
    birthdate: null,
    leadInfo: { name: '', email: '' },
    leadSubmitted: false,
    guideSubmitted: false,
    wantsCall: false,
    redFlagCheck: null,
    redFlagAnswers: [],
    wantsSecondOpinion: false
  };

  // ============================================
  // HJÆLPEFUNKTIONER
  // ============================================
  function getUTM() {
    var p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get('utm_source') || '',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      referrer: document.referrer || ''
    };
  }

  function track(e, d) {
    if (typeof gtag !== 'undefined') gtag('event', e, d);
    if (typeof fbq !== 'undefined') fbq('trackCustom', e, d);
    if (typeof clarity !== 'undefined') {
      clarity('set', 'skadefinder_event', e);
      if (d) { for (var k in d) { if (d[k]) clarity('set', 'sf_' + k, String(d[k])); } }
    }
  }

  function getFullPayload(type) {
    var top = s.results[0];
    var others = s.results.slice(1);
    var dur = D.find(function(x) { return x.id === s.answers.duration; });
    var age = calcAge(s.birthdate);
    var bw = top && s.severity ? (top.w[s.severity] || 0) : 0;
    var mult = dur ? dur.m : 1;
    var adj = bw * mult;
    var minW = Math.round(adj * 0.8);
    var maxW = Math.round(adj * 1.2);
    return {
      session_id: s.sessionId,
      timestamp: new Date().toISOString(),
      type: type,
      gender: s.gender || '',
      birthdate: s.birthdate || '',
      age: age || '',
      area: s.answers.area || '',
      location: s.answers.location || '',
      character: s.answers.character || '',
      timing: s.answers.timing || '',
      onset: s.answers.onset || '',
      duration: dur ? dur.label : '',
      aggravators: (s.answers.aggravators || []).join(', '),
      red_flags: (s.redFlagAnswers || []).join(', '),
      injury_name: top ? top.n : '',
      injury_id: top ? top.id : '',
      injury_fullname: top ? top.f : '',
      match_score: top ? top.matchScore : 0,
      other_matches: others.map(function(x) { return x.n + ' (' + x.matchScore + '%)'; }).join(', '),
      severity: s.severity || '',
      prognosis_weeks: bw ? (minW + '-' + maxW) : '',
      plan_template: planMapping[top ? top.id : ''] || '_default',
      name: s.leadInfo.name || '',
      email: s.leadInfo.email || '',
      wants_call: s.wantsCall,
      wants_second_opinion: s.wantsSecondOpinion,
      page_url: window.location.pathname
    };
  }

  function sendToSheets(data) {
    if (!C.sheetsWebhook) return;
    console.log('[Skadefinder] Sending to sheets:', data.event || data.type, data);
    fetch(C.sheetsWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function(r) {
      console.log('[Skadefinder] Sheets response:', r.status);
    }).catch(function(e) {
      console.error('[Skadefinder] Sheets error:', e);
    });
  }

  function calcMatch(inj, ans) {
    var sc = 0, mx = 0;
    if (inj.a !== ans.injuryArea) return 0;
    mx += 30; if (inj.loc.includes(ans.location)) sc += 30;
    var charGroups = { dull: 1, stiff: 1, sharp: 2, burning: 2 };
    mx += 15;
    if (inj.ch.includes(ans.character)) {
      sc += 15;
    } else {
      var ug = charGroups[ans.character];
      var hasGroup = ug && inj.ch.some(function(c) { return charGroups[c] === ug; });
      if (hasGroup) sc += 8;
    }
    var timeGroups = { morning: 1, start: 1, during: 2, after_distance: 2, after: 2, always: 3 };
    mx += 20;
    if (inj.ti.includes(ans.timing)) {
      sc += 20;
    } else {
      var utg = timeGroups[ans.timing];
      var hasTimeGroup = utg && inj.ti.some(function(t) { return timeGroups[t] === utg; });
      if (hasTimeGroup) sc += 10;
    }
    mx += 15; if (inj.on.includes(ans.onset)) sc += 15;
    if (ans.aggravators && ans.aggravators.length > 0) {
      mx += 20;
      var mt = ans.aggravators.filter(function(x) { return inj.ag.includes(x); });
      sc += (mt.length / inj.ag.length) * 20;
    }
    var pct = Math.round((sc / mx) * 100);

    // Alder-modifier: artrose er sjældent hos unge
    var isArthrosis = inj.id.indexOf('arthrosis') >= 0;
    var age = calcAge(s.birthdate);
    if (isArthrosis && age !== null) {
      if (age < 35) pct = Math.round(pct * 0.3);
      else if (age < 45) pct = Math.round(pct * 0.6);
      else if (age < 55) pct = Math.round(pct * 0.85);
      else if (age >= 65) pct = Math.round(pct * 1.15);
    }
    // Stressfrakturer: sjældnere hos ældre
    if ((inj.id === 'metatarsal_stress' || inj.id === 'stress_fracture_shin') && age !== null && age > 50) {
      pct = Math.round(pct * 0.8);
    }
    // Tendinopati: stiger med alder
    if (['achilles_tendinopathy','achilles_proximal','achilles_insertional','proximal_hamstring','patellar_tendinopathy'].indexOf(inj.id) >= 0 && age !== null) {
      if (age >= 40) pct = Math.round(pct * 1.1);
      else if (age < 25) pct = Math.round(pct * 0.85);
    }
    // Kønsmodifiers
    if (s.gender) {
      if (s.gender === 'female' && (inj.id === 'metatarsal_stress' || inj.id === 'stress_fracture_shin')) {
        pct = Math.round(pct * 1.25);
      }
      if (s.gender === 'female' && inj.id === 'runners_knee') {
        pct = Math.round(pct * 1.15);
      }
      if (s.gender === 'male' && (inj.id === 'achilles_tendinopathy' || inj.id === 'achilles_proximal' || inj.id === 'achilles_insertional')) {
        pct = Math.round(pct * 1.15);
      }
    }
    if (pct > 100) pct = 100;

    return pct;
  }

  function findMatches(ans) {
    return I.map(function(inj) {
      return { id: inj.id, n: inj.n, f: inj.f, de: inj.de, w: inj.w, matchScore: calcMatch(inj, ans) };
    }).filter(function(x) {
      return x.matchScore > 0;
    }).sort(function(a, b) {
      return b.matchScore - a.matchScore;
    }).slice(0, 3);
  }

  function calcAge(bd) {
    if (!bd) return null;
    var today = new Date();
    var birth = new Date(bd);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  }

  // ============================================
  // RENDER FUNKTIONER
  // ============================================
  function esc(str) { var d = document.createElement('div'); d.textContent = str; return d.innerHTML; }

  function renderProgress() {
    var pe = document.getElementById('ll-progress');
    var fe = document.getElementById('ll-progress-fill');
    if (s.step >= 8) { pe.classList.add('ll-hidden'); return; }
    pe.classList.remove('ll-hidden');
    fe.style.width = Math.min((s.step / 7) * 100, 100) + '%';
  }

  function rDemo() {
    return '<h2 class="ll-step-title">Lidt om dig</h2>' +
      '<p class="ll-step-desc">Køn og alder hjælper os med at give dig en mere præcis vurdering</p>' +
      '<div class="ll-options ll-mb-6">' +
      '<select class="ll-input ll-select" id="ll-demo-gender" onchange="window.llUpdateDemoStep()">' +
      '<option value="">Vælg køn</option>' +
      '<option value="male"' + (s.gender === 'male' ? ' selected' : '') + '>Mand</option>' +
      '<option value="female"' + (s.gender === 'female' ? ' selected' : '') + '>Kvinde</option></select>' +
      '<input type="date" class="ll-input" id="ll-demo-birthdate" placeholder="Fødselsdato" value="' + (s.birthdate || '') + '" onchange="window.llUpdateDemoStep()" max="2010-01-01" min="1930-01-01">' +
      '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llSubmitDemo()" id="ll-demo-btn"' + (s.gender && s.birthdate ? '' : ' disabled') + '>Næste' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
  }

  function rArea() {
    return '<h2 class="ll-step-title">Hvor sidder smerten?</h2>' +
      '<p class="ll-step-desc">Vælg det berørte område</p>' +
      '<div class="ll-body-grid">' +
      B.map(function(x) {
        return '<button class="ll-body-btn" onclick="window.llSelectArea(\'' + x.id + '\')">' +
          '<span class="ll-body-icon">' + x.icon + '</span>' +
          '<span class="ll-body-label">' + x.label + '</span></button>';
      }).join('') + '</div>';
  }

  function rLoc() {
    var locs = P[s.answers.area] || [];
    var q = {
      foot: 'Hvor præcist på foden/anklen?',
      lower_leg: 'Hvor præcist på underbenet?',
      knee: 'Hvor præcist i knæet?',
      thigh: 'Hvor præcist på låret?',
      hip: 'Hvor præcist i hoften/balden?',
      back: 'Hvor præcist i ryggen?'
    };
    return '<h2 class="ll-step-title">' + (q[s.answers.area] || 'Hvor præcist?') + '</h2>' +
      '<p class="ll-step-desc">Vælg det mest præcise</p>' +
      '<div class="ll-options">' +
      locs.map(function(x) {
        return '<button class="ll-option" onclick="window.llSelectLocation(\'' + x.id + '\')">' +
          '<span class="ll-option-label">' + x.label + '</span></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(1)">Tilbage</button>';
  }

  function rChar() {
    return '<h2 class="ll-step-title">Hvordan føles smerten?</h2>' +
      '<p class="ll-step-desc">Vælg den bedste beskrivelse</p>' +
      '<div class="ll-options">' +
      pc.map(function(x) {
        return '<button class="ll-option" onclick="window.llSelectCharacter(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.d + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(2)">Tilbage</button>';
  }

  function rTime() {
    return '<h2 class="ll-step-title">Hvornår er det værst?</h2>' +
      '<p class="ll-step-desc"></p>' +
      '<div class="ll-options">' +
      to.map(function(x) {
        return '<button class="ll-option" onclick="window.llSelectTiming(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.d + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(3)">Tilbage</button>';
  }

  function rOnset() {
    return '<h2 class="ll-step-title">Hvordan startede det?</h2>' +
      '<p class="ll-step-desc"></p>' +
      '<div class="ll-options">' +
      oo.map(function(x) {
        return '<button class="ll-option" onclick="window.llSelectOnset(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.d + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(4)">Tilbage</button>';
  }

  function rDur() {
    return '<h2 class="ll-step-title">Hvor længe har det varet?</h2>' +
      '<p class="ll-step-desc">Dette påvirker prognosen</p>' +
      '<div class="ll-options">' +
      D.map(function(x) {
        return '<button class="ll-option" onclick="window.llSelectDuration(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.d + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(5)">Tilbage</button>';
  }

  function rAgg() {
    var opts = A[s.answers.area] || [];
    return '<h2 class="ll-step-title">Hvad forværrer smerten?</h2>' +
      '<p class="ll-step-desc">Vælg alle der passer</p>' +
      '<div class="ll-options" id="ll-aggravators">' +
      opts.map(function(x) {
        var sel = s.answers.aggravators.includes(x.id);
        return '<button class="ll-option' + (sel ? ' selected' : '') + '" onclick="window.llToggleAggravator(\'' + x.id + '\')">' +
          '<div class="ll-option-row"><span class="ll-option-label">' + x.l + '</span>' +
          (sel ? '<div class="ll-option-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : '') +
          '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn ll-btn-primary ll-mt-6" onclick="window.llSubmitAggravators()"' +
      (s.answers.aggravators.length === 0 ? ' disabled' : '') +
      '>Se resultat<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(6)">Tilbage</button>';
  }

  function rRedFlag() {
    var flags = getRedFlags(s.answers.area);
    return '<h2 class="ll-step-title">Vigtig screening</h2>' +
      '<p class="ll-step-desc">Oplever du nogen af disse symptomer?</p>' +
      '<p style="font-size:12px;color:#535865;margin-bottom:16px">Vælg alle der passer – eller tryk videre hvis ingen passer</p>' +
      '<div class="ll-options" id="ll-redflags">' +
      flags.map(function(x) {
        var sel = s.redFlagAnswers.indexOf(x.id) >= 0;
        return '<button class="ll-option' + (sel ? ' selected' : '') + '" onclick="window.llToggleRedFlag(\'' + x.id + '\')" style="' + (sel ? 'border-color:#c0392b;background-color:#FFF5F5' : '') + '">' +
          '<div class="ll-option-row"><span class="ll-option-label">' + x.l + '</span>' +
          (sel ? '<div class="ll-option-check" style="background-color:#c0392b"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : '') +
          '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn ll-btn-primary ll-mt-6" onclick="window.llSubmitRedFlags()">' + (s.redFlagAnswers.length > 0 ? 'Se resultat' : 'Jeg oplever ingen af ovenstående') + '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(7)">Tilbage</button>';
  }

  function rRedFlagWarn() {
    return '<div class="ll-center ll-mb-4">' +
      '<div style="font-size:48px;margin-bottom:16px">&#9888;&#65039;</div>' +
      '<h2 class="ll-step-title">Vi anbefaler professionel vurdering</h2>' +
      '<p class="ll-step-desc">Dine svar indikerer symptomer der bør vurderes af en sundhedsprofessionel.</p></div>' +
      '<div style="padding:16px;border-radius:8px;background-color:#FFF5F5;border:1px solid #e8c4c4;margin-bottom:16px">' +
      '<p style="font-size:14px;font-weight:600;color:#21232C;margin-bottom:8px">Dine advarselstegn:</p>' +
      '<ul style="font-size:13px;color:#535865;padding-left:20px;margin:0">' +
      s.redFlagAnswers.map(function(id) {
        var allFlags = getRedFlags(s.answers.area);
        var flag = allFlags.find(function(f) { return f.id === id; });
        return '<li style="margin-bottom:4px">' + (flag ? flag.l : id) + '</li>';
      }).join('') +
      '</ul></div>' +
      '<div style="padding:16px;border-radius:8px;background-color:#E8F4F8;margin-bottom:16px">' +
      '<p style="font-size:14px;color:#21232C;line-height:1.5">Disse symptomer <strong>kan</strong> være helt ufarlige, men de bør vurderes af en autoriseret sundhedsprofessionel for at udelukke alvorlige tilstande.</p></div>' +
      '<div class="ll-booking-box">' +
      '<p class="ll-booking-title">Tal med en fysioterapeut</p>' +
      '<p class="ll-booking-desc">Gratis 15-min opkald – vi hjælper dig videre.</p>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llBookCallRedFlag()">Book gratis opkald' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>' +
      '<button class="ll-btn-link" onclick="window.llContinueDespiteRedFlag()" style="color:#535865;font-size:12px;margin-top:8px">Fortsæt til resultat alligevel</button>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(7)">Tilbage</button>';
  }

  function rDiag() {
    if (s.redFlagCheck === null) return rRedFlag();
    if (s.redFlagCheck === true) return rRedFlagWarn();

    var top = s.results[0];
    var others = s.results.slice(1);

    if (!top || top.matchScore < 30) {
      return '<div class="ll-center ll-mb-4">' +
        '<h2 class="ll-step-title">Kompleks situation</h2>' +
        '<p class="ll-step-desc">Dine symptomer passer ikke tydeligt til én specifik skade.</p></div>' +
        '<div class="ll-result-box"><p class="ll-result-desc">Tal med en specialist for at få en præcis vurdering.</p></div>' +
        '<div class="ll-booking-box">' +
        '<p class="ll-booking-title">Gratis opkald med fysioterapeut</p>' +
        '<p class="ll-booking-desc">Helt uforpligtende.</p>' +
        '<button class="ll-btn ll-btn-primary" onclick="window.llBookCallComplex()">Book opkald' +
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>' +
        '<button class="ll-btn-link" onclick="window.llReset()">Prøv igen</button>';
    }

    return '<div class="ll-center ll-mb-4"><p class="ll-step-desc">Baseret på dine svar</p></div>' +
      '<div class="ll-result-box">' +
      '<span class="ll-match-badge">' + top.matchScore + '% symptommatch</span>' +
      '<h2 class="ll-result-name">' + top.n + '</h2>' +
      '<p class="ll-result-fullname">' + top.f + '</p>' +
      '<p class="ll-result-desc">' + top.de + '</p></div>' +
      (others.length > 0 ?
        '<div class="ll-other-matches"><p class="ll-other-label">Passer en anden bedre? Vælg den i stedet:</p><div class="ll-other-tags">' +
        others.map(function(x, i) { return '<button class="ll-other-tag" onclick="window.llSwitchDiagnosis(' + (i + 1) + ')" style="cursor:pointer;transition:all 0.2s ease">' + x.n + ' (' + x.matchScore + '%)</button>'; }).join('') +
        '</div></div>' : '') +
      '<p class="ll-disclaimer" style="margin-bottom:16px;text-align:left">⚠️ Denne vurdering er en indikation baseret på dine symptomer – ikke en diagnose. Match-procenten angiver hvor godt dine svar passer med typiske symptommønstre, ikke en diagnostisk sikkerhed. Søg altid professionel vurdering for at bekræfte.</p>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llGoToSeverity()">Se prognose' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<div style="padding:16px;border-radius:12px;background-color:#F7F8FA;border:1px solid #E0E2E6;margin-top:16px;text-align:center">' +
      '<p style="font-size:14px;font-weight:500;color:#21232C;margin-bottom:4px">Har du allerede fået en diagnose?</p>' +
      '<p style="font-size:12px;color:#535865;margin-bottom:12px;line-height:1.5">Det er helt normalt at symptomer overlapper, og at vores vurdering ikke rammer det samme som din læge. Kroppen er kompleks – og du kender den bedst. Vi vil gerne hjælpe dig videre med det, du allerede ved.</p>' +
      '<button class="ll-btn ll-btn-secondary" onclick="window.llBookSecondOpinion()" style="border-radius:50px">Få en gratis second opinion<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:4px"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>' +
      '<button class="ll-btn-link" onclick="window.llReset()">Prøv igen</button>';
  }

  function rSev() {
    var inj = s.results[0];
    var opts = [
      { id: 'mild', l: 'Lidt', d: 'Kan løbe med let ubehag' },
      { id: 'moderate', l: 'Moderat', d: 'Må begrænse træningen' },
      { id: 'severe', l: 'Meget', d: 'Kan ikke løbe p.t.' }
    ];
    return '<div class="ll-mb-6"><p class="ll-step-desc">' + inj.n + '</p>' +
      '<h2 class="ll-step-title">Hvor meget påvirker det træningen?</h2></div>' +
      '<div class="ll-options ll-mb-6">' +
      opts.map(function(x) {
        return '<button class="ll-option' + (s.severity === x.id ? ' selected' : '') + '" onclick="window.llSelectSeverity(\'' + x.id + '\')">' +
          '<div class="ll-option-row"><span class="ll-option-label">' + x.l + '</span>' +
          '<span class="ll-option-desc">– ' + x.d + '</span>' +
          (s.severity === x.id ? '<div class="ll-option-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : '') +
          '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llSubmitSeverity()" id="ll-severity-btn"' + (s.severity ? '' : ' disabled') + '>Se prognose' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(8)">Tilbage</button>';
  }

  // ============================================
  // STEP 10: PROGNOSE (ren wow-moment)
  // ============================================
  function rProg() {
    var inj = s.results[0];
    var bw = inj.w[s.severity];
    var dur = D.find(function(x) { return x.id === s.answers.duration; });
    var mult = dur ? dur.m : 1;
    var adj = bw * mult;
    var minW = Math.round(adj * 0.8);
    var maxW = Math.round(adj * 1.2);
    var durL = dur ? dur.label : '';
    var sevL = s.severity === 'mild' ? 'Let' : s.severity === 'moderate' ? 'Moderat' : 'Svær';
    var age = calcAge(s.birthdate);
    var isArthrosis = (inj.id && inj.id.indexOf('arthrosis') !== -1);

    return '<div class="ll-center ll-mb-4">' +
      '<p class="ll-step-desc">' + (isArthrosis ? 'Tid til symptomforbedring for ' : 'Estimeret genoptræning for ') + inj.n.toLowerCase() + '</p>' +
      '<div class="ll-prognosis-number">' + minW + '–' + maxW + '</div>' +
      '<p class="ll-prognosis-unit">' + (isArthrosis ? 'uger til mærkbar bedring' : 'uger') + '</p>' +
      '<span class="ll-prognosis-highlight">Prognosen afhænger af individuelle faktorer som alder, varighed og træningshistorik</span></div>' +
      '<div class="ll-bento-grid">' +
      '<div class="ll-bento-card"><div class="ll-bento-label">Skade</div><div class="ll-bento-value">' + inj.n + '</div></div>' +
      '<div class="ll-bento-card"><div class="ll-bento-label">Påvirkning</div><div class="ll-bento-value">' + sevL + '</div></div>' +
      '<div class="ll-bento-card"><div class="ll-bento-label">Varighed</div><div class="ll-bento-value">' + durL + '</div></div>' +
      '<div class="ll-bento-card"><div class="ll-bento-label">Alder</div><div class="ll-bento-value">' + (age || '-') + ' år</div></div></div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llGoToPlan()">Se din genoptræningsplan' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(9)">Tilbage</button>';
  }

  // ============================================
  // STEP 11: PLAN-TEASER MED BLURRED INDHOLD
  // ============================================
  function rPlan() {
    var inj = s.results[0];
    var plan = getPlan(inj.id);

    var checkSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#407A95" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#535865" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>';

    return '<div class="ll-center ll-mb-4">' +
      '<p class="ll-step-desc">Din personlige plan</p>' +
      '<h2 class="ll-step-title">Genoptræning for ' + inj.n.toLowerCase() + '</h2></div>' +
      '<div class="ll-plan-list">' +
      plan.map(function(item) {
        return '<div class="ll-plan-item' + (item.locked ? ' blurred' : '') + '">' +
          '<div class="ll-plan-icon ' + (item.locked ? 'locked' : 'unlocked') + '">' + (item.locked ? lockSvg : checkSvg) + '</div>' +
          '<div class="ll-plan-text">' +
          (item.week ? '<div class="ll-plan-header"><span class="ll-plan-week">' + item.week + '</span></div>' : '') +
          '<div class="ll-plan-label">' + item.label + '</div>' +
          '<div class="ll-plan-detail">' + item.detail + '</div>' +
          '</div></div>';
      }).join('') +
      '</div>' +
      '<div class="ll-unlock-box">' +
      '<p class="ll-unlock-title">Få den fulde plan tilsendt gratis</p>' +
      '<p class="ll-unlock-desc">Vi sender din personlige genoptræningsplan direkte til din indbakke.</p>' +
      '<input type="text" class="ll-input" id="ll-lead-name" placeholder="Dit fornavn">' +
      '<div class="ll-email-row">' +
      '<input type="email" class="ll-input" id="ll-lead-email" placeholder="Din email">' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llSubmitEmail()" id="ll-email-btn">Send</button></div>' +
      '<p class="ll-consent-mini">Ved at fortsætte accepterer du at modtage din plan og relevante træningstips fra LøberLab. Du kan altid afmelde dig.</p>' +
      '</div>' +
      '<button class="ll-btn-back" onclick="window.llGoBack(10)">Tilbage</button>';
  }

  // ============================================
  // STEP 12: OPKALDS-UPSELL EFTER EMAIL
  // ============================================
  function rUpsell() {
    var inj = s.results[0];

    var checkSvg = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#407A95" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    return '<div class="ll-success-box ll-mb-6">' +
      '<div class="ll-success-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
      '<div class="ll-success-text"><h4>Din plan er sendt!</h4>' +
      '<p>Tjek din indbakke om et øjeblik, ' + esc(s.leadInfo.name) + '.</p></div></div>' +

      '<div class="ll-upsell-box">' +
      '<div class="ll-upsell-stat">' +
      '<span class="ll-upsell-stat-icon">⚡</span>' +
      '<span class="ll-upsell-stat-text">De fleste løbere med ' + inj.n.toLowerCase() + ' laver ubevidst fejl i de første uger, der forlænger skaden.</span></div>' +

      '<h2 class="ll-step-title" style="font-size:17px;margin-bottom:4px">Gratis 10-min gennemgang</h2>' +
      '<p class="ll-step-desc" style="margin-bottom:16px">En af vores fysioterapeuter ringer dig op og gennemgår din plan, så du kommer rigtigt fra start.</p>' +

      '<div class="ll-upsell-features">' +
      '<div class="ll-upsell-feature"><div class="ll-upsell-feature-icon">' + checkSvg + '</div>Tilpasset til dit niveau og træningsmængde</div>' +
      '<div class="ll-upsell-feature"><div class="ll-upsell-feature-icon">' + checkSvg + '</div>Svar på dine spørgsmål om skaden</div>' +
      '<div class="ll-upsell-feature"><div class="ll-upsell-feature-icon">' + checkSvg + '</div>Helt uforpligtende – ingen salg</div>' +
      '</div>' +

      '<button class="ll-btn ll-btn-dark" onclick="window.llBookCallUpsell()">Book mit gratis opkald' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '</div>' +

      '<button class="ll-btn-skip" onclick="window.llSkipCall()">Nej tak, jeg klarer mig med planen</button>';
  }

  // ============================================
  // STEP 12: FINAL BEKRÆFTELSE
  // ============================================
  function rFinal() {
    var inj = s.results[0];
    return '<div class="ll-center">' +
      '<div style="font-size:48px;margin-bottom:16px">🎉</div>' +
      '<h2 class="ll-step-title">Du er godt på vej!</h2>' +
      '<p class="ll-step-desc">' + (s.wantsCall ?
        'Din genoptræningsplan er sendt til din indbakke, og vi ringer dig op snarest for at gennemgå den.' :
        'Din genoptræningsplan for ' + inj.n.toLowerCase() + ' er sendt til din indbakke.') +
      '</p></div>' +
      '<div class="ll-result-box">' +
      '<p class="ll-result-desc" style="text-align:center">Tip: Tjek også din spam-mappe hvis du ikke kan se mailen inden for et par minutter.</p></div>' +
      '<p class="ll-disclaimer">Skadefinder er et vejledende værktøj og erstatter ikke en professionel klinisk undersøgelse. Søg altid autoriseret sundhedspersonale ved vedvarende eller forværrede symptomer.</p>' +
      '<button class="ll-btn-link" onclick="window.llReset()">Start forfra</button>';
  }

  function render() {
    renderProgress();
    var c = document.getElementById('ll-step-content');
    switch (s.step) {
      case 0: c.innerHTML = rDemo(); break;
      case 1: c.innerHTML = rArea(); break;
      case 2: c.innerHTML = rLoc(); break;
      case 3: c.innerHTML = rChar(); break;
      case 4: c.innerHTML = rTime(); break;
      case 5: c.innerHTML = rOnset(); break;
      case 6: c.innerHTML = rDur(); break;
      case 7: c.innerHTML = rAgg(); break;
      case 8: c.innerHTML = rDiag(); break;
      case 9: c.innerHTML = rSev(); break;
      case 10: c.innerHTML = rProg(); break;
      case 11: c.innerHTML = rPlan(); break;
      case 12: c.innerHTML = rUpsell(); break;
      case 13: c.innerHTML = rFinal(); break;
    }
  }

  // ============================================
  // EVENT HANDLERS
  // ============================================
  window.llUpdateDemoStep = function() {
    var gn = document.getElementById('ll-demo-gender');
    var bd = document.getElementById('ll-demo-birthdate');
    var btn = document.getElementById('ll-demo-btn');
    if (gn) s.gender = gn.value;
    if (bd) s.birthdate = bd.value;
    if (btn) btn.disabled = !(s.gender && s.birthdate);
  };

  window.llSubmitDemo = function() {
    if (!s.gender || !s.birthdate) return;
    s.step = 1; render();
  };

  window.llSelectArea = function(id) { s.answers.area = id; s.step = 2; render(); };

  window.llSelectLocation = function(id) {
    var locs = P[s.answers.area] || [];
    var sel = locs.find(function(x) { return x.id === id; });
    s.answers.injuryArea = sel ? sel.injuryArea : s.answers.area;
    s.answers.location = L[id] || id;
    s.step = 3; render();
  };

  window.llSelectCharacter = function(id) { s.answers.character = id; s.step = 4; render(); };
  window.llSelectTiming = function(id) { s.answers.timing = id; s.step = 5; render(); };
  window.llSelectOnset = function(id) { s.answers.onset = id; s.step = 6; render(); };
  window.llSelectDuration = function(id) { s.answers.duration = id; s.step = 7; render(); };

  window.llToggleAggravator = function(id) {
    var idx = s.answers.aggravators.indexOf(id);
    if (idx >= 0) s.answers.aggravators.splice(idx, 1);
    else s.answers.aggravators.push(id);
    render();
  };

  window.llSubmitAggravators = function() {
    s.results = findMatches(s.answers);
    s.step = 8;
    var top = s.results[0];
    track('diagnostic_completed', { top_match: top ? top.id : null });
    sendToSheets(getFullPayload('diagnosis'));
    render();
  };

  window.llToggleRedFlag = function(id) {
    var idx = s.redFlagAnswers.indexOf(id);
    if (idx >= 0) s.redFlagAnswers.splice(idx, 1);
    else s.redFlagAnswers.push(id);
    render();
  };

  window.llSubmitRedFlags = function() {
    if (s.redFlagAnswers.length > 0) {
      s.redFlagCheck = true;
      track('red_flag_triggered', { flags: s.redFlagAnswers.join(','), area: s.answers.area });
    } else {
      s.redFlagCheck = false;
    }
    render();
  };

  window.llContinueDespiteRedFlag = function() {
    s.redFlagCheck = false;
    track('red_flag_continued', { flags: s.redFlagAnswers.join(',') });
    render();
  };

  window.llBookCallRedFlag = function() {
    var top = s.results[0];
    track('red_flag_call_booked', { flags: s.redFlagAnswers.join(','), injury: top ? top.id : null });
    var url = new URL('https://www.loberlab.dk/skadefinder-confirmation');
    url.searchParams.set('type', 'red_flag_call');
    url.searchParams.set('flags', s.redFlagAnswers.join(','));
    url.searchParams.set('area', s.answers.area || '');
    window.open(url.toString(), '_blank');
  };

  window.llGoToSeverity = function() { s.step = 9; render(); };

  window.llSwitchDiagnosis = function(idx) {
    if (idx < s.results.length) {
      var picked = s.results.splice(idx, 1)[0];
      s.results.unshift(picked);
      track('diagnosis_switched', { to: picked.id, matchScore: picked.matchScore });
      render();
    }
  };

  window.llBookSecondOpinion = function() {
    var top = s.results[0];
    s.wantsSecondOpinion = true;
    track('second_opinion_requested', { injury: top ? top.id : null, area: s.answers.area });
    sendToSheets(getFullPayload('second_opinion_requested'));
    s.step = 9;
    render();
  };

  window.llSelectSeverity = function(id) { s.severity = id; render(); };


  window.llSubmitSeverity = function() {
    if (!s.severity) return;

    var dur = D.find(function(x) { return x.id === s.answers.duration; });
    var age = calcAge(s.birthdate);

    sendToSheets(getFullPayload('prognosis'));

    s.step = 10; render();
  };

  // ============================================
  // NYE LEAD-CAPTURE HANDLERS
  // ============================================
  window.llGoToPlan = function() {
    s.step = 11;
    track('plan_viewed', { injury: s.results[0] ? s.results[0].id : null });
    render();
  };

  window.llSubmitEmail = function() {
    var nm = document.getElementById('ll-lead-name').value;
    var em = document.getElementById('ll-lead-email').value;
    if (!nm || !em) return;
    if (!/\S+@\S+\.\S+/.test(em)) return;

    s.leadInfo = { name: nm, email: em };
    s.guideSubmitted = true;
    s.wantsCall = false;

    var top = s.results[0];
    var dur = D.find(function(x) { return x.id === s.answers.duration; });
    var age = calcAge(s.birthdate);

    track('plan_email_submitted', { injury: top ? top.id : null, second_opinion: s.wantsSecondOpinion });

    sendToSheets(getFullPayload(s.wantsSecondOpinion ? 'second_opinion' : 'plan'));

    var kd = {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: 'Skadefinder Plan',
          profile: {
            data: {
              type: 'profile',
              attributes: {
                email: em,
                first_name: nm.split(' ')[0],
                last_name: nm.split(' ').slice(1).join(' ') || '',
                properties: {
                  gender: s.gender, birthdate: s.birthdate, age: age,
                  injury_id: top ? top.id : '', injury_name: top ? top.n : '',
                  injury_fullname: top ? top.f : '', match_score: top ? top.matchScore : 0,
                  severity: s.severity || '', duration: dur ? dur.label : '',
                  skadefinder_area: s.answers.area || '', skadefinder_source: s.wantsSecondOpinion ? 'second_opinion' : 'plan',
                  plan_template: planMapping[top ? top.id : ''] || '_default',
                  wants_call: false,
                  wants_second_opinion: s.wantsSecondOpinion
                }
              }
            }
          }
        },
        relationships: { list: { data: { type: 'list', id: C.klaviyoListId } } }
      }
    };

    fetch('https://a.klaviyo.com/client/subscriptions/?company_id=' + C.klaviyoPublicKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/vnd.api+json', 'revision': '2024-10-15' },
      body: JSON.stringify(kd)
    }).catch(function() {});

    s.step = 12;
    render();
  };

  window.llBookCallUpsell = function() {
    s.wantsCall = true;
    var top = s.results[0];
    var dur = D.find(function(x) { return x.id === s.answers.duration; });
    var age = calcAge(s.birthdate);

    track('call_booked_upsell', { injury: top ? top.id : null, severity: s.severity });

    sendToSheets(getFullPayload('plan_and_call'));

    // Redirect til confirmation/booking
    var url = new URL(C.confirmationUrl);
    url.searchParams.set('name', s.leadInfo.name);
    url.searchParams.set('email', s.leadInfo.email);
    url.searchParams.set('injury', top ? top.id : '');
    url.searchParams.set('injury_name', top ? top.n : '');
    url.searchParams.set('severity', s.severity || '');
    url.searchParams.set('match', top ? top.matchScore : '');
    url.searchParams.set('gender', s.gender || '');
    url.searchParams.set('birthdate', s.birthdate || '');
    window.location.href = url.toString();
  };

  window.llSkipCall = function() {
    track('call_skipped', { injury: s.results[0] ? s.results[0].id : null });

    sendToSheets(getFullPayload('no_call'));

    s.step = 13;
    render();
  };

  window.llBookCallComplex = function() {
    track('book_call_complex', { answers: s.answers });
    sendToSheets(getFullPayload('complex'));
    var url = new URL(C.confirmationUrl);
    url.searchParams.set('type', 'complex');
    url.searchParams.set('area', s.answers.area || '');
    url.searchParams.set('location', s.answers.location || '');
    window.location.href = url.toString();
  };

  window.llGoBack = function(step) {
    if (step <= 7) { s.redFlagCheck = null; s.redFlagAnswers = []; }
    s.step = step;
    render();
  };

  window.llReset = function() {
    s = {
      step: 0,
      sessionId: generateSessionId(),
      answers: { area: null, injuryArea: null, location: null, character: null, timing: null, onset: null, aggravators: [], duration: null },
      results: [], severity: null, gender: null, birthdate: null,
      leadInfo: { name: '', email: '' }, leadSubmitted: false, guideSubmitted: false, wantsCall: false,
      redFlagCheck: null, redFlagAnswers: [],
      wantsSecondOpinion: false
    };
    render();
  };

  // ============================================
  // MODAL FUNKTIONER
  // ============================================
  var mo = document.getElementById('ll-modal-overlay');

  window.llOpenModal = function() {
    if (!mo) {
      mo = document.getElementById('ll-modal-overlay');
      if (!mo) { console.error('Skadefinder: Modal overlay not found'); return; }
    }
    s.sessionId = generateSessionId();
    mo.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (typeof track === 'function') track('diagnostic_started', {});
    sendToSheets(getFullPayload('started'));
  };

  window.llCloseModal = function() {
    if (!mo) mo = document.getElementById('ll-modal-overlay');
    if (mo) {
      mo.classList.remove('active');
      document.body.style.overflow = '';
      if (typeof window.llReset === 'function') window.llReset();
    }
  };

  window.llCloseModalOnOverlay = function(e) {
    if (e.target === mo || e.target.id === 'll-modal-overlay') window.llCloseModal();
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mo && mo.classList.contains('active')) window.llCloseModal();
  });

  // Start
  render();

})();
