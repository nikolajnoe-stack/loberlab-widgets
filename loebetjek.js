<style>.ll-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;opacity:0;visibility:hidden;transition:opacity 0.3s ease,visibility 0.3s ease}.ll-modal-overlay.active{opacity:1;visibility:visible}.ll-modal-container{position:relative;width:100%;max-width:500px;max-height:90vh;overflow-y:auto;border-radius:16px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);transform:scale(0.95) translateY(20px);transition:transform 0.3s ease}.ll-modal-overlay.active .ll-modal-container{transform:scale(1) translateY(0)}.ll-modal-close{position:absolute;top:16px;right:16px;width:44px;height:44px;border-radius:50%;background:#F7F8FA;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;transition:background 0.2s ease}.ll-modal-close:hover{background:#E0E2E6}.ll-trigger-wrapper{display:flex;justify-content:center;margin:32px 0}.ll-trigger-btn{display:inline-flex;align-items:center;gap:10px;padding:16px 28px;background:#EEFA70;color:#21232C;border:none;border-radius:12px;font-family:'Albert Sans',sans-serif;font-size:16px;font-weight:600;cursor:pointer;transition:transform 0.2s ease,box-shadow 0.2s ease;box-shadow:0 4px 12px rgba(0,0,0,0.1)}.ll-trigger-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(238,250,112,0.5)}.ll-skadefinder *{box-sizing:border-box;margin:0;padding:0;font-family:'Albert Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}.ll-skadefinder{padding:24px;background-color:#FFF;border-radius:16px;overflow:hidden}.ll-container{max-width:448px;margin:0 auto}.ll-card{padding:0;border-radius:0;background-color:transparent;border:none}.ll-header{display:flex;align-items:center;gap:12px;margin-bottom:24px;padding-bottom:16px;border-bottom:1px solid #E0E2E6}.ll-logo-box{width:40px;height:40px;border-radius:8px;background-color:#EEFA70;display:flex;align-items:center;justify-content:center}.ll-header-text h1{font-size:16px;font-weight:600;color:#21232C;margin:0;letter-spacing:0.3px}.ll-header-text p{font-size:12px;color:#535865;margin:0}.ll-progress{margin-bottom:24px}.ll-progress-bar{height:4px;border-radius:4px;background-color:#E0E2E6}.ll-progress-fill{height:100%;border-radius:4px;background-color:#DC673C;transition:width 0.3s ease}.ll-step-title{font-size:20px;font-weight:600;color:#21232C;margin-bottom:4px}.ll-step-desc{font-size:14px;color:#535865;margin-bottom:24px}.ll-options{display:flex;flex-direction:column;gap:8px}.ll-options.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ll-option{width:100%;padding:12px;text-align:left;border-radius:8px;background-color:#F7F8FA;border:1px solid #E0E2E6;cursor:pointer;transition:all 0.2s ease}.ll-option:hover{border-color:#535865;background-color:#EBEDF0}.ll-option.selected{background-color:#FDF0EB;border-color:#DC673C}.ll-option-label{font-size:14px;font-weight:500;color:#21232C}.ll-option-desc{font-size:12px;color:#535865;margin-top:2px}.ll-option-icon{font-size:18px;margin-right:8px}.ll-option-check{width:20px;height:20px;border-radius:50%;background-color:#DC673C;display:flex;align-items:center;justify-content:center;margin-left:auto}.ll-option-row{display:flex;align-items:center;justify-content:space-between}.ll-btn{width:100%;padding:12px;border-radius:50px;font-size:14px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;border:none;transition:opacity 0.2s ease}.ll-btn-primary{background-color:#EEFA70;color:#21232C}.ll-btn-primary:disabled{opacity:0.4;cursor:not-allowed}.ll-btn-dark{background-color:#21232C;color:#FFF}.ll-btn-back{background:none;border:none;font-size:14px;color:#DC673C;cursor:pointer;margin-top:12px;padding:8px}.ll-btn-link{background:none;border:none;font-size:14px;color:#DC673C;cursor:pointer;width:100%;text-align:center;margin-top:12px}.ll-result-box{padding:20px;border-radius:12px;background-color:#F7F8FA;margin-bottom:16px}.ll-match-badge{display:inline-block;padding:2px 8px;border-radius:50px;background-color:#EEFA70;color:#21232C;font-size:12px;margin-bottom:12px}.ll-result-name{font-size:24px;font-weight:700;color:#21232C;margin-bottom:4px}.ll-result-fullname{font-size:14px;color:#535865;margin-bottom:12px}.ll-result-desc{font-size:14px;color:#21232C}.ll-other-matches{margin-bottom:24px}.ll-other-label{font-size:12px;color:#535865;margin-bottom:8px}.ll-other-tags{display:flex;flex-wrap:wrap;gap:8px}.ll-other-tag{font-size:12px;padding:4px 8px;border-radius:50px;background-color:#FFF;border:1px solid #E0E2E6;color:#535865;cursor:pointer;transition:all 0.2s ease;font-family:inherit}.ll-other-tag:hover{border-color:#DC673C;background-color:#FDF0EB;color:#21232C}.ll-bento-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px}.ll-bento-card{padding:12px;border-radius:10px;background-color:#F7F8FA}.ll-bento-label{font-size:11px;color:#535865;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.3px}.ll-bento-value{font-size:14px;font-weight:600;color:#21232C}.ll-bento-progress{height:4px;border-radius:2px;background-color:#E0E2E6;margin-top:6px}.ll-bento-progress-fill{height:100%;border-radius:2px;transition:width 0.3s ease}.ll-lead-box{padding:16px;border-radius:8px;background-color:rgba(238,250,112,0.15);border:1px solid #EEFA70;margin-bottom:16px}.ll-lead-title{font-size:14px;font-weight:500;color:#21232C;margin-bottom:4px}.ll-lead-desc{font-size:12px;color:#535865;margin-bottom:12px}.ll-input{width:100%;max-width:100%;padding:10px 12px;border-radius:8px;border:1px solid #E0E2E6;background-color:#FFF;font-size:14px;margin-bottom:8px;box-sizing:border-box}.ll-input[type="date"]{-webkit-appearance:none;appearance:none;min-height:44px}.ll-input:focus{outline:none;border-color:#DC673C}.ll-input-row{display:flex;gap:8px}.ll-input-row .ll-input{flex:1}.ll-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23535865' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px}.ll-input-hint{font-size:11px;color:#535865;margin:4px 0 12px 0}.ll-booking-box{padding:16px;border-radius:8px;background-color:#21232C;margin-bottom:16px}.ll-booking-title{font-size:14px;font-weight:500;color:#FFF;margin-bottom:4px}.ll-booking-desc{font-size:12px;color:#E0E2E6;margin-bottom:12px}.ll-disclaimer{font-size:12px;color:#535865;text-align:center;margin-bottom:16px}.ll-success-box{padding:16px;border-radius:8px;background-color:#F7F8FA;margin-bottom:16px;display:flex;align-items:center;gap:12px}.ll-success-icon{width:32px;height:32px;border-radius:50%;background-color:#DC673C;display:flex;align-items:center;justify-content:center;flex-shrink:0}.ll-success-text h4{font-size:14px;font-weight:500;color:#21232C;margin:0}.ll-success-text p{font-size:12px;color:#535865;margin:0}.ll-center{text-align:center}.ll-mb-4{margin-bottom:16px}.ll-mb-6{margin-bottom:24px}.ll-mt-4{margin-top:16px}.ll-mt-6{margin-top:24px}.ll-hidden{display:none!important}.ll-plan-list{display:flex;flex-direction:column;gap:0;margin-bottom:20px}.ll-plan-item{display:flex;align-items:flex-start;gap:12px;padding:14px 0;border-bottom:1px solid #E0E2E6}.ll-plan-item:last-child{border-bottom:none}.ll-plan-icon{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}.ll-plan-icon.unlocked{background-color:#FDF0EB;color:#DC673C}.ll-plan-icon.locked{background-color:#F7F8FA;color:#535865}.ll-plan-text{flex:1}.ll-plan-label{font-size:13px;font-weight:600;color:#21232C;margin-bottom:2px}.ll-plan-detail{font-size:12px;color:#535865;line-height:1.4}.ll-plan-item.blurred .ll-plan-text{filter:blur(5px);user-select:none;pointer-events:none}.ll-plan-item.blurred .ll-plan-label,.ll-plan-item.blurred .ll-plan-detail{color:#535865}.ll-unlock-box{padding:20px;border-radius:12px;background:linear-gradient(135deg,rgba(238,250,112,0.15) 0%,rgba(220,103,60,0.08) 100%);border:1px solid #EEFA70;margin-bottom:16px;text-align:center}.ll-unlock-title{font-size:16px;font-weight:600;color:#21232C;margin-bottom:4px}.ll-unlock-desc{font-size:13px;color:#535865;margin-bottom:16px}.ll-email-row{display:flex;gap:8px}.ll-email-row .ll-input{flex:1;margin-bottom:0}.ll-email-row .ll-btn{width:auto;padding:10px 20px;white-space:nowrap;border-radius:8px}.ll-consent-mini{font-size:10px;color:#535865;margin-top:8px;line-height:1.3;text-align:left}.ll-consent-mini a{color:#DC673C;text-decoration:underline}.ll-social-proof{font-size:11px;color:#535865;margin-top:10px;margin-bottom:2px;text-align:center;font-style:italic}.ll-upsell-box{padding:24px;border-radius:12px;background-color:#FFF;border:1px solid #E0E2E6;margin-bottom:16px}.ll-upsell-stat{display:flex;align-items:center;gap:10px;padding:12px;border-radius:8px;background-color:#FFF8E8;margin-bottom:16px}.ll-upsell-stat-icon{font-size:20px;flex-shrink:0}.ll-upsell-stat-text{font-size:13px;color:#21232C;font-weight:500;line-height:1.4}.ll-upsell-features{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}.ll-upsell-feature{display:flex;align-items:center;gap:10px;font-size:13px;color:#21232C}.ll-upsell-feature-icon{width:20px;height:20px;border-radius:50%;background-color:#FDF0EB;display:flex;align-items:center;justify-content:center;flex-shrink:0}.ll-btn-skip{background:none;border:none;font-size:12px;color:#535865;cursor:pointer;width:100%;text-align:center;margin-top:12px;padding:8px;opacity:0.7;transition:opacity 0.2s}.ll-btn-skip:hover{opacity:1}.ll-btn-dark:disabled{opacity:0.4;cursor:not-allowed}.ll-btn-secondary{background-color:#F7F8FA;color:#21232C;border:1px solid #E0E2E6;width:100%;padding:12px;border-radius:50px;font-size:14px;font-weight:500;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all 0.2s ease}.ll-btn-secondary:hover{background-color:#EBEDF0}.ll-bottleneck-box{padding:16px;border-radius:12px;border:2px solid #DC673C;background-color:#FDF0EB;margin-bottom:16px}.ll-bottleneck-label{font-size:12px;color:#DC673C;font-weight:600;text-transform:uppercase;letter-spacing:0.3px;margin-bottom:4px}.ll-bottleneck-name{font-size:18px;font-weight:700;color:#21232C;margin-bottom:4px}.ll-bottleneck-desc{font-size:13px;color:#535865;line-height:1.4}.ll-score-number{font-size:48px;font-weight:700;color:#21232C;text-align:center}.ll-score-unit{font-size:16px;color:#21232C;text-align:center;margin-bottom:8px}.ll-score-interpret{display:inline-block;padding:4px 12px;border-radius:50px;background-color:rgba(238,250,112,0.3);color:#21232C;font-size:13px;font-weight:500;margin-bottom:16px}#ll-perform-widget .ll-progress-fill{background-color:#DC673C}#ll-perform-widget .ll-option.selected{background-color:#FDF0EB;border-color:#DC673C}#ll-perform-widget .ll-option-check{background-color:#DC673C}#ll-perform-widget .ll-btn-back{color:#DC673C}#ll-perform-widget .ll-btn-link{color:#DC673C}#ll-perform-widget .ll-input:focus{border-color:#DC673C}#ll-perform-widget .ll-success-icon{background-color:#DC673C}#ll-perform-widget .ll-plan-icon.unlocked{background-color:#FDF0EB;color:#DC673C}#ll-perform-widget .ll-consent-mini a{color:#DC673C}#ll-perform-widget .ll-other-tag:hover{border-color:#DC673C;background-color:#FDF0EB}#ll-perform-widget .ll-upsell-feature-icon{background-color:#FDF0EB}#ll-perform-widget .ll-unlock-box{background:linear-gradient(135deg,rgba(238,250,112,0.15) 0%,rgba(220,103,60,0.08) 100%)}</style>

<div class="ll-modal-overlay" id="ll-perform-overlay" onclick="window.llpCloseModalOnOverlay(event)">
  <div class="ll-modal-container" role="dialog" aria-modal="true" aria-label="LøberLab Performance Tjekket">
    <button class="ll-modal-close" onclick="window.llpCloseModal()" aria-label="Luk">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#535865" stroke-width="2">
        <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="ll-skadefinder" id="ll-perform-widget">
      <div class="ll-container">
        <div class="ll-card">
          <div class="ll-header">
            <div class="ll-logo-box">
              <svg width="24" height="29" viewBox="0 0 679 814" fill="none">
                <g transform="translate(-141.039,-111.732)">
                  <g transform="matrix(8.31127,0,0,8.31127,99.1558,-1033)">
                    <path d="M64.353,235.663L54.023,235.663C52.919,235.663 52.023,234.767 52.023,233.663C52.023,232.558 52.919,231.663 54.023,231.663L62.943,231.663L81.842,178.685L54.023,178.685C52.919,178.685 52.023,177.79 52.023,176.685C52.023,175.581 52.919,174.685 54.023,174.685L84.679,174.685C85.329,174.685 85.938,175.002 86.313,175.533C86.688,176.064 86.781,176.745 86.562,177.357L66.237,234.335C65.953,235.132 65.199,235.663 64.353,235.663Z" fill="#21232C"/>
                    <path d="M59.898,227.003L55.646,227.003L70.815,183.354L75.067,183.354L59.898,227.003Z" fill="#21232C"/>
                    <path d="M79.348,170.03L47.859,170.03C46.755,170.03 45.859,169.134 45.859,168.03C45.859,166.925 46.755,166.03 47.859,166.03L79.348,166.03C80.452,166.03 81.348,166.925 81.348,168.03C81.348,169.134 80.452,170.03 79.348,170.03Z" fill="#21232C"/>
                    <path d="M27.365,137.732L37.695,137.732C38.8,137.732 39.695,138.627 39.695,139.732C39.695,140.836 38.8,141.732 37.695,141.732L28.775,141.732L9.877,194.709L37.695,194.709C38.8,194.709 39.695,195.605 39.695,196.709C39.695,197.814 38.8,198.709 37.695,198.709L7.04,198.709C6.39,198.709 5.78,198.393 5.405,197.862C5.03,197.33 4.937,196.65 5.156,196.037L25.481,139.06C25.766,138.263 26.519,137.732 27.365,137.732Z" fill="#21232C"/>
                    <path d="M31.821,146.391L36.072,146.391L20.903,190.041L16.652,190.041L31.821,146.391Z" fill="#21232C"/>
                    <path d="M12.371,203.365L43.859,203.365C44.964,203.365 45.859,204.26 45.859,205.365C45.859,206.469 44.964,207.365 43.859,207.365L12.371,207.365C11.267,207.365 10.371,206.469 10.371,205.365C10.371,204.26 11.267,203.365 12.371,203.365Z" fill="#21232C"/>
                  </g>
                </g>
              </svg>
            </div>
            <div class="ll-header-text">
              <h1>Performance Tjekket</h1>
              <p>Får du nok ud af din træning?</p>
            </div>
          </div>
          <div class="ll-progress" id="ll-perform-progress">
            <div class="ll-progress-bar">
              <div class="ll-progress-fill" id="ll-perform-progress-fill"></div>
            </div>
          </div>
          <div id="ll-perform-step-content"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
window.llpOpenModal = window.llpOpenModal || function() {
  var mo = document.getElementById('ll-perform-overlay');
  if (mo) { mo.classList.add('active'); document.body.style.overflow = 'hidden'; }
};
window.llpCloseModal = window.llpCloseModal || function() {
  var mo = document.getElementById('ll-perform-overlay');
  if (mo) { mo.classList.remove('active'); document.body.style.overflow = ''; }
};
window.llpCloseModalOnOverlay = window.llpCloseModalOnOverlay || function(e) {
  if (e.target.id === 'll-perform-overlay') window.llpCloseModal();
};
</script>

<script>
(function() {

  // ============================================
  // KONFIGURATION
  // ============================================
  var C = {
    confirmationUrl: 'https://www.loberlab.dk/lobetjek-confirmation',
    klaviyoPublicKey: 'WDVWey',
    klaviyoListId: 'WWrXtB',
    sheetsWebhook: 'https://hook.eu2.make.com/mmlh59z6fls3tb4483m2enay87oe98at'
  };

  // ============================================
  // FLASKEHALS-GUIDE INDHOLD
  // ============================================
  var bottlenecks = {
    consistency: {
      name: 'Motivation & Konsistens',
      tagline: 'Dit fundament',
      description: 'Du har potentialet – men mangler regelmæssigheden. Konsistens er det absolut vigtigste fundament for al fremgang i løb.',
      items: [
        { label: 'Find din motivation', detail: 'Hvad er dit egentlige "hvorfor"? Vi hjælper dig med at finde den drivkraft, der holder dig i gang – også på de svære dage.', locked: false },
        { label: 'Minimum effective dose', detail: 'Du behøver ikke løbe 5 gange om ugen. Vi viser dig den mindste indsats, der stadig giver fremgang.', locked: false },
        { label: 'Byg rutinen: 21-dages plan', detail: 'En simpel, konkret plan der gør løb til en vane i stedet for en beslutning du skal tage hver gang.', locked: true },
        { label: 'Når motivationen svigter', detail: 'Strategier til at holde fast – fra accountability-tricks til at gøre løb socialt.', locked: true }
      ]
    },
    variation: {
      name: 'Træningsvariation',
      tagline: 'Mere udbytte af samme tid',
      description: 'Du løber regelmæssigt – men primært i samme tempo. Med mere variation kan du få markant mere ud af den tid, du allerede bruger.',
      items: [
        { label: '80/20-princippet', detail: '80% af dine ture skal være lette. De sidste 20% gør hele forskellen. De fleste løbere har det omvendt.', locked: false },
        { label: 'De 4 tempotyper du skal kende', detail: 'Let løb, tærskeltempo, intervaller og lange ture – og hvornår du bruger hvad.', locked: false },
        { label: 'Træningszoner – sat rigtigt op', detail: 'Hvordan du finder dine zoner, verificerer dem, og bruger dem til at styre intensitet i hverdagen.', locked: true },
        { label: 'Din personlige ugestruktur', detail: 'Sådan bygger du en uge med den rette blanding, tilpasset din tid og dit mål.', locked: true },
        { label: 'Progression uden overbelastning', detail: 'Hvordan du øger intensiteten gradvist uden at risikere skader.', locked: true }
      ]
    },
    recovery: {
      name: 'Restitution',
      tagline: 'Træning virker kun med restitution',
      description: 'Din træning ser fornuftig ud – men kroppen får ikke nok tid og ressourcer til at tilpasse sig. Fremgang sker i restitutionen, ikke i træningen.',
      items: [
        { label: 'Søvn er din superkraft', detail: 'Søvn er den vigtigste enkeltfaktor for restitution. Vi giver dig 5 konkrete ting, der kan forbedre din søvnkvalitet.', locked: false },
        { label: 'Ernæring for løbere', detail: 'Du behøver ikke tælle kalorier – men timing og sammensætning omkring træning gør en kæmpe forskel.', locked: false },
        { label: 'Aktiv restitution der virker', detail: 'Hvad virker, hvad er spild af tid, og hvordan du strukturerer lette dage.', locked: true },
        { label: 'Stress og træning', detail: 'Hvorfor en stresset uge kræver en anden træning – og hvordan du justerer.', locked: true },
        { label: 'Hviledage og aktiv restitution', detail: 'Hvornår du skal hvile helt, og hvornår aktiv restitution giver mening – og forskellen på de to.', locked: true }
      ]
    },
    strength: {
      name: 'Styrketræning',
      tagline: 'Det manglende element',
      description: 'Du løber godt og restituerer fint – men mangler styrketræning. Det er den mest oversete faktor for både præstation og skadeforebyggelse hos løbere.',
      items: [
        { label: 'Hvorfor styrke gør dig hurtigere', detail: 'Styrketræning forbedrer løbeøkonomi, reducerer skaderisiko og giver dig et stærkere afsæt.', locked: false },
        { label: 'Minimumsprogrammet: 2x20 min', detail: 'De 5 vigtigste øvelser for løbere – kan laves hjemme med minimal udstyr.', locked: false },
        { label: 'Integration i løbeugen', detail: 'Hvornår i ugen, hvor tæt på løbeture, og hvordan du periodiserer styrke og løb.', locked: true },
        { label: '12-ugers progressionsplan', detail: 'Fra begynder til solid styrketræning – med video-guides og sets/reps.', locked: true }
      ]
    },
    structure: {
      name: 'Struktur & Periodisering',
      tagline: 'Planen der binder det hele sammen',
      description: 'Du gør mange ting rigtigt – men mangler den overordnede ramme. Med periodisering og struktur kan du samle alle brikkerne og se den fremgang, du fortjener.',
      items: [
        { label: 'Periodisering for almindelige løbere', detail: 'Du behøver ikke et eliteprogram. Men en simpel opdeling af året i faser giver markant bedre resultater.', locked: false },
        { label: 'Sæsonplanlægning', detail: 'Vælg dine A-løb, byg op, og undgå at peake på det forkerte tidspunkt.', locked: false },
        { label: 'Fra plan til hverdag', detail: 'Sådan omsætter du periodisering til en konkret ugeplan der passer ind i din hverdag – med fleksibilitet til at justere.', locked: true },
        { label: 'Ugentlig struktur og progression', detail: 'Sådan øger du belastning uge for uge uden at det bliver for meget.', locked: true },
        { label: 'Deload og supercompensation', detail: 'Hvorfor du skal træne MINDRE i perioder for at blive hurtigere.', locked: true }
      ]
    }
  };

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
    gender: null, birthdate: null,
    driver: null, goal: null,
    weeklyKm: null, sessions: null,
    experience: null, pattern: null,
    zones: null, zoneConfidence: null, zoneMethod: null,
    intensity: null, periodization: null,
    strength: null, barriers: [],
    sleepHours: null, sleepQuality: null, sleepPriority: null,
    nutritionTiming: null, nutritionAdaption: null,
    restDays: null, stressAdjust: null,
    scores: {}, totalScore: 0,
    bottleneck: null, selectedGuide: null,
    leadInfo: { name: '', email: '' },
    leadSubmitted: false, wantsCall: false
  };

  // ============================================
  // CONDITIONAL NAVIGATION
  // ============================================
  function isStepVisible(step) {
    if (step === 7) return s.zones === 'yes' || s.zones === 'somewhat';
    if (step === 8) return (s.zones === 'yes' || s.zones === 'somewhat') && s.zoneConfidence === 'yes';
    return true;
  }

  function nextStep(current) {
    var n = current + 1;
    while (n <= 15 && !isStepVisible(n)) n++;
    return n;
  }

  function prevStep(current) {
    var p = current - 1;
    while (p >= 0 && !isStepVisible(p)) p--;
    return Math.max(0, p);
  }

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
      clarity('set', 'loebetjek_event', e);
      if (d) { for (var k in d) { if (d[k]) clarity('set', 'lt_' + k, String(d[k])); } }
    }
  }

  function sendToSheets(data) {
    if (!C.sheetsWebhook) return;
    console.log('[Performance Tjekket] Sending to sheets:', data.type, data);
    fetch(C.sheetsWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(function(r) {
      console.log('[Performance Tjekket] Sheets response:', r.status);
    }).catch(function(e) {
      console.error('[Performance Tjekket] Sheets error:', e);
    });
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

  function esc(str) { var d = document.createElement('div'); d.textContent = str; return d.innerHTML; }

  function clamp(v) { return Math.max(0, Math.min(100, Math.round(v))); }

  function getFullPayload(type) {
    var utm = getUTM();
    return {
      session_id: s.sessionId,
      timestamp: new Date().toISOString(),
      type: type,
      gender: s.gender || '',
      birthdate: s.birthdate || '',
      age: calcAge(s.birthdate) || '',
      driver: s.driver || '',
      goal: s.goal || '',
      weekly_km: s.weeklyKm || '',
      sessions: s.sessions || '',
      experience: s.experience || '',
      pattern: s.pattern || '',
      zones: s.zones || '',
      zone_confidence: s.zoneConfidence || '',
      zone_method: s.zoneMethod || '',
      intensity: s.intensity || '',
      periodization: s.periodization || '',
      strength_training: s.strength || '',
      barriers: (s.barriers || []).join(', '),
      sleep_hours: s.sleepHours || '',
      sleep_quality: s.sleepQuality || '',
      sleep_priority: s.sleepPriority || '',
      nutrition_timing: s.nutritionTiming || '',
      nutrition_adaption: s.nutritionAdaption || '',
      rest_days: s.restDays || '',
      stress_adjust: s.stressAdjust || '',
      total_score: s.totalScore || 0,
      consistency_score: s.scores.consistency || 0,
      variation_score: s.scores.variation || 0,
      recovery_score: s.scores.recovery || 0,
      strength_score: s.scores.strength || 0,
      structure_score: s.scores.structure || 0,
      bottleneck: s.bottleneck || '',
      selected_guide: s.selectedGuide || '',
      name: s.leadInfo.name || '',
      email: s.leadInfo.email || '',
      wants_call: s.wantsCall,
      page_url: window.location.pathname,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      referrer: utm.referrer
    };
  }

  // ============================================
  // SCORING-LOGIK
  // ============================================
  function calculateScores() {
    // CONSISTENCY (0-100)
    var cons = 0;
    switch(s.sessions) {
      case '1': cons = 20; break;
      case '2': cons = 45; break;
      case '3': cons = 70; break;
      case '4': cons = 85; break;
      case '5plus': cons = 95; break;
    }
    if (s.pattern === 'random') cons = Math.round(cons * 0.7);
    if (s.barriers.indexOf('motivation') >= 0) cons = Math.round(cons * 0.7);
    if (s.barriers.indexOf('time') >= 0) cons = Math.round(cons * 0.85);
    // restDays modifier
    if (s.restDays === 'always' || s.restDays === 'usually') cons = Math.min(100, cons + 3);
    else if (s.restDays === 'no_plan') cons = Math.round(cons * 0.9);

    // VARIATION (0-100) — now includes zones + intensity
    var vari = 0;
    switch(s.pattern) {
      case 'same_pace': vari = 15; break;
      case 'random': vari = 25; break;
      case 'some_mix': vari = 60; break;
      case 'structured': vari = 90; break;
    }
    // Intensity distribution
    switch(s.intensity) {
      case 'mostly_easy': vari += 10; break;
      case 'mostly_hard': vari = Math.round(vari * 0.75); break;
      case 'all_out': vari = Math.round(vari * 0.6); break;
    }
    // Zone usage
    if (s.zones === 'yes') vari += 8;
    else if (s.zones === 'somewhat') vari += 3;
    // Zone confidence
    if (s.zoneConfidence === 'no') vari = Math.round(vari * 0.9);
    // Zone method
    if (s.zoneMethod) {
      switch(s.zoneMethod) {
        case 'lactate': vari += 5; break;
        case 'threshold': case 'max_hr': vari += 3; break;
        case 'formula': vari = Math.round(vari * 0.95); break;
        case 'watch_auto': vari = Math.round(vari * 0.9); break;
      }
    }
    if (s.barriers.indexOf('plateau') >= 0) vari = Math.round(vari * 0.8);
    if (s.barriers.indexOf('progress') >= 0) vari = Math.round(vari * 0.85);

    // RECOVERY (0-100) — from 3 sub-scores: sleep(0-50), nutrition(0-25), stress(0-25)
    var sleepSub = 0;
    switch(s.sleepHours) { case 'under6': sleepSub += 3; break; case '6-7': sleepSub += 10; break; case '7-8': sleepSub += 17; break; case '8plus': sleepSub += 20; break; }
    switch(s.sleepQuality) { case 'good': sleepSub += 20; break; case 'ok': sleepSub += 10; break; case 'bad': sleepSub += 3; break; }
    switch(s.sleepPriority) { case 'yes': sleepSub += 10; break; case 'sometimes': sleepSub += 5; break; case 'no': sleepSub += 1; break; }
    var nutriSub = 0;
    switch(s.nutritionTiming) { case 'yes': nutriSub += 15; break; case 'some': nutriSub += 8; break; case 'no': nutriSub += 2; break; }
    switch(s.nutritionAdaption) { case 'yes': nutriSub += 10; break; case 'some': nutriSub += 5; break; case 'no': nutriSub += 1; break; }
    var stressSub = 0;
    switch(s.restDays) { case 'always': stressSub += 15; break; case 'usually': stressSub += 10; break; case 'rarely': stressSub += 4; break; case 'no_plan': stressSub += 1; break; }
    switch(s.stressAdjust) { case 'yes': stressSub += 10; break; case 'sometimes': stressSub += 5; break; case 'no': stressSub += 2; break; case 'no_plan': stressSub += 0; break; }
    var rec = sleepSub + nutriSub + stressSub;
    if (s.barriers.indexOf('recovery') >= 0) rec = Math.round(rec * 0.7);

    // STRENGTH (0-100) — unchanged
    var str = 0;
    switch(s.strength) { case 'none': str = 5; break; case 'unstructured': str = 30; break; case 'once': str = 60; break; case 'twice_plus': str = 90; break; }
    if (s.barriers.indexOf('injuries') >= 0) str = Math.round(str * 0.8);

    // STRUCTURE (0-100) — now includes periodization + zones
    var stru = 0;
    switch(s.pattern) { case 'random': stru = 10; break; case 'same_pace': stru = 25; break; case 'some_mix': stru = 55; break; case 'structured': stru = 85; break; }
    // Periodization
    switch(s.periodization) { case 'planned': stru += 15; break; case 'some': stru += 5; break; case 'same': stru = Math.round(stru * 0.85); break; case 'reactive': stru = Math.round(stru * 0.7); break; }
    // Zone usage
    if (s.zones === 'yes') stru += 5;
    switch(s.experience) { case 'beginner': stru = Math.min(100, stru + 10); break; case 'experienced': stru = Math.round(stru * 0.9); break; case 'veteran': stru = Math.round(stru * 0.85); break; }
    if (s.barriers.indexOf('no_plan') >= 0) stru = Math.round(stru * 0.7);

    return { consistency: clamp(cons), variation: clamp(vari), recovery: clamp(rec), strength: clamp(str), structure: clamp(stru) };
  }

  function findBottleneck(scores) {
    var weights = { consistency: 1.3, variation: 1.1, recovery: 1.0, strength: 0.9, structure: 0.8 };
    var keys = ['consistency', 'variation', 'recovery', 'strength', 'structure'];
    var maxNeed = -1, bn = keys[0];
    for (var i = 0; i < keys.length; i++) {
      var need = (100 - scores[keys[i]]) * weights[keys[i]];
      if (need > maxNeed) { maxNeed = need; bn = keys[i]; }
    }
    return bn;
  }

  function totalScore(scores) {
    return Math.round((scores.consistency + scores.variation + scores.recovery + scores.strength + scores.structure) / 5);
  }

  function scoreColor(val) {
    if (val <= 25) return '#E05C5C';
    if (val <= 50) return '#E8A04E';
    if (val <= 70) return '#D4CC42';
    return '#4EC278';
  }

  function scoreLabel(key) {
    var labels = { consistency: 'Konsistens', variation: 'Variation', recovery: 'Restitution', strength: 'Styrke', structure: 'Struktur' };
    return labels[key] || key;
  }

  function interpretScore(score) {
    if (score <= 30) return 'Du har et kæmpe uudnyttet potentiale';
    if (score <= 50) return 'Du har et godt udgangspunkt, men efterlader en del på bordet';
    if (score <= 70) return 'Du gør mange ting rigtigt, men har stadig plads til forbedring';
    if (score <= 85) return 'Du træner godt – med få justeringer kan du komme endnu længere';
    return 'Imponerende – du udnytter din træningstid effektivt';
  }

  // ============================================
  // RENDER FUNKTIONER
  // ============================================
  function renderProgress() {
    var pe = document.getElementById('ll-perform-progress');
    var fe = document.getElementById('ll-perform-progress-fill');
    if (s.step > 15) { pe.classList.add('ll-hidden'); return; }
    pe.classList.remove('ll-hidden');
    var visibleBefore = 0, totalVisible = 0;
    for (var i = 0; i <= 15; i++) {
      if (isStepVisible(i)) { totalVisible++; if (i < s.step) visibleBefore++; }
    }
    var denom = Math.max(totalVisible - 1, 1);
    fe.style.width = Math.min((visibleBefore / denom) * 100, 100) + '%';
  }

  // Step 0: Demografi
  function rDemo() {
    return '<h2 class="ll-step-title">Lidt om dig</h2>' +
      '<p class="ll-step-desc">Køn og alder hjælper os med at give dig en mere præcis vurdering</p>' +
      '<div class="ll-options ll-mb-6">' +
      '<select class="ll-input ll-select" id="ll-perform-gender" onchange="window.llpUpdateDemo()">' +
      '<option value="">Vælg køn</option>' +
      '<option value="male"' + (s.gender === 'male' ? ' selected' : '') + '>Mand</option>' +
      '<option value="female"' + (s.gender === 'female' ? ' selected' : '') + '>Kvinde</option></select>' +
      '<label for="ll-perform-birthdate" style="font-size:12px;color:#535865;margin-bottom:4px;display:block">Fødselsdato</label>' +
      '<input type="' + (s.birthdate ? 'date' : 'text') + '" class="ll-input" id="ll-perform-birthdate" placeholder="dd/mm/åååå" value="' + (s.birthdate || '') + '" onfocus="this.type=\'date\';this.max=\'2010-01-01\';this.min=\'1930-01-01\'" onchange="window.llpUpdateDemo()"' + (s.birthdate ? ' max="2010-01-01" min="1930-01-01"' : '') + '>' +
      '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitDemo()" id="ll-perform-demo-btn"' + (s.gender && s.birthdate ? '' : ' disabled') + '>Næste' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
  }

  // Step 1: Driver
  function rDriver() {
    var opts = [
      { id: 'pr', label: 'Jeg vil forbedre mine tider', desc: 'Har konkrete mål og vil se fremgang' },
      { id: 'health', label: 'Jeg vil løbe sundt og bæredygtigt', desc: 'Sundhed, energi og velvære i hverdagen' },
      { id: 'comeback', label: 'Jeg er på vej tilbage fra skade', desc: 'Vil bygge op igen og undgå tilbagefald' },
      { id: 'structure', label: 'Jeg mangler struktur', desc: 'Ved ikke helt hvad jeg skal gøre' }
    ];
    return '<h2 class="ll-step-title">Hvad beskriver dig bedst?</h2>' +
      '<p class="ll-step-desc">Vælg det der passer bedst</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectDriver(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 2: Mål
  function rGoal() {
    var opts = [
      { id: '5k', label: '5 km' },
      { id: '10k', label: '10 km' },
      { id: 'half', label: 'Halvmarathon' },
      { id: 'marathon', label: 'Marathon' },
      { id: 'consistent', label: 'Bare løbe regelmæssigt' }
    ];
    return '<h2 class="ll-step-title">Hvad er dit primære mål lige nu?</h2>' +
      '<p class="ll-step-desc">Vælg det der passer bedst</p>' +
      '<div class="ll-options grid">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectGoal(\'' + x.id + '\')">' +
          '<span class="ll-option-label">' + x.label + '</span></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 3: Niveau (to selects)
  function rLevel() {
    return '<h2 class="ll-step-title">Dit nuværende niveau</h2>' +
      '<p class="ll-step-desc">Fortæl os om din ugentlige træning</p>' +
      '<div class="ll-options ll-mb-6">' +
      '<select class="ll-input ll-select" id="ll-perform-km" onchange="window.llpUpdateLevel()">' +
      '<option value="">Ugentlig km</option>' +
      '<option value="low"' + (s.weeklyKm === 'low' ? ' selected' : '') + '>Under 15 km</option>' +
      '<option value="moderate"' + (s.weeklyKm === 'moderate' ? ' selected' : '') + '>15-30 km</option>' +
      '<option value="medium"' + (s.weeklyKm === 'medium' ? ' selected' : '') + '>30-50 km</option>' +
      '<option value="high"' + (s.weeklyKm === 'high' ? ' selected' : '') + '>50-80 km</option>' +
      '<option value="very_high"' + (s.weeklyKm === 'very_high' ? ' selected' : '') + '>80+ km</option></select>' +
      '<select class="ll-input ll-select" id="ll-perform-sessions" onchange="window.llpUpdateLevel()">' +
      '<option value="">Løbeture pr. uge</option>' +
      '<option value="1"' + (s.sessions === '1' ? ' selected' : '') + '>1</option>' +
      '<option value="2"' + (s.sessions === '2' ? ' selected' : '') + '>2</option>' +
      '<option value="3"' + (s.sessions === '3' ? ' selected' : '') + '>3</option>' +
      '<option value="4"' + (s.sessions === '4' ? ' selected' : '') + '>4</option>' +
      '<option value="5plus"' + (s.sessions === '5plus' ? ' selected' : '') + '>5+</option></select>' +
      '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitLevel()" id="ll-perform-level-btn"' + (s.weeklyKm && s.sessions ? '' : ' disabled') + '>Næste' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 4: Erfaring
  function rExperience() {
    var opts = [
      { id: 'beginner', label: 'Under 1 år', desc: 'Relativt ny løber' },
      { id: 'intermediate', label: '1-3 år', desc: 'Har løbet et stykke tid' },
      { id: 'experienced', label: '3-7 år', desc: 'Erfaren løber' },
      { id: 'veteran', label: '7+ år', desc: 'Mange år på landevejen' }
    ];
    return '<h2 class="ll-step-title">Hvor længe har du løbet?</h2>' +
      '<p class="ll-step-desc">Vælg det der passer bedst</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectExperience(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 5: Træningsmønster
  function rPattern() {
    var opts = [
      { id: 'same_pace', label: 'Samme tempo hver gang', desc: 'De fleste ture ligner hinanden' },
      { id: 'some_mix', label: 'Blanding af roligt og hurtigt', desc: 'Varierer lidt, men uden fast struktur' },
      { id: 'structured', label: 'Følger en plan', desc: 'Har en fast ugestruktur med forskellige typer' },
      { id: 'random', label: 'Løber når jeg har tid og lyst', desc: 'Ingen fast struktur' }
    ];
    return '<h2 class="ll-step-title">Hvordan ser din typiske træning ud?</h2>' +
      '<p class="ll-step-desc">Vælg det der passer bedst</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectPattern(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 6: Træningszoner (NY)
  function rZones() {
    var opts = [
      { id: 'yes', label: 'Ja, jeg bruger zoner aktivt', desc: 'Styrer bevidst intensitet med pulszoner eller tempoer' },
      { id: 'somewhat', label: 'Kender til det, men bruger det ikke konsekvent', desc: 'Har hørt om det, men følger det ikke fast' },
      { id: 'no', label: 'Nej', desc: 'Løber uden at tænke over zoner' },
      { id: 'unsure', label: 'Usikker på hvad det er', desc: 'Har ikke styr på hvad træningszoner er' }
    ];
    return '<h2 class="ll-step-title">Træner du efter zoner?</h2>' +
      '<p class="ll-step-desc">Pulszoner eller tempozoner til at styre intensitet</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectZones(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 7: Zone-tillid (conditional: zones=yes/somewhat)
  function rZoneConfidence() {
    var opts = [
      { id: 'yes', label: 'Ja, testet og verificeret', desc: 'Har fået lavet en test eller verificeret mine zoner' },
      { id: 'think_so', label: 'Tror det, men er ikke sikker', desc: 'Har sat dem op, men aldrig fået dem tjekket' },
      { id: 'no', label: 'Nej, nok ikke rigtige', desc: 'Bruger standardzoner eller gættede værdier' }
    ];
    return '<h2 class="ll-step-title">Er dine zoner korrekt sat op?</h2>' +
      '<p class="ll-step-desc">Forkerte zoner kan betyde at du træner i den forkerte intensitet</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectZoneConfidence(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 8: Zone-metode (conditional: zoneConfidence=yes)
  function rZoneMethod() {
    var opts = [
      { id: 'lactate', label: 'Laktattest', desc: 'Professionel test med blodprøver' },
      { id: 'max_hr', label: 'Maks-puls test', desc: 'Test af din maksimale puls' },
      { id: 'threshold', label: 'Tærskeltest', desc: 'Anærobisk tærskel eller FTP-test' },
      { id: 'formula', label: '220 minus alder e.l.', desc: 'Beregnet med en standardformel' },
      { id: 'watch_auto', label: 'Uret satte dem selv', desc: 'Mit GPS-ur/app beregnede dem automatisk' },
      { id: 'other', label: 'Anden / ved ikke', desc: 'Husker ikke eller bruger en anden metode' }
    ];
    return '<h2 class="ll-step-title">Hvilken metode brugte du?</h2>' +
      '<p class="ll-step-desc">Til at sætte dine zoner op</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectZoneMethod(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 9: Intensitetsfordeling (NY)
  function rIntensity() {
    var opts = [
      { id: 'mostly_easy', label: 'Mest roligt (80%+ lav intensitet)', desc: 'De fleste ture er rolige og snakkbare' },
      { id: 'mixed', label: 'Nogenlunde blanding', desc: 'Varierer mellem roligt og hurtigt' },
      { id: 'mostly_hard', label: 'Mest moderat-høj intensitet', desc: 'De fleste ture er i moderat-hårdt tempo' },
      { id: 'all_out', label: 'Gas på hver gang', desc: 'Løber som regel så hurtigt jeg kan' },
      { id: 'dont_know', label: 'Tænker ikke over det', desc: 'Løber i det tempo der føles naturligt' }
    ];
    return '<h2 class="ll-step-title">Hvordan fordeler du din træningsintensitet?</h2>' +
      '<p class="ll-step-desc">Tænk på en typisk uge</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectIntensity(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 10: Periodisering (NY)
  function rPeriodization() {
    var opts = [
      { id: 'planned', label: 'Ja, bevidst faseopdeling', desc: 'Planlægger base, opbygning og peaking' },
      { id: 'some', label: 'Lidt, ændrer op til løb', desc: 'Justerer lidt når et løb nærmer sig' },
      { id: 'same', label: 'Nej, træner ens hele året', desc: 'Samme type træning uanset sæson' },
      { id: 'reactive', label: 'Afhænger af lyst og humør', desc: 'Ingen fast plan – tager det som det kommer' }
    ];
    return '<h2 class="ll-step-title">Periodiserer du din træning?</h2>' +
      '<p class="ll-step-desc">Altså om du opdeler året i faser med forskelligt fokus</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectPeriodization(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 11: Styrketræning
  function rStrength() {
    var opts = [
      { id: 'none', label: 'Nej, ikke pt.', desc: 'Ingen styrketræning' },
      { id: 'unstructured', label: 'Lidt, men ustruktureret', desc: 'Tager det som det kommer' },
      { id: 'once', label: '1 gang om ugen', desc: 'Fast ugentlig styrketræning' },
      { id: 'twice_plus', label: '2+ gange om ugen', desc: 'Prioriterer styrke regelmæssigt' }
    ];
    return '<h2 class="ll-step-title">Laver du styrketræning?</h2>' +
      '<p class="ll-step-desc">Vælg det der passer bedst</p>' +
      '<div class="ll-options">' +
      opts.map(function(x) {
        return '<button class="ll-option" onclick="window.llpSelectStrength(\'' + x.id + '\')">' +
          '<div class="ll-option-label">' + x.label + '</div>' +
          '<div class="ll-option-desc">' + x.desc + '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 12: Barrierer (multi-select)
  function rBarriers() {
    var opts = [
      { id: 'plateau', l: 'Rammer et plateau – mangler fremgang' },
      { id: 'injuries', l: 'Gentagne skader' },
      { id: 'no_plan', l: 'Mangler en plan – ved ikke hvad jeg skal træne' },
      { id: 'time', l: 'Svært at finde tid i hverdagen' },
      { id: 'motivation', l: 'Manglende motivation eller disciplin' },
      { id: 'recovery', l: 'Føler mig ikke restitueret' },
      { id: 'progress', l: 'Træner meget men ser ikke resultater' },
      { id: 'alone', l: 'Savner sparring og fællesskab' },
      { id: 'none', l: 'Ingen af ovenstående' }
    ];
    return '<h2 class="ll-step-title">Hvad holder dig mest tilbage?</h2>' +
      '<p class="ll-step-desc">Vælg alle der passer</p>' +
      '<div class="ll-options" id="ll-perform-barriers">' +
      opts.map(function(x) {
        var sel = s.barriers.indexOf(x.id) >= 0;
        return '<button class="ll-option' + (sel ? ' selected' : '') + '" onclick="window.llpToggleBarrier(\'' + x.id + '\')">' +
          '<div class="ll-option-row"><span class="ll-option-label">' + x.l + '</span>' +
          (sel ? '<div class="ll-option-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : '') +
          '</div></button>';
      }).join('') + '</div>' +
      '<button class="ll-btn ll-btn-primary ll-mt-6" onclick="window.llpSubmitBarriers()"' +
      (s.barriers.length === 0 ? ' disabled' : '') +
      '>Næste<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 13: Søvn (3 selects)
  function rSleep() {
    return '<h2 class="ll-step-title">Søvn</h2>' +
      '<p class="ll-step-desc">Søvn er den vigtigste enkeltfaktor for restitution</p>' +
      '<div class="ll-options ll-mb-6">' +
      '<select class="ll-input ll-select" id="ll-perform-sleep-hours" onchange="window.llpUpdateSleep()">' +
      '<option value="">Hvor mange timer sover du typisk?</option>' +
      '<option value="under6"' + (s.sleepHours === 'under6' ? ' selected' : '') + '>Under 6 timer</option>' +
      '<option value="6-7"' + (s.sleepHours === '6-7' ? ' selected' : '') + '>6-7 timer</option>' +
      '<option value="7-8"' + (s.sleepHours === '7-8' ? ' selected' : '') + '>7-8 timer</option>' +
      '<option value="8plus"' + (s.sleepHours === '8plus' ? ' selected' : '') + '>8+ timer</option></select>' +
      '<select class="ll-input ll-select" id="ll-perform-sleep-quality" onchange="window.llpUpdateSleep()">' +
      '<option value="">Hvordan er din søvnkvalitet?</option>' +
      '<option value="good"' + (s.sleepQuality === 'good' ? ' selected' : '') + '>God – vågner udhvilet</option>' +
      '<option value="ok"' + (s.sleepQuality === 'ok' ? ' selected' : '') + '>OK – varierende</option>' +
      '<option value="bad"' + (s.sleepQuality === 'bad' ? ' selected' : '') + '>Dårlig – urolig eller for lidt</option></select>' +
      '<select class="ll-input ll-select" id="ll-perform-sleep-priority" onchange="window.llpUpdateSleep()">' +
      '<option value="">Prioriterer du søvn ift. din træning?</option>' +
      '<option value="yes"' + (s.sleepPriority === 'yes' ? ' selected' : '') + '>Ja, aktivt</option>' +
      '<option value="sometimes"' + (s.sleepPriority === 'sometimes' ? ' selected' : '') + '>Sommetider</option>' +
      '<option value="no"' + (s.sleepPriority === 'no' ? ' selected' : '') + '>Nej, ikke bevidst</option></select>' +
      '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitSleep()" id="ll-perform-sleep-btn"' +
      (s.sleepHours && s.sleepQuality && s.sleepPriority ? '' : ' disabled') + '>Næste' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 14: Ernæring (2 selects)
  function rNutrition() {
    return '<h2 class="ll-step-title">Ernæring</h2>' +
      '<p class="ll-step-desc">Ernæring spiller en vigtig rolle for restitution og præstation</p>' +
      '<div class="ll-options ll-mb-6">' +
      '<select class="ll-input ll-select" id="ll-perform-nutrition-timing" onchange="window.llpUpdateNutrition()">' +
      '<option value="">Tænker du over ernæring ift. timing?</option>' +
      '<option value="yes"' + (s.nutritionTiming === 'yes' ? ' selected' : '') + '>Ja – spiser målrettet før/efter træning</option>' +
      '<option value="some"' + (s.nutritionTiming === 'some' ? ' selected' : '') + '>Lidt – prøver at spise fornuftigt</option>' +
      '<option value="no"' + (s.nutritionTiming === 'no' ? ' selected' : '') + '>Nej – spiser som det passer</option></select>' +
      '<select class="ll-input ll-select" id="ll-perform-nutrition-adaption" onchange="window.llpUpdateNutrition()">' +
      '<option value="">Tilpasser du ernæring til træningsbelastning?</option>' +
      '<option value="yes"' + (s.nutritionAdaption === 'yes' ? ' selected' : '') + '>Ja – spiser mere på hårde dage</option>' +
      '<option value="some"' + (s.nutritionAdaption === 'some' ? ' selected' : '') + '>Lidt – tænker over det men følger det ikke fast</option>' +
      '<option value="no"' + (s.nutritionAdaption === 'no' ? ' selected' : '') + '>Nej – spiser det samme uanset træning</option></select>' +
      '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitNutrition()" id="ll-perform-nutrition-btn"' +
      (s.nutritionTiming && s.nutritionAdaption ? '' : ' disabled') + '>Næste' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 15: Stress & hviledage (2 selects)
  function rStress() {
    return '<h2 class="ll-step-title">Stress og hviledage</h2>' +
      '<p class="ll-step-desc">Sidste spørgsmål – hvordan håndterer du hvile og stress?</p>' +
      '<div class="ll-options ll-mb-6">' +
      '<select class="ll-input ll-select" id="ll-perform-rest-days" onchange="window.llpUpdateStress()">' +
      '<option value="">Har du planlagte hviledage?</option>' +
      '<option value="always"' + (s.restDays === 'always' ? ' selected' : '') + '>Altid – faste hviledage hver uge</option>' +
      '<option value="usually"' + (s.restDays === 'usually' ? ' selected' : '') + '>Som regel – de fleste uger</option>' +
      '<option value="rarely"' + (s.restDays === 'rarely' ? ' selected' : '') + '>Sjældent – kun når kroppen tvinger mig</option>' +
      '<option value="no_plan"' + (s.restDays === 'no_plan' ? ' selected' : '') + '>Ingen plan for hvile</option></select>' +
      '<select class="ll-input ll-select" id="ll-perform-stress-adjust" onchange="window.llpUpdateStress()">' +
      '<option value="">Justerer du træning ved stress/travlhed?</option>' +
      '<option value="yes"' + (s.stressAdjust === 'yes' ? ' selected' : '') + '>Ja – skruer ned når livet er hårdt</option>' +
      '<option value="sometimes"' + (s.stressAdjust === 'sometimes' ? ' selected' : '') + '>Sommetider – men ikke konsekvent</option>' +
      '<option value="no"' + (s.stressAdjust === 'no' ? ' selected' : '') + '>Nej – kører det samme program uanset</option>' +
      '<option value="no_plan"' + (s.stressAdjust === 'no_plan' ? ' selected' : '') + '>Har ikke en plan for det</option></select>' +
      '</div>' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitStress()" id="ll-perform-stress-btn"' +
      (s.restDays && s.stressAdjust ? '' : ' disabled') + '>Se dit resultat' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 16: Resultat + Guide-teaser + Email capture (combined)
  function rResult() {
    var keys = ['consistency', 'variation', 'recovery', 'strength', 'structure'];
    var bn = bottlenecks[s.selectedGuide] || bottlenecks[s.bottleneck];
    var guide = bottlenecks[s.selectedGuide];
    var otherKeys = keys.filter(function(k) { return k !== s.selectedGuide; });

    var checkSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC673C" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#535865" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>';

    return '<div class="ll-center ll-mb-4">' +
      '<p class="ll-step-desc">Din analyse er klar</p>' +
      '<div class="ll-score-number">' + s.totalScore + '/100</div>' +
      '<p class="ll-score-unit">Din Træningsscore</p>' +
      '<span class="ll-score-interpret">' + interpretScore(s.totalScore) + '</span></div>' +

      '<div class="ll-bento-grid">' +
      keys.map(function(k) {
        var val = s.scores[k];
        var color = scoreColor(val);
        return '<div class="ll-bento-card">' +
          '<div class="ll-bento-label">' + scoreLabel(k) + '</div>' +
          '<div class="ll-bento-value">' + val + '</div>' +
          '<div class="ll-bento-progress"><div class="ll-bento-progress-fill" style="width:' + val + '%;background-color:' + color + '"></div></div>' +
          '</div>';
      }).join('') + '</div>' +

      '<div class="ll-bottleneck-box">' +
      '<div class="ll-bottleneck-label">Din største mulighed for forbedring</div>' +
      '<div class="ll-bottleneck-name">' + bn.name + '</div>' +
      '<div class="ll-bottleneck-desc">' + bn.description + '</div></div>' +

      // Guide-teaser med blur
      '<div class="ll-plan-list">' +
      guide.items.map(function(item) {
        return '<div class="ll-plan-item' + (item.locked ? ' blurred' : '') + '">' +
          '<div class="ll-plan-icon ' + (item.locked ? 'locked' : 'unlocked') + '">' + (item.locked ? lockSvg : checkSvg) + '</div>' +
          '<div class="ll-plan-text">' +
          '<div class="ll-plan-label">' + item.label + '</div>' +
          '<div class="ll-plan-detail">' + item.detail + '</div>' +
          '</div></div>';
      }).join('') +
      '</div>' +

      // Email capture med social proof og specifik CTA
      '<div class="ll-unlock-box">' +
      '<p class="ll-unlock-title">Få din fulde guide til ' + guide.name.toLowerCase() + '</p>' +
      '<p class="ll-unlock-desc">5 dages gratis guide med konkrete trin — direkte i din indbakke.</p>' +
      '<input type="text" class="ll-input" id="ll-perform-lead-name" placeholder="Dit fornavn">' +
      '<div class="ll-email-row">' +
      '<input type="email" class="ll-input" id="ll-perform-lead-email" placeholder="Din email">' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitEmail()" id="ll-perform-email-btn">Send min guide</button></div>' +
      '<p class="ll-social-proof">251+ løbere har allerede fået deres guide</p>' +
      '<p class="ll-consent-mini">Ved at fortsætte accepterer du at modtage din guide og relevante træningstips fra LøberLab. Du kan altid afmelde dig.</p>' +
      '</div>' +

      '<div class="ll-other-matches">' +
      '<p class="ll-other-label">Vil du hellere have guide til:</p>' +
      '<div class="ll-other-tags">' +
      otherKeys.map(function(k) {
        return '<button class="ll-other-tag" onclick="window.llpSwitchGuide(\'' + k + '\')">' + bottlenecks[k].name + '</button>';
      }).join('') + '</div></div>';
  }

  // Step 17: Guide-teaser + Email capture
  function rGuide() {
    var guide = bottlenecks[s.selectedGuide];

    var checkSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DC673C" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var lockSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#535865" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>';

    var keys = ['consistency', 'variation', 'recovery', 'strength', 'structure'];
    var otherKeys = keys.filter(function(k) { return k !== s.selectedGuide; });

    return '<div class="ll-center ll-mb-4">' +
      '<p class="ll-step-desc">' + guide.tagline + '</p>' +
      '<h2 class="ll-step-title">Din guide: ' + guide.name + '</h2></div>' +

      '<div class="ll-plan-list">' +
      guide.items.map(function(item) {
        return '<div class="ll-plan-item' + (item.locked ? ' blurred' : '') + '">' +
          '<div class="ll-plan-icon ' + (item.locked ? 'locked' : 'unlocked') + '">' + (item.locked ? lockSvg : checkSvg) + '</div>' +
          '<div class="ll-plan-text">' +
          '<div class="ll-plan-label">' + item.label + '</div>' +
          '<div class="ll-plan-detail">' + item.detail + '</div>' +
          '</div></div>';
      }).join('') +
      '</div>' +

      '<div class="ll-unlock-box">' +
      '<p class="ll-unlock-title">Få den fulde guide tilsendt gratis</p>' +
      '<p class="ll-unlock-desc">Vi sender din personlige guide direkte til din indbakke.</p>' +
      '<input type="text" class="ll-input" id="ll-perform-lead-name" placeholder="Dit fornavn">' +
      '<div class="ll-email-row">' +
      '<input type="email" class="ll-input" id="ll-perform-lead-email" placeholder="Din email">' +
      '<button class="ll-btn ll-btn-primary" onclick="window.llpSubmitEmail()" id="ll-perform-email-btn">Send</button></div>' +
      '<p class="ll-consent-mini">Ved at fortsætte accepterer du at modtage din guide og relevante træningstips fra LøberLab. Du kan altid afmelde dig.</p>' +
      '</div>' +

      '<div class="ll-other-matches">' +
      '<p class="ll-other-label">Vil du hellere have guide til:</p>' +
      '<div class="ll-other-tags">' +
      otherKeys.map(function(k) {
        return '<button class="ll-other-tag" onclick="window.llpSwitchGuide(\'' + k + '\')">' + bottlenecks[k].name + '</button>';
      }).join('') + '</div></div>' +

      '<button class="ll-btn-back" onclick="window.llpGoBack()">Tilbage</button>';
  }

  // Step 18: Upsell
  function rUpsell() {
    var guide = bottlenecks[s.selectedGuide];

    var checkSvg = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#DC673C" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    return '<div class="ll-success-box ll-mb-6">' +
      '<div class="ll-success-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
      '<div class="ll-success-text"><h4>Din guide er sendt!</h4>' +
      '<p>Tjek din indbakke om et øjeblik, ' + esc(s.leadInfo.name) + '.</p></div></div>' +

      '<div class="ll-upsell-box">' +
      '<div class="ll-upsell-stat">' +
      '<span class="ll-upsell-stat-icon">⚡</span>' +
      '<span class="ll-upsell-stat-text">De fleste løbere med ' + guide.name.toLowerCase() + ' som udfordring laver ubevidst fejl de første uger.</span></div>' +

      '<h2 class="ll-step-title" style="font-size:17px;margin-bottom:4px">Gratis 15-min snak med en coach</h2>' +
      '<p class="ll-step-desc" style="margin-bottom:16px">En af vores coaches ringer dig op og hjælper dig i gang med din guide.</p>' +

      '<div class="ll-upsell-features">' +
      '<div class="ll-upsell-feature"><div class="ll-upsell-feature-icon">' + checkSvg + '</div>Tilpasset dit niveau</div>' +
      '<div class="ll-upsell-feature"><div class="ll-upsell-feature-icon">' + checkSvg + '</div>Svar på dine spørgsmål</div>' +
      '<div class="ll-upsell-feature"><div class="ll-upsell-feature-icon">' + checkSvg + '</div>Helt uforpligtende</div>' +
      '</div>' +

      '<button class="ll-btn ll-btn-dark" onclick="window.llpBookCall()">Book min gratis snak' +
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
      '</div>' +

      '<button class="ll-btn-skip" onclick="window.llpSkipCall()">Nej tak, jeg klarer mig med guiden</button>';
  }

  // Step 19: Final
  function rFinal() {
    return '<div class="ll-center">' +
      '<div style="font-size:48px;margin-bottom:16px">🎉</div>' +
      '<h2 class="ll-step-title">Du er godt på vej!</h2>' +
      '<p class="ll-step-desc">' + (s.wantsCall ?
        'Din guide er sendt til din indbakke, og vi ringer dig op snarest for en gratis snak.' :
        'Din guide til ' + bottlenecks[s.selectedGuide].name.toLowerCase() + ' er sendt til din indbakke.') +
      '</p></div>' +
      '<div class="ll-result-box">' +
      '<p class="ll-result-desc" style="text-align:center">Tip: Tjek også din spam-mappe hvis du ikke kan se mailen inden for et par minutter.</p></div>' +
      '<p class="ll-disclaimer">Performance Tjekket er et vejledende værktøj baseret på dine svar. Det erstatter ikke individuel rådgivning fra en træner eller fysioterapeut.</p>' +
      '<button class="ll-btn-link" onclick="window.llpReset()">Start forfra</button>' +
      '</div>';
  }

  // ============================================
  // HOVEDRENDER
  // ============================================
  function render() {
    renderProgress();
    var c = document.getElementById('ll-perform-step-content');
    switch (s.step) {
      case 0: c.innerHTML = rDemo(); break;
      case 1: c.innerHTML = rDriver(); break;
      case 2: c.innerHTML = rGoal(); break;
      case 3: c.innerHTML = rLevel(); break;
      case 4: c.innerHTML = rExperience(); break;
      case 5: c.innerHTML = rPattern(); break;
      case 6: c.innerHTML = rZones(); break;
      case 7: c.innerHTML = rZoneConfidence(); break;
      case 8: c.innerHTML = rZoneMethod(); break;
      case 9: c.innerHTML = rIntensity(); break;
      case 10: c.innerHTML = rPeriodization(); break;
      case 11: c.innerHTML = rStrength(); break;
      case 12: c.innerHTML = rBarriers(); break;
      case 13: c.innerHTML = rSleep(); break;
      case 14: c.innerHTML = rNutrition(); break;
      case 15: c.innerHTML = rStress(); break;
      case 16: c.innerHTML = rResult(); break;
      case 17: c.innerHTML = rGuide(); break;
      case 18: c.innerHTML = rUpsell(); break;
      case 19: c.innerHTML = rFinal(); break;
    }
  }

  // ============================================
  // EVENT HANDLERS
  // ============================================

  // Step 0: Demografi
  window.llpUpdateDemo = function() {
    var gn = document.getElementById('ll-perform-gender');
    var bd = document.getElementById('ll-perform-birthdate');
    var btn = document.getElementById('ll-perform-demo-btn');
    if (gn) s.gender = gn.value;
    if (bd) s.birthdate = bd.value;
    if (btn) btn.disabled = !(s.gender && s.birthdate);
  };

  window.llpSubmitDemo = function() {
    if (!s.gender || !s.birthdate) return;
    s.step = 1; render();
  };

  // Step 1: Driver
  window.llpSelectDriver = function(id) { s.driver = id; s.step = 2; render(); };

  // Step 2: Mål
  window.llpSelectGoal = function(id) { s.goal = id; s.step = 3; render(); };

  // Step 3: Niveau
  window.llpUpdateLevel = function() {
    var km = document.getElementById('ll-perform-km');
    var sess = document.getElementById('ll-perform-sessions');
    var btn = document.getElementById('ll-perform-level-btn');
    if (km) s.weeklyKm = km.value;
    if (sess) s.sessions = sess.value;
    if (btn) btn.disabled = !(s.weeklyKm && s.sessions);
  };

  window.llpSubmitLevel = function() {
    if (!s.weeklyKm || !s.sessions) return;
    s.step = 4; render();
  };

  // Step 4: Erfaring
  window.llpSelectExperience = function(id) { s.experience = id; s.step = 5; render(); };

  // Step 5: Træningsmønster
  window.llpSelectPattern = function(id) { s.pattern = id; s.step = 6; render(); };

  // Step 6: Træningszoner
  window.llpSelectZones = function(id) {
    if (s.zones !== id) { s.zoneConfidence = null; s.zoneMethod = null; }
    s.zones = id;
    s.step = nextStep(6);
    render();
  };

  // Step 7: Zone-tillid
  window.llpSelectZoneConfidence = function(id) {
    if (s.zoneConfidence !== id) { s.zoneMethod = null; }
    s.zoneConfidence = id;
    s.step = nextStep(7);
    render();
  };

  // Step 8: Zone-metode
  window.llpSelectZoneMethod = function(id) {
    s.zoneMethod = id;
    s.step = nextStep(8);
    render();
  };

  // Step 9: Intensitetsfordeling
  window.llpSelectIntensity = function(id) {
    s.intensity = id;
    s.step = nextStep(9);
    render();
  };

  // Step 10: Periodisering
  window.llpSelectPeriodization = function(id) {
    s.periodization = id;
    s.step = nextStep(10);
    render();
  };

  // Step 11: Styrketræning
  window.llpSelectStrength = function(id) { s.strength = id; s.step = 12; render(); };

  // Step 12: Barrierer
  window.llpToggleBarrier = function(id) {
    if (id === 'none') {
      s.barriers = s.barriers.indexOf('none') >= 0 ? [] : ['none'];
    } else {
      var ni = s.barriers.indexOf('none');
      if (ni >= 0) s.barriers.splice(ni, 1);
      var idx = s.barriers.indexOf(id);
      if (idx >= 0) s.barriers.splice(idx, 1);
      else s.barriers.push(id);
    }
    render();
  };

  window.llpSubmitBarriers = function() {
    if (s.barriers.length === 0) return;
    s.step = 13; render();
  };

  // Step 13: Søvn
  window.llpUpdateSleep = function() {
    var h = document.getElementById('ll-perform-sleep-hours');
    var q = document.getElementById('ll-perform-sleep-quality');
    var p = document.getElementById('ll-perform-sleep-priority');
    var btn = document.getElementById('ll-perform-sleep-btn');
    if (h) s.sleepHours = h.value;
    if (q) s.sleepQuality = q.value;
    if (p) s.sleepPriority = p.value;
    if (btn) btn.disabled = !(s.sleepHours && s.sleepQuality && s.sleepPriority);
  };

  window.llpSubmitSleep = function() {
    if (!s.sleepHours || !s.sleepQuality || !s.sleepPriority) return;
    s.step = 14; render();
  };

  // Step 14: Ernæring
  window.llpUpdateNutrition = function() {
    var t = document.getElementById('ll-perform-nutrition-timing');
    var a = document.getElementById('ll-perform-nutrition-adaption');
    var btn = document.getElementById('ll-perform-nutrition-btn');
    if (t) s.nutritionTiming = t.value;
    if (a) s.nutritionAdaption = a.value;
    if (btn) btn.disabled = !(s.nutritionTiming && s.nutritionAdaption);
  };

  window.llpSubmitNutrition = function() {
    if (!s.nutritionTiming || !s.nutritionAdaption) return;
    s.step = 15; render();
  };

  // Step 15: Stress & hviledage
  window.llpUpdateStress = function() {
    var r = document.getElementById('ll-perform-rest-days');
    var sa = document.getElementById('ll-perform-stress-adjust');
    var btn = document.getElementById('ll-perform-stress-btn');
    if (r) s.restDays = r.value;
    if (sa) s.stressAdjust = sa.value;
    if (btn) btn.disabled = !(s.restDays && s.stressAdjust);
  };

  window.llpSubmitStress = function() {
    if (!s.restDays || !s.stressAdjust) return;
    // Beregn scores
    s.scores = calculateScores();
    s.totalScore = totalScore(s.scores);
    s.bottleneck = findBottleneck(s.scores);
    s.selectedGuide = s.bottleneck;
    track('loebetjek_completed', { total_score: s.totalScore, bottleneck: s.bottleneck });
    track('guide_viewed', { guide: s.selectedGuide });
    sendToSheets(getFullPayload('completed'));
    s.step = 16; render();
  };

  // Step 16: Resultat
  window.llpGoToGuide = function() {
    s.step = 17;
    track('guide_viewed', { guide: s.selectedGuide });
    render();
  };

  window.llpSwitchGuide = function(key) {
    s.selectedGuide = key;
    track('guide_switched', { to: key });
    render();
  };

  // Step 17: Email submit
  window.llpSubmitEmail = function() {
    var nm = document.getElementById('ll-perform-lead-name').value;
    var em = document.getElementById('ll-perform-lead-email').value;
    if (!nm || !em) return;
    if (!/\S+@\S+\.\S+/.test(em)) return;

    s.leadInfo = { name: nm, email: em };
    s.leadSubmitted = true;
    s.wantsCall = false;

    track('loebetjek_email_submitted', { guide: s.selectedGuide });
    sendToSheets(getFullPayload('guide'));

    // Klaviyo
    var age = calcAge(s.birthdate);
    var kd = {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: 'Performance Tjekket Guide',
          profile: {
            data: {
              type: 'profile',
              attributes: {
                email: em,
                first_name: nm.split(' ')[0],
                last_name: nm.split(' ').slice(1).join(' ') || '',
                properties: {
                  gender: s.gender,
                  birthdate: s.birthdate,
                  age: age,
                  driver: s.driver,
                  goal: s.goal,
                  weekly_km: s.weeklyKm,
                  sessions: s.sessions,
                  experience: s.experience,
                  pattern: s.pattern,
                  zones: s.zones,
                  zone_confidence: s.zoneConfidence,
                  zone_method: s.zoneMethod,
                  intensity: s.intensity,
                  periodization: s.periodization,
                  strength_training: s.strength,
                  barriers: (s.barriers || []).join(', '),
                  sleep_hours: s.sleepHours,
                  sleep_quality: s.sleepQuality,
                  sleep_priority: s.sleepPriority,
                  nutrition_timing: s.nutritionTiming,
                  nutrition_adaption: s.nutritionAdaption,
                  rest_days: s.restDays,
                  stress_adjust: s.stressAdjust,
                  total_score: s.totalScore,
                  consistency_score: s.scores.consistency,
                  variation_score: s.scores.variation,
                  recovery_score: s.scores.recovery,
                  strength_score: s.scores.strength,
                  structure_score: s.scores.structure,
                  bottleneck: s.bottleneck,
                  selected_guide: s.selectedGuide,
                  wants_call: false,
                  loebetjek_source: 'guide'
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

    s.step = 18;
    render();
  };

  // Step 18: Upsell
  window.llpBookCall = function() {
    s.wantsCall = true;
    track('loebetjek_call_booked', { guide: s.selectedGuide });
    sendToSheets(getFullPayload('guide_and_call'));

    var url = new URL(C.confirmationUrl);
    url.searchParams.set('name', s.leadInfo.name);
    url.searchParams.set('email', s.leadInfo.email);
    url.searchParams.set('guide', s.selectedGuide);
    url.searchParams.set('score', s.totalScore);
    url.searchParams.set('gender', s.gender || '');
    url.searchParams.set('birthdate', s.birthdate || '');
    url.searchParams.set('source', 'loebetjek');
    window.location.href = url.toString();
  };

  window.llpSkipCall = function() {
    track('loebetjek_call_skipped', { guide: s.selectedGuide });
    sendToSheets(getFullPayload('no_call'));
    s.step = 19;
    render();
  };

  // Navigation
  window.llpGoBack = function() {
    s.step = prevStep(s.step);
    render();
  };

  window.llpReset = function() {
    s = {
      step: 0,
      sessionId: generateSessionId(),
      gender: null, birthdate: null,
      driver: null, goal: null,
      weeklyKm: null, sessions: null,
      experience: null, pattern: null,
      zones: null, zoneConfidence: null, zoneMethod: null,
      intensity: null, periodization: null,
      strength: null, barriers: [],
      sleepHours: null, sleepQuality: null, sleepPriority: null,
      nutritionTiming: null, nutritionAdaption: null,
      restDays: null, stressAdjust: null,
      scores: {}, totalScore: 0,
      bottleneck: null, selectedGuide: null,
      leadInfo: { name: '', email: '' },
      leadSubmitted: false, wantsCall: false
    };
    render();
  };

  // ============================================
  // MODAL FUNKTIONER
  // ============================================
  var mo = document.getElementById('ll-perform-overlay');

  window.llpOpenModal = function() {
    if (!mo) {
      mo = document.getElementById('ll-perform-overlay');
      if (!mo) { console.error('Performance Tjekket: Modal overlay not found'); return; }
    }
    s.sessionId = generateSessionId();
    mo.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (typeof track === 'function') track('loebetjek_started', {});
    sendToSheets(getFullPayload('started'));
  };

  window.llpCloseModal = function() {
    if (!mo) mo = document.getElementById('ll-perform-overlay');
    if (mo) {
      mo.classList.remove('active');
      document.body.style.overflow = '';
      if (typeof window.llpReset === 'function') window.llpReset();
    }
  };

  window.llpCloseModalOnOverlay = function(e) {
    if (e.target === mo || e.target.id === 'll-perform-overlay') window.llpCloseModal();
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mo && mo.classList.contains('active')) window.llpCloseModal();
  });

  // Start
  render();

})();

// Auto-open when loaded directly in browser (for testing)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(function() { window.llpOpenModal(); }, 100);
} else {
  document.addEventListener('DOMContentLoaded', function() { window.llpOpenModal(); });
}
</script>