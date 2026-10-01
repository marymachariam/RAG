const PROJECTS = [
  {
    tag: "NSII",
    title: "National School Impact Initiative",
    desc: "A nationwide program bringing leadership and SDG awareness directly into schools.",
  },
  {
    tag: "WEBINAR",
    title: "Monthly Leadership & Capacity Building Series",
    desc: "Recurring sessions building the skills of members across chapters.",
  },
  {
    tag: "SDG VIDEO",
    title: "SDG Video Challenge",
    desc: "A creative competition pushing young Nigerians to communicate the SDGs.",
  },
  {
    tag: "CAMPUS",
    title: "Campus Expansion & Leadership Development",
    desc: "Growing GYIC's presence into new campuses and training campus directors.",
  },
  {
    tag: "OUTREACH",
    title: "Community Outreach Programmes",
    desc: "Direct, on-the-ground projects addressing needs identified by local communities.",
  },
  {
    tag: "HEALTH",
    title: "Public Health Awareness Campaigns",
    desc: "Advocacy and education initiatives on pressing public health issues.",
  },
  {
    tag: "CLIMATE",
    title: "Climate Action Campaigns",
    desc: "Youth-led action addressing climate change at the community level.",
  },
  {
    tag: "INNOVATION",
    title: "Youth Innovation Projects",
    desc: "Supporting original solutions built by young innovators in the network.",
  },
  {
    tag: "SUMMIT",
    title: "International Youth Summit",
    desc: "Connecting GYIC Nigeria's members with the wider global council.",
  },
  {
    tag: "POLICY",
    title: "Research & Policy Development",
    desc: "Contributing youth-informed research to national policy conversations.",
  },
];

export default function FlagshipProjects() {
  return (
    <section id="projects" className="bg-navy-deep py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <span className="font-mono text-xs uppercase tracking-widest text-blue">
          Flagship Projects
        </span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper mt-4 mb-14 max-w-xl">
          Ten programs, one growing network.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {PROJECTS.map((p) => (
            <div
              key={p.tag}
              className="bg-navy-deep p-7 hover:bg-navy transition-colors"
            >
              <span className="font-mono text-[11px] tracking-widest text-orange">
                {p.tag}
              </span>
              <h3 className="font-display font-semibold text-paper text-[1.05rem] mt-3 mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-paper/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
