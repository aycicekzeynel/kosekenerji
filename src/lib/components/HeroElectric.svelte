<svg class="hero-electric" viewBox="0 0 800 800" fill="none" preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="boltGrad" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#FFE970" stop-opacity="1"/>
      <stop offset="1" stop-color="#FFD400" stop-opacity="0.9"/>
    </radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>

  <g class="spin-slow" style="transform-origin: 400px 400px">
    <circle cx="400" cy="400" r="360" stroke="#1A2540" stroke-width="1" stroke-dasharray="2 8" fill="none"/>
    <circle cx="400" cy="400" r="360" stroke="#FFD400" stroke-width="1" stroke-dasharray="40 320" fill="none" opacity="0.6"/>
  </g>

  <g class="spin-rev" style="transform-origin: 400px 400px">
    <circle cx="400" cy="400" r="280" stroke="#1A2540" stroke-width="1" fill="none"/>
    <circle cx="400" cy="400" r="280" stroke="#FFD400" stroke-width="2" stroke-dasharray="3 50" fill="none" opacity="0.7"/>
    {#each Array(60) as _, i}
      {@const a = (i / 60) * Math.PI * 2}
      <line x1={400 + Math.cos(a) * 270} y1={400 + Math.sin(a) * 270}
            x2={400 + Math.cos(a) * 280} y2={400 + Math.sin(a) * 280}
            stroke="#FFD400" stroke-width={i % 5 === 0 ? 1.5 : 0.6}
            opacity={i % 5 === 0 ? 0.7 : 0.3}/>
    {/each}
  </g>

  <g opacity="0.3" stroke="#FFD400" fill="none">
    <circle cx="400" cy="400" r="200" stroke-width="1"/>
    <circle cx="400" cy="400" r="160" stroke-width="0.6"/>
    <circle cx="400" cy="400" r="120" stroke-width="0.4"/>
  </g>

  <g stroke="#FFD400" stroke-width="0.5" opacity="0.4">
    <line x1="400" y1="40" x2="400" y2="120"/>
    <line x1="400" y1="680" x2="400" y2="760"/>
    <line x1="40" y1="400" x2="120" y2="400"/>
    <line x1="680" y1="400" x2="760" y2="400"/>
  </g>

  <g class="bolt-anim" style="transform-origin: 400px 400px">
    <path d="M450 180 L300 420 L385 420 L340 620 L510 360 L420 360 L450 180 Z"
          fill="url(#boltGrad)" stroke="#FFE970" stroke-width="2" stroke-linejoin="round"/>
    <path d="M450 200 L320 410 L380 410 L350 580" fill="none" stroke="#FFFAD9" stroke-width="1.5" opacity="0.7"/>
  </g>

  <g stroke="#FFD400" fill="none" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
    <path class="flow-line" d="M120 200 L180 200 L195 180 L215 220 L235 200 L295 200" filter="url(#glow)"/>
    <path class="flow-line" d="M120 200 L180 200 L195 180 L215 220 L235 200 L295 200"/>
    <path class="flow-line" d="M505 200 L565 200 L580 180 L600 220 L620 200 L680 200" filter="url(#glow)"/>
    <path class="flow-line" d="M505 200 L565 200 L580 180 L600 220 L620 200 L680 200"/>
    <path class="flow-line" d="M120 600 L180 600 L195 580 L215 620 L235 600 L295 600" filter="url(#glow)"/>
    <path class="flow-line" d="M120 600 L180 600 L195 580 L215 620 L235 600 L295 600"/>
    <path class="flow-line" d="M505 600 L565 600 L580 580 L600 620 L620 600 L680 600" filter="url(#glow)"/>
    <path class="flow-line" d="M505 600 L565 600 L580 580 L600 620 L620 600 L680 600"/>
  </g>

  <g fill="#FFD400">
    <circle cx="120" cy="200" r="4"/><circle cx="680" cy="200" r="4"/>
    <circle cx="120" cy="600" r="4"/><circle cx="680" cy="600" r="4"/>
    <circle cx="120" cy="200" r="10" opacity="0.2"/>
    <circle cx="680" cy="200" r="10" opacity="0.2"/>
    <circle cx="120" cy="600" r="10" opacity="0.2"/>
    <circle cx="680" cy="600" r="10" opacity="0.2"/>
  </g>

  <g font-family="ui-monospace, monospace" font-size="10" fill="#8A99B8" letter-spacing="1.5">
    <text x="80" y="190">N · 01</text>
    <text x="640" y="190">N · 02</text>
    <text x="80" y="624">N · 03</text>
    <text x="640" y="624">N · 04</text>
    <text x="380" y="60" text-anchor="end">400 kV</text>
    <text x="420" y="60">50 Hz</text>
  </g>
</svg>
