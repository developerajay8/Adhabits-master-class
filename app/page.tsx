import ClientTestimonials from "./components/clienttestimonialssection";
import CoachSection from "./components/coachsection";
import ContentCashSystem from "./components/contentcashsystem";
import FAQSection from "./components/faqsection";
import Herosection from "./components/herosection";
import LeadFormPopup from "./components/leadformpopup";
import ModulesSections from "./components/modulesection";
import PainPointsSection from "./components/painpointsection";
import StickyCTA from "./components/stickycta";
import VideoTestimonialsSection from "./components/videotestimonialssection";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <VideoTestimonialsSection/>
      <ClientTestimonials/>
      <PainPointsSection/>
      <ModulesSections/>
      <CoachSection/>
      <ContentCashSystem/>
      <FAQSection/>
      <StickyCTA/>
      <LeadFormPopup/>

    </div>
  );
}
