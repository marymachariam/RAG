export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-green">
              About Us
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-navy mt-4 leading-tight">
              One global council,
              <br />a growing Nigerian network.
            </h2>
          </div>

          <div className="space-y-6 text-ink/75 text-[17px] leading-relaxed">
            <p>
              The Global Youth Innovation Council (GYIC) is an international,
              youth-led organization built around one idea:{" "}
              <span className="text-navy font-medium">
                &ldquo;Global Youth, Global Impact.&rdquo;
              </span>{" "}
              It connects young people across countries to design solutions
              for local and global challenges, in step with the UN
              Sustainable Development Goals.
            </p>
            <p>
              <span className="text-navy font-medium">GYIC Nigeria</span> is
              the national coordinating body bringing that vision home.
              Headquartered in Abuja, the chapter works with students, young
              professionals, community leaders, researchers, entrepreneurs
              and development partners to run programs across education,
              leadership, climate action, public health, and entrepreneurship
              building, one state and one campus at a time, a nationwide
              network of young leaders creating lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
