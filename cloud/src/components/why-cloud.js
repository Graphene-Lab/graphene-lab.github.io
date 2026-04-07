import { escapeHtml } from '../utils/html.js'

const reasons = [
  {
    id: 'zero-trust',
    title: 'Zero-Knowledge Encryption & Zero-Trust Architecture',
    description:
      'We use Zero-knowledge encryption (our unique advanced client-side encryption method), meaning all file encryption (documents, photos, videos) is performed client-side on your device before the upload even begins. We never receive your keys (passphrase or master encryption key), and we never see your files in plaintext.',
    details: [
      'File names are obfuscated, and each file is encrypted with its own key, deterministically derived from your root key plus file metadata (path and timestamp). The root key is generated from a Bitcoin-style mnemonic (BIP-39 flow), a battle-tested key-management approach used in wallets that protect significant digital value, while per-file key derivation uses our own hardened scheme. This derivation is symmetric and hash-based, with 512-bit hash-derived key material, which is makes it more Quantum-Resistant.',
      'We follow Zero-Trust principles: no external component, including proxy/middleware servers, is treated as trusted. Proxies relay encrypted traffic but cannot decrypt file content. Unlike architectures that claim end-to-end encryption but terminate encryption at middleware (the proxy) and then re-encrypt upstream to servers, our design keeps file content encrypted from client to storage. This creates defense in depth, effectively a double shield: client-side encryption protects data confidentiality, while encrypted transport and a blind-proxy architecture further reduce in-transit and infrastructure risk.',
      'In addition to our core security features, we offer Air-Gapped Cold Storage (currently not included in the early-access offer). Even if a public endpoint is compromised, isolated storage remains outside direct remote attack paths. While this may seem unnecessary because files are already encrypted, it further reduces risks such as an attacker wiping out your data. LAN/WAN-isolated cold storage uses encrypted optical TX/RX links to carry TCP/IP-like communication without direct network connectivity.',
      "It is worth noting that We use energy-efficient ARM infrastructure to reduce power consumption without compromising performance, supporting more sustainable operations in today's energy-constrained environment.",
    ],
    icon: shieldIcon(),
    type: 'large',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#764ba2',
  },
  {
    id: 'fast-performance',
    title: 'Fast performance',
    description: 'Optimized syncing and low-latency access across devices.',
    icon: lightningIcon(),
    type: 'small',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f5576c',
  },
  {
    id: 'linux-support',
    title: 'Linux Support',
    description: 'First Linux free space provider, with support for Windows, iOS, and Android.',
    icon: linuxIcon(),
    type: 'small',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#fa709a',
  },
  {
    id: 'free-100gb',
    title: 'Free 100 GB (Limited Offer)',
    description:
      'Early Access Beta offer with 100 GB free storage. No credit card required. Early Access users keep 100 GB free for life (as long as Graphene Cloud continues operating). Keep in mind this is a limited offer and may end once our free-user capacity is reached. This offer is provided as-is, and bugs or temporary service interruptions may occur.',
    icon: giftIcon(),
    type: 'large',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#00f2fe',
  },
]

