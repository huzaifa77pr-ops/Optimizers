import Achievements from "../components/Achievements";
import ContactFormSection from "../components/ContactFormSection";
import CoreServices from "../components/CoreServices";
import ExpertiseSection from "../components/ExpertiseSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseSection/>
      <Achievements/>
      <CoreServices/>
      <Testimonials/>
      <ContactFormSection/>
      <Footer/>
    </main>
  );
}
