import { motion } from 'framer-motion';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { CodeBlock } from '@/components/ui/code-block';
import { SkillCard } from '@/components/ui/skill-card';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const EnhancedHeroSection = () => {
  const typingTexts = [
    'Robotics Engineer',
    'Drone Systems Developer',
    'ML & AI Specialist',
    'CAD Design Expert',
    'R&D Innovator'
  ];

  const codeExample = `// Automation & Robotics Engineering
const engineer = {
  name: "Kishore BV",
  field: "Automation & Robotics Engineering",
  specialization: ["Drones", "ML", "CAD", "Robotics"],
  experience: "R&D at Garuda Aerospace",
  mission: "Smart automation for the future"
};

export default engineer;`;

  const skills = [
    { name: 'Robotics', level: 95, category: 'engineering' as const },
    { name: 'Drone Systems', level: 92, category: 'engineering' as const },
    { name: 'Machine Learning', level: 88, category: 'ai' as const },
    { name: 'CAD Design', level: 90, category: 'design' as const },
    { name: 'Python', level: 85, category: 'programming' as const },
    { name: 'MATLAB', level: 80, category: 'programming' as const }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center h-full py-8 lg:py-12 max-w-7xl mx-auto">
          
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3 space-y-6 lg:space-y-8 flex flex-col justify-center h-full"
          >
            {/* Greeting & Name */}
            <motion.div variants={itemVariants} className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-2 text-accent font-mono text-sm lg:text-base">
                <span className="w-6 lg:w-8 h-px bg-accent"></span>
                <span>Hello World, I'm</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-neon animate-neon-pulse">
                  Kishore BV
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-foreground">
                <TypingAnimation 
                  texts={typingTexts}
                  className="text-transparent bg-clip-text bg-gradient-secondary"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Driven Automation & Robotics Engineering undergraduate with hands-on experience in 
                <span className="text-primary"> R&D</span>, 
                <span className="text-secondary"> drone systems</span>, and 
                <span className="text-accent"> machine learning applications</span>. 
                Specializing in smart automation solutions that bridge theoretical knowledge with real-world innovation.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon-primary transition-all duration-300 group flex-1 sm:flex-none"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                View Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 hover:border-accent-glow flex-1 sm:flex-none"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kishore@example.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a href={href} aria-label={label}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6 lg:space-y-8 flex flex-col justify-center h-full"
          >
            {/* Code Block */}
            <motion.div variants={itemVariants}>
              <CodeBlock
                code={codeExample}
                language="javascript"
                title="developer.js"
              />
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-foreground">
                <span className="text-accent font-mono">&gt;</span> Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-mono text-muted-foreground">scroll down</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};