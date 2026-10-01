const BENEFITS = [
  "Leadership Experience",
  "Capacity Building",
  "National & International Networking",
  "Mentorship",
  "Research Collaboration",
  "Volunteer Experience",
  "Project Management",
  "Scholarships & Fellowship Information",
  "Professional Certificates",
  "Community Impact",
  "Career Development",
];

export default function WhyJoin() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest text-orange">
          Why Join GYIC Nigeria?
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mt-4 mb-12 max-w-xl">
          Every young person can be a catalyst for change.
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
          {BENEFITS.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
              <span className="text-paper/80 text-[15px]">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
