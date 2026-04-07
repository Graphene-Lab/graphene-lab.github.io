import { renderGrapheneLogo } from './logo.js'
import { escapeHtml } from '../utils/html.js'

const providers = [
  {
    id: 'cloudspace',
    name: 'Our Cloud Storage',
    accent: '#1e69ff',
    gradient: 'linear-gradient(135deg, #4c8dff 0%, #1e4dd8 100%)',
    logo: renderGrapheneLogo(),
  },
  {
    id: 'gdrive',
    name: 'Google Drive',
    accent: '#34A853',
    gradient: 'linear-gradient(135deg, #43c17d 0%, #1fa85a 100%)',
    logo: driveLogo(),
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    accent: '#0A64D6',
    gradient: 'linear-gradient(135deg, #3f8cff 0%, #0a64d6 100%)',
    logo: oneDriveLogo(),
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    accent: '#0061FF',
    gradient: 'linear-gradient(135deg, #2b7bff 0%, #0052d6 100%)',
    logo: dropboxLogo(),
  },
  {
    id: 'mega',
    name: 'MEGA',
    accent: '#E53935',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #d32f2f 100%)',
    logo: megaLogo(),
  },
  {
    id: 'proton',
    name: 'Proton Drive',
    accent: '#6B5BFF',
    gradient: 'linear-gradient(135deg, #9b7bff 0%, #5a4dff 100%)',
    logo: protonLogo(),
  },
]

const rows = [
  {
    label: 'Client-Side Encryption',
    values: [
      'V Client-Side Encryption',
      'X Provider-managed keys',
      'X Provider-managed keys',
      'X Provider-managed keys',
      'V Client-Side Encryption',
      'V Client-Side Encryption',
    ],
  },
  {
    label: 'Provider Access to Keys',
    values: [
      'V No Provider Key Access',
      'X Provider-managed keys',
      'X Provider-managed keys',
      'X Provider-managed keys',
      'Not stated',
      'V No Provider Key Access',
    ],
  },
  {
    label: 'Metadata Visibility',
    values: [
      'V Metadata obfuscated',
      'X Metadata visible',
      'X Metadata visible',
      'X Metadata visible',
      '! Provider-visible metadata',
      '! Partial metadata visibility',
    ],
  },
  {
    label: 'Zero-Trust Architecture',
    values: [
      'V Zero-Trust Architecture',
      'X Centralized trust',
      'X Centralized trust',
      'X Centralized trust',
      'X No zero-trust architecture',
      'X No zero-trust architecture',
    ],
  },
  {
    label: 'Free Storage',
    values: ['100 GB (early access)', '15 GB', '5 GB', '2 GB', '20 GB', '5 GB'],
  },
  {
    label: 'Air-Gapped Cold Storage',
    values: [
      'V LAN/WAN-isolated cold storage',
      'X No air-gapped option',
      'X No air-gapped option',
      'X No air-gapped option',
      'X No air-gapped option',
      'X No air-gapped option',
    ],
  },
  {
    label: 'Surveillance Resistance',
    values: [
      'V Surveillance-resistant design',
      'X Surveillance exposure',
      'X Surveillance exposure',
      'X Surveillance exposure',
      'Not stated',
      'Not stated',
    ],
  },
  {
    label: 'Quantum-Resistant Design',
    values: [
      'V Hash-based 512-bit encryption',
      'X No quantum roadmap',
      'X No quantum roadmap',
      'X No quantum roadmap',
      'X No quantum resistance',
      'X No quantum resistance',
    ],
  },
  {
    label: 'Energy-Efficient Infrastructure',
    values: [
      'V Energy-efficient ARM infrastructure',
      'X Standard infrastructure',
      'X Standard infrastructure',
      'X Standard infrastructure',
      'Not stated',
      'Not stated',
    ],
  },
]

const BASE_SCORE = 30
const MAIN_FEATURE_WEIGHT = 10
const OTHER_FEATURE_WEIGHT = 5
const STORAGE_WEIGHT = 20
const PREVIEW_COUNT = 5

const scorePalette = {
  good: '#57e9a7',
  middle: '#ffca67',
  bad: '#ff7d90',
}

const storageRow = rows.find((row) => row.label === 'Free Storage')
const maxStorageGb = Math.max(1, ...(storageRow ? storageRow.values.map(getStorageGb) : [1]))

