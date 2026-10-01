import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-28 md:pt-44 md:pb-36"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.35]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E8F5C" />
            <stop offset="100%" stopColor="#2E6FBF" />
          </linearGradient>
        </defs>
        {[
          [120, 140, 380, 260],
          [380, 260, 620, 120],
          [380, 260, 520, 460],
          [620, 120, 880, 220],
          [520, 460, 780, 500],
          [780, 500, 1020, 380],
          [880, 220, 1020, 380],
          [520, 460, 300, 620],
          [120, 140, 300, 620],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth="1"
          />
        ))}
        {[
          [120, 140, 5],
          [380, 260, 8],
          [620, 120, 4],
          [880, 220, 6],
          [520, 460, 7],
          [780, 500, 4],
          [1020, 380, 5],
          [300, 620, 5],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#F6F3EC" />
        ))}
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs font-mono text-paper/60 mb-8 tracking-wide uppercase">
          <MapPin size={14} className="text-orange" />
          Headquartered in Abuja &middot; Nigeria Chapter
        </div>

        <h1 className="font-display font-semibold text-paper text-[2.5rem] leading-[1.08] sm:text-6xl md:text-[4.25rem] max-w-4xl">
          Nigerian youth, wired for
          impact.
        </h1>

        <p className="mt-7 max-w-xl text-paper/70 text-lg leading-relaxed">
          GYIC Nigeria is the national chapter of the Global Youth Innovation
          Council turning young leaders across Nigeria into a connected
          network of changemakers advancing the UN Sustainable Development
          Goals.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/ambassador"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange text-white font-semibold hover:bg-orange/90 transition-colors"
          >
            Join the Movement
            <ArrowRight size={18} />
          </a>
          <a
            href="#what-we-do"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-paper/25 text-paper font-semibold hover:bg-white/5 transition-colors"
          >
            See what we do
          </a>
        </div>

        <p className="mt-14 font-mono text-xs text-paper/40 tracking-widest uppercase">
          We Innovate &middot; We Lead &middot; We Serve &middot; We Impact
        </p>
      </div>
    </section>
  );
}
