import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import WebApplicationDevelopment from "./pages/expertise/WebApplicationDevelopment";
import ExperienceDesign from "./pages/expertise/ExperienceDesign";
import DigitalMarketing from "./pages/expertise/DigitalMarketing";
import StrategyInsights from "./pages/expertise/StrategyInsights";
import ClientServices from "./pages/expertise/ClientServices";
import AIConsulting from "./pages/expertise/AIConsulting";
import Websites from "./pages/services/Websites";
import CmsEcommerce from "./pages/services/CmsEcommerce";
import SystemIntegrations from "./pages/services/SystemIntegrations";
import OnsiteSearch from "./pages/services/OnsiteSearch";
import Projects from "./pages/Projects";
import WebPlatforms from "./pages/platforms/WebPlatforms";
import MobilePlatforms from "./pages/platforms/MobilePlatforms";
import Ecommerce from "./pages/platforms/Ecommerce";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import ScalableArchitecture from "./pages/blogs/ScalableArchitecture";
import BlogDetail from "./pages/blogs/BlogDetail";
import PremiumTemplates from "./pages/PremiumTemplates/PremiumTemplates";








import ExpertiseDetail from "./pages/ExpertiseDetail";

function Placeholder({ title }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-4xl font-extrabold text-slate-900">{title}</h1>
      <p className="mt-3 text-slate-600">Coming soon…</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/expertise/web-application-development" element={<WebApplicationDevelopment />} />
        <Route path="/expertise/experience-design" element={<ExperienceDesign />} />
        <Route path="/expertise/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/expertise/strategy-insights" element={<StrategyInsights />} />
        <Route path="/expertise/client-services" element={<ClientServices />} />
        <Route path="/expertise/ai-consulting" element={<AIConsulting />} />

        <Route path="/platforms/web-platforms" element={<WebPlatforms />} />
        <Route path="/platforms/mobile-platforms" element={<MobilePlatforms />} />
        <Route path="/platforms/e-commerce" element={<Ecommerce />} />


        <Route path="/premium-templates" element={<PremiumTemplates />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Placeholder title="Search" />} />

        <Route path="/services/websites" element={<Websites />} />
<Route path="/services/cms-ecommerce" element={<CmsEcommerce />} />
<Route path="/services/system-integrations" element={<SystemIntegrations />} />
<Route path="/services/onsite-search" element={<OnsiteSearch />} />

<Route path="/projects" element={<Projects />} />
<Route path="/blogs/scalable-architecture" element={<ScalableArchitecture />} />
<Route path="/blogs/:slug" element={<BlogDetail />} />


        <Route path="/expertise/:slug" element={<ExpertiseDetail />} />

        <Route path="*" element={<Placeholder title="Page Not Found" />} />
      </Routes>
    </>
  );
}
