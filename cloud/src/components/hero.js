export function renderHero() {
  return `
    <section id="top" class="section hero">
      <div class="hero-blob" aria-hidden="true"></div>
      <div class="hero-blob hero-blob-alt" aria-hidden="true"></div>

      <div class="container hero-content">
        <div class="hero-copy">
          <span class="eyebrow">OPEN  SOURCE</span>

          <h1>Privacy-First Storage <br /> <span class="text-gradient">Built on Zero-Trust</span></h1>

          <p class="lead">
            Your <strong>files</strong> are <strong>encrypted</strong> on your device before upload to the server in a provider-blind architecture. We <strong>never receive your encryption keys</strong>, ever - our code is fully <a href="#" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline; text-underline-offset: 3px;"><strong>open source</strong></a>, so anyone can independently verify these guarantees.
            <br> <br> <strong>Filenames</strong> are <strong>obfuscated</strong>, <strong>unique per-file keys</strong> are deterministically derived using <strong>quantum-hardened, hash-based derivation</strong> with <strong>512-bit</strong> key material, and <strong>no party is treated as secure</strong>, along with many additional security features.
          </p>

          <div class="hero-actions">
            <a class="button" href="#free-plan">
              Start Free - 100 GB
            </a>
            <a class="button button-outline glass" href="#security">
              Security Features
            </a>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <strong>100 GB Free</strong>
              <span>No Card Required</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <strong>Early Access</strong>
              <span>Offer Terms Below</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-container glass">
            <!-- Removed card c1 as requested (moving animation inside monitor) -->
            <!-- Removed card c2 as requested (no provider key card) -->
            <div class="hero-flow-visual" aria-hidden="true">
              <div class="hero-flow-node hero-flow-node-device">
                <span class="hero-flow-node-icon">
                  ${heroDeviceIcon()}
                </span>
                <span class="hero-flow-node-label">Your Device</span>
              </div>

              <div class="hero-flow-track">
                <span class="hero-flow-packet hero-flow-packet-pdf">${heroFlowPacketFileIcon('PDF', '#f5f7ff')}</span>
                <span class="hero-flow-packet hero-flow-packet-photo">${heroFlowPacketPhotoIcon()}</span>
                <span class="hero-flow-packet hero-flow-packet-doc">${heroFlowPacketFileIcon('DOC', '#f5f7ff')}</span>
                <span class="hero-flow-packet hero-flow-packet-folder">${heroFlowPacketFolderIcon()}</span>
                <span class="hero-flow-packet hero-flow-packet-txt">${heroFlowPacketFileIcon('TXT', '#f5f7ff')}</span>
              </div>

              <div class="hero-flow-node hero-flow-node-cloud">
                <span class="hero-flow-node-icon">
                  ${heroCloudIcon()}
                </span>
                <span class="hero-flow-node-label">Graphene Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

function heroSnakeLockOverlay(x = 15.5, y = 12) {
  return `
    <g transform="translate(${x} ${y}) scale(1.12)">
      <rect x="-0.4" y="5" width="7.2" height="6" rx="1.5" fill="rgba(15,23,42,0.42)" stroke="rgba(15,23,42,0.85)" stroke-width="0.75"></rect>
      <path d="M1.15 5.15V3.95a2.05 2.05 0 1 1 4.1 0v1.2" fill="none" stroke="rgba(15,23,42,0.9)" stroke-width="1.55" stroke-linecap="round"></path>
      <rect x="0" y="5.4" width="6.4" height="5.2" rx="1.2" fill="#9ca3af" stroke="#f3f4f6" stroke-width="0.65"></rect>
      <path d="M1.45 5.45V4.2a1.75 1.75 0 1 1 3.5 0v1.25" fill="none" stroke="#f8fafc" stroke-width="0.95" stroke-linecap="round"></path>
      <circle cx="3.2" cy="8.05" r="0.6" fill="#475569" stroke="rgba(15,23,42,0.35)" stroke-width="0.25"></circle>
    </g>
  `
}

function heroFileLockIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <g>
        <path d="M14.2 1.4H5.4A2.4 2.4 0 0 0 3 3.8v16.4a2.4 2.4 0 0 0 2.4 2.4h13.2a2.4 2.4 0 0 0 2.4-2.4V9z"></path>
        <polyline points="14.2 1.4 14.2 9 21 9"></polyline>
        <line x1="7.2" y1="13.2" x2="14.2" y2="13.2"></line>
        <line x1="7.2" y1="16.1" x2="12.3" y2="16.1"></line>
        ${heroSnakeLockOverlay()}
      </g>
    </svg>
  `
}

function heroKeyIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="currentColor" stroke-width="2.3">
        <circle cx="8" cy="12" r="3.5"></circle>
        <path d="M11.5 12H21"></path>
        <path d="M17 12v3"></path>
        <path d="M14.2 12v2"></path>
      </g>
      <g stroke="#9ca3af" stroke-opacity="0.99" stroke-width=".95">
        <path d="M5.9 5.7L18.1 18.3"></path>
        <path d="M18.1 5.7L5.9 18.3"></path>
      </g>
    </svg>
  `
}

function heroDeviceIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="rgba(255,255,255,0.03)"></rect>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="16" x2="12" y2="20"></line>
      <!-- Animation of file getting encrypted inside monitor -->
      <g transform="translate(8.4, 6.2) scale(0.3)">
        <g class="hero-device-file-anim">
          <path d="M14.2 1.4H5.4A2.4 2.4 0 0 0 3 3.8v16.4a2.4 2.4 0 0 0 2.4 2.4h13.2a2.4 2.4 0 0 0 2.4-2.4V9z" fill="rgba(255, 255, 255, 0.08)" stroke="#f5f7ff" stroke-width="1.8"></path>
          <polyline points="14.2 1.4 14.2 9 21 9" stroke="#f5f7ff" stroke-width="1.8"></polyline>
          
          <!-- Document "writing" lines -->
          <line x1="7" y1="12" x2="15.5" y2="12" stroke="#f5f7ff" stroke-width="1.8" stroke-linecap="round"></line>
          <line x1="7" y1="15.5" x2="15.5" y2="15.5" stroke="#f5f7ff" stroke-width="1.8" stroke-linecap="round"></line>
          <line x1="7" y1="19" x2="10.5" y2="19" stroke="#f5f7ff" stroke-width="1.8" stroke-linecap="round"></line>

          <g class="hero-device-lock-anim">
            <g transform="translate(15, 12.5) scale(1.15)">
              <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#0b1121" stroke-width="1.9" stroke-linecap="round"></path>
              <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#a9b4c9" stroke-width="1.5" stroke-linecap="round"></path>
              <rect x="0" y="5.4" width="6.4" height="5.2" rx="1.2" fill="#a9b4c9" stroke="#0b1121" stroke-width="0.2"></rect>
              <circle cx="3.2" cy="8.05" r="0.85" fill="#0b0f1a" stroke="none"></circle>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `
}

function heroCloudIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="rgba(255,255,255,0.03)"></path>
    </svg>
  `
}

function heroFlowPacketLockOverlay(x = 15.8, y = 13.3) {
  return `
    <g transform="translate(${x} ${y}) scale(0.95)">
      <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#0b1121" stroke-width="1.9" stroke-linecap="round"></path>
      <path d="M1.3 5.4V3.95a1.9 1.9 0 0 1 3.8 0v1.45" fill="none" stroke="#a9b4c9" stroke-width="1.5" stroke-linecap="round"></path>
      <rect x="0" y="5.4" width="6.4" height="5.2" rx="1.2" fill="#a9b4c9" stroke="#0b1121" stroke-width="0.2"></rect>
      <circle cx="3.2" cy="8.05" r="0.85" fill="#111629" stroke="none"></circle>
    </g>
  `
}

function heroFlowPacketFileIcon(label, typeColor) {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5f7ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <g>
        <path d="M14.2 1.4H5.4A2.4 2.4 0 0 0 3 3.8v16.4a2.4 2.4 0 0 0 2.4 2.4h13.2a2.4 2.4 0 0 0 2.4-2.4V9z"></path>
        <polyline points="14.2 1.4 14.2 9 21 9"></polyline>
        <text
          x="12"
          y="17"
          text-anchor="middle"
          fill="${typeColor}"
          stroke="none"
          font-size="4.9"
          font-weight="900"
          letter-spacing="0.18"
          font-family="Manrope, sans-serif"
        >
          ${label}
        </text>
        ${heroFlowPacketLockOverlay()}
      </g>
    </svg>
  `
}

function heroFlowPacketFolderIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5f7ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <g>
        <path d="M22 18.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2h5l2 2.8h9a2 2 0 0 1 2 2z" fill="rgba(255,255,255,0.08)"></path>
        ${heroFlowPacketLockOverlay(17.3, 11.1)}
      </g>
    </svg>
  `
}

function heroFlowPacketPhotoIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5f7ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <g>
        <rect x="3" y="3" width="18" height="18" rx="2.3" fill="rgba(255,255,255,0.08)"></rect>
        <circle cx="8.3" cy="8.3" r="1.7" fill="#f5f7ff" stroke="none"></circle>
        <polyline points="20.5 15.2 15.5 10.2 5.2 20.5"></polyline>
        ${heroFlowPacketLockOverlay(17.3, 11.5)}
      </g>
    </svg>
  `
}
