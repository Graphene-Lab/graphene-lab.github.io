import { WEB_CLIENT_FILENAME, WEB_CLIENT_URL } from '../config/client-downloads.js'

export function setupWebClientDownloads() {
  document.querySelectorAll('[data-web-client-download]').forEach((trigger) => {
    trigger.href = WEB_CLIENT_URL
    trigger.download = WEB_CLIENT_FILENAME
    let downloading = false

    trigger.addEventListener('click', async (event) => {
      event.preventDefault()
      if (downloading) return

      downloading = true
      const label = trigger.querySelector('.download-link-text') || trigger
      const originalLabel = label.textContent
      label.textContent = 'Downloading…'
      trigger.setAttribute('aria-busy', 'true')
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 30000)

      try {
        const response = await fetch(WEB_CLIENT_URL, {
          credentials: 'omit',
          referrerPolicy: 'no-referrer',
          cache: 'no-cache',
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`Download failed: ${response.status}`)

        // Save the repository bytes without rendering or executing the HTML.
        const blob = new Blob([await response.arrayBuffer()], { type: 'application/octet-stream' })
        const objectUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = objectUrl
        link.download = WEB_CLIENT_FILENAME
        link.hidden = true
        document.body.appendChild(link)
        link.click()
        link.remove()
        setTimeout(() => URL.revokeObjectURL(objectUrl), 60000)
      } catch {
        window.alert('The web client could not be downloaded. Please check your connection and try again.')
      } finally {
        clearTimeout(timeout)
        label.textContent = originalLabel
        trigger.removeAttribute('aria-busy')
        downloading = false
      }
    })
  })
}
