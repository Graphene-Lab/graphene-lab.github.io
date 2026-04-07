import { escapeHtml } from '../utils/html.js'

const faqs = [
  {
    question: 'Can you access my files?',
    answer: 'No. Client-Side Encryption and No Provider Key Access ensure only you control decryption keys.',
  },
  {
    question: 'Can you recover lost encryption keys?',
    answer: 'No. We do not store keys, so lost credentials cannot be recovered by the provider.',
  },
  {
    question: 'Do you scan user files?',
    answer: 'No. Provider-Blind Storage means the server never sees plaintext content.',
  },
  {
    question: 'Is Graphene Cloud self-hosted?',
    answer: 'No, Graphene Cloud is hosted on our servers with Zero-Trust Architecture safeguards.',
  },
  {
    question: 'Can I self-host?',
    answer: 'Yes, via the Private Home Cloud product for optional storage on your dedicated cloud boxes.',
  },
  {
    question: 'Is the free plan permanent?',
    answer:
      'It is an Early Access Beta offer. Early Access users keep 100 GB free for life (as long as Graphene Cloud continues operating), but the offer is limited and may end once free-user capacity is reached.',
  },
]

export function renderFaq() {
  return `
    <section id="faq" class="section faq">
      <div class="container">
        <div class="section-heading">
          <h2>FAQ</h2>
          <p>Quick answers about security, access, and Cloud Space hosting.</p>
        </div>
        <div class="accordion">
          ${faqs
            .map((faq, index) => {
              const isOpen = index === 0
              return `
                <div class="accordion-item">
                  <button
                    class="accordion-trigger"
                    type="button"
                    data-faq-index="${index}"
                    aria-expanded="${isOpen ? 'true' : 'false'}"
                  >
                    <span>${escapeHtml(faq.question)}</span>
                    <span class="accordion-icon" aria-hidden="true">${isOpen ? '-' : '+'}</span>
                  </button>
                  <div class="accordion-panel${isOpen ? ' open' : ''}">
                    <p>${escapeHtml(faq.answer)}</p>
                  </div>
                </div>
              `
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}

export function setupFaq() {
  const items = Array.from(document.querySelectorAll('.accordion-item'))
  let openIndex = 0

  const update = () => {
    items.forEach((item, index) => {
      const isOpen = index === openIndex
      const trigger = item.querySelector('.accordion-trigger')
      const panel = item.querySelector('.accordion-panel')
      const icon = item.querySelector('.accordion-icon')
      if (trigger) trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
      if (panel) panel.classList.toggle('open', isOpen)
      if (icon) icon.textContent = isOpen ? '-' : '+'
    })
  }

  items.forEach((item, index) => {
    const trigger = item.querySelector('.accordion-trigger')
    if (!trigger) return
    trigger.addEventListener('click', () => {
      openIndex = openIndex === index ? -1 : index
      update()
    })
  })

  update()
}
