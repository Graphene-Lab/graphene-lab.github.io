import { renderNavbar } from './components/navbar.js'
import { renderHero } from './components/hero.js'
import { renderWhyCloud, setupWhyCloud } from './components/why-cloud.js'
import { renderSecurityFeatures, setupSecurityFeatures } from './components/security-features.js'
import { renderFreePlan, setupFreePlan } from './components/free-plan.js'
import { renderAppsPlatforms, setupAppsPlatforms } from './components/apps-platforms.js'
import { renderComparisonTable, setupComparisonTable } from './components/comparison-table.js'
import { renderFaq, setupFaq } from './components/faq.js'
import { renderProducts } from './components/products.js'
import { renderFooterCta } from './components/footer-cta.js'

const app = document.getElementById('app')

if (app) {
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderWhyCloud()}
      ${renderSecurityFeatures()}
      ${renderFreePlan()}
      ${renderAppsPlatforms()}
      ${renderComparisonTable()}
      ${renderFaq()}
      ${renderProducts()}
      ${renderFooterCta()}
    </main>
  `

  setupWhyCloud()
  setupSecurityFeatures()
  setupFreePlan()
  setupAppsPlatforms()
  setupComparisonTable()
  setupFaq()
}
