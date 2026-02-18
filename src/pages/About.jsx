import AboutDifferentiators from "../components/about/AboutDifferentiators";
import AboutFinalCTA from "../components/about/AboutFinalCTA";
import AboutHero from "../components/about/AboutHero";
import AboutMissionVision from "../components/about/AboutMissionVision";
import AboutProcessMini from "../components/about/AboutProcessMini";
import AboutProof from "../components/about/AboutProof";
import AboutStory from "../components/about/AboutStory";
import AboutTeam from "../components/about/AboutTeam";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="w-full bg-[#070A0F]">
      <AboutHero />
      <AboutStory/>
      <AboutMissionVision/>
      <AboutDifferentiators/>
      <AboutProcessMini/>
      <AboutProof/>
      <AboutTeam/>
      <AboutFinalCTA/>
      <Footer/>
    </main>
  );
}
