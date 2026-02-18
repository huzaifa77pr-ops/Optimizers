import ContactFAQ from "../components/contact/ContactFAQ";
import ContactFinalCTA from "../components/contact/ContactFinalCTA";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactHero from "../components/contact/ContactHero";
import ContactMethods from "../components/contact/ContactMethods";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="w-full bg-white">
      <ContactHero />
      <ContactMethods/>
      <ContactFormSection/>
      <ContactFAQ/>
      <ContactFinalCTA/>
      <Footer/>
    </main>
  );
}
