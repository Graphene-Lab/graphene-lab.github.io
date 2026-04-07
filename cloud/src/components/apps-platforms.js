import { escapeAttr, escapeHtml } from '../utils/html.js'
import { renderDownloadIcon } from '../utils/download-icons.js'

const platforms = [
  {
    title: 'Desktop',
    description: 'Seamless folder sync for Windows, macOS, and Linux',
    featureSections: [
      {
        title: 'Client',
        features: ['First free space provider for Linux', 'Fast sync', 'Background updates', 'Offline access'],
      },
    ],
    downloadLabel: 'Download:',
    downloads: [
      { label: 'Windows', href: '/download/windows' },
      { label: 'macOS', href: '/download/macos' },
      { label: 'Linux', href: '/download/linux' },
    ],
    icon: desktopIcon(),
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#764ba2',
  },
  {
    title: 'Mobile',
    description: 'Your files in your pocket (iOS & Android), always encrypted ',
    featureSections: [
      { title: 'Explorer', features: ['Secure explorer ', 'On-the-go access'] },
      { title: 'Photo Sync', features: ['Secure gallery sync'] },
    ],
    downloadLabel: 'Download:',
    downloadSections: [
      {
        title: 'Explorer',
        downloads: [
          { label: 'App Store', href: '/download/ios/explorer' },
          { label: 'Google Play', href: '/download/android/explorer' },
        ],
      },
      {
        title: 'Photo Sync',
        downloads: [
          { label: 'App Store', href: '/download/ios/gallery-sync' },
          { label: 'Google Play', href: '/download/android/gallery-sync' },
        ],
      },
    ],
    icon: mobileIcon(),
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f5576c',
  },
  {
    title: 'Web',
    description: 'Browser-side cryptography, zero server trust',
    featureSections: [
      {
        title: 'Client',
        features: ['Static client', 'In-browser encryption', 'Drag & drop'],
      },
    ],
    downloadLabel: 'Download:',
    downloads: [{ label: 'Web Client', href: '/app' }],
    icon: webIcon(),
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#00f2fe',
  },
]

