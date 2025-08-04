import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg md:text-xl text-muted-foreground mb-4">
              Hello, I'm
            </h2>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-neon animate-neon-pulse">
                Kishore BV
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-4xl text-foreground mb-8">
              Full Stack Developer & 
              <span className="text-transparent bg-clip-text bg-gradient-secondary ml-2">
                3D Enthusiast
              </span>
            </h3>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technologies. 
              Passionate about creating innovative solutions that bridge the gap between 
              imagination and reality.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon-primary transition-all duration-300 group"
            >
              <span className="group-hover:animate-glow">View My Work</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary-glow transition-all duration-300"
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {['React', 'Three.js', 'Node.js', 'AI/ML'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};