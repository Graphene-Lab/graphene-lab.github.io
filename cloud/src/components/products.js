import { escapeHtml } from '../utils/html.js'

const products = [
  {
    title: 'PRIVATE HOME CLOUD',
    description:
      'Trustless personal cloud system for users who want store their data on their own servers using dedicated cloud boxes.',
    icon: homeIcon(),
    accent: '#25b89a',
    gradient: 'linear-gradient(135deg, #4dd8a5 0%, #1fa2a6 100%)',
  },
  {
    title: 'WHITELABEL CLOUD',
    description:
      'Tailored cloud deployments for service providers and resellers to offer privacy-first storage under their own brand with our technology.',
    icon: settingsIcon(),
    accent: '#6b5bff',
    gradient: 'linear-gradient(135deg, #9b7bff 0%, #5a4dff 100%)',
  },
  {
    title: 'ENTERPRISE CLOUD',
    description:
      'Cloud solutions for enterprises to make data private, secure, and available with isolated sub-clouds and auditability.',
    icon: buildingIcon(),
    accent: '#ff8f4f',
    gradient: 'linear-gradient(135deg, #ffb86b 0%, #ff6b6b 100%)',
  },
]

export function renderProducts() {
  return `
    <section id="products" class="section products">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Tailored Solutions</span>
          <h2>Our Products</h2>
          <p>Our Cloud Solutions are designed to meet the unique needs of individuals and enterprises</p>
        </div>

        <div class="modern-product-grid">
          ${products
            .map(
              (product) => `
            <article
              class="modern-product-card"
              style="--product-accent: ${product.accent}; --product-gradient: ${product.gradient};"
            >
              <div class="product-visual">
                <span class="product-icon-large">${product.icon}</span>
              </div>
              <div class="product-body">
                <h3>${escapeHtml(product.title)}</h3>
                <p>${escapeHtml(product.description)}</p>
                <a href="#contact" class="learn-more">
                  Learn More <span>?</span>
                </a>
              </div>
            </article>
          `
            )
            .join('')}
        </div>

        <div class="product-origin glass">
          <div class="product-origin-copy">
            <span class="product-origin-label">Built by Graphene Lab</span>
            <p>Graphene Cloud is a product of Graphene Lab.</p>
          </div>
          <a
            class="button button-outline"
            href="https://graphenelab.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Graphene Lab
          </a>
        </div>
      </div>
    </section>
  `
}

function homeIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12l9-9 9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <rect x="9" y="15" width="6" height="6" rx="0.5" stroke="currentColor" stroke-width="2"></rect>
      <path d="M9 7h6v3H9z" stroke="currentColor" stroke-width="2"></path>
    </svg>
  `
}

function buildingIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="16" height="18" rx="1" stroke="currentColor" stroke-width="2"></rect>
      <path d="M4 21h16M9 21V17h6v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <rect x="8" y="7" width="2" height="2" rx="0.5" fill="currentColor"></rect>
      <rect x="14" y="7" width="2" height="2" rx="0.5" fill="currentColor"></rect>
      <rect x="8" y="11" width="2" height="2" rx="0.5" fill="currentColor"></rect>
      <rect x="14" y="11" width="2" height="2" rx="0.5" fill="currentColor"></rect>
    </svg>
  `
}

function settingsIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"></circle>
      <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"></circle>
    </svg>
  `
}
