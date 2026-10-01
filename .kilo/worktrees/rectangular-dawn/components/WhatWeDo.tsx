import {
  Users,
  Lightbulb,
  Leaf,
  GraduationCap,
  Handshake,
  Megaphone,
} from "lucide-react";

const GROUPS = [
  {
    icon: Users,
    title: "People & Leadership",
    items: ["Leadership Development", "Youth Mentorship", "Volunteer Engagement"],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    items: ["Research & Innovation", "Digital Skills Development", "Capacity Building"],
  },
  {
    icon: Leaf,
    title: "Health & Climate",
    items: ["Public Health Advocacy", "Climate Action"],
  },
  {
    icon: GraduationCap,
    title: "Community & Education",
    items: ["Community Development", "Education & SDG Awareness"],
  },
  {
    icon: Handshake,
    title: "Partnerships",
    items: ["Strategic Partnerships", "International Networking"],
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-green">
              What We Do
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy mt-4">
              Programs across five fronts.
            </h2>
          </div>
          <Megaphone className="text-orange/70 hidden sm:block" size={32} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl bg-white border border-navy/8 p-7 hover:border-green/40 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center mb-5">
                <Icon size={19} className="text-green" />
              </div>
              <h3 className="font-display font-semibold text-navy text-lg mb-3">
                {title}
              </h3>
              <ul className="space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="text-ink/65 text-sm">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
