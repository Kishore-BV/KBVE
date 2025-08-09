import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { EnhancedProjectsSection } from '@/components/sections/EnhancedProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { WebAssistant } from '@/components/ui/web-assistant';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <EnhancedProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <WebAssistant />
    </div>
  );
};

export default Projects;