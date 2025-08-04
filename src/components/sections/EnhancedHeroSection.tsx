import { motion } from 'framer-motion';
import { TypingAnimation } from '@/components/ui/typing-animation';
import { CodeBlock } from '@/components/ui/code-block';
import { SkillCard } from '@/components/ui/skill-card';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const EnhancedHeroSection = () => {
  const typingTexts = [
    'Full Stack Developer',
    '3D Web Specialist',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const codeExample = `// Bringing ideas to life with code
const developer = {
  name: "Kishore BV",
  passion: "Creating immersive experiences",
  skills: ["React", "Three.js", "Node.js", "AI/ML"],
  mission: "Bridge imagination with reality"
};

export default developer;`;

  const skills = [
    { name: 'React', level: 95, category: 'frontend' as const },
    { name: 'Node.js', level: 90, category: 'backend' as const },
    { name: 'Three.js', level: 85, category: 'frontend' as const },
    { name: 'Python', level: 88, category: 'backend' as const },
    { name: 'Docker', level: 82, category: 'tools' as const },
    { name: 'React Native', level: 78, category: 'mobile' as const }
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
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Greeting & Name */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-mono">
                <span className="w-8 h-px bg-accent"></span>
                <span>Hello World, I'm</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-neon animate-neon-pulse">
                  Kishore BV
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-foreground">
                <TypingAnimation 
                  texts={typingTexts}
                  className="text-transparent bg-clip-text bg-gradient-secondary"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Passionate about creating cutting-edge digital experiences that blend 
                <span className="text-primary"> innovative technology</span> with 
                <span className="text-secondary"> creative design</span>. 
                I specialize in full-stack development and immersive 3D web applications.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon-primary transition-all duration-300 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                View Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 hover:border-accent-glow"
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
            className="space-y-8"
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
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                <span className="text-accent font-mono">&gt;</span> Core Technologies
              </h3>
              <div className="grid grid-cols-2 gap-3">
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