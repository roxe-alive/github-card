export default function Home() {
  const templates = [
    {
      id: "neon-core",
      label: "Neon Core",
      username: "octocat",
      theme: "neon-core",
    },
    {
      id: "midnight-wave",
      label: "Midnight Wave",
      username: "torvalds",
      theme: "midnight-wave",
    },
    {
      id: "ember-flow",
      label: "Ember Flow",
      username: "gaearon",
      theme: "ember-flow",
    },
    {
      id: "aurora-mist",
      label: "Aurora Mist",
      username: "sindresorhus",
      theme: "aurora-mist",
    },
    {
      id: "oceanic-ripple",
      label: "Oceanic Ripple",
      username: "tj",
      theme: "oceanic-ripple",
    },
    {
      id: "plasma-burst",
      label: "Plasma Burst",
      username: "addyosmani",
      theme: "plasma-burst",
    },
    {
      id: "emberline",
      label: "Emberline",
      username: "kentcdodds",
      theme: "emberline",
    },
    {
      id: "starlight",
      label: "Starlight",
      username: "vercel",
      theme: "starlight",
    },
    {
      id: "matrix-scan",
      label: "Matrix Scan",
      username: "defunkt",
      theme: "matrix-scan",
    },
    {
      id: "hacker-terminal",
      label: "Hacker Terminal",
      username: "defunkt",
      theme: "hacker-terminal",
    },
    {
      id: "royal-beam",
      label: "Royal Beam",
      username: "mojombo",
      theme: "royal-beam",
    },
    {
      id: "sunset-haze",
      label: "Sunset Haze",
      username: "yyx990803",
      theme: "sunset-haze",
    },
    {
      id: "mint-dots",
      label: "Mint Dots",
      username: "hadley",
      theme: "mint-dots",
    },
    {
      id: "slate-noise",
      label: "Slate Noise",
      username: "dhh",
      theme: "slate-noise",
    },
    {
      id: "lava-meteor",
      label: "Lava Meteor",
      username: "rauchg",
      theme: "lava-meteor",
    },
    {
      id: "glacier-orbit",
      label: "Glacier Orbit",
      username: "gaearon",
      theme: "glacier-orbit",
    },
    {
      id: "signal-radar",
      label: "Signal Radar",
      username: "sindresorhus",
      theme: "signal-radar",
    },
    {
      id: "ultraviolet-glitch",
      label: "Ultraviolet Glitch",
      username: "torvalds",
      theme: "ultraviolet-glitch",
    },
    {
      id: "cobalt-checker",
      label: "Cobalt Checker",
      username: "vercel",
      theme: "cobalt-checker",
    },
    {
      id: "nova-sparks",
      label: "Nova Sparks",
      username: "octocat",
      theme: "nova-sparks",
    },
    {
      id: "cyber-grid",
      label: "Cyber Grid",
      username: "defunkt",
      theme: "cyber-grid",
    },
    {
      id: "granite-circuit",
      label: "Granite Circuit",
      username: "tj",
      theme: "granite-circuit",
    },
    {
      id: "zen-pulse",
      label: "Zen Pulse",
      username: "mojombo",
      theme: "zen-pulse",
    },
    {
      id: "sakura-bloom",
      label: "Sakura Bloom",
      username: "octocat",
      theme: "sakura-bloom",
    },
    {
      id: "oxide-vortex",
      label: "Oxide Vortex",
      username: "rauchg",
      theme: "oxide-vortex",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0b1220,_#020308_55%,_#000000_100%)] text-zinc-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-200">
              GitHub Card Generator
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Build bold GitHub profile cards with ready-made templates.
            </h1>
            <p className="max-w-xl text-lg text-zinc-300">
              Pick a template, swap the username, and share your card anywhere. Each
              template is tuned for contrast, animation, and readability.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Featured creators
              </span>
              <div className="flex -space-x-3">
                {[
                  "https://avatars.githubusercontent.com/u/583231?v=4",
                  "https://avatars.githubusercontent.com/u/1024025?v=4",
                  "https://avatars.githubusercontent.com/u/69631?v=4",
                  "https://avatars.githubusercontent.com/u/1146958?v=4",
                ].map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`GitHub avatar ${index + 1}`}
                    className="h-10 w-10 rounded-full border border-white/20 object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                href="#templates"
              >
                Browse templates
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/70 hover:text-cyan-200"
                href="/api/github-card?username=octocat&theme=neon-core"
                target="_blank"
                rel="noreferrer"
              >
                Open live SVG
              </a>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Templates
                </p>
                <p className="text-2xl font-semibold text-white">{templates.length}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Endpoint
                </p>
                <p className="text-sm text-cyan-200">/api/github-card</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Params
                </p>
                <p className="text-sm text-zinc-300">username, color, bg</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-black p-6 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                Featured
              </p>
              <span className="rounded-full border border-cyan-300/40 px-3 py-1 text-xs text-cyan-100">
                Live preview
              </span>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                src="/api/github-card?username=octocat&theme=neon-core"
                alt="GitHub card preview"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-4 grid gap-3 text-sm text-zinc-300">
              <p className="font-semibold text-white">Neon Core</p>
              <p>
                Try it with your username and tweak the colors. The card updates
                instantly.
              </p>
            </div>
          </div>
        </section>

        <section id="templates" className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Templates
              </p>
              <h2 className="text-3xl font-semibold text-white">
                {templates.length}+ reusable GitHub cards
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Click any template to open the SVG in a new tab. Use it as a base
              for your own custom card.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {templates.map((template) => {
              const src = `/api/github-card?username=${template.username}&theme=${template.theme}`;

              return (
                <a
                  key={template.id}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/50 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {template.label}
                      </p>
                      <p className="text-xs text-zinc-400">
                        @{template.username}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300 transition group-hover:border-cyan-400/70 group-hover:text-cyan-100">
                      Open SVG
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                    <img src={src} alt={`${template.label} card`} className="w-full" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
