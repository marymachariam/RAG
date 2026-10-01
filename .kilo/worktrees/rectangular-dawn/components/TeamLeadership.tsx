"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const LEADERS = [
  {
    name: "Emmanuel",
    role: "Director of Public Health & Community Impact",
    image: "/person1.png",
    bio: "Emmanuel is a DVM candidate, emerging public health researcher, and health systems scientist with a focus on program evaluation, antimicrobial resistance governance, and One Health policy at the human-animal-environment interface. He led the GYIC Public Health and Data Science Leadership Program (2026) and co-led the National Youth Antimicrobial Resistance campaign, NAYAMR (2025), coordinated by UDUYAS. Beyond GYIC, he is a mentee at the 2025 Africa Young Scientist program, a Pioneer ambassador at the Cameroon One Health Access Network (COHAN), and among the top 20% selected within Nigeria's Youth AMR Community of Practice coordinated by the NCDC.",
  },
  {
    name: "Onaopemipo Famori",
    role: "Director of International Relations / PRO",
    image: "/person2.png",
    bio: "Known as the Gentlewoman Of The Press, Onaopemipo is a broadcast journalist and certified public speaker with a strong interest in career growth, leadership, and communication. She is also a Country Ambassador for the Global Youth Innovation Council and an alumna of the Aspire Institute (2025), an initiative of Harvard Business School. She's passionate about helping students and early-career professionals position themselves intentionally and build meaningful professional connections, guiding young people on strategic networking through platforms like LinkedIn.",
  },
  {
    name: "Gbadamosi Abdullahi Faruq",
    role: "Country Director, Nigeria",
    image: "/person3.png",
    bio: "A fourth-year medical student at Usmanu Danfodiyo University, Sokoto, Faruq leads national initiatives that empower young people through leadership, innovation, education and community engagement. He also serves as Regional Lead for Africa and the Global South (Medicine) with the Planetary Health Report Card. His interests span public health, epidemiology, climate change and health, digital health, AI in healthcare, and antimicrobial resistance, with a commitment to translating evidence into policy and impact across Africa.",
  },
  {
    name: "Matemilola Samuel Oluwatimilehin",
    role: "National Director",
    image: "/person6.jpeg",
    bio: "A youth leader, civic advocate, researcher, and digital innovation organizer dedicated to expanding access to education, leadership development, and technology for social good across Africa. Samuel serves as Director for West Africa at SDG Youth Connect and Vice President/Director of Research at the Lagos State University Research Society. He was recognized among the 1000 Gen Z Nigerian Influencers 2026 and has spoken at international forums including the 2025 International Youth Day Event in Kenya.",
  },
  {
    name: "Maryam Yusuf",
    role: "Director of Capacity Building",
    image: "/person5.png",
    bio: "An undergraduate of Medicine and Surgery at Lagos State University, Maryam is passionate about developing young leaders through capacity building, advocacy, and initiatives that advance sustainable community development. She believes youth are powerful catalysts for advancing peace, education, innovation and the Sustainable Development Goals, and holds several other leadership positions across youth and education-focused initiatives.",
  },
  {
    name: "Amatullah Isah Musa",
    role: "National Technical & Documentation Officer",
    image: "/person4.png",
    bio: "Serves as National Technical and Documentation Officer for GYIC Nigeria.",
  },
];

export default function TeamLeadership() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="structure" className="bg-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-green">
            Our Leadership
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy mt-4">
            The people behind GYIC Nigeria.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERS.map((person) => {
            const isOpen = expanded === person.name;
            return (
              <div
                key={person.name}
                className="rounded-2xl bg-white border border-navy/8 p-7 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-green/30 mb-4 shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display font-semibold text-navy text-base">
                  {person.name}
                </span>
                <span className="text-orange text-sm font-medium mt-1">
                  {person.role}
                </span>

                <p
                  className={`text-ink/65 text-sm mt-4 leading-relaxed text-left ${
                    isOpen ? "" : "line-clamp-3"
                  }`}
                >
                  {person.bio}
                </p>

                <button
                  onClick={() => setExpanded(isOpen ? null : person.name)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-green hover:underline"
                >
                  {isOpen ? "Show less" : "Read more"}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}