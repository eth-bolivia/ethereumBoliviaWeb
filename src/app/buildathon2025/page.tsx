import {
  BuildathonRecap,
  EventHighlights,
  EventSchedule, 
  WhyParticipate,
  SponsorsSection, 
  FaqSection,
  HeroSection,
  FormsSection, 
  CallToActionBanner,
  RoadToBuildathon,
  DetailsSection,
  RegistrationSection,
  CommunityPartners
} from "@/components/2025";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convocatoria y Registro | Buildathon ETH Bolivia 2025', 
  description: 'Revisa todos los detalles de la convocatoria, los tracks, el cronograma y regístrate para la Buildathon 2025. ¡Los cupos son limitados!',
};


export default function Home() {
  return (
    <>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroSection/>
        </section>
        

        {/* Forms Section */}
        <div className="py-5" id="convocatorias">
          <FormsSection  />
        </div>

        {/* Recap Video   */}
        <section className="py-10" id="recap-video"  >
          <BuildathonRecap />
          <CallToActionBanner />
        </section>
        {/* why be part of buildathon   */}
        <section className="py-1" id="details-buildathon"  >
           <DetailsSection/>
        </section>
        {/* why be part of buildathon   */}
        <section className="py-1" id="why-buildathon-section"  >
          <WhyParticipate />
         
        </section>

         
        <section className="py-1 sm:px-15 lg:px-20" id="registration-section"  >
          <RegistrationSection />
        </section>
        
        {/* Speakers 
        <section className="py-20" id="speakers"  >
          <SpeakersSection />
        </section>
        */}

        {/* Sponsors */}
        <section className="py-20" id="sponsors"  >
          <SponsorsSection />
        </section>

        {/* Communities  */}
        <section className="py-20" id="communities"  >
          <CommunityPartners />
        </section>
      

      {/* Highlights */}
      <section className="py-20" id="highlights"  >
        <EventHighlights />
      </section>

      {/* Event Schedule */}
      <section className="py-5" id="events-schedule"  >
        <EventSchedule />
      </section>

      {/* Speaker Schedule 
      <section className="py-20" id="speakers-schedule"  >
        <SpeakersSchedule /> 
      </section>*/}

      
      {/* FAQ */}
      <section className="py-5" id="faq"  >
        <FaqSection />
        <CallToActionBanner />
      </section>

      <RoadToBuildathon/>
     
    </>
  )
}
