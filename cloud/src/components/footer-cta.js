import { escapeAttr, escapeHtml } from '../utils/html.js'
import { renderDownloadIcon } from '../utils/download-icons.js'

const footerDownloads = [
  { label: 'Windows', href: '/download/windows' },
  { label: 'macOS', href: '/download/macos' },
  { label: 'Linux', href: '/download/linux' },
  { label: 'iOS', href: '/download/ios' },
  { label: 'Android', href: '/download/android' },
  { label: 'Web App', href: '/app' },
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
                <a class="cta-app-link" href="${escapeAttr(download.href)}">
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
            <a class="button" href="#free-plan">Create Free Account</a>
            <a class="button button-outline cta-outline" href="#contact">Contact Us</a>
          </div>
        </div>
        <footer class="footer">
          <div class="footer-links">
            <a href="#terms">Terms</a>
            <span class="footer-sep">&#8226;</span>
            <a href="#privacy">Privacy</a>
            <span class="footer-sep">&#8226;</span>
            <a href="#security">Security</a>
            <span class="footer-sep">&#8226;</span>
            <a href="#contact">Contact</a>
          </div>
          <span class="footer-meta">&copy; 2026 Graphene Cloud. All rights reserved.</span>
        </footer>
      </div>
    </section>
  `
}
