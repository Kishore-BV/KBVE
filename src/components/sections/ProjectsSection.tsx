import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description: "An immersive 3D portfolio built with React Three Fiber featuring advanced animations and interactive elements.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Three.js", "GSAP", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Dashboard",
    description: "Full-stack dashboard with machine learning insights and real-time data visualization.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js"],
    liveLink: "#",
    githubLink: "#",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with microservices architecture and advanced payment integration.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 4,
    title: "VR Experience App",
    description: "Virtual reality application for immersive training and education experiences.",
    image: "/api/placeholder/400/250",
    technologies: ["Unity", "C#", "WebXR", "Blender"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-glow">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-neon">Featured</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work showcasing cutting-edge technologies 
            and innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`group h-full glass border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-cyberpunk overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {project.featured && (
                    <Badge 
                      className="absolute top-4 left-4 bg-gradient-secondary text-secondary-foreground"
                    >
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
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
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm"
                      className="bg-gradient-primary hover:shadow-neon-primary transition-all duration-300"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10 hover:border-accent-glow"
                    >
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
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
            className="border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary-glow"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};