import Footer from "../components/Footer";
import AIProjectsSection from "../components/Projects/AIProjectsSection";
import AppDevelopmentProjectsSection from "../components/Projects/AppDevelopmentProjectsSection";
import DigitalMarketingProjectsSection from "../components/Projects/DigitalMarketingProjectsSection";
import ProjectsHeading from "../components/Projects/ProjectsHeading";
import ProjectsHero from "../components/Projects/ProjectsHero";
import SoftwareProjectsMobilesSection from "../components/Projects/SoftwareProjectsMobilesSection";
import WebProjectsSection from "../components/Projects/WebProjectsSection";

export default function Projects() {
  return (
    <main className="w-full bg-[#05070b] text-white">
      <ProjectsHero />
      <ProjectsHeading/>
      <WebProjectsSection/>
      <DigitalMarketingProjectsSection/>
      <AppDevelopmentProjectsSection/>
      <AIProjectsSection/>
      <SoftwareProjectsMobilesSection/>
      <Footer/>
    </main>
  );
}
