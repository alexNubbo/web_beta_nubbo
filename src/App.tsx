import { lazy, Suspense } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider } from './context/ModalContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CtaSection } from './components/sections/CtaSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { DemoSection } from './components/sections/DemoSection';
import { AboutSection } from './components/sections/AboutSection';
import { ClientsSection } from './components/sections/ClientsSection';
import { CookiesBanner } from './components/ui/CookiesBanner';
import { CookiesPolicyModal } from './components/ui/CookiesPolicyModal';
import { PrivacyPolicyModal } from './components/ui/PrivacyPolicyModal';

const TestimonialsSection = lazy(() =>
  import('./components/sections/TestimonialsSection').then((module) => ({
    default: module.TestimonialsSection,
  })),
);

const ContactSection = lazy(() =>
  import('./components/sections/ContactSection').then((module) => ({
    default: module.ContactSection,
  })),
);

const LazyFallback = () => (
  <section className="container mx-auto px-6 py-10">
    <div className="h-24 rounded-3xl bg-white/20 animate-pulse" />
  </section>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-nubbo-gradient pb-20 overflow-x-hidden">
      <Navbar />

      <main id="main">
        <HeroSection />
        <CtaSection />
        <BenefitsSection />
        <FeaturesSection />
        <DemoSection />
        <AboutSection />
        <ClientsSection />

        <Suspense fallback={<LazyFallback />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<LazyFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
      <CookiesBanner />
      <PrivacyPolicyModal />
      <CookiesPolicyModal />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <LandingPage />
      </ModalProvider>
    </LanguageProvider>
  );
}