export function renderWhyCloud() {
  return `
    <section id="why-cloud" class="section why-cloud">
      <div class="container">
        <div class="section-heading" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem; text-align: left;">
          <div>
            <h2>Why Choose Graphene Cloud?</h2>
            <p>We've reimagined storage from the ground up to prioritize your privacy.</p>
            <p style="margin-top: 0.5rem; max-width: 680px;">
              Our philosophy is that any software claiming to be secure <strong>must be open-source</strong>. We are open-source, allowing anyone to verify our code and cryptographic implementations.
            </p>
          </div>
          <a class="button button-outline" href="#" target="_blank" rel="noopener noreferrer" style="gap: 0.6rem; white-space: nowrap;">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55C13.15 13.95 14 13.054 14 12c0-1.105-.895-2-2-2s-2 .895-2 2c0 1.077.851 1.955 1.917 1.998l-2.903 7.549-.225-.074C4.84 20.136 2 16.4 2 12 2 6.477 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8 0 2.92 1.564 5.475 3.901 6.872l1.48-3.849C8.534 14.29 8 13.207 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.207-.535 2.29-1.38 3.023.565 1.474 1.059 2.757 1.479 3.85C18.435 17.475 20 14.92 20 12c0-4.418-3.582-8-8-8z"/>
            </svg>
            View Our Source Code
          </a>
        </div>

        <div class="bento-grid">
          ${reasons
      .map((reason) => {
        const detailsId = `reason-details-${reason.id}`
        return `
                <article
                  class="bento-item ${reason.type} ${reason.id}"
                  style="--bento-gradient: ${reason.gradient}; --bento-color: ${reason.color};"
                >
                  <div class="bento-bg-icon" aria-hidden="true">${reason.icon}</div>
                  <div class="bento-content">
                    <div class="bento-copy">
                      <h3>${escapeHtml(reason.title)}</h3>
                      ${
                        reason.id === 'zero-trust' && reason.details
                          ? `
                            <p>
                              ${escapeHtml(reason.description)}
                              <button
                                class="bento-read-more bento-read-more-inline"
                                type="button"
                                data-reason-id="${reason.id}"
                                aria-controls="${detailsId}"
                                aria-expanded="false"
                              >
                                Read more
                              </button>
                            </p>
                            <div class="bento-extra-copy" id="${detailsId}" hidden>
                              ${reason.details
                                .map((paragraph, paragraphIndex) => {
                                  const isLastParagraph = paragraphIndex === reason.details.length - 1
                                  if (!isLastParagraph) return `<p>${escapeHtml(paragraph)}</p>`
                                  return `
                                    <p>
                                      ${escapeHtml(paragraph)}
                                      <button
                                        class="bento-read-more bento-read-more-inline bento-read-less-inline"
                                        type="button"
                                        data-reason-id="${reason.id}"
                                        aria-controls="${detailsId}"
                                        aria-expanded="false"
                                      >
                                        Read less
                                      </button>
                                    </p>
                                  `
                                })
                                .join('')}
                            </div>
                          `
                          : `
                            <p>${escapeHtml(reason.description)}</p>
                            ${
                              reason.details
                                ? `
                                  <div class="bento-extra-copy" id="${detailsId}" hidden>
                                    ${reason.details.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
                                  </div>
                                  <button
                                    class="bento-read-more"
                                    type="button"
                                    data-reason-id="${reason.id}"
                                    aria-controls="${detailsId}"
                                    aria-expanded="false"
                                  >
                                    Read more
                                  </button>
                                `
                                : ''
                            }
                          `
                      }
                    </div>
                  </div>
                  <div class="bento-blur" aria-hidden="true"></div>
                </article>
              `
      })
      .join('')}
        </div>
      </div>
    </section>
  `
}

export function setupWhyCloud() {
  const buttons = Array.from(document.querySelectorAll('.bento-read-more'))
  const heading = document.querySelector('#why-cloud .section-heading')
  let expandedReasonId = null

  const update = () => {
    buttons.forEach((button) => {
      const reasonId = button.getAttribute('data-reason-id')
      const details = document.getElementById(`reason-details-${reasonId}`)
      const card = button.closest('.bento-item')
      const isExpanded = expandedReasonId === reasonId
      if (details) {
        details.hidden = !isExpanded
        details.style.display = isExpanded ? 'grid' : 'none'
      }
      if (card) card.classList.toggle('is-expanded', isExpanded)
      button.textContent = isExpanded ? 'Read less' : 'Read more'
      button.setAttribute('aria-expanded', isExpanded ? 'true' : 'false')
    })
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.bento-item')
      const previousCardTop = card ? card.getBoundingClientRect().top : 0
      const previousScrollY = window.scrollY

      const reasonId = button.getAttribute('data-reason-id')
      const isCollapsing = expandedReasonId === reasonId
      button.blur()
      expandedReasonId = isCollapsing ? null : reasonId
      update()

      if (isCollapsing) {
        requestAnimationFrame(() => {
          if (heading) {
            try {
              heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
            } catch {
              heading.scrollIntoView()
            }
          }
        })
        return
      }

      requestAnimationFrame(() => {
        if (!card) return
        const nextCardTop = card.getBoundingClientRect().top
        const delta = nextCardTop - previousCardTop
        if (Math.abs(delta) > 1) {
          window.scrollTo(0, previousScrollY + delta)
        }

        try {
          button.focus({ preventScroll: true })
        } catch {
          button.focus()
        }
      })
    })
  })

  update()
}

function lightningIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.15"></path>
    </svg>
  `
}

function shieldIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" fill-opacity="0.15"></path>
      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `
}

function giftIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="11.5" width="14" height="9.5" rx="1.8" fill="currentColor" fill-opacity="0.14"></rect>
      <rect x="3" y="8.5" width="18" height="4" rx="1.2" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"></rect>
      <path d="M5 12.5v6.7a1.8 1.8 0 0 0 1.8 1.8h10.4a1.8 1.8 0 0 0 1.8-1.8v-6.7" stroke="currentColor" stroke-width="2"></path>
      <path d="M12 8.5V21" stroke="currentColor" stroke-width="2"></path>
      <path d="M3 12.5h18" stroke="currentColor" stroke-width="2"></path>
      <path d="M12 8.5h-2.8c-1.4 0-2.2-.7-2.2-1.8 0-1 .8-1.7 1.9-1.7 1.9 0 3.1 3.5 3.1 3.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
      <path d="M12 8.5h2.8c1.4 0 2.2-.7 2.2-1.8 0-1-.8-1.7-1.9-1.7-1.9 0-3.1 3.5-3.1 3.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
      <circle cx="12" cy="8.5" r="0.7" fill="currentColor"></circle>
    </svg>
  `
}

function linuxIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 -1.5)">
        <ellipse cx="12" cy="13" rx="5.5" ry="7" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.15"></ellipse>
        <ellipse cx="12" cy="14" rx="3.5" ry="4.5" fill="currentColor" fill-opacity="0.1"></ellipse>
        <circle cx="10" cy="10" r="1.2" fill="currentColor"></circle>
        <circle cx="14" cy="10" r="1.2" fill="currentColor"></circle>
        <circle cx="10.3" cy="9.7" r="0.4" fill="white"></circle>
        <circle cx="14.3" cy="9.7" r="0.4" fill="white"></circle>
        <ellipse cx="12" cy="12" rx="1.5" ry="0.8" fill="currentColor"></ellipse>
        <path d="M9 19c-.5.8-1 1.5-1.5 2M10 19.5c-.3.5-.5 1-.7 1.5M15 19c.5.8 1 1.5 1.5 2M14 19.5c.3.5.5 1 .7 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
        <path d="M6.5 13c-.5-.3-1-.5-1.5-.5M17.5 13c.5-.3 1-.5 1.5-.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
      </g>
    </svg>
  `
}
