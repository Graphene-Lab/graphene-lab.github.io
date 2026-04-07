import { escapeAttr, escapeHtml } from '../utils/html.js'

const features = [
  {
    id: 'client-side-encryption',
    title: 'Client-Side Encryption',
    description: 'Your files are encrypted on your device before any upload begins.',
    icon: lockIcon(),
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#764ba2',
  },
  {
    id: 'no-provider-key-access',
    title: 'No Provider Key Access',
    description: 'We never receive, store, or recover encryption keys.',
    icon: keyIcon(),
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#00f2fe',
  },
  {
    id: 'metadata-obfuscation',
    title: 'Metadata Obfuscation',
    description: 'Encrypted filenames and minimized metadata reduce visibility into usage patterns.',
    icon: eyeIcon(),
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#d57eeb',
  },
  {
    id: 'zero-trust-architecture',
    title: 'Zero-Trust Architecture',
    description: 'No party is treated as secure, clients cannot trust any party.',
    icon: shieldIcon(),
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f5576c',
  },
  {
    id: 'quantum-resistant',
    title: 'Quantum-Resistant',
    description:
      'We use strong symmetric and hash-based key derivation (with 512-bit hash-derived key material), which is generally more quantum-tolerant than classical public-key cryptography.',
    icon: quantumIcon(),
    gradient: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 100%)',
    color: '#a78bfa',
  },
  {
    id: 'air-gapped-cold-storage',
    title: 'Air-Gapped Cold Storage',
    description: 'Even if a public endpoint is compromised, isolated storage remains outside direct remote attack paths.',
    icon: airGapIcon(),
    gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    color: '#fa709a',
  },
  {
    id: 'energy-efficient-infrastructure',
    title: 'Energy-Efficient Infrastructure',
    description:
      'Built on ARM infrastructure that lowers power consumption while maintaining high performance for more sustainable and Eco-Friendly operations.',
    icon: leafIcon(),
    gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    color: '#34d399',
  },
  {
    id: 'surveillance-resistant-design',
    title: 'Surveillance-Resistant Design',
    description: 'Provider-Blind Storage reduces exposure to external monitoring.',
    icon: searchIcon(),
    gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    color: '#a1c4fd',
  },
]

const snakePath =
  'M 100 0 ' +
  'C 100 40, 85 60, 85 100 ' +
  'S 115 140, 115 200 ' +
  'S 85 260, 85 300 ' +
  'S 115 340, 115 400 ' +
  'S 85 460, 85 500 ' +
  'S 115 540, 115 600 ' +
  'S 100 660, 100 700'

const dotPoints = [
  { x: 85, y: 100 },
  { x: 115, y: 200 },
  { x: 85, y: 300 },
  { x: 115, y: 400 },
  { x: 85, y: 500 },
  { x: 115, y: 600 },
  { x: 100, y: 700 },
  { x: 100, y: 680 },
]

const snakeParticles = [
  { id: 'photo', icon: snakePhotoIcon() },
  { id: 'pdf', icon: snakeFileIcon('PDF', '#dc2626') },
  { id: 'folder', icon: snakeFolderIcon() },
  { id: 'doc', icon: snakeFileIcon('DOC', '#2563eb') },
  { id: 'txt', icon: snakeFileIcon('TXT', '#047857') },
]

