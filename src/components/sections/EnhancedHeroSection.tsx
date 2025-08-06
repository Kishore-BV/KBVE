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
    { name: 'AI AGENTS', level: 90, category: 'programming' as const }
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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kishore_BV_Resume.pdf';
    link.download = 'Kishore_BV_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative h-screen w-full overflow-hidden pt-4">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Scene3D />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />


      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full h-full">
          
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 w-full space-y-6 text-center lg:text-left flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 text-accent font-mono text-sm lg:text-base justify-center lg:justify-start">
                <span className="w-8 h-px bg-accent"></span>
                <span>Hello World, I'm</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-neon animate-neon-pulse">Kishore BV</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl text-foreground">
                <TypingAnimation
                  texts={typingTexts}
                  className="text-transparent bg-clip-text bg-gradient-secondary"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Driven Automation & Robotics Engineering undergraduate with hands-on experience in
                <span className="text-primary"> R&D</span>, 
                <span className="text-secondary"> drone systems</span>, and 
                <span className="text-accent"> machine learning applications</span>. Specializing in smart automation solutions that bridge theoretical knowledge with real-world innovation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-neon-primary transition-all duration-300 group px-8 py-3 text-lg">
                <ExternalLink className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 hover:border-accent-glow px-8 py-3 text-lg"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kishore@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a href={href} aria-label={label}>
                    <Icon className="w-6 h-6" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full space-y-8 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants}>
              <CodeBlock code={codeExample} language="javascript" title="" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-foreground">
                <span className="text-accent font-mono">&gt;</span> Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants} transition={{ delay: index * 0.1 }}>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
