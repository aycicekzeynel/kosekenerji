<script>
  import Icon from './Icon.svelte';
</script>

<footer class="footer">
  <div class="footer-mega">

    <!-- Lightning SVG canvas -->
    <svg class="lt-svg" viewBox="0 0 1200 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <!-- Sharp glow for core -->
        <filter id="lt-core-glow" x="-15%" y="-50%" width="130%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b1"/>
          <feGaussianBlur stdDeviation="6"   result="b2"/>
          <feMerge>
            <feMergeNode in="b2"/>
            <feMergeNode in="b1"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <!-- Wide soft glow -->
        <filter id="lt-halo" x="-40%" y="-100%" width="180%" height="300%">
          <feGaussianBlur stdDeviation="14"/>
        </filter>
        <!-- Node glow -->
        <filter id="lt-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5"/>
        </filter>
      </defs>

      <!-- Atmospheric ambient glow behind text -->
      <ellipse class="lt-ambient" cx="600" cy="200" rx="560" ry="90"
        fill="rgba(255,200,0,0.05)" filter="url(#lt-halo)"/>

      <!-- Left electrode -->
      <circle cx="50"  cy="200" r="12" fill="rgba(255,212,0,0.18)" class="lt-node" filter="url(#lt-node-glow)"/>
      <circle cx="50"  cy="200" r="4"  fill="#FFD400" class="lt-node"/>
      <!-- Right electrode -->
      <circle cx="1150" cy="200" r="12" fill="rgba(255,212,0,0.18)" class="lt-node" filter="url(#lt-node-glow)"/>
      <circle cx="1150" cy="200" r="4"  fill="#FFD400" class="lt-node"/>

      <!-- ── ARC A ── -->
      <g class="lt-arc lt-arc-a">
        <!-- Wide halo -->
        <path d="M50,200 L120,142 L148,148 L213,102 L238,108 L298,66 L326,60 L388,32 L414,37 L474,17 L502,13 L560,5 L590,9 L650,23 L663,18 L725,36 L751,31 L809,61 L837,55 L897,95 L921,90 L983,138 L1009,142 L1069,184 L1109,178 L1150,200"
          stroke="rgba(255,212,0,0.5)" stroke-width="10" fill="none" filter="url(#lt-halo)"/>
        <!-- Yellow mid glow -->
        <path d="M50,200 L120,142 L148,148 L213,102 L238,108 L298,66 L326,60 L388,32 L414,37 L474,17 L502,13 L560,5 L590,9 L650,23 L663,18 L725,36 L751,31 L809,61 L837,55 L897,95 L921,90 L983,138 L1009,142 L1069,184 L1109,178 L1150,200"
          stroke="rgba(255,200,0,0.7)" stroke-width="4" fill="none" filter="url(#lt-core-glow)"/>
        <!-- White hot core -->
        <path d="M50,200 L120,142 L148,148 L213,102 L238,108 L298,66 L326,60 L388,32 L414,37 L474,17 L502,13 L560,5 L590,9 L650,23 L663,18 L725,36 L751,31 L809,61 L837,55 L897,95 L921,90 L983,138 L1009,142 L1069,184 L1109,178 L1150,200"
          stroke="rgba(255,255,255,0.95)" stroke-width="1.5" fill="none"/>
      </g>

      <!-- ── ARC B ── (slightly higher peak) -->
      <g class="lt-arc lt-arc-b">
        <path d="M50,200 L115,135 L140,141 L205,94 L230,100 L292,57 L318,63 L382,28 L408,34 L468,10 L496,16 L556,-1 L586,6 L646,20 L670,14 L730,38 L754,32 L814,62 L840,56 L900,96 L924,90 L986,134 L1012,138 L1072,178 L1112,172 L1150,200"
          stroke="rgba(255,212,0,0.45)" stroke-width="10" fill="none" filter="url(#lt-halo)"/>
        <path d="M50,200 L115,135 L140,141 L205,94 L230,100 L292,57 L318,63 L382,28 L408,34 L468,10 L496,16 L556,-1 L586,6 L646,20 L670,14 L730,38 L754,32 L814,62 L840,56 L900,96 L924,90 L986,134 L1012,138 L1072,178 L1112,172 L1150,200"
          stroke="rgba(255,200,0,0.65)" stroke-width="4" fill="none" filter="url(#lt-core-glow)"/>
        <path d="M50,200 L115,135 L140,141 L205,94 L230,100 L292,57 L318,63 L382,28 L408,34 L468,10 L496,16 L556,-1 L586,6 L646,20 L670,14 L730,38 L754,32 L814,62 L840,56 L900,96 L924,90 L986,134 L1012,138 L1072,178 L1112,172 L1150,200"
          stroke="rgba(255,255,255,0.92)" stroke-width="1.5" fill="none"/>
      </g>

      <!-- ── ARC C ── (lower, closer to text) -->
      <g class="lt-arc lt-arc-c">
        <path d="M50,200 L122,148 L146,154 L210,108 L234,114 L296,72 L320,78 L384,40 L408,46 L468,22 L496,28 L558,12 L582,18 L644,30 L666,25 L728,48 L752,43 L812,72 L836,67 L896,106 L920,101 L982,144 L1006,149 L1068,188 L1106,183 L1150,200"
          stroke="rgba(255,212,0,0.4)" stroke-width="8" fill="none" filter="url(#lt-halo)"/>
        <path d="M50,200 L122,148 L146,154 L210,108 L234,114 L296,72 L320,78 L384,40 L408,46 L468,22 L496,28 L558,12 L582,18 L644,30 L666,25 L728,48 L752,43 L812,72 L836,67 L896,106 L920,101 L982,144 L1006,149 L1068,188 L1106,183 L1150,200"
          stroke="#FFD400" stroke-width="3" fill="none" opacity="0.6" filter="url(#lt-core-glow)"/>
        <path d="M50,200 L122,148 L146,154 L210,108 L234,114 L296,72 L320,78 L384,40 L408,46 L468,22 L496,28 L558,12 L582,18 L644,30 L666,25 L728,48 L752,43 L812,72 L836,67 L896,106 L920,101 L982,144 L1006,149 L1068,188 L1106,183 L1150,200"
          stroke="rgba(255,255,255,0.88)" stroke-width="1.5" fill="none"/>
      </g>

      <!-- ── DOWNWARD BOLT (from peak of arc A/B) ── -->
      <g class="lt-bolt lt-bolt-main">
        <!-- Glow layer -->
        <path d="M562,5 L546,44 L566,52 L548,95 L570,103 L550,144 L572,152 L553,192"
          stroke="rgba(255,212,0,0.55)" stroke-width="8" fill="none" filter="url(#lt-halo)"/>
        <!-- Core -->
        <path d="M562,5 L546,44 L566,52 L548,95 L570,103 L550,144 L572,152 L553,192"
          stroke="rgba(255,255,255,0.9)" stroke-width="1.5" fill="none" filter="url(#lt-core-glow)"/>
        <!-- Branch -->
        <path d="M548,95 L522,120 L540,127 L510,158"
          stroke="rgba(255,255,255,0.65)" stroke-width="1" fill="none"/>
        <path d="M548,95 L522,120 L540,127 L510,158"
          stroke="rgba(255,212,0,0.4)" stroke-width="3" fill="none" filter="url(#lt-halo)"/>
      </g>

      <!-- ── SPARK at arc peak ── -->
      <g class="lt-spark" transform="translate(562,5)">
        <line x1="0" y1="-14" x2="0" y2="-5"  stroke="white" stroke-width="1.5"/>
        <line x1="0" y1="5"  x2="0"  y2="14"  stroke="white" stroke-width="1.5"/>
        <line x1="-14" y1="0" x2="-5" y2="0"  stroke="white" stroke-width="1.5"/>
        <line x1="5"  y1="0"  x2="14" y2="0"  stroke="white" stroke-width="1.5"/>
        <line x1="-9" y1="-9" x2="-4" y2="-4" stroke="white" stroke-width="1"/>
        <line x1="4"  y1="-4" x2="9"  y2="-9" stroke="white" stroke-width="1"/>
        <line x1="-9" y1="9"  x2="-4" y2="4"  stroke="white" stroke-width="1"/>
        <line x1="4"  y1="4"  x2="9"  y2="9"  stroke="white" stroke-width="1"/>
        <circle cx="0" cy="0" r="3.5" fill="white"/>
        <circle cx="0" cy="0" r="8"   fill="rgba(255,212,0,0.3)" filter="url(#lt-node-glow)"/>
      </g>

    </svg>

    <span class="mega-text">KÖSEK · ENERJİ</span>
  </div>

  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">
          <span class="logo-mark"><Icon name="LogoMark" size={22}/></span>
          <span class="logo-text">
            <span>KÖSEK ENERJİ</span>
          </span>
        </a>
        <p>Endüstriyel elektrik tesisat, pano imalatı, GES ve otomasyon çözümlerinde 24 yıllık tecrübe. EMO ve TEDAŞ onaylı.</p>
      </div>
      <div>
        <h5>Sayfalar</h5>
        <ul>
          <li><a href="/kurumsal">Kurumsal</a></li>
          <li><a href="/hakkimizda">Hakkımızda</a></li>
          <li><a href="/hizmetler">Hizmetler</a></li>
          <li><a href="/projeler">Projeler</a></li>
          <li><a href="/iletisim">İletişim</a></li>
        </ul>
      </div>
      <div>
        <h5>Hizmetler</h5>
        <ul>
          <li><a href="/hizmetler">Yüksek Gerilim</a></li>
          <li><a href="/hizmetler">Pano İmalatı</a></li>
          <li><a href="/hizmetler">GES Projeleri</a></li>
          <li><a href="/hizmetler">Otomasyon</a></li>
          <li><a href="/hizmetler">Bakım & Onarım</a></li>
        </ul>
      </div>
      <div>
        <h5>İletişim</h5>
        <ul>
          <li><a href="tel:+90 542 533 80 47">+90 542 533 80 47</a></li>
          <li><a href="mailto:info@kosekenerji.com">info@kosekenerji.com</a></li>
          <li>Muratpaşa/Antalya</li>
          <li>Pzt–Cmt · 08:00–18:00</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Kösek Enerji Mühendislik ve Elektrik Hizmetleri Sanayi Ticaret Limited Şirketi</span>
      <span>EMO · TEDAŞ Onaylı · ISO 9001:2015</span>
    </div>
  </div>
