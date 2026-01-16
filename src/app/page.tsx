import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import ExploreSection from "./components/ExploreSection";
import SpeakersSection from "./components/SpeakersSection";
import ExpertHighlight from "./components/ExpertHighlight";
import InsightsSection from "./components/InsightsSection";
import AgendaSection from "./components/AgendaSection";
import RSVPSection from "./components/RSVPSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <OverviewSection />
      <ExploreSection />
      <SpeakersSection />
      <ExpertHighlight />
      <InsightsSection />
      <AgendaSection />
      <RSVPSection />
      <Footer />
    </>
  );
}
