"use client";
import Image from "next/image";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#projects", label: "Projects" },
  { href: "#structure", label: "Structure" },
  { href: "#join", label: "Join" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="GYIC Nigeria"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-display font-semibold text-paper text-[15px] tracking-tight leading-none">
            GYIC <span className="text-orange">Nigeria</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-paper/70 hover:text-paper transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/ambassador"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-orange text-white text-sm font-semibold hover:bg-orange/90 transition-colors"
        >
          Become an Ambassador
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-paper"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-navy-deep border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-paper/80 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/ambassador"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-orange text-white text-sm font-semibold"
          >
            Become an Ambassador
          </a>
        </nav>
      )}
    </header>
  );
}
