import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="flex items-center justify-center py-24 px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
            
            <motion.h1 
              className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              404
            </motion.h1>
            
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Oops! Page Not Found
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-primary hover:shadow-neon-primary transition-all duration-300"
              >
                <a href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Home
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 hover:border-accent-glow"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default NotFound;
