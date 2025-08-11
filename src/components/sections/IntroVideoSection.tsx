import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const IntroVideoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="w-full bg-background/50 backdrop-blur-sm border-t border-border/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-neon animate-neon-pulse">GET TO KNOW ME</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let's connect and create something amazing together!
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/30 mb-8">
            <video 
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6"
              controls 
              poster="SF1.png"
              preload="metadata"
              aria-label="Self introduction video"
            >
              <source src="Self Intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button 
                asChild 
                variant="outline" 
                className="gap-2 hover:bg-primary/10 transition-colors"
              >
                <a href="https://github.com/Kishore-BV" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="gap-2 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
              >
                <a href="https://www.linkedin.com/in/kishore-bv-521133229" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="gap-2 hover:bg-red-500/10 hover:text-red-500 transition-colors"
              >
                <a href="mailto:Kishorebv612@gmail.com" className="flex items-center">
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
