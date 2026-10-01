import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="GYIC Nigeria"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-display font-semibold text-paper text-[15px] tracking-tight leading-none">
            GYIC <span className="text-orange">Nigeria</span>
          </span>
        </a>
        <p className="text-paper/40 text-xs font-mono text-center">
          Innovate. Lead. Serve. Impact. &copy; {new Date().getFullYear()}{" "}
          Global Youth Innovation Council, Nigeria Chapter.
        </p>
      </div>
    </footer>
  );
}
