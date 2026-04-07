import { renderGrapheneLogo } from './logo.js'

export function renderNavbar() {
  return `
    <header class="navbar">
      <div class="container nav-content">
        <a class="brand" href="#top" aria-label="Graphene Cloud home">
          ${renderGrapheneLogo({ className: 'logo-icon' })}
          <span>Graphene Cloud</span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          <a href="#security">Security</a>
          <a href="#platforms">Platforms</a>
          <a href="#comparison">Comparison</a>
          <a href="#faq">FAQ</a>
          <a href="#products">Products</a>
        </nav>
        <a class="button button-outline" href="#free-plan">Try it free</a>
      </div>
    </header>
  `
}