export function renderComparisonTable() {
  return `
    <section id="comparison" class="section comparison">
      <div class="container">
        <div class="section-heading">
          <h2>How We Compare</h2>
          <p>Side-by-side transparency across major cloud storage providers*</p>
        </div>
        <div class="comparison-grid">
          ${[...providers, ...providers, ...providers]
      .map((provider, i) => {
        const providerIndex = i % providers.length
        const providerScore = computeProviderScore(providerIndex)
        const scoreColors = getScoreColors(providerScore)
        return `
                <article
                  class="compare-card"
                  style="--compare-accent: ${provider.accent}; --compare-gradient: ${provider.gradient}; --compare-score: ${providerScore}%; --score-fill-color: ${scoreColors.fill}; --score-fill-glow: ${scoreColors.glow};"
                  data-provider-index="${providerIndex}"
                  data-array-index="${i}"
                >
                  <div class="compare-header">
                    <div class="compare-logo">${provider.logo}</div>
                    <div>
                      <h3>${escapeHtml(provider.name)}</h3>
                      <div class="compare-score">
                        <span class="score-number">${providerScore}</span>
                        <span class="score-label">Score</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="score-bar"
                    role="progressbar"
                    aria-label="${escapeHtml(provider.name)} score"
                    aria-valuenow="${providerScore}"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span class="score-fill"></span>
                  </div>
                  <ul class="compare-list" id="compare-${provider.id}-${i}">
                    ${renderRows(providerIndex, false)}
                  </ul>
                  <button
                    class="compare-toggle"
                    type="button"
                    aria-expanded="false"
                    aria-controls="compare-${provider.id}-${i}"
                  >
                    Show all features
                  </button>
                </article>
              `
      })
      .join('')}
        </div>
        <div class="disclaimer-chip comparison-info">
          <span>i</span>
          <div class="comparison-info-copy">
            <p class="comparison-info-summary">Our Score formula and methodology details.</p>
            <p class="comparison-info-text" data-comparison-info-text>
              Score formula: base 30 pts + 10 pts for Client-Side Encryption + 10 pts for Provider Key Isolation + 5 pts for each
              other security criterion + up to 20 pts from free storage capacity (GB, normalized to the highest offer in
              this table). Metadata visibility refers to access patterns, logs, and operational telemetry. Storage
              space is based on free tier offerings at the time of this analysis and may change over time.
            </p>
            <button
              class="comparison-info-toggle"
              type="button"
              data-comparison-info-toggle
              aria-expanded="false"
            >
              Show details
            </button>
          </div>
        </div>
      </div>
    </section>
  `
}

