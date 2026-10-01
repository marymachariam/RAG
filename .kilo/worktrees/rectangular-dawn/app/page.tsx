import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import WhatWeDo from "@/components/WhatWeDo";
import FlagshipProjects from "@/components/FlagshipProjects";
import TeamLeadership from "@/components/TeamLeadership";
import GlobalStats from "@/components/GlobalStats";
import WhyJoin from "@/components/WhyJoin";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <WhatWeDo />
        <FlagshipProjects />
        <TeamLeadership />
        <GlobalStats />
        <WhyJoin />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
