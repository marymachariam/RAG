import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactCTA() {
  return (
    <section id="join" className="bg-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-orange px-8 py-14 md:px-16 md:py-20 text-center">
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-white leading-tight max-w-2xl mx-auto">
            Ready to lead where you are?
          </h2>
          <p className="mt-5 text-white/85 max-w-lg mx-auto">
            Become an ambassador, bring a project to your campus, or partner
            with us on something bigger. Reach to us now.
          </p>
        </div>

        <div className="max-w-2xl mx-auto -mt-10 relative">
          <ContactForm />
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Mail size={18} className="text-green shrink-0" />
            <span className="text-ink/70 text-sm font-mono">
              globalyouthinnovation@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Phone size={18} className="text-green shrink-0" />
            <span className="text-ink/70 text-sm font-mono">
              +234 803 569 5352
            </span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <MapPin size={18} className="text-green shrink-0" />
            <span className="text-ink/70 text-sm font-mono">
              Abuja, Nigeria
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}