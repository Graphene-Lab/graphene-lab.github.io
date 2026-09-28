import { escapeAttr, escapeHtml } from '../utils/html.js'
import { renderDownloadIcon } from '../utils/download-icons.js'
import {
  CLOUD_CLIENT_INSTALLATION_URL,
  EXPLORER_ANDROID_RELEASES_URL,
  LINUX_ARM64_CLIENT_URL,
  LINUX_X64_CLIENT_URL,
  MACOS_ARM64_CLIENT_URL,
  MACOS_X64_CLIENT_URL,
  PHOTOS_ANDROID_RELEASES_URL,
  WEB_CLIENT_URL,
  WINDOWS_CLIENT_URL,
} from '../config/client-downloads.js'
import { renderComingSoonAttrs } from './coming-soon-modal.js'

const footerDownloads = [
  { label: 'Windows (MSI)', href: WINDOWS_CLIENT_URL },
  { label: 'macOS (Apple silicon)', href: MACOS_ARM64_CLIENT_URL },
  { label: 'macOS (Intel)', href: MACOS_X64_CLIENT_URL },
  { label: 'Linux (x64)', href: LINUX_X64_CLIENT_URL },
  { label: 'Linux (ARM64)', href: LINUX_ARM64_CLIENT_URL },
  { label: 'Read desktop installation guide', href: CLOUD_CLIENT_INSTALLATION_URL, kind: 'guide' },
  { label: 'iOS', href: '#coming-soon', comingSoon: 'iOS apps' },
  { label: 'Explorer Android Releases', href: EXPLORER_ANDROID_RELEASES_URL },
  { label: 'Photos Android Releases', href: PHOTOS_ANDROID_RELEASES_URL },
  { label: 'Web App', href: WEB_CLIENT_URL },
]

export function renderFooterCta() {
  return `
    <section class="section footer-cta">
      <div class="container">
        <div class="cta-card">
          <div>
            <span class="cta-badge">Early access &#8226; Limited</span>
            <h2>Start with 100 GB Free</h2>
            <p>
              Experience Privacy-First Cloud Storage with Zero-Trust Architecture from day one.
            </p>
            <div class="cta-points">
              <span>No credit card required</span>
              <span>Lifetime offer</span>
            </div>
            <div class="cta-app-links" aria-label="App downloads">
              ${footerDownloads
                .map(
                  (download) => `
                <a class="${renderDownloadClass('cta-app-link', download)}" href="${escapeAttr(download.href)}"${renderDownloadAttrs(download)}>
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
          <div class="cta-actions">
            <a class="button" href="${EXPLORER_ANDROID_RELEASES_URL}" target="_blank" rel="noopener noreferrer">Explorer App</a>
            <a class="button button-outline cta-outline" href="${PHOTOS_ANDROID_RELEASES_URL}" target="_blank" rel="noopener noreferrer">Photos App</a>
            <a class="button button-outline cta-outline" href="mailto:contact@graphenelab.cloud">Contact Us</a>
          </div>
        </div>
        <footer class="footer">
          <div class="footer-links">
            <a href="#terms">Terms</a>
            <span class="footer-sep">&#8226;</span>
            <a href="privacy.html">Privacy</a>
            <span class="footer-sep">&#8226;</span>
            <a href="#security">Security</a>
            <span class="footer-sep">&#8226;</span>
            <a href="mailto:contact@graphenelab.cloud">Contact</a>
          </div>
          <span class="footer-meta">&copy; 2026 Graphene Cloud. All rights reserved.</span>
        </footer>
      </div>
    </section>
  `
}

function renderDownloadAttrs(download) {
  const externalAttrs = /^https?:\/\//i.test(String(download.href)) ? ' target="_blank" rel="noopener noreferrer"' : ''
  const comingSoonAttrs = download.comingSoon ? renderComingSoonAttrs(download.comingSoon) : ''

  return `${externalAttrs}${comingSoonAttrs}`
}

function renderDownloadClass(baseClass, download) {
  return `${baseClass}${download.kind === 'guide' ? ' is-guide' : ''}`
}
