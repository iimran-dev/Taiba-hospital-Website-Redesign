import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { HeroSection } from '@/components/sections/HeroSection';
import { CareSearch } from '@/components/sections/CareSearch';
import { QuickAccess } from '@/components/sections/QuickAccess';
import { WhyChooseTaiba } from '@/components/sections/WhyChooseTaiba';
import { CentersOfExcellence } from '@/components/sections/CentersOfExcellence';
import { FindDoctorSection } from '@/components/sections/FindDoctorSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { InsuranceSection } from '@/components/sections/InsuranceSection';
import { HealthPackages } from '@/components/sections/HealthPackages';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { HealthArticles } from '@/components/sections/HealthArticles';
import { MobileAppSection } from '@/components/sections/MobileAppSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pb-20 md:pb-0">
        {/* Hero + Care Search (overlapping) */}
        <HeroSection />
        <CareSearch />

        {/* Quick Access Cards */}
        <QuickAccess />

        {/* Why Choose Taiba */}
        <WhyChooseTaiba />

        {/* Centers of Excellence */}
        <CentersOfExcellence />

        {/* Find Doctor */}
        <FindDoctorSection />

        {/* Statistics */}
        <StatisticsSection />

        {/* Insurance */}
        <InsuranceSection />

        {/* Health Packages */}
        <HealthPackages />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Health Articles */}
        <HealthArticles />

        {/* Mobile App */}
        <MobileAppSection />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}
