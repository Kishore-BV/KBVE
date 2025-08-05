import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Lifebuoy Rescue Drone",
    description: "Advanced drone system for water rescue operations with autonomous lifebuoy deployment, GPS tracking, and real-time communication for emergency response teams.",
    image: "/api/placeholder/600/400",
    technologies: ["Arduino", "GPS", "Wireless Communication", "CAD Design", "Flight Control"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { stars: 134, forks: 28 },
    category: "Drone Systems"
  },
  {
    id: 2,
    title: "Intelligent Traffic Management System",
    description: "ML-powered traffic signal control system with predictive analytics for optimizing traffic flow and reducing congestion in urban areas.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Machine Learning", "OpenCV", "TensorFlow", "IoT Sensors"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { stars: 89, forks: 23 },
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Mobile Manipulator Robot",
    description: "Autonomous mobile robot with manipulator arm for pharmaceutical delivery and material handling in medical facilities.",
    image: "/api/placeholder/600/400",
    technologies: ["ROS", "Arduino", "Servo Control", "Path Planning", "Computer Vision"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 67, forks: 15 },
    category: "Robotics"
  },
  {
    id: 4,
    title: "Solar Panel Cleaning Drone",
    description: "Automated drone system for solar panel maintenance with cleaning mechanisms, efficiency monitoring, and predictive maintenance scheduling.",
    image: "/api/placeholder/600/400",
    technologies: ["Flight Control", "Cleaning Mechanism", "IoT", "Data Analytics", "CAD"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 95, forks: 21 },
    category: "Drone Systems"
  },
  {
    id: 5,
    title: "Maze Solver Robot",
    description: "Intelligent maze-solving robot using advanced algorithms and sensor fusion for autonomous navigation and obstacle avoidance.",
    image: "/api/placeholder/600/400",
    technologies: ["Arduino", "Ultrasonic Sensors", "Algorithm Design", "Motor Control", "Mapping"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 45, forks: 12 },
    category: "Robotics"
  },
  {
    id: 6,
    title: "CAD Design & Analysis Suite",
    description: "Comprehensive CAD project portfolio including reverse engineering, topology optimization, and structural analysis for aerospace components.",
    image: "/api/placeholder/600/400",
    technologies: ["SolidWorks", "ANSYS", "FEA", "CFD", "Topology Optimization"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { stars: 78, forks: 18 },
    category: "CAD Design"
  }
];

const categories = ['All', 'Drone Systems', 'AI/ML', 'Robotics', 'CAD Design'];

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