export function renderSecurityFeatures() {
  const particles = snakeParticles
    .map((particle, index) => {
      const begin = index === 0 ? '0s' : `-${(index * 18) / snakeParticles.length}s`
      return `
        <g class="flow-particle" style="animation: particle-fade 2s ease-in-out infinite ${index * 0.25}s;">
          <animateMotion dur="18s" repeatCount="indefinite" begin="${begin}" path="${snakePath}" />
          <g style="transform: scale(calc(var(--snake-y-scale, 2.2) * 0.75), 0.75);">
            <g transform="translate(-12 -12)" style="color: rgba(255, 255, 255, 0.95);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                ${particle.icon}
              </svg>
            </g>
          </g>
        </g>
      `
    })
    .join('')

  return `
    <section id="security" class="section security dark-bg">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Privacy-First</span>
          <h2>Security & Architecture Highlights</h2>
          <p>
            Security is built in from the first byte with zero-knowledge, client-side encrypted storage and a provider-blind architecture.
          </p>
        </div>

        <div class="security-showcase">
          <div class="security-snake" aria-hidden="true">
            <svg class="security-snake-path" viewBox="0 0 200 700" preserveAspectRatio="none">
              <defs>
                <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="var(--accent)" stop-opacity="0"></stop>
                  <stop offset="5%" stop-color="var(--accent)" stop-opacity="0.6"></stop>
                  <stop offset="95%" stop-color="var(--accent)" stop-opacity="0.6"></stop>
                  <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="var(--accent)" stop-opacity="0"></stop>
                  <stop offset="50%" stop-color="var(--accent)" stop-opacity="1"></stop>
                  <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                class="snake-base-path"
                d="${snakePath}"
                stroke="url(#snakeGradient)"
                stroke-width="3"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="snake-flow-path"
                d="${snakePath}"
                stroke="url(#flowGradient)"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="10 20"
              ></path>
            </svg>
            <svg class="security-snake-particles" viewBox="0 0 200 700" preserveAspectRatio="none">
              ${particles}
            </svg>
            <div class="snake-dots">
              ${features
      .map((feature, index) => {
        const fallbackPoint = dotPoints[index] || { x: 100, y: 0 }
        return `
                    <span
                      class="snake-dot"
                      data-dot-index="${index}"
                      style="--dot-color: ${feature.color}; left: ${(fallbackPoint.x / 200) * 100}%; top: ${(fallbackPoint.y / 700) * 100}%;"
                    ></span>
                  `
      })
      .join('')}
            </div>
          </div>

          ${features
      .map(
        (feature, index) => `
            <article
              class="security-card-premium ${index % 2 === 0 ? 'left' : 'right'}"
              data-feature-index="${index}"
              style="--accent-color: ${feature.color}; --card-index: '${String(index + 1).padStart(2, '0')}'; --delay: ${index * 0.1}s;"
            >
              <div class="security-card-content">
                <div class="security-visual">
                  <div class="security-icon-outer" style="--icon-gradient: ${feature.gradient};">
                    <div class="security-icon-inner">${feature.icon}</div>
                  </div>
                  <div class="security-number-badge">${String(index + 1).padStart(2, '0')}</div>
                </div>
                <div class="security-text">
                  <h3>${escapeHtml(feature.title)}</h3>
                  <p data-feature-id="${feature.id}">
                    <span class="security-description-text">${escapeHtml(feature.description)}</span>
                  </p>
                </div>
              </div>
            </article>
          `
      )
      .join('')}
        </div>
      </div>
    </section>
  `
}

export function setupSecurityFeatures() {
  setupSnakeDots()
}

function setupSnakeDots() {
  const snakeEl = document.querySelector('.security-snake')
  const pathEl = snakeEl ? snakeEl.querySelector('.snake-base-path') : null
  const cardEls = Array.from(document.querySelectorAll('.security-card-premium'))
  const dotEls = Array.from(document.querySelectorAll('.snake-dot'))

  if (!snakeEl || !pathEl || !cardEls.length || !dotEls.length) return

  const clamp = (value) => Math.min(100, Math.max(0, value))

  const getXForY = (targetY) => {
    if (typeof pathEl.getTotalLength !== 'function') return null
    const total = pathEl.getTotalLength()
    const samples = 240
    let bestX = 100
    let bestDiff = Number.POSITIVE_INFINITY
    for (let i = 0; i <= samples; i += 1) {
      const point = pathEl.getPointAtLength((i / samples) * total)
      const diff = Math.abs(point.y - targetY)
      if (diff < bestDiff) {
        bestDiff = diff
        bestX = point.x
      }
    }
    return bestX
  }

  const measure = () => {
    const snakeRect = snakeEl.getBoundingClientRect()
    if (!snakeRect.height) return

    snakeEl.style.setProperty('--snake-y-scale', String(snakeRect.height / 700))

    dotEls.forEach((dotEl, index) => {
      const card = cardEls[index]
      if (!card) return

      const rect = card.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const yPct = clamp(((centerY - snakeRect.top) / snakeRect.height) * 100)
      const ySvg = (yPct / 100) * 700
      const pathX = getXForY(ySvg)
      const fallbackX = dotPoints[index] ? dotPoints[index].x : 100
      const xSvg = pathX == null ? fallbackX : pathX
      const xPct = clamp((xSvg / 200) * 100)

      dotEl.style.left = `${xPct}%`
      dotEl.style.top = `${yPct}%`
    })
  }

  const runMeasure = () => requestAnimationFrame(measure)
  runMeasure()
  setTimeout(runMeasure, 100)

  window.addEventListener('resize', runMeasure)

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(runMeasure)
    observer.observe(snakeEl)
    cardEls.forEach((card) => observer.observe(card))
  }
}

function lockIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `
}

function shieldIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  `
}

function keyIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="12" r="4"></circle>
      <path d="M12 12h9"></path>
      <path d="M18 12v3"></path>
      <path d="M15 12v2"></path>
    </svg>
  `
}

function eyeIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `
}

function searchIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `
}

function leafIcon() {
  return `
    <svg viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M293.925 279.079L254.668 239.822C261.193 214.83 281.569 121.457 235.819 75.706C185.789 25.678 19.07 1.128 11.997 0.107C8.716 -0.361 5.414 0.734 3.074 3.074C0.734 5.414 -0.365 8.72 0.107 11.996C1.128 19.069 25.677 185.788 75.705 235.818C94.958 255.071 124.612 264.832 163.842 264.832C196.701 264.832 227.158 257.946 239.815 254.662L279.079 293.926C281.129 295.975 283.815 297 286.502 297C289.189 297 291.875 295.975 293.925 293.926C298.025 289.825 298.025 283.178 293.925 279.079ZM163.843 243.837C130.384 243.837 105.724 236.144 90.552 220.971C72.233 202.652 54.403 160.481 38.989 99.018C31.252 68.168 25.945 39.523 23.165 23.164C39.524 25.944 68.168 31.251 99.019 38.989C160.483 54.403 202.654 72.233 220.974 90.552C253.359 122.936 243.98 190.343 237.174 222.327L173.524 158.678V119.448C173.524 113.651 168.824 108.951 163.027 108.951C157.23 108.951 152.53 113.651 152.53 119.448V137.683L105.08 90.234C100.979 86.136 94.334 86.136 90.234 90.234C86.134 94.334 86.134 100.98 90.234 105.08L101.366 116.212H83.129C77.332 116.212 72.632 120.912 72.632 126.709C72.632 132.506 77.332 137.206 83.129 137.206H122.361L174 188.845L155.762 188.845C149.965 188.845 145.265 193.545 145.265 199.342C145.265 205.139 149.964 209.839 155.762 209.839L194.995 209.84L222.344 237.188C207.942 240.258 186.331 243.837 163.843 243.837Z"
        fill="currentColor"
      ></path>
    </svg>
  `
}

function airGapIcon() {
  return `
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.7399 6.32717C24.3781 8.48282 24.2132 11.571 22.2453 13.5389L20.3007 15.4835C20.0078 15.7764 19.533 15.7764 19.2401 15.4835L12.5226 8.76595C12.2297 8.47306 12.2297 7.99818 12.5226 7.70529L14.4671 5.76075C16.4352 3.79268 19.5237 3.62792 21.6793 5.26646L24.7238 2.22166C25.0167 1.92875 25.4916 1.92873 25.7845 2.22161C26.0774 2.51449 26.0774 2.98936 25.7845 3.28227L22.7399 6.32717ZM19.7704 13.8925L21.1846 12.4783C22.7467 10.9162 22.7467 8.3835 21.1846 6.82141C19.6225 5.25931 17.0899 5.25931 15.5278 6.82141L14.1135 8.23562L19.7704 13.8925Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.45"
        stroke-linejoin="round"
      ></path>
      <path
        d="M12.7778 11.215C13.0707 11.5079 13.0707 11.9828 12.7778 12.2757L10.6514 14.402L13.5982 17.3489L15.7238 15.2234C16.0167 14.9305 16.4916 14.9305 16.7844 15.2234C17.0773 15.5163 17.0773 15.9912 16.7844 16.284L14.6589 18.4095L15.4858 19.2364C15.7787 19.5293 15.7787 20.0042 15.4858 20.2971L13.5412 22.2416C11.5732 24.2096 8.48484 24.3745 6.32918 22.7361L3.28475 25.7808C2.99187 26.0737 2.517 26.0737 2.22409 25.7808C1.93118 25.488 1.93116 25.0131 2.22404 24.7202L5.26853 21.6754C3.63025 19.5197 3.79509 16.4314 5.76306 14.4635L7.7076 12.5189C8.0005 12.226 8.47537 12.226 8.76826 12.5189L9.59072 13.3414L11.7172 11.215C12.0101 10.9221 12.485 10.9221 12.7778 11.215ZM6.83028 21.1875C8.3929 22.7431 10.9207 22.7409 12.4806 21.181L13.8948 19.7668L8.23793 14.1099L6.82372 15.5241C5.26383 17.084 5.26163 19.6117 6.81709 21.1743L6.82366 21.1808L6.83028 21.1875Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.45"
        stroke-linejoin="round"
      ></path>
    </svg>
  `
}

function quantumIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="2.2"></circle>
      <ellipse cx="12" cy="12" rx="8.5" ry="3.3"></ellipse>
      <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(60 12 12)"></ellipse>
      <ellipse cx="12" cy="12" rx="8.5" ry="3.3" transform="rotate(-60 12 12)"></ellipse>
    </svg>
  `
}

