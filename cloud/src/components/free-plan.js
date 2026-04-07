import { renderGrapheneLogo } from './logo.js'

export function renderFreePlan() {
  return `
    <section id="free-plan" class="section free-plan">
      <div class="container">
        <div class="free-plan-card glass">
          <div class="free-plan-content">
            <span class="offer-badge">LIMITED-OFFER</span>
            <h2>100 GB Free - Life Time Offer*</h2>
            <p>
              Privacy-first storage, secured by design. Your files are encrypted on your device before upload in a
              provider-blind architecture, so we never see your keys. Built with user-experience focus, our
              cross-platform clients deliver fast sync.
            </p>
            <div class="free-plan-actions">
              <a class="button" href="#top">Create Acccount</a>
              <a class="button button-outline" href="#platforms" data-download-clients-cta>Download Clients</a>
              <span>No credit card required</span>
            </div>
          </div>

          <div class="free-plan-visual-container" style="display: flex; justify-content: center; align-items: center; width: 100%; padding: 1.5rem;">
            ${renderGrapheneLogo({ className: 'free-plan-logo graphene-3d-logo graphene-logo-animated', style: 'width: 100%; max-width: 260px; height: auto; display: block; margin: 0 auto;' })}
          </div>
        </div>

        <div class="disclaimer-chip">
          <span>i</span>
          <p>
            Early Access Beta offer with 100 GB free storage. No credit card required. Early Access users keep 100 GB free for life (as long as Graphene Cloud continues operating). Keep in mind this is a limited offer and may end once free-user capacity is reached. This offer is provided as-is, and bugs or temporary service interruptions may occur.
          </p>
        </div>
      </div>
    </section>
  `
}

export function setupFreePlan() {
  const cta = document.querySelector('[data-download-clients-cta]')
  if (!cta) return

  const desktopTarget = getDesktopDownloadTarget()
  if (!desktopTarget) return

  cta.setAttribute('href', desktopTarget.href)
  cta.setAttribute('aria-label', `Install Graphene Cloud for ${desktopTarget.osName}`)
  cta.classList.add('button-with-os')
  cta.innerHTML = `<span>Install Graphene Cloud</span>${desktopTarget.icon}`
}

function getDesktopDownloadTarget() {
  if (typeof navigator === 'undefined') return null

  const userAgent = navigator.userAgent || ''
  const platform = navigator.platform || ''
  const maxTouchPoints = Number(navigator.maxTouchPoints || 0)
  const isIpadOs = /Mac/i.test(platform) && maxTouchPoints > 1
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent) || isIpadOs

  if (isMobile) return null

  if (/Win/i.test(platform) || /Windows/i.test(userAgent)) {
    return {
      href: '/download/windows',
      osName: 'Windows',
      icon: renderOsIcon('windows'),
    }
  }

  if (/Mac/i.test(platform) || /Mac OS X/i.test(userAgent)) {
    return {
      href: '/download/macos',
      osName: 'macOS',
      icon: renderOsIcon('macos'),
    }
  }

  if (/Linux|X11/i.test(platform) || /Linux/i.test(userAgent)) {
    return {
      href: '/download/linux',
      osName: 'Linux',
      icon: renderOsIcon('linux'),
    }
  }

  return null
}

