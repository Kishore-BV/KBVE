import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ContactButton } from '@/components/ui/ContactButton';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background/50 border-t border-primary/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo and Brand */}
          <motion.div 
            className="flex flex-col items-center md:items-start space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/Innovative Wordmark Logo with Robotic Arm.png" 
              alt="Kishore BV Logo" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Crafting immersive digital experiences with cutting-edge technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-center">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <SocialLinks variant="ghost" size="icon" className="justify-center mb-4" />
            <ContactButton 
              className="shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
            />
            <p className="text-sm text-muted-foreground text-center mt-4">
              Let's work together!
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-8 border-t border-primary/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} Kishore BV. All rights reserved. Built with cutting-edge technologies.
            © {currentYear} Kishore BV. All rights reserved. Built with cutting-edge technologies.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}; 