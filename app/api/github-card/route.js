export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const username = searchParams.get("username");
  const themeId = searchParams.get("theme") || "neon-core";

  if (!username) {
    return new Response("Username is required", { status: 400 });
  }

  const themes = [
    {
      id: "neon-core",
      label: "Neon Core",
      color: "22d3ee",
      accent: "2563eb",
      bg: "000000",
      effect: { type: "portal" },
    },
    {
      id: "midnight-wave",
      label: "Midnight Wave",
      color: "38bdf8",
      accent: "1e3a8a",
      bg: "020617",
      effect: { type: "gridWave" },
    },
    {
      id: "ember-flow",
      label: "Ember Flow",
      color: "fb7185",
      accent: "f97316",
      bg: "0b0f19",
      effect: { type: "sweep" },
    },
    {
      id: "aurora-mist",
      label: "Aurora Mist",
      color: "34d399",
      accent: "22d3ee",
      bg: "020b0a",
      effect: { type: "mesh" },
    },
    {
      id: "oceanic-ripple",
      label: "Oceanic Ripple",
      color: "0ea5e9",
      accent: "38bdf8",
      bg: "000814",
      effect: { type: "ripple" },
    },
    {
      id: "plasma-burst",
      label: "Plasma Burst",
      color: "a78bfa",
      accent: "f472b6",
      bg: "0b0320",
      effect: { type: "rings" },
    },
    {
      id: "emberline",
      label: "Emberline",
      color: "f97316",
      accent: "facc15",
      bg: "0b0b0f",
      effect: { type: "stripes" },
    },
    {
      id: "starlight",
      label: "Starlight",
      color: "e2e8f0",
      accent: "94a3b8",
      bg: "05040a",
      effect: { type: "bokeh" },
    },
    {
      id: "matrix-scan",
      label: "Matrix Scan",
      color: "22c55e",
      accent: "15803d",
      bg: "020909",
      effect: { type: "scanline" },
    },
    {
      id: "hacker-terminal",
      label: "Hacker Terminal",
      color: "22c55e",
      accent: "16a34a",
      bg: "000b05",
      effect: { type: "terminal" },
    },
    {
      id: "royal-beam",
      label: "Royal Beam",
      color: "60a5fa",
      accent: "2563eb",
      bg: "0b1020",
      effect: { type: "beam" },
    },
    {
      id: "sunset-haze",
      label: "Sunset Haze",
      color: "facc15",
      accent: "f97316",
      bg: "190b00",
      effect: { type: "haze" },
    },
    {
      id: "mint-dots",
      label: "Mint Dots",
      color: "2dd4bf",
      accent: "5eead4",
      bg: "001310",
      effect: { type: "particles" },
    },
    {
      id: "slate-noise",
      label: "Slate Noise",
      color: "94a3b8",
      accent: "64748b",
      bg: "0b0b0c",
      effect: { type: "noise" },
    },
    {
      id: "lava-meteor",
      label: "Lava Meteor",
      color: "ef4444",
      accent: "f97316",
      bg: "140506",
      effect: { type: "meteor" },
    },
    {
      id: "glacier-orbit",
      label: "Glacier Orbit",
      color: "93c5fd",
      accent: "60a5fa",
      bg: "030712",
      effect: { type: "orbits" },
    },
    {
      id: "signal-radar",
      label: "Signal Radar",
      color: "fbbf24",
      accent: "f59e0b",
      bg: "050505",
      effect: { type: "radar" },
    },
    {
      id: "ultraviolet-glitch",
      label: "Ultraviolet Glitch",
      color: "c084fc",
      accent: "a855f7",
      bg: "0a0318",
      effect: { type: "glitch" },
    },
    {
      id: "cobalt-checker",
      label: "Cobalt Checker",
      color: "38bdf8",
      accent: "0ea5e9",
      bg: "020b14",
      effect: { type: "checker" },
    },
    {
      id: "nova-sparks",
      label: "Nova Sparks",
      color: "f472b6",
      accent: "fb7185",
      bg: "12040e",
      effect: { type: "sparks" },
    },
    {
      id: "cyber-grid",
      label: "Cyber Grid",
      color: "22d3ee",
      accent: "06b6d4",
      bg: "050a0f",
      effect: { type: "grid" },
    },
    {
      id: "granite-circuit",
      label: "Granite Circuit",
      color: "a3a3a3",
      accent: "737373",
      bg: "0a0a0a",
      effect: { type: "circuit" },
    },
    {
      id: "zen-pulse",
      label: "Zen Pulse",
      color: "14b8a6",
      accent: "2dd4bf",
      bg: "04130f",
      effect: { type: "pulse" },
    },
    {
      id: "sakura-bloom",
      label: "Sakura Bloom",
      color: "f9a8d4",
      accent: "f472b6",
      bg: "1a0b12",
      effect: { type: "bokeh" },
    },
    {
      id: "oxide-vortex",
      label: "Oxide Vortex",
      color: "f97316",
      accent: "fb923c",
      bg: "100806",
      effect: { type: "vortex" },
    },
  ];

  const theme = themes.find((item) => item.id === themeId) || themes[0];
  const color = searchParams.get("color") || theme.color;
  const accent = searchParams.get("accent") || theme.accent || color;
  const bg = searchParams.get("bg") || theme.bg;

  const buildTheme = (effect) => {
    switch (effect.type) {
      case "portal":
        return {
          defs: `
            <radialGradient id="portalGradient" cx="50%" cy="55%" r="55%">
              <stop offset="0%" stop-color="#${color}" stop-opacity="0.95" />
              <stop offset="45%" stop-color="#${accent}" stop-opacity="0.55" />
              <stop offset="100%" stop-color="#${bg}" stop-opacity="0" />
            </radialGradient>
          `,
          backdrop: `
            <g opacity="0.9">
              <circle cx="520" cy="-10" r="140" fill="url(#portalGradient)">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  dur="10s"
                  repeatCount="indefinite"
                  values="0 0; -20 8; 0 0" />
                <animate
                  attributeName="r"
                  dur="8s"
                  repeatCount="indefinite"
                  values="135; 150; 135" />
              </circle>
            </g>
          `,
        };
      case "gridWave":
        return {
          defs: `
            <pattern id="gridPattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0 L0 0 0 24" fill="none" stroke="#${accent}" stroke-opacity="0.18" stroke-width="1" />
            </pattern>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#${color}" />
              <stop offset="100%" stop-color="#${accent}" />
            </linearGradient>
          `,
          backdrop: `
            <rect width="700" height="220" rx="20" fill="url(#gridPattern)" />
            <path fill="url(#waveGradient)" opacity="0.32">
              <animate attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                values="
                M0 160 Q175 120 350 160 T700 160 V220 H0 Z;
                M0 170 Q175 130 350 170 T700 170 V220 H0 Z;
                M0 160 Q175 120 350 160 T700 160 V220 H0 Z
                " />
            </path>
          `,
        };
      case "sweep":
        return {
          defs: `
            <linearGradient id="sweepGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#${bg}" stop-opacity="0" />
              <stop offset="45%" stop-color="#${color}" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#${bg}" stop-opacity="0" />
            </linearGradient>
          `,
          backdrop: `
            <rect width="900" height="220" x="-200" fill="url(#sweepGradient)" opacity="0.7">
              <animate attributeName="x" dur="9s" repeatCount="indefinite" values="-220;0;-220" />
            </rect>
          `,
        };
      case "mesh":
        return {
          defs: `
            <radialGradient id="meshGlow" cx="30%" cy="30%" r="45%">
              <stop offset="0%" stop-color="#${color}" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#${bg}" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="meshGlow2" cx="70%" cy="70%" r="50%">
              <stop offset="0%" stop-color="#${accent}" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#${bg}" stop-opacity="0" />
            </radialGradient>
          `,
          backdrop: `
            <circle cx="120" cy="60" r="160" fill="url(#meshGlow)">
              <animateTransform attributeName="transform" type="translate" dur="12s" repeatCount="indefinite" values="0 0; 30 -10; 0 0" />
            </circle>
            <circle cx="560" cy="180" r="180" fill="url(#meshGlow2)">
              <animateTransform attributeName="transform" type="translate" dur="14s" repeatCount="indefinite" values="0 0; -30 20; 0 0" />
            </circle>
          `,
        };
      case "ripple":
        return {
          defs: "",
          backdrop: `
            <g fill="none" stroke="#${color}" stroke-opacity="0.35">
              <circle cx="520" cy="80" r="40">
                <animate attributeName="r" dur="6s" repeatCount="indefinite" values="30;90;30" />
                <animate attributeName="stroke-opacity" dur="6s" repeatCount="indefinite" values="0.35;0;0.35" />
              </circle>
              <circle cx="520" cy="80" r="80" stroke="#${accent}" stroke-opacity="0.25">
                <animate attributeName="r" dur="6s" repeatCount="indefinite" values="80;140;80" />
                <animate attributeName="stroke-opacity" dur="6s" repeatCount="indefinite" values="0.25;0;0.25" />
              </circle>
            </g>
          `,
        };
      case "rings":
        return {
          defs: "",
          backdrop: `
            <g fill="none" stroke="#${color}" stroke-opacity="0.4">
              <circle cx="560" cy="40" r="60" />
              <circle cx="560" cy="40" r="90" stroke="#${accent}" stroke-opacity="0.25" />
              <circle cx="560" cy="40" r="120" stroke="#${accent}" stroke-opacity="0.15" />
              <animateTransform attributeName="transform" type="rotate" dur="18s" repeatCount="indefinite" values="0 560 40; 360 560 40" />
            </g>
          `,
        };
      case "stripes":
        return {
          defs: `
            <pattern id="stripePattern" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
              <rect width="8" height="16" fill="#${accent}" fill-opacity="0.2" />
            </pattern>
          `,
          backdrop: `
            <rect width="700" height="220" rx="20" fill="url(#stripePattern)" />
          `,
        };
      case "bokeh":
        return {
          defs: `
            <filter id="bokehBlur">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          `,
          backdrop: `
            <g filter="url(#bokehBlur)" opacity="0.6">
              <circle cx="520" cy="60" r="45" fill="#${color}" />
              <circle cx="600" cy="150" r="35" fill="#${accent}" />
              <circle cx="460" cy="170" r="28" fill="#${color}" />
              <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0.4;0.7;0.4" />
            </g>
          `,
        };
      case "scanline":
        return {
          defs: "",
          backdrop: `
            <rect width="700" height="10" y="20" fill="#${color}" fill-opacity="0.25">
              <animate attributeName="y" dur="4s" repeatCount="indefinite" values="10;200;10" />
            </rect>
          `,
        };
      case "terminal":
        return {
          defs: `
            <pattern id="terminalGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M16 0 L0 0 0 16" fill="none" stroke="#${accent}" stroke-opacity="0.16" stroke-width="1" />
            </pattern>
          `,
          backdrop: `
            <rect width="700" height="220" rx="20" fill="url(#terminalGrid)" />
            <rect x="420" y="30" width="240" height="12" fill="#${color}" fill-opacity="0.3">
              <animate attributeName="x" dur="6s" repeatCount="indefinite" values="420;460;420" />
            </rect>
            <rect x="440" y="60" width="180" height="8" fill="#${accent}" fill-opacity="0.25">
              <animate attributeName="x" dur="5s" repeatCount="indefinite" values="440;470;440" />
            </rect>
            <rect x="460" y="88" width="200" height="8" fill="#${accent}" fill-opacity="0.2">
              <animate attributeName="x" dur="4.5s" repeatCount="indefinite" values="460;490;460" />
            </rect>
          `,
        };
      case "beam":
        return {
          defs: `
            <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#${color}" stop-opacity="0" />
              <stop offset="50%" stop-color="#${color}" stop-opacity="0.45" />
              <stop offset="100%" stop-color="#${color}" stop-opacity="0" />
            </linearGradient>
          `,
          backdrop: `
            <rect width="120" height="220" x="520" fill="url(#beamGradient)">
              <animate attributeName="x" dur="7s" repeatCount="indefinite" values="480;560;480" />
            </rect>
          `,
        };
      case "haze":
        return {
          defs: `
            <linearGradient id="hazeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#${color}" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#${accent}" stop-opacity="0.1" />
            </linearGradient>
          `,
          backdrop: `
            <rect width="700" height="220" fill="url(#hazeGradient)">
              <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0.2;0.5;0.2" />
            </rect>
          `,
        };
      case "particles":
        return {
          defs: `
            <pattern id="dotPattern" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2" fill="#${accent}" fill-opacity="0.4" />
              <circle cx="14" cy="12" r="1.6" fill="#${color}" fill-opacity="0.3" />
            </pattern>
          `,
          backdrop: `
            <rect width="700" height="220" fill="url(#dotPattern)" />
          `,
        };
      case "noise":
        return {
          defs: `
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          `,
          backdrop: `
            <rect width="700" height="220" filter="url(#noiseFilter)" opacity="0.08" />
          `,
        };
      case "meteor":
        return {
          defs: "",
          backdrop: `
            <g stroke="#${color}" stroke-width="2" stroke-linecap="round" opacity="0.6">
              <line x1="520" y1="30" x2="640" y2="110">
                <animateTransform attributeName="transform" type="translate" dur="5s" repeatCount="indefinite" values="0 0; -160 120; 0 0" />
              </line>
              <line x1="560" y1="10" x2="680" y2="90" stroke="#${accent}" opacity="0.45">
                <animateTransform attributeName="transform" type="translate" dur="6s" repeatCount="indefinite" values="0 0; -180 140; 0 0" />
              </line>
            </g>
          `,
        };
      case "orbits":
        return {
          defs: "",
          backdrop: `
            <g fill="#${color}" opacity="0.5">
              <circle cx="560" cy="70" r="6">
                <animateTransform attributeName="transform" type="rotate" dur="8s" repeatCount="indefinite" values="0 560 110; 360 560 110" />
              </circle>
              <circle cx="520" cy="150" r="4" fill="#${accent}" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" values="360 560 110; 0 560 110" />
              </circle>
            </g>
          `,
        };
      case "radar":
        return {
          defs: "",
          backdrop: `
            <g fill="none" stroke="#${color}" stroke-opacity="0.35">
              <circle cx="560" cy="120" r="60" />
              <circle cx="560" cy="120" r="90" stroke-opacity="0.2" />
              <line x1="560" y1="120" x2="650" y2="80" stroke="#${accent}" stroke-opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" dur="6s" repeatCount="indefinite" values="0 560 120; 360 560 120" />
              </line>
            </g>
          `,
        };
      case "glitch":
        return {
          defs: "",
          backdrop: `
            <g fill="#${accent}" opacity="0.3">
              <rect x="430" y="30" width="80" height="10">
                <animate attributeName="x" dur="3s" repeatCount="indefinite" values="420;460;420" />
              </rect>
              <rect x="520" y="80" width="120" height="8" opacity="0.2">
                <animate attributeName="x" dur="2.6s" repeatCount="indefinite" values="520;480;520" />
              </rect>
              <rect x="470" y="140" width="110" height="10" opacity="0.25">
                <animate attributeName="x" dur="2.2s" repeatCount="indefinite" values="470;500;470" />
              </rect>
            </g>
          `,
        };
      case "checker":
        return {
          defs: `
            <pattern id="checkerPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#${accent}" fill-opacity="0.18" />
              <rect x="10" y="10" width="10" height="10" fill="#${accent}" fill-opacity="0.18" />
            </pattern>
          `,
          backdrop: `
            <rect width="700" height="220" rx="20" fill="url(#checkerPattern)" />
          `,
        };
      case "sparks":
        return {
          defs: "",
          backdrop: `
            <g stroke="#${color}" stroke-width="2" stroke-linecap="round" opacity="0.5">
              <line x1="520" y1="40" x2="540" y2="20">
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.2;0.8;0.2" />
              </line>
              <line x1="600" y1="80" x2="620" y2="60" stroke="#${accent}">
                <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" values="0.1;0.7;0.1" />
              </line>
              <line x1="560" y1="150" x2="580" y2="130" stroke="#${accent}" opacity="0.35">
                <animate attributeName="opacity" dur="2.8s" repeatCount="indefinite" values="0.2;0.9;0.2" />
              </line>
            </g>
          `,
        };
      case "grid":
        return {
          defs: `
            <pattern id="microGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0 L0 0 0 20" fill="none" stroke="#${accent}" stroke-opacity="0.2" stroke-width="1" />
            </pattern>
          `,
          backdrop: `
            <rect width="700" height="220" rx="20" fill="url(#microGrid)" />
          `,
        };
      case "circuit":
        return {
          defs: `
            <pattern id="circuitPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 H40 M20 0 V40" stroke="#${accent}" stroke-opacity="0.18" stroke-width="1" />
              <circle cx="20" cy="20" r="2" fill="#${color}" fill-opacity="0.5" />
            </pattern>
          `,
          backdrop: `
            <rect width="700" height="220" rx="20" fill="url(#circuitPattern)" />
          `,
        };
      case "pulse":
        return {
          defs: "",
          backdrop: `
            <circle cx="560" cy="110" r="50" fill="#${color}" fill-opacity="0.18">
              <animate attributeName="r" dur="5s" repeatCount="indefinite" values="40;90;40" />
              <animate attributeName="fill-opacity" dur="5s" repeatCount="indefinite" values="0.2;0;0.2" />
            </circle>
          `,
        };
      case "vortex":
        return {
          defs: "",
          backdrop: `
            <g fill="none" stroke="#${accent}" stroke-opacity="0.3">
              <circle cx="560" cy="110" r="20" />
              <circle cx="560" cy="110" r="40" />
              <circle cx="560" cy="110" r="60" />
              <circle cx="560" cy="110" r="80" />
              <animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" values="0 560 110; 360 560 110" />
            </g>
          `,
        };
      default:
        return { defs: "", backdrop: "" };
    }
  };

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "github-card",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return new Response("GitHub user not found", { status: 404 });
    }

    const user = await res.json();

    const escapeXml = (value) =>
      String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

    const displayName = escapeXml(user.name || user.login);
    const displayBio = escapeXml(user.bio || "GitHub Developer");
    const displayLocation = user.location ? escapeXml(user.location) : "";
    const displayLogin = escapeXml(user.login);

    let avatarHref = escapeXml(user.avatar_url);
    try {
      const avatarResponse = await fetch(user.avatar_url, {
        headers: {
          "User-Agent": "github-card",
        },
        next: { revalidate: 3600 },
      });

      if (avatarResponse.ok) {
        const avatarBuffer = await avatarResponse.arrayBuffer();
        const avatarBase64 = Buffer.from(avatarBuffer).toString("base64");
        const avatarType =
          avatarResponse.headers.get("content-type") || "image/png";
        avatarHref = `data:${avatarType};base64,${avatarBase64}`;
      }
    } catch (avatarError) {
      // Fall back to the remote URL when the avatar fetch fails.
    }

    const themeMarkup = buildTheme(theme.effect);

    const svg = `
    <svg width="700" height="220" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">

      <defs>

        <style>
          text { font-family: "Bahnschrift", "Segoe UI", "Arial Black", Verdana, sans-serif; }
        </style>

        ${themeMarkup.defs}

        <!-- Glow Filter -->
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

      </defs>

      <!-- Background -->
      <rect width="700" height="220" rx="20" fill="#${bg}" />

      ${themeMarkup.backdrop}

      <!-- Avatar -->
      <clipPath id="avatarClip">
        <circle cx="100" cy="110" r="70"/>
      </clipPath>

      <image
        href="${avatarHref}"
        x="30"
        y="40"
        width="140"
        height="140"
        clip-path="url(#avatarClip)"
      />

      <!-- Username -->
      <text x="200" y="90"
        fill="#ffffff"
        font-size="30"
        font-weight="bold"
        font-family="Bahnschrift, Segoe UI, Arial Black, Verdana, sans-serif"
        filter="url(#glow)">
        ${displayName}
      </text>

      <!-- Bio -->
      <text x="200" y="120"
        fill="#94a3b8"
        font-size="15"
        font-family="Bahnschrift, Segoe UI, Arial Black, Verdana, sans-serif">
        ${displayBio}
      </text>

      ${displayLocation ? `
      <!-- Location -->
      <text x="200" y="140"
        fill="#94a3b8"
        font-size="14"
        font-family="Bahnschrift, Segoe UI, Arial Black, Verdana, sans-serif">
        ${displayLocation}
      </text>
      ` : ""}

      <!-- Stats -->
      <text x="200" y="165"
        fill="#${color}"
        font-size="15"
        font-family="Bahnschrift, Segoe UI, Arial Black, Verdana, sans-serif">
        Followers: ${user.followers}  |  Repos: ${user.public_repos}
      </text>

      <!-- Username Tag -->
      <text x="200" y="190"
        fill="#64748b"
        font-size="14"
        font-family="Bahnschrift, Segoe UI, Arial Black, Verdana, sans-serif">
        @${displayLogin}
      </text>

    </svg>
    `;

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "no-store",
        Pragma: "no-cache",
      },
    });

  } catch (error) {
    return new Response("Error generating card", { status: 500 });
  }
}