function renderOsIcon(os) {
  if (os === 'windows') {
    return `
      <span class="os-icon" aria-hidden="true">
        <svg viewBox="0 0 497.886 497.886" fill="currentColor">
          <polygon points="227.959,39.869 227.959,242.386 496.549,242.386 496.549,0"></polygon>
          <polygon points="1.336,244.746 211.172,244.746 211.172,41.818 1.336,72.798"></polygon>
          <polygon points="227.959,458.017 496.549,497.886 496.549,261.535 227.959,261.535"></polygon>
          <polygon points="1.336,425.086 211.172,456.066 211.172,261.531 1.336,261.531"></polygon>
        </svg>
      </span>
    `
  }

  if (os === 'macos') {
    return `
      <span class="os-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M31,0H1A1,1,0,0,0,0,1V31a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V1A1,1,0,0,0,31,0ZM2,2H14.36C11.89,7.34,11,15.52,11,15.9a1,1,0,0,0,.25.77A1,1,0,0,0,12,17h4.89a29.9,29.9,0,0,0,.25,7c-.37,0-.75.05-1.14.05A14.07,14.07,0,0,1,5.78,19.38a1,1,0,0,0-1.4-.16,1,1,0,0,0-.16,1.41A15.87,15.87,0,0,0,16,26c.53,0,1.05,0,1.55-.08A18.35,18.35,0,0,0,19.07,30H2ZM30,30H21.39a15.57,15.57,0,0,1-1.86-4.42,15.91,15.91,0,0,0,8.25-4.95,1,1,0,1,0-1.56-1.25,14.13,14.13,0,0,1-7.09,4.24A27.91,27.91,0,0,1,19,16.15,1,1,0,0,0,18,15H13.13c.34-2.59,1.36-9.12,3.46-13H30Z"></path>
          <path d="M8,13a1,1,0,0,0,1-1V9A1,1,0,0,0,7,9v3A1,1,0,0,0,8,13Z"></path>
          <path d="M24,13a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0v3A1,1,0,0,0,24,13Z"></path>
        </svg>
      </span>
    `
  }

  if (os === 'linux') {
    return `
      <span class="os-icon" aria-hidden="true">
        <svg viewBox="0 0 304.998 304.998" fill="currentColor">
          <g id="XMLID_91_">
            <path id="XMLID_92_" d="M274.659,244.888c-8.944-3.663-12.77-8.524-12.4-15.777c0.381-8.466-4.422-14.667-6.703-17.117c1.378-5.264,5.405-23.474,0.004-39.291c-5.804-16.93-23.524-42.787-41.808-68.204c-7.485-10.438-7.839-21.784-8.248-34.922c-0.392-12.531-0.834-26.735-7.822-42.525C190.084,9.859,174.838,0,155.851,0c-11.295,0-22.889,3.53-31.811,9.684c-18.27,12.609-15.855,40.1-14.257,58.291c0.219,2.491,0.425,4.844,0.545,6.853c1.064,17.816,0.096,27.206-1.17,30.06c-0.819,1.865-4.851,7.173-9.118,12.793c-4.413,5.812-9.416,12.4-13.517,18.539c-4.893,7.387-8.843,18.678-12.663,29.597c-2.795,7.99-5.435,15.537-8.005,20.047c-4.871,8.676-3.659,16.766-2.647,20.505c-1.844,1.281-4.508,3.803-6.757,8.557c-2.718,5.8-8.233,8.917-19.701,11.122c-5.27,1.078-8.904,3.294-10.804,6.586c-2.765,4.791-1.259,10.811,0.115,14.925c2.03,6.048,0.765,9.876-1.535,16.826c-0.53,1.604-1.131,3.42-1.74,5.423c-0.959,3.161-0.613,6.035,1.026,8.542c4.331,6.621,16.969,8.956,29.979,10.492c7.768,0.922,16.27,4.029,24.493,7.035c8.057,2.944,16.388,5.989,23.961,6.913c1.151,0.145,2.291,0.218,3.39,0.218c11.434,0,16.6-7.587,18.238-10.704c4.107-0.838,18.272-3.522,32.871-3.882c14.576-0.416,28.679,2.462,32.674,3.357c1.256,2.404,4.567,7.895,9.845,10.724c2.901,1.586,6.938,2.495,11.073,2.495c0.001,0,0,0,0.001,0c4.416,0,12.817-1.044,19.466-8.039c6.632-7.028,23.202-16,35.302-22.551c2.7-1.462,5.226-2.83,7.441-4.065c6.797-3.768,10.506-9.152,10.175-14.771C282.445,250.905,279.356,246.811,274.659,244.888z M124.189,243.535c-0.846-5.96-8.513-11.871-17.392-18.715c-7.26-5.597-15.489-11.94-17.756-17.312c-4.685-11.082-0.992-30.568,5.447-40.602c3.182-5.024,5.781-12.643,8.295-20.011c2.714-7.956,5.521-16.182,8.66-19.783c4.971-5.622,9.565-16.561,10.379-25.182c4.655,4.444,11.876,10.083,18.547,10.083c1.027,0,2.024-0.134,2.977-0.403c4.564-1.318,11.277-5.197,17.769-8.947c5.597-3.234,12.499-7.222,15.096-7.585c4.453,6.394,30.328,63.655,32.972,82.044c2.092,14.55-0.118,26.578-1.229,31.289c-0.894-0.122-1.96-0.221-3.08-0.221c-7.207,0-9.115,3.934-9.612,6.283c-1.278,6.103-1.413,25.618-1.427,30.003c-2.606,3.311-15.785,18.903-34.706,21.706c-7.707,1.12-14.904,1.688-21.39,1.688c-5.544,0-9.082-0.428-10.551-0.651l-9.508-10.879C121.429,254.489,125.177,250.583,124.189,243.535z M136.254,64.149c-0.297,0.128-0.589,0.265-0.876,0.411c-0.029-0.644-0.096-1.297-0.199-1.952c-1.038-5.975-5-10.312-9.419-10.312c-0.327,0-0.656,0.025-1.017,0.08c-2.629,0.438-4.691,2.413-5.821,5.213c0.991-6.144,4.472-10.693,8.602-10.693c4.85,0,8.947,6.536,8.947,14.272C136.471,62.143,136.4,63.113,136.254,64.149z M173.94,68.756c0.444-1.414,0.684-2.944,0.684-4.532c0-7.014-4.45-12.509-10.131-12.509c-5.552,0-10.069,5.611-10.069,12.509c0,0.47,0.023,0.941,0.067,1.411c-0.294-0.113-0.581-0.223-0.861-0.329c-0.639-1.935-0.962-3.954-0.962-6.015c0-8.387,5.36-15.211,11.95-15.211c6.589,0,11.95,6.824,11.95,15.211C176.568,62.78,175.605,66.11,173.94,68.756z M169.081,85.08c-0.095,0.424-0.297,0.612-2.531,1.774c-1.128,0.587-2.532,1.318-4.289,2.388l-1.174,0.711c-4.718,2.86-15.765,9.559-18.764,9.952c-2.037,0.274-3.297-0.516-6.13-2.441c-0.639-0.435-1.319-0.897-2.044-1.362c-5.107-3.351-8.392-7.042-8.763-8.485c1.665-1.287,5.792-4.508,7.905-6.415c4.289-3.988,8.605-6.668,10.741-6.668c0.113,0,0.215,0.008,0.321,0.028c2.51,0.443,8.701,2.914,13.223,4.718c2.09,0.834,3.895,1.554,5.165,2.01C166.742,82.664,168.828,84.422,169.081,85.08z M205.028,271.45c2.257-10.181,4.857-24.031,4.436-32.196c-0.097-1.855-0.261-3.874-0.42-5.826c-0.297-3.65-0.738-9.075-0.283-10.684c0.09-0.042,0.19-0.078,0.301-0.109c0.019,4.668,1.033,13.979,8.479,17.226c2.219,0.968,4.755,1.458,7.537,1.458c7.459,0,15.735-3.659,19.125-7.049c1.996-1.996,3.675-4.438,4.851-6.372c0.257,0.753,0.415,1.737,0.332,3.005c-0.443,6.885,2.903,16.019,9.271,19.385l0.927,0.487c2.268,1.19,8.292,4.353,8.389,5.853c-0.001,0.001-0.051,0.177-0.387,0.489c-1.509,1.379-6.82,4.091-11.956,6.714c-9.111,4.652-19.438,9.925-24.076,14.803c-6.53,6.872-13.916,11.488-18.376,11.488c-0.537,0-1.026-0.068-1.461-0.206C206.873,288.406,202.886,281.417,205.028,271.45z M39.917,245.477c-0.494-2.312-0.884-4.137-0.465-5.905c0.304-1.31,6.771-2.714,9.533-3.313c3.883-0.843,7.899-1.714,10.525-3.308c3.551-2.151,5.474-6.118,7.17-9.618c1.228-2.531,2.496-5.148,4.005-6.007c0.085-0.05,0.215-0.108,0.463-0.108c2.827,0,8.759,5.943,12.177,11.262c0.867,1.341,2.473,4.028,4.331,7.139c5.557,9.298,13.166,22.033,17.14,26.301c3.581,3.837,9.378,11.214,7.952,17.541c-1.044,4.909-6.602,8.901-7.913,9.784c-0.476,0.108-1.065,0.163-1.758,0.163c-7.606,0-22.662-6.328-30.751-9.728l-1.197-0.503c-4.517-1.894-11.891-3.087-19.022-4.241c-5.674-0.919-13.444-2.176-14.732-3.312c-1.044-1.171,0.167-4.978,1.235-8.337c0.769-2.414,1.563-4.91,1.998-7.523C41.225,251.596,40.499,248.203,39.917,245.477z"></path>
          </g>
        </svg>
      </span>
    `
  }

  return ''
}


