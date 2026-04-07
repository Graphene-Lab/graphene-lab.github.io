const ICONS = {
  windows: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4.2 10.4 3v8.2H2V4.2zM12.2 2.8 22 1.4v9.8h-9.8V2.8zM2 12.8h8.4V21L2 19.8v-7zM12.2 12.8H22v9.8l-9.8-1.4v-8.4z"></path>
    </svg>
  `,
  macos: `
    <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M31,0H1A1,1,0,0,0,0,1V31a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V1A1,1,0,0,0,31,0ZM2,2H14.36C11.89,7.34,11,15.52,11,15.9a1,1,0,0,0,.25.77A1,1,0,0,0,12,17h4.89a29.9,29.9,0,0,0,.25,7c-.37,0-.75.05-1.14.05A14.07,14.07,0,0,1,5.78,19.38a1,1,0,0,0-1.4-.16,1,1,0,0,0-.16,1.41A15.87,15.87,0,0,0,16,26c.53,0,1.05,0,1.55-.08A18.35,18.35,0,0,0,19.07,30H2ZM30,30H21.39a15.57,15.57,0,0,1-1.86-4.42,15.91,15.91,0,0,0,8.25-4.95,1,1,0,1,0-1.56-1.25,14.13,14.13,0,0,1-7.09,4.24A27.91,27.91,0,0,1,19,16.15,1,1,0,0,0,18,15H13.13c.34-2.59,1.36-9.12,3.46-13H30Z"></path>
      <path d="M8,13a1,1,0,0,0,1-1V9A1,1,0,0,0,7,9v3A1,1,0,0,0,8,13Z"></path>
      <path d="M24,13a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0v3A1,1,0,0,0,24,13Z"></path>
    </svg>
  `,
  apple: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9 12.9c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.2-2.7.8-3.3.8s-1.9-.8-3.1-.8c-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7 1.2 9.2.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3.1-.7 1.5 0 1.9.7 3.1.7 1.3 0 2.1-1.1 2.9-2.2.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.8-1.1-2.8-4.1z"></path>
      <path d="M14.8 6.5c.6-.7 1.1-1.8 1-2.8-.9.1-2 .6-2.7 1.3-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.7-1.3z"></path>
    </svg>
  `,
  linux: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="4" width="19" height="16" rx="2.2"></rect>
      <path d="m6.8 10 2.6 2.3-2.6 2.3"></path>
      <path d="M11.5 14.8h4.8"></path>
    </svg>
  `,
  android: `
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 7.6h8c1.1 0 2 .9 2 2V15c0 2.2-1.8 4-4 4h-.8v2h-1.8v-2h-1v2H8.6v-2H8c-2.2 0-4-1.8-4-4V9.6c0-1.1.9-2 2-2zm2.3-3.2L9 2.7l.8-.5 1.1 1.4c.7-.2 1.5-.3 2.2-.3.8 0 1.5.1 2.2.3l1.1-1.4.8.5-1.3 1.7c1.2.6 2 1.7 2.2 3.2H6.8c.2-1.5 1-2.6 2.2-3.2zM9.6 12.2a1 1 0 1 0 0 .001V12.2zm4.8 0a1 1 0 1 0 0 .001V12.2z"></path>
    </svg>
  `,
  play: `
    <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <title>ionicons-v5_logos</title>
      <path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z"></path>
      <path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z"></path>
      <path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z"></path>
      <path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z"></path>
    </svg>
  `,
  web: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M3 12h18"></path>
      <path d="M12 3a14.5 14.5 0 0 1 0 18"></path>
      <path d="M12 3a14.5 14.5 0 0 0 0 18"></path>
    </svg>
  `,
  download: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4v10"></path>
      <path d="m8 10 4 4 4-4"></path>
      <path d="M5 19h14"></path>
    </svg>
  `,
}

export function renderDownloadIcon(label = '', href = '') {
  const iconKey = getDownloadIconKey(label, href)
  return `<span class="download-icon download-icon-${iconKey}" aria-hidden="true">${ICONS[iconKey] || ICONS.download}</span>`
}

function getDownloadIconKey(label, href) {
  const normalizedLabel = String(label).toLowerCase()
  const normalizedHref = String(href).toLowerCase()
  const source = `${normalizedLabel} ${normalizedHref}`

  if (source.includes('windows')) return 'windows'
  if (source.includes('mac')) return 'macos'
  if (source.includes('ios') || source.includes('app store')) return 'apple'
  if (source.includes('linux')) return 'linux'
  if (source.includes('google play')) return 'play'
  if (source.includes('android')) return 'android'
  if (source.includes('web')) return 'web'

  return 'download'
}