</footer>

<style>
  /* ── Lightning canvas ── */
  .lt-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Arc flickering — each arc has its own independent rhythm */
  .lt-arc   { opacity: 0; }
  .lt-bolt-main { opacity: 0; }
  .lt-spark { opacity: 0; }

  /* Arc A: quick single flash, 2.6s cycle */
  .lt-arc-a {
    animation: ltA 2.6s ease-in-out infinite;
  }
  /* Arc B: double flash, 3.4s cycle, offset */
  .lt-arc-b {
    animation: ltB 3.4s ease-in-out infinite;
    animation-delay: -1.1s;
  }
  /* Arc C: triple flash with pause, 4.8s cycle */
  .lt-arc-c {
    animation: ltC 4.8s ease-in-out infinite;
    animation-delay: -2.2s;
  }
  /* Downward bolt syncs with arc B */
  .lt-bolt-main {
    animation: ltB 3.4s ease-in-out infinite;
    animation-delay: -1.1s;
  }
  /* Spark at peak: tight flash with arc A and B */
  .lt-spark {
    animation: ltSpark 1.3s ease-in-out infinite;
    animation-delay: -0.4s;
  }

  /* Electrodes: gentle continuous pulse */
  .lt-node { animation: ltNode 1.8s ease-in-out infinite alternate; }
  .lt-ambient { animation: ltAmbient 4s ease-in-out infinite alternate; }

  @keyframes ltA {
    0%, 5%, 12%, 100% { opacity: 0; }
    6%, 7%  { opacity: 1; }
    8%, 11% { opacity: 0.85; }
    9%      { opacity: 0.3; }
    10%     { opacity: 0.95; }
  }

  @keyframes ltB {
    0%, 20%, 26%, 42%, 48%, 100% { opacity: 0; }
    21%, 22% { opacity: 1; }
    23%      { opacity: 0.4; }
    24%, 25% { opacity: 0.9; }
    43%, 44% { opacity: 1; }
    45%      { opacity: 0.3; }
    46%, 47% { opacity: 0.85; }
  }

  @keyframes ltC {
    0%, 15%, 20%, 38%, 42%, 60%, 64%, 100% { opacity: 0; }
    16%, 17% { opacity: 0.8; }
    18%, 19% { opacity: 0.6; }
    39%      { opacity: 0.9; }
    40%, 41% { opacity: 0.7; }
    61%, 62% { opacity: 0.75; }
    63%      { opacity: 0.5; }
  }

  @keyframes ltSpark {
    0%, 25%, 55%, 100% { opacity: 0; transform: scale(1); }
    26%, 27%  { opacity: 1; transform: scale(1.4); }
    28%, 54%  { opacity: 0; }
    56%       { opacity: 0.9; transform: scale(1.2); }
    58%, 100% { opacity: 0; transform: scale(1); }
  }

  @keyframes ltNode {
    from { opacity: 0.35; }
    to   { opacity: 0.85; }
  }

  @keyframes ltAmbient {
    from { opacity: 0.5; }
    to   { opacity: 1.2; }
  }
</style>
