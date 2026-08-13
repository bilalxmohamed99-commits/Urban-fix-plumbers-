import React, { useState } from 'react';
import { Header } from './components/Header';
import { StickyMobileBar } from './components/StickyMobileBar';
import { HeroSection } from './components/HeroSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { EmergencyDiagnostic } from './components/EmergencyDiagnostic';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { RealProjectsGallery } from './components/RealProjectsGallery';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { EmergencyDarkSection } from './components/EmergencyDarkSection';
import { BookingFormSection } from './components/BookingFormSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PlumbingService } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<PlumbingService | null>(null);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    const bookElement = document.getElementById('book');
    if (bookElement) {
      bookElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pb-16 md:pb-0 selection:bg-sky-500 selection:text-white">
      {/* Header Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={(sec) => setActiveSection(sec)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* High Conversion Emergency Banner */}
        <EmergencyBanner />

        {/* Diagnostic Tool */}
        <EmergencyDiagnostic />

        {/* 8 Services Grid */}
        <ServicesSection
          onSelectService={(serv) => setSelectedServiceForModal(serv)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Why Choose Urban Fix Plumbers */}
        <WhyChooseUs />

        {/* How It Works (3 Steps) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* Customer Reviews & Google Rating */}
        <ReviewsSection />

        {/* Service Areas Local SEO Grid */}
        <ServiceAreasSection />

        {/* Real-World Projects Gallery */}
        <RealProjectsGallery />

        {/* Before / After Transformations */}
        <BeforeAfterSection />

        {/* High Impact 24/7 Emergency Dark Callout */}
        <EmergencyDarkSection />

        {/* Service Booking & Inquiry Form */}
        <BookingFormSection initialServiceId={bookingServiceId} />

        {/* Contact & Map Section */}
        <ContactSection />

        {/* Accordion FAQ Section */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <StickyMobileBar />

      {/* Modal for Service Details */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
