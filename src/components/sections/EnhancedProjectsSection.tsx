import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "3D Portfolio Ecosystem",
    description: "A fully immersive portfolio website built with React Three Fiber, featuring advanced 3D animations, particle systems, and interactive environments.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Three.js", "GSAP", "Tailwind", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { stars: 234, forks: 45 },
    category: "3D Development"
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    description: "Enterprise-grade dashboard with machine learning insights, real-time data visualization, and predictive analytics powered by TensorFlow.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { stars: 189, forks: 67 },
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Microservices E-Commerce",
    description: "Scalable e-commerce platform with microservices architecture, advanced payment processing, and real-time inventory management.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 156, forks: 34 },
    category: "Full Stack"
  },
  {
    id: 4,
    title: "VR Training Platform",
    description: "Virtual reality application for immersive corporate training with hand tracking, spatial audio, and progress analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["Unity", "C#", "WebXR", "Blender", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 298, forks: 78 },
    category: "VR/AR"
  },
  {
    id: 5,
    title: "Smart IoT Dashboard",
    description: "Real-time IoT monitoring system with predictive maintenance alerts, energy optimization, and mobile companion app.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Python", "MQTT", "InfluxDB", "Grafana"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 123, forks: 29 },
    category: "IoT"
  },
  {
    id: 6,
    title: "Blockchain DeFi Platform",
    description: "Decentralized finance platform with yield farming, staking pools, and automated market making functionality.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Solidity", "Web3.js", "Hardhat", "IPFS"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 445, forks: 156 },
    category: "Blockchain"
  }
];

const categories = ['All', '3D Development', 'AI/ML', 'Full Stack', 'VR/AR', 'IoT', 'Blockchain'];

export const EnhancedProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-glow relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-accent font-mono mb-4">
            <span className="w-8 h-px bg-accent"></span>
            <span>&gt; my work</span>
            <span className="w-8 h-px bg-accent"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-neon">Featured</span> Projects
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing cutting-edge technologies, innovative solutions, 
            and passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`font-mono text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-primary-foreground shadow-neon-primary'
                  : 'border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card 
                className={`group h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-cyberpunk overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <Badge 
                    className="absolute top-4 left-4 bg-card/80 text-foreground border border-primary/30"
                  >
                    {project.category}
                  </Badge>
                  
                  {project.featured && (
                    <Badge 
                      className="absolute top-4 right-4 bg-gradient-secondary text-secondary-foreground"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}

                  {/* GitHub Stats */}
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <div className="flex items-center gap-1 text-xs text-white/80">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/80">
                      <GitFork className="w-3 h-3" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-neon-primary transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10 hover:border-accent-glow"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary-glow font-mono"
          >
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};