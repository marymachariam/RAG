const VALUES = [
  "Leadership",
  "Innovation",
  "Integrity",
  "Excellence",
  "Collaboration",
  "Inclusiveness",
  "Volunteerism",
  "Sustainability",
  "Accountability",
  "Service",
];

export default function VisionMission() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 md:gap-10">
          <div className="border-t border-white/15 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-blue">
              Our Vision
            </span>
            <p className="mt-5 font-display text-2xl md:text-[1.75rem] leading-snug text-paper">
              A generation of innovative young leaders creating sustainable
              solutions for local and global challenges contributing
              meaningfully to the Sustainable Development Goals.
            </p>
          </div>

          <div className="border-t border-white/15 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-green">
              Our Mission
            </span>
            <ul className="mt-5 space-y-3 text-paper/75 text-[17px]">
              <li>Empower young people through leadership development</li>
              <li>Promote innovation and entrepreneurship</li>
              <li>Build future changemakers</li>
              <li>Foster partnerships for sustainable development</li>
              <li>Implement impactful community projects</li>
              <li>Strengthen youth participation in national development</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <span className="font-mono text-xs uppercase tracking-widest text-orange">
            Core Values
          </span>
          <div className="mt-6 flex flex-wrap gap-3">
            {VALUES.map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full border border-white/15 text-paper/80 text-sm font-medium hover:border-orange/60 hover:text-paper transition-colors"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
