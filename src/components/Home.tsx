import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Workflow from "../components/Workflow";
import ServicesSection from "./ServicesSection";
import PurposeSection from "./PurposeSection";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Slider />
      <Workflow />
      <ServicesSection />
      <PurposeSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
