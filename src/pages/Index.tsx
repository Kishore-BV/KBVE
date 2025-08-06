import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { EnhancedHeroSection } from '@/components/sections/EnhancedHeroSection';
import { EnhancedProjectsSection } from '@/components/sections/EnhancedProjectsSection';
import { WebAssistant } from '@/components/ui/web-assistant';

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 80;
          const offsetTop = element.offsetTop - navHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }, 100); // Delay to ensure DOM is ready
    }
  }, [location.state]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <EnhancedHeroSection />
        {/* <EnhancedProjectsSection /> Removed, now on /projects */}
      </main>
      <Footer />
      <WebAssistant />
    </div>
  );
};

export default Index;
