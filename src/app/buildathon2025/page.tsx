import {
  BuildathonRecap,
  EventHighlights,
  EventSchedule,
  SpeakersSchedule,
  WhyParticipate,
  SponsorsSection,
  CommunityPartners,
  FaqSection,
  HeroSection,
  FormsSection,
  SpeakersSection,
  CallToActionBanner,
} from "@/components/2025";

export default function Home() {
  return (
    <>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <HeroSection/>
        </section>
        

        {/* Forms Section */}
        <div id="convocatorias">
          <FormsSection  />
        </div>

        {/* Recap Video   */}
        <section className="py-20" id="recap-video"  >
          <BuildathonRecap />
          <CallToActionBanner />
        </section>

        {/* why be part of buildathon   */}
        <section className="py-20" id="why-buildathon"  >
          <WhyParticipate />
          <CallToActionBanner />
        </section>

         
        {/* Speakers */}
        <section className="py-20" id="speakers"  >
          <SpeakersSection />
        </section>

        {/* Sponsors */}
        <section className="py-20" id="sponsors"  >
          <SponsorsSection />
        </section>

        {/* Communities */}
        <section className="py-20" id="communities"  >
          <CommunityPartners />
        </section>

      {/* Highlights */}
      <section className="py-20" id="highlights"  >
        <EventHighlights />
         
      </section>

      {/* Event Schedule */}
      <section className="py-20" id="events-schedule"  >
        <EventSchedule />
      </section>

      {/* Speaker Schedule */}
      <section className="py-20" id="speakers-schedule"  >
        <SpeakersSchedule /> 
      </section>

      
      {/* FAQ */}
      <section className="py-20" id="faq"  >
        <FaqSection />
        <CallToActionBanner />
      </section>
     
    </>
  )
}
