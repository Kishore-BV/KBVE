import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/ui/SocialLinks';

export const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-background/50 backdrop-blur-sm border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold"
            variants={itemVariants}
          >
            <span className="text-neon animate-neon-pulse">Let's Connect</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Interested in working together or have a question? Feel free to reach out through any of these platforms.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <SocialLinks 
              variant="outline" 
              size="lg"
              className="gap-4"
            />
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground pt-4"
            variants={itemVariants}
          >
            I'll get back to you as soon as possible!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