export function setupComparisonTable() {
  const section = document.getElementById('comparison')
  if (!section) return

  const ACTIVE_SWITCH_DEADZONE_PX = 16
  const MOBILE_BREAKPOINT_QUERY = '(max-width: 767px)'

  let allOpen = false

  const update = () => {
    const cards = Array.from(section.querySelectorAll('.compare-card'))
    cards.forEach((card) => {
      const providerIndex = Number(card.getAttribute('data-provider-index'))
      const listEl = card.querySelector('.compare-list')
      const button = card.querySelector('.compare-toggle')
      if (!listEl || !button || Number.isNaN(providerIndex)) return
      listEl.innerHTML = renderRows(providerIndex, allOpen)
      button.textContent = allOpen ? 'Hide details' : 'Show all features'
      button.setAttribute('aria-expanded', allOpen ? 'true' : 'false')
    })
  }

  const buttons = Array.from(section.querySelectorAll('.compare-toggle'))
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      allOpen = !allOpen
      update()
    })
  })

  const infoText = section.querySelector('[data-comparison-info-text]')
  const infoToggle = section.querySelector('[data-comparison-info-toggle]')
  let isInfoExpanded = false
  const isMobileView = () => typeof window !== 'undefined' && window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches

  const syncComparisonInfo = () => {
    if (!infoText || !infoToggle) return
    if (isMobileView()) {
      infoText.hidden = !isInfoExpanded
      infoToggle.hidden = false
      infoToggle.textContent = isInfoExpanded ? 'Hide details' : 'Show details'
      infoToggle.setAttribute('aria-expanded', isInfoExpanded ? 'true' : 'false')
      return
    }
    isInfoExpanded = false
    infoText.hidden = false
    infoToggle.hidden = true
    infoToggle.textContent = 'Show details'
    infoToggle.setAttribute('aria-expanded', 'false')
  }

  if (infoToggle) {
    infoToggle.addEventListener('click', () => {
      if (!isMobileView()) return
      isInfoExpanded = !isInfoExpanded
      syncComparisonInfo()
    })
  }

  syncComparisonInfo()
  window.addEventListener('resize', syncComparisonInfo)

  // Infinite Scroll logic for basic horizontal carousel
  const grid = section.querySelector('.comparison-grid')
  if (grid) {
    const cards = Array.from(grid.querySelectorAll('.compare-card'))
    let activeCard = null
    let activeProviderIndex = null

    const clearActiveCard = () => {
      if (!activeCard) return
      activeCard.classList.remove('active')
      activeCard = null
      activeProviderIndex = null
    }

    const getProviderIndex = (card) => {
      const providerIndex = Number(card.getAttribute('data-provider-index'))
      return Number.isNaN(providerIndex) ? null : providerIndex
    }

    const getGridCenter = () => grid.scrollLeft + grid.clientWidth / 2
    const getCardCenter = (card) => card.offsetLeft + card.offsetWidth / 2
    const getCardDistanceToCenter = (card, gridCenter) => Math.abs(gridCenter - getCardCenter(card))

    const getClosestCard = () => {
      if (cards.length === 0) return null
      const gridCenter = getGridCenter()
      let closest = null
      let closestDist = Infinity
      cards.forEach((card) => {
        const dist = getCardDistanceToCenter(card, gridCenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = card
        }
      })
      if (!closest) return null
      return { card: closest, distance: closestDist, gridCenter }
    }

    const applyActiveCard = (card) => {
      if (!card) {
        clearActiveCard()
        return
      }
      if (card === activeCard) return
      if (activeCard) activeCard.classList.remove('active')
      card.classList.add('active')
      activeCard = card
      activeProviderIndex = getProviderIndex(card)
    }

    // Finds the card closest to the scroll center and marks it active
    const setActiveCard = ({ force = false } = {}) => {
      const closestResult = getClosestCard()
      if (!closestResult) {
        clearActiveCard()
        return
      }

      const { card: closest, distance: closestDist, gridCenter } = closestResult
      if (!force && activeCard && closest !== activeCard) {
        const activeDist = getCardDistanceToCenter(activeCard, gridCenter)
        if (closestDist + ACTIVE_SWITCH_DEADZONE_PX >= activeDist) return
      }

      applyActiveCard(closest)
    }

    // Set initial scroll to the middle group so we can scroll left immediately
    if (cards.length > 0) {
      setTimeout(() => {
        const middleIndex = providers.length
        if (cards[middleIndex]) {
          const targetCard = cards[middleIndex]
          const gridRect = grid.getBoundingClientRect()
          const cardRect = targetCard.getBoundingClientRect()
          const scrollLeftPosition = grid.scrollLeft + (cardRect.left - gridRect.left)
          grid.scrollTo({ left: scrollLeftPosition, behavior: 'instant' })
          requestAnimationFrame(() => setActiveCard({ force: true }))
        } else {
          setActiveCard({ force: true })
        }
      }, 50)

      // Unified scroll handler - guards against setActiveCard firing during position jumps
      let blockWidth = 0
      let isJumping = false
      let rafId
      let debounceTimer

      grid.addEventListener('scroll', () => {
        if (blockWidth === 0 && cards.length > providers.length) {
          blockWidth = cards[providers.length].offsetLeft - cards[0].offsetLeft
        }

        // Update active card every frame for instant feel (skip during jump)
        if (!isJumping) {
          cancelAnimationFrame(rafId)
          rafId = requestAnimationFrame(setActiveCard)
        }

        // Debounce only the infinite loop jump detection
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
          if (blockWidth <= 0) return
          if (grid.scrollLeft <= blockWidth * 0.4 || grid.scrollLeft >= blockWidth * 1.6) {
            isJumping = true
            grid.classList.add('is-jumping')
            const previousSnap = grid.style.scrollSnapType
            grid.style.scrollSnapType = 'none'
            if (grid.scrollLeft <= blockWidth * 0.4) {
              grid.scrollLeft += blockWidth
            } else {
              grid.scrollLeft -= blockWidth
            }
            requestAnimationFrame(() => {
              grid.style.scrollSnapType = previousSnap
              const closestResult = getClosestCard()
              if (!closestResult) {
                clearActiveCard()
              } else {
                const jumpCard = closestResult.card
                const jumpProviderIndex = getProviderIndex(jumpCard)
                if (jumpProviderIndex !== null && jumpProviderIndex === activeProviderIndex) {
                  applyActiveCard(jumpCard)
                } else {
                  setActiveCard({ force: true })
                }
              }
              requestAnimationFrame(() => {
                isJumping = false
                grid.classList.remove('is-jumping')
              })
            })
          }
        }, 380)
      }, { passive: true })
    }
  }

}
function renderRows(providerIndex, allOpen) {
  const visibleRows = allOpen ? rows : rows.slice(0, PREVIEW_COUNT)
  return visibleRows
    .map((row) => {
      const rowValue = row.values[providerIndex]
      const rowPoints = getRowPoints(row.label, rowValue)
      const rowPointsLabel = `+${formatPoints(rowPoints)} pts`
      const isZeroPoints = rowPoints <= 0
      const isStorageRow = row.label === 'Free Storage'
      return `
        <li class="compare-item">
          <span class="compare-label">
            ${escapeHtml(row.label)}
            <span class="compare-points${isZeroPoints ? ' compare-points--zero' : ''}">
              ${escapeHtml(rowPointsLabel)}
            </span>
          </span>
          ${isStorageRow
          ? `<span class="compare-value compare-value--storage">${escapeHtml(rowValue)}</span>`
          : formatValue(rowValue)
        }
        </li>
      `
    })
    .join('')
}

