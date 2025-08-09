import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { WebAssistant } from '@/components/ui/web-assistant';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

const experienceData: ExperienceItem[] = [
  {
    company: 'Garuda Aerospace',
    position: 'R&D Engineer',
    duration: '2023 - Present',
    location: 'Chennai, India',
    type: 'Full-time',
    description:
      'Leading research and development initiatives in drone technology and automation systems. Developing innovative solutions for smart automation and robotics applications.',
    technologies: ['Drone Systems', 'Robotics', 'Python', 'Machine Learning', 'CAD Design'],
    achievements: [
      'Developed autonomous drone navigation systems',
      'Led team of 5 engineers in R&D projects',
      'Published 3 research papers on drone automation',
    ],
  },
  {
    company: 'Tech Innovation Lab',
    position: 'Robotics Intern',
    duration: '2022 - 2023',
    location: 'Bangalore, India',
    type: 'Internship',
    description:
      'Worked on cutting-edge robotics projects, focusing on machine learning integration and autonomous systems development.',
    technologies: ['ROS', 'Computer Vision', 'TensorFlow', 'Arduino', 'Raspberry Pi'],
    achievements: [
      'Built autonomous robotic arm with ML integration',
      'Improved system efficiency by 40%',
      'Collaborated with cross-functional teams',
    ],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Journey
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of my professional experience and achievements in the field of automation and robotics.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experienceData.map((experience, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline Line */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-8 top-24 w-px h-24 bg-gradient-to-b from-primary to-transparent" />
                )}

                <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 p-8">
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Timeline Dot */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                      <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-neon-primary" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-11 space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{experience.position}</h3>
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              <Building className="w-5 h-5" />
                              {experience.company}
                            </div>
                          </div>
                          <Badge variant="outline" className="w-fit">
                            {experience.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Technologies &amp; Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          <Award className="w-5 h-5 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <ContactSection />
      <Footer />
      <WebAssistant />
    </div>
  );
}