export function renderAppsPlatforms() {
  const orderedPlatforms = getOrderedPlatforms()

  return `
    <section id="platforms" class="section apps-platforms">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Cross-Platform</span>
          <h2>Works Everywhere</h2>
          <p>A unified experience across desktop, mobile and web.</p>
        </div>

        <div class="platforms-showcase">
          ${orderedPlatforms
            .map((platform, index) => {
              const hasSectionedDownloads = Array.isArray(platform.featureSections) && Array.isArray(platform.downloadSections)

              const detailsHtml = platform.featureSections
                ? `
                  <div class="platform-feature-sections">
                    ${platform.featureSections
                      .map(
                        (section) => {
                          const sectionDownloads = hasSectionedDownloads
                            ? platform.downloadSections.find(
                                (downloadSection) =>
                                  downloadSection.title.toLowerCase() === section.title.toLowerCase()
                              )
                            : null

                          return `
                      <div class="platform-feature-section">
                        <span class="platform-feature-section-title">${escapeHtml(section.title)}</span>
                        <div class="platform-features">
                          ${section.features
                            .map(
                              (feature) => `
                            <span class="feature-tag">
                              <span class="check-icon">&#10003;</span>
                              ${escapeHtml(feature)}
                            </span>
                          `
                            )
                            .join('')}
                        </div>
                        ${
                          sectionDownloads
                            ? `
                          <div class="platform-feature-downloads">
                            <div class="platform-download-head">
                              <span class="platform-download-label">Download:</span>
                            </div>
                            <div class="platform-download-list">
                              ${sectionDownloads.downloads
                                .map(
                                  (download) => `
                                <a class="platform-download-link" href="${escapeAttr(download.href)}">
                                  <span class="download-link-content">
                                    ${renderDownloadIcon(download.label, download.href)}
                                    <span class="download-link-text">${escapeHtml(download.label)}</span>
                                  </span>
                                </a>
                              `
                                )
                                .join('')}
                            </div>
                          </div>
                        `
                            : ''
                        }
                      </div>
                    `
                        }
                      )
                      .join('')}
                  </div>
                `
                : `
                  <div class="platform-features">
                    ${platform.features
                      .map(
                        (feature) => `
                      <span class="feature-tag">
                        <span class="check-icon">&#10003;</span>
                        ${escapeHtml(feature)}
                      </span>
                    `
                      )
                      .join('')}
                  </div>
                `

              const downloadsHtml = hasSectionedDownloads
                ? ''
                : Array.isArray(platform.downloadSections)
                  ? `
                    <div class="platform-download-sections">
                      ${platform.downloadSections
                        .map(
                          (section) => `
                        <div class="platform-download-section">
                          <span class="platform-download-subtitle">${escapeHtml(section.title)}</span>
                          <div class="platform-download-list">
                            ${section.downloads
                              .map(
                                (download) => `
                              <a class="platform-download-link" href="${escapeAttr(download.href)}">
                                <span class="download-link-content">
                                  ${renderDownloadIcon(download.label, download.href)}
                                  <span class="download-link-text">${escapeHtml(download.label)}</span>
                                </span>
                              </a>
                            `
                              )
                              .join('')}
                          </div>
                        </div>
                      `
                        )
                        .join('')}
                    </div>
                  `
                  : Array.isArray(platform.downloads)
                    ? `
                      <div class="platform-download-list${platform.downloads.length === 1 ? ' is-single' : ''}">
                        ${platform.downloads
                          .map(
                            (download) => `
                        <a class="platform-download-link" href="${escapeAttr(download.href)}">
                          <span class="download-link-content">
                            ${renderDownloadIcon(download.label, download.href)}
                            <span class="download-link-text">${escapeHtml(download.label)}</span>
                          </span>
                        </a>
                      `
                          )
                          .join('')}
                      </div>
                    `
                    : ''

              return `
                <article
                  class="platform-card"
                  style="--platform-gradient: ${platform.gradient}; --platform-color: ${platform.color}; --delay: ${index * 0.1}s;"
                >
                  <div class="platform-header">
                    <div class="platform-icon-wrapper">
                      <span class="platform-icon">${platform.icon}</span>
                    </div>
                    <div class="platform-info">
                      <h3>${escapeHtml(platform.title)}</h3>
                      <p class="platform-desc">${escapeHtml(platform.description)}</p>
                    </div>
                  </div>

                  ${detailsHtml}

                  ${
                    hasSectionedDownloads
                      ? ''
                      : `
                    <div class="platform-downloads" aria-label="${escapeAttr(platform.downloadLabel)} links">
                      <div class="platform-download-head">
                        <span class="platform-download-label">${escapeHtml(platform.downloadLabel)}</span>
                      </div>
                      ${downloadsHtml}
                    </div>
                  `
                  }
                </article>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

export function setupAppsPlatforms() {}

function getOrderedPlatforms() {
  if (!isMobileClient()) return platforms

  const mobileIndex = platforms.findIndex((platform) => platform.title.toLowerCase() === 'mobile')
  if (mobileIndex < 0) return platforms

  return [platforms[mobileIndex], ...platforms.filter((_, index) => index !== mobileIndex)]
}

function isMobileClient() {
  if (typeof navigator === 'undefined') return false

  const userAgent = navigator.userAgent || ''
  const platform = navigator.platform || ''
  const maxTouchPoints = Number(navigator.maxTouchPoints || 0)
  const isIpadOs = /Mac/i.test(platform) && maxTouchPoints > 1

  return /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent) || isIpadOs
}

function desktopIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="13" rx="1.5" stroke="currentColor" stroke-width="1.5"></rect>
      <rect x="3" y="4" width="18" height="10" rx="0.5" fill="currentColor" fill-opacity="0.1"></rect>
      <path d="M2 14h20" stroke="currentColor" stroke-width="1.5"></path>
      <rect x="8" y="19" width="8" height="2" rx="0.5" fill="currentColor"></rect>
      <path d="M12 16v3" stroke="currentColor" stroke-width="1.5"></path>
      <circle cx="12" cy="14.5" r="0.7" fill="currentColor"></circle>
    </svg>
  `
}

function mobileIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" stroke-width="1.5"></rect>
      <rect x="7" y="4" width="10" height="14" rx="0.5" fill="currentColor" fill-opacity="0.1"></rect>
      <path d="M9 19.5h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
      <circle cx="12" cy="3.5" r="0.7" fill="currentColor"></circle>
      <path d="M10 3h4" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"></path>
    </svg>
  `
}

function webIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"></circle>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" stroke-width="1.5"></ellipse>
      <path d="M3 12h18" stroke="currentColor" stroke-width="1.5"></path>
      <path d="M12 3c1.5 2 2.5 5.5 2.5 9s-1 7-2.5 9" stroke="currentColor" stroke-width="1.5"></path>
      <path d="M12 3c-1.5 2-2.5 5.5-2.5 9s1 7 2.5 9" stroke="currentColor" stroke-width="1.5"></path>
      <circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.25"></circle>
    </svg>
  `
}