function formatValue(value) {
  if (value.startsWith('V')) {
    return `
      <span class="compare-value">
        ${statusIcon('yes')}
        <span>${escapeHtml(value.replace(/^V\s*/, ''))}</span>
      </span>
    `
  }
  if (value.startsWith('X')) {
    return `
      <span class="compare-value">
        ${statusIcon('no')}
        <span>${escapeHtml(value.replace(/^X\s*/, ''))}</span>
      </span>
    `
  }
  if (value.startsWith('!')) {
    return `
      <span class="compare-value">
        ${statusIcon('warn')}
        <span>${escapeHtml(value.replace(/^!\s*/, ''))}</span>
      </span>
    `
  }
  return `<span class="compare-value">${escapeHtml(value)}</span>`
}

function statusIcon(type) {
  if (type === 'yes') {
    return `
      <span class="compare-icon compare-icon--yes" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M3.2 8.1 6.5 11.3 12.8 4.9" stroke="currentColor"></path>
        </svg>
      </span>
    `
  }
  if (type === 'no') {
    return `
      <span class="compare-icon compare-icon--no" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="m4.4 4.4 7.2 7.2m0-7.2-7.2 7.2" stroke="currentColor"></path>
        </svg>
      </span>
    `
  }
  return `
    <span class="compare-icon compare-icon--warn" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M8 3.2v6" stroke="currentColor"></path>
        <circle cx="8" cy="11.7" r="0.9" fill="currentColor" stroke="none"></circle>
      </svg>
    </span>
  `
}

function getFeatureStrength(value) {
  if (value.startsWith('V')) return 1
  if (value.startsWith('!')) return 0.5
  if (value.startsWith('X')) return 0
  if (/not stated/i.test(value)) return 0
  return 0
}

function getStorageGb(value) {
  const match = value.match(/(\d+(?:\.\d+)?)\s*GB/i)
  return match ? Number(match[1]) : 0
}

function getRowWeight(label) {
  if (label === 'Free Storage') return STORAGE_WEIGHT
  if (label === 'Client-Side Encryption' || label === 'Provider Access to Keys') return MAIN_FEATURE_WEIGHT
  return OTHER_FEATURE_WEIGHT
}

function getRowPoints(label, value) {
  if (label === 'Free Storage') {
    return (getStorageGb(value) / maxStorageGb) * STORAGE_WEIGHT
  }
  return getFeatureStrength(value) * getRowWeight(label)
}

function formatPoints(points) {
  const rounded = Math.round(points * 10) / 10
  return Number.isInteger(rounded) ? `${rounded}` : rounded.toFixed(1)
}

function computeProviderScore(providerIndex) {
  let score = BASE_SCORE
  rows.forEach((row) => {
    const value = row.values[providerIndex]
    score += getRowPoints(row.label, value)
  })
  return Math.max(0, Math.min(100, Math.round(score)))
}

