/* initialize particles.js with a cyber-theme configuration */
if (typeof particlesJS === "function") {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#0ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#0ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
}

/* ─── 3D Graphene Atom Layer Separator ────────────────────────────── */
(function () {
  const separators = document.querySelectorAll('.graphene-separator');
  if (!separators.length) return;

  const CFG = {
    bondLength: 26,       // px – controls lattice density
    atomRadius: 2.5,      // core circle radius
    glowRadius: 14,       // full glow sprite radius
    bondWidth: 1.1,
    waveAmp: 8,          // y-displacement wave (appears as height when CSS-tilted)
    waveSpeed: 0.0008,
    waveLenX: 180,
    waveLenY: 160,
    driftSpeed: 0,        // no horizontal drift
    canvasH: 700,         // canvas height before CSS rotateX
    accent: [0, 255, 242],
    bondRGB: [80, 160, 200],
    maxAtomAlpha: 0.45,   // cap atom brightness
    maxBondAlpha: 0.3,    // cap bond brightness
  };

  /* Helper: parse hex color to [r,g,b] */
  function hexToRgb(hex) {
    return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
  }

  /* Build atom sprite for a given accent [r,g,b] */
  function makeSprite(accent) {
    const SR = CFG.glowRadius;
    const dim = SR * 2;
    const cv = document.createElement('canvas');
    cv.width = dim; cv.height = dim;
    const sc = cv.getContext('2d');
    const [ar, ag, ab] = accent;
    const grd = sc.createRadialGradient(SR, SR, 0, SR, SR, SR);
    grd.addColorStop(0,    `rgba(${ar},${ag},${ab},0.45)`);
    grd.addColorStop(0.18, `rgba(${ar},${ag},${ab},0.14)`);
    grd.addColorStop(0.45, `rgba(${ar},${ag},${ab},0.03)`);
    grd.addColorStop(1,    `rgba(${ar},${ag},${ab},0)`);
    sc.fillStyle = grd;
    sc.fillRect(0, 0, dim, dim);
    const cr = CFG.atomRadius;
    const cg = sc.createRadialGradient(SR - cr*0.3, SR - cr*0.3, cr*0.1, SR, SR, cr);
    cg.addColorStop(0,    'rgba(255,255,255,0.95)');
    cg.addColorStop(0.35, `rgba(${ar},${ag},${ab},0.85)`);
    cg.addColorStop(1,    `rgba(${ar*0.2|0},${ag*0.2|0},${ab*0.2|0},0.5)`);
    sc.fillStyle = cg;
    sc.beginPath();
    sc.arc(SR, SR, cr, 0, Math.PI * 2);
    sc.fill();
    return cv;
  }

  /* ─── Honeycomb lattice constants ─── */
  const b   = CFG.bondLength;
  const s3  = Math.sqrt(3);
  const a1x = s3 * b;          // lattice vector 1 (pure x)
  const a2x = s3 * b / 2;      // lattice vector 2 x-component
  const a2y = 1.5 * b;         // lattice vector 2 y-component
  const bbx = s3 * b / 2;      // sublattice B offset x
  const bby = b / 2;           // sublattice B offset y

  function initSeparator(el) {
    const accentRGB = hexToRgb(el.dataset.accent || '#00fff2');
    const bondRGB   = accentRGB.map(c => Math.min(255, Math.round(60 + c * 0.5)));
    const spriteCV  = makeSprite(accentRGB);
    const SR        = CFG.glowRadius;
    const spriteDim = SR * 2;

    const canvas = document.createElement('canvas');
    el.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let W, H, iMin, iMax, jMin, jMax;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const pw = el.getBoundingClientRect().width;
      W = pw * 1.5;          // match CSS width: 150%
      H = CFG.canvasH;       // match CSS height
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const pad = b * 6;
      jMin = Math.floor(-pad / a2y) - 1;
      jMax = Math.ceil((H + pad) / a2y) + 1;
      iMin = Math.floor((-pad - Math.abs(jMax) * a2x) / a1x) - 1;
      iMax = Math.ceil((W + pad) / a1x) + 1;
    }

    /* return [x, y] for atom at lattice cell (i,j), sublattice 0=A 1=B */
    function atomXY(i, j, sub) {
      const x = i * a1x + j * a2x + (sub ? bbx : 0);
      const y = j * a2y + (sub ? bby : 0);
      return [x, y];
    }

    function wave(x, y, t) {
      return CFG.waveAmp
        * Math.sin(x / CFG.waveLenX * 6.2832 + t * CFG.waveSpeed)
        * Math.cos(y / CFG.waveLenY * 6.2832 + t * CFG.waveSpeed * 0.7);
    }

    /* ── render frame ── */
    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      const [br, bg, bb] = bondRGB;

      // ── Bonds ──────────────────────────────────────────────────────
      ctx.lineWidth = CFG.bondWidth;
      for (let j = jMin; j <= jMax; j++) {
        for (let i = iMin; i <= iMax; i++) {
          const [ax0, ay0] = atomXY(i, j, 0);
          const ax = ax0;
          const ay = ay0 + wave(ax0, ay0, t);

          // Each A-atom bonds to B at (i,j), (i-1,j), (i,j-1)
          const nbs = [atomXY(i,j,1), atomXY(i-1,j,1), atomXY(i,j-1,1)];
          for (const [nx0, ny0] of nbs) {
            const nx = nx0;
            const ny = ny0 + wave(nx0, ny0, t);
            if ((ax < -30 && nx < -30) || (ax > W+30 && nx > W+30)) continue;
            if ((ay < -30 && ny < -30) || (ay > H+30 && ny > H+30)) continue;

            // depth = y-position normalized (bottom = near = bright when CSS tilts)
            const depth = Math.max(0, Math.min(1, (ay + ny) * 0.5 / H));
            const alpha = (0.05 + depth * 0.55) * (CFG.maxBondAlpha / 0.6);

            ctx.strokeStyle = `rgba(${br},${bg},${bb},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(nx, ny);
            ctx.stroke();
          }
        }
      }

      // ── Atoms (sprite-stamped) ────────────────────────────────────
      for (let j = jMin; j <= jMax; j++) {
        for (let i = iMin; i <= iMax; i++) {
          for (let sub = 0; sub < 2; sub++) {
            const [x0, y0] = atomXY(i, j, sub);
            const sx = x0;
            const sy = y0 + wave(x0, y0, t);
            if (sx < -SR || sx > W+SR || sy < -SR || sy > H+SR) continue;

            const depth = Math.max(0, Math.min(1, sy / H));
            const alpha = (0.12 + depth * 0.88) * (CFG.maxAtomAlpha / 1.0);
            const scale = 0.55 + depth * 0.45;
            const sz    = spriteDim * scale;

            ctx.globalAlpha = alpha;
            ctx.drawImage(spriteCV, sx - sz * 0.5, sy - sz * 0.5, sz, sz);
          }
        }
      }
      ctx.globalAlpha = 1;
    }

    // Animation loop
    let animId;
    function loop(t) { draw(t); animId = requestAnimationFrame(loop); }

    // Only animate when visible
    let vis = false;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !vis) { vis = true; animId = requestAnimationFrame(loop); }
        else if (!e.isIntersecting && vis) { vis = false; cancelAnimationFrame(animId); }
      });
    }, { threshold: 0.01 });

    resize();
    obs.observe(el);
    window.addEventListener('resize', resize);
  }

  const init = () => separators.forEach(initSeparator);
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
