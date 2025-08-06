import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'accolades', label: 'Accolades' }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Smooth background opacity based on scroll
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Smooth active section detection
      const sections = navItems.map(item => item.id);
      const sectionOffsets = sections.map(id => {
        const element = document.getElementById(id);
        return element ? element.offsetTop - 100 : 0;
      });

      const currentSection = sections.reduce((acc, section, index) => {
        if (scrollPosition >= sectionOffsets[index]) {
          return section;
        }
        return acc;
      }, sections[0]);

      setActiveSection(currentSection);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'experience') {
      window.location.href = '/experience';
      return;
    }
    if (sectionId === 'accolades') {
      window.location.href = '/accolades';
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: `rgba(var(--background-rgb), ${backgroundOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'border-b border-primary/20 shadow-lg shadow-primary/10' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex items-center"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src="/Innovative Wordmark Logo with Robotic Arm.png" 
              alt="Kishore BV Logo" 
              className="h-12 w-auto object-contain cursor-pointer"
              onClick={() => scrollToSection('about')}
              whileHover={{ 
                filter: "brightness(1.2)",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          {/* Desktop Navigation Items */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:flex space-x-2"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-6 py-2 font-medium transition-all duration-300 ease-out ${
                      activeSection === item.id 
                        ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105' 
                        : 'hover:text-primary hover:bg-primary/10 hover:scale-105'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-primary rounded-md"
                        style={{ zIndex: -1 }}
                        transition={{ 
                          type: "spring", 
                          bounce: 0.2, 
                          duration: 0.6 
                        }}
                      />
                    )}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: activeSection !== item.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            variants={itemVariants}
            className="md:hidden"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="py-4 space-y-2"
            initial={{ y: -20 }}
            animate={{ y: isMobileMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 : 0 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};