function getScoreColors(score) {
  if (score >= 70) return { fill: scorePalette.good, glow: 'rgba(87, 233, 167, 0.34)' }
  if (score >= 40) return { fill: scorePalette.middle, glow: 'rgba(255, 202, 103, 0.34)' }
  return { fill: scorePalette.bad, glow: 'rgba(255, 125, 144, 0.34)' }
}

function driveLogo() {
  return `
    <svg viewBox="0 0 207.027 207.027" fill="none" aria-hidden="true">
      <path d="M69.866 15.557 0 138.919l28.732 52.552 143.288-.029 35.008-59.588L136.39 15.735 69.866 15.557zM17.166 139.046 74.268 38.205 91.21 67.783 33.24 168.447 17.166 139.046zM99.841 82.851l23.805 41.558-47.732-.006 23.927-41.552zM163.434 176.443l-117.332.024 21.53-37.065 64.606.008.067.119 52.865-.085-21.736 36.999zM140.932 124.411 90.157 35.767l-2.966-5.178 40.751.121 57.003 93.706-44.013-.005z" fill="currentColor"></path>
    </svg>
  `
}

function oneDriveLogo() {
  return `
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7.83017 26.0001C5.37824 26.0001 3.18957 24.8966 1.75391 23.1691L18.0429 16.3335L30.7089 23.4647C29.5926 24.9211 27.9066 26.0001 26.0004 25.9915C23.1254 26.0001 12.0629 26.0001 7.83017 26.0001Z" fill="currentColor" opacity="0.95"></path>
      <path d="M25.5785 13.3149L18.043 16.3334L30.709 23.4647C31.5199 22.4065 32.0004 21.0916 32.0004 19.6669C32.0004 16.1857 29.1321 13.3605 25.5833 13.3337C25.5817 13.3274 25.5801 13.3212 25.5785 13.3149Z" fill="currentColor" opacity="0.84"></path>
      <path d="M7.06445 10.7028L18.0423 16.3333L25.5779 13.3148C24.5051 9.11261 20.6237 6 15.9997 6C12.4141 6 9.27508 7.87166 7.54586 10.6716C7.3841 10.6773 7.22358 10.6877 7.06445 10.7028Z" fill="currentColor" opacity="0.74"></path>
      <path d="M1.7535 23.1687L18.0425 16.3331L7.06471 10.7026C3.09947 11.0792 0 14.3517 0 18.3331C0 20.1665 0.657197 21.8495 1.7535 23.1687Z" fill="currentColor" opacity="0.64"></path>
    </svg>
  `
}

function dropboxLogo() {
  return `
    <svg viewBox="0 0 20 19" fill="none" aria-hidden="true">
      <path d="M10.012 11.74707 5.825 15.24637 4 14.0687V15.38937L10 19l6-3.61063V14.0687l-1.813 1.17767-4.175-3.4993zM20 3.92318 14.117 0 10 3.50952l5.932 3.74137L20 3.92318zM10 10.99226l4.117 3.50951L20 10.57859 15.932 7.25089 10 10.99226zM0 10.57859l5.883 3.50951L10 10.99226 4.068 7.25089 0 10.57859zM10 3.50952 4.068 7.25089 0 3.92318 5.883 0 10 3.50952z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg>
  `
}

function megaLogo() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"></circle>
      <path d="M6.8 15.4v-6l5.2 4.9 5.2-4.9v6" stroke="currentColor" stroke-width="1.95" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `
}

function protonLogo() {
  return `
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M4.5 36.1034V11.8966A4.0345 4.0345 0 0 1 8.5345 7.8621h7.5662a3.5863 3.5863 0 0 1 2.1224.6954l2.5323 1.8592a3.5867 3.5867 0 0 0 2.1223.6954H39.4655A4.0345 4.0345 0 0 1 43.5 15.1466V36.1034a4.0345 4.0345 0 0 1-4.0345 4.0345H8.5345A4.0345 4.0345 0 0 1 4.5 36.1034Z"
        stroke="currentColor"
        stroke-width="2.15"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M35.2069 40.1379V19.0871a3.138 3.138 0 0 0-3.156-3.1379l-15.2761.088a3.1382 3.1382 0 0 1-1.8366-.58l-3.4018-2.4192a3.1381 3.1381 0 0 0-1.8186-.5807H4.5"
        stroke="currentColor"
        stroke-width="2.15"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  `
}