function snakeLockOverlay(x = 15.8, y = 13.3) {
  return `
    <g transform="translate(${x} ${y}) scale(0.95)">
      <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#0b1121" stroke-width="1.9" stroke-linecap="round"></path>
      <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#a9b4c9" stroke-width="1.5" stroke-linecap="round"></path>
      <rect x="0" y="5.4" width="6.4" height="5.2" rx="1.2" fill="#a9b4c9" stroke="#0b1121" stroke-width="0.2"></rect>
      <circle cx="3.2" cy="8.05" r="0.85" fill="#0b0f1a" stroke="none"></circle>
    </g>
  `
}

function snakeFileIcon(label, typeColor) {
  return `
    <g>
      <path d="M14.2 1.4H5.4A2.4 2.4 0 0 0 3 3.8v16.4a2.4 2.4 0 0 0 2.4 2.4h13.2a2.4 2.4 0 0 0 2.4-2.4V9z"></path>
      <polyline points="14.2 1.4 14.2 9 21 9"></polyline>
      <text
        x="12"
        y="17"
        text-anchor="middle"
        fill="#ffffff"
        stroke="none"
        font-size="4.9"
        font-weight="900"
        letter-spacing="0.18"
        font-family="Manrope, sans-serif"
      >
        ${escapeHtml(label)}
      </text>
      ${snakeLockOverlay()}
    </g>
  `
}

function snakePhotoIcon() {
  return `
    <g>
      <rect x="3" y="3" width="18" height="18" rx="2.3" fill="rgba(255,255,255,0.08)"></rect>
      <circle cx="8.3" cy="8.3" r="1.7" fill="rgba(255,255,255,0.85)" stroke="none"></circle>
      <polyline points="20.5 15.2 15.5 10.2 5.2 20.5"></polyline>
      ${snakeLockOverlay(17.3, 11.5)}
    </g>
  `
}

function snakeFolderIcon() {
  return `
    <g>
      <path d="M22 18.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2h5l2 2.8h9a2 2 0 0 1 2 2z" fill="rgba(255,255,255,0.08)"></path>
      ${snakeLockOverlay(17.3, 11.1)}
    </g>
  `
}
