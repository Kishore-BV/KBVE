import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { EnhancedHeroSection } from '@/components/sections/EnhancedHeroSection';
import { EnhancedProjectsSection } from '@/components/sections/EnhancedProjectsSection';
import { WebAssistant } from '@/components/ui/web-assistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <EnhancedHeroSection />
        <EnhancedProjectsSection />
      </main>
      <Footer />
      <WebAssistant />
    </div>
  );
};

export default Index;
