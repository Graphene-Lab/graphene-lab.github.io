import { escapeAttr } from '../utils/html.js'

const DEFAULT_TITLE = 'Coming soon'
const DEFAULT_TARGET = 'This download'

export function renderComingSoonModal() {
  return `
    <div class="coming-soon-modal" data-coming-soon-modal hidden>
      <div class="coming-soon-backdrop" data-coming-soon-close></div>
      <div class="coming-soon-dialog" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title">
        <button class="coming-soon-close" type="button" aria-label="Close" data-coming-soon-close>&times;</button>
        <span class="coming-soon-kicker">Download</span>
        <h2 id="coming-soon-title">${DEFAULT_TITLE}</h2>
        <p data-coming-soon-message>${DEFAULT_TARGET} is not available yet. Check back soon or contact us for early access.</p>
        <div class="coming-soon-actions">
          <a class="button" href="mailto:contact@graphenelab.cloud">Contact Us</a>
          <button class="button button-outline" type="button" data-coming-soon-close>Close</button>
        </div>
      </div>
    </div>
  `
}

export function setupComingSoonModal() {
  const modal = document.querySelector('[data-coming-soon-modal]')
  if (!modal) return

  const title = modal.querySelector('#coming-soon-title')
  const message = modal.querySelector('[data-coming-soon-message]')
  let activeTrigger = null

  const openModal = (targetText) => {
    activeTrigger = document.activeElement
    const target = targetText || DEFAULT_TARGET

    if (title) title.textContent = `${target} coming soon`
    if (message) {
      message.textContent = `${target} is not available yet. Check back soon or contact us for early access.`
    }

    modal.hidden = false
    document.body.classList.add('modal-open')
    modal.querySelector('[data-coming-soon-close]')?.focus()
  }

  const closeModal = () => {
    modal.hidden = true
    document.body.classList.remove('modal-open')
    activeTrigger?.focus?.()
    activeTrigger = null
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return

    const trigger = event.target.closest('[data-coming-soon]')
    if (trigger) {
      event.preventDefault()
      openModal(trigger.getAttribute('data-coming-soon'))
      return
    }

    if (event.target.closest('[data-coming-soon-close]')) {
      event.preventDefault()
      closeModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal()
    }
  })
}

export function renderComingSoonAttrs(target) {
  return ` data-coming-soon="${escapeAttr(target)}" aria-label="${escapeAttr(`${target} coming soon`)}"`
}
