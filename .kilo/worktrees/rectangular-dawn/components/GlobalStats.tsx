const STATS = [
  { value: "42+", label: "Countries" },
  { value: "300+", label: "Ambassadors" },
  { value: "4", label: "Continents" },
];

export default function GlobalStats() {
  return (
    <section className="bg-gradient-to-r from-green via-blue to-navy py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-white/70 mb-8 text-center">
          Part of the Global GYIC Network
        </p>
        <div className="grid grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display font-semibold text-4xl md:text-6xl text-white">
                {s.value}
              </div>
              <div className="text-white/70 text-sm mt-2 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
