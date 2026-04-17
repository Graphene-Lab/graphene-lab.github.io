import { setupWhyCloud } from './components/why-cloud.js'
import { setupSecurityFeatures } from './components/security-features.js'
import { setupFreePlan } from './components/free-plan.js'
import { setupAppsPlatforms } from './components/apps-platforms.js'
import { setupComparisonTable } from './components/comparison-table.js'
import { setupFaq } from './components/faq.js'

function setupCloudStaticPage() {
  setupWhyCloud()
  setupSecurityFeatures()
  setupFreePlan()
  setupAppsPlatforms()
  setupComparisonTable()
  setupFaq()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCloudStaticPage)
} else {
  setupCloudStaticPage()
}