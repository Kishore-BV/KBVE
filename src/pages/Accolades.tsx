import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { WebAssistant } from '@/components/ui/web-assistant';
import { ContactSection } from '@/components/sections/ContactSection';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Star, Calendar, Users } from 'lucide-react';

import { asset } from '@/lib/asset';

/* ---------------------- Data ---------------------- */
const certificationsData = [
  {
    title: "Remote Pilot Certificate (Small Class Drones, VLOS)",
    issuer: "DGCA, India",
    year: "2025",
    description: "Certified to operate small-class drones with Visual Line of Sight (VLOS) as per DGCA regulations.",
    icon: Medal,
    color: "text-blue-500",
    category: "Drone Operations",
  image: 'public/1751628616261.jpeg',
  },
  {
    title: "AWS Academy Graduate",
    issuer: "Coursera / Amrita Vishwa Vidyapeetham",
    year: "2022",
    description: "Completed course in AWS Academy.",
    icon: Award,
    color: "text-purple-500",
    category: "AI/ML",
  image: 'public/1703426690812.jpeg',
  },
  {
    title: "CAD Modeling & Analysis",
    issuer: "Amrita Vishwa Vidyapeetham",
    year: "2023",
    description: "Training in CAD design, modeling, and structural analysis for engineering applications.",
    icon: Star,
    color: "text-yellow-500",
    category: "CAD Design",
  image: 'certificates/cad.jpg',
  },
  {
    title: "Actuators and Drives",
    issuer: "Amrita Vishwa Vidyapeetham",
    year: "2022",
    description: "Coursework on actuators, drives, and their integration in robotics systems.",
    icon: Trophy,
    color: "text-green-500",
    category: "Robotics",
  image: 'certificates/actuators.jpg',
  },
] as const;

const accoladesData = [
  {
    title: "Best Innovation Award",
    organization: "National Robotics Championship",
    year: "2023",
    type: "Competition",
    description: "Most innovative autonomous drone navigation system with ML integration.",
    category: "Robotics & AI",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "Outstanding Research Publication",
    organization: "IEEE Robotics Society",
    year: "2023",
    type: "Publication",
    description: "Published on advanced drone automation for industrial applications.",
    category: "Research",
    icon: Award,
    color: "text-blue-500",
  },
  {
    title: "Team Excellence Award",
    organization: "Garuda Aerospace",
    year: "2023",
    type: "Professional",
    description: "Recognized for leadership in R&D and delivering ahead of schedule.",
    category: "Leadership",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Dean's List Recognition",
    organization: "University Engineering Department",
    year: "2022",
    type: "Academic",
    description: "Top 5% academic performance in Automation & Robotics.",
    category: "Academic Excellence",
    icon: Star,
    color: "text-purple-500",
  },
  {
    title: "Hackathon Winner",
    organization: "TechFest Innovation Challenge",
    year: "2022",
    type: "Competition",
    description: "Smart warehouse automation system — first place.",
    category: "Innovation",
    icon: Medal,
    color: "text-orange-500",
  },
] as const;

/* ---------------------- Page ---------------------- */
export default function Accolades() {
  // hooks MUST be inside the component
  const [openCert, setOpenCert] = useState<(typeof certificationsData)[number] | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const contactBtnRef = useRef<HTMLButtonElement | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <Navigation />

  <main className="pt-24 pb-40">
        <div className="container mx-auto px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-secondary">Accolades</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Recognition and achievements in robotics, innovation, and academic excellence
              </p>
            </motion.div>

            {/* Stats Overview */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[{ label: 'Awards Won', value: '5+' },
                  { label: 'Publications', value: '0' },
                  { label: 'Years Experience', value: '3+' },
                  { label: 'Projects Led', value: '8+' }].map((stat, index) => (
                  <Card key={index} className="glass border-primary/20 p-6 text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Accolades List */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                {accoladesData.map((accolade, i) => {
                  const IconComponent = accolade.icon;
                  return (
                    <motion.div key={i} variants={itemVariants}>
                      <Card className="p-6 hover:border-primary/40 border-primary/20 transition-all">
                        <div className="grid lg:grid-cols-12 gap-6 items-start">
                          <div className="lg:col-span-2">
                            <div className="p-4 bg-gradient-primary/10 rounded-2xl group-hover:bg-gradient-primary/20 transition-colors">
                              <IconComponent className={`w-8 h-8 ${accolade.color}`} />
                            </div>
                          </div>

                          <div className="lg:col-span-8 space-y-3">
                            <h3 className="text-2xl font-bold">{accolade.title}</h3>
                            <div className="flex items-center gap-2 text-accent font-semibold">
                              <Award className="w-4 h-4" />
                              {accolade.organization}
                            </div>
                            <p className="text-muted-foreground">{accolade.description}</p>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="border-primary/30 text-primary">
                                {accolade.category}
                              </Badge>
                              <Badge variant="secondary">{accolade.type}</Badge>
                            </div>
                          </div>

                          <div className="lg:col-span-2 flex justify-center lg:justify-end">
                            <div className="flex items-center gap-2 text-primary font-mono font-bold">
                              <Calendar className="w-4 h-4" />
                              {accolade.year}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Certifications Grid */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Certifications
              </h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {certificationsData.map((cert, idx) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group cursor-pointer" onClick={() => setOpenCert(cert)}>
                      <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300 p-8 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-gradient-secondary/10 rounded-xl group-hover:bg-gradient-secondary/20 transition-colors">
                            <IconComponent className={`w-7 h-7 ${cert.color}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{cert.title}</h3>
                            <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 flex-1">{cert.description}</p>

                        <div className="flex items-center justify-between mt-2">
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {cert.category}
                          </Badge>
                          <span className="text-primary font-mono font-bold flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {cert.year}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Certificate Modal */}
              {openCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setOpenCert(null)}>
                  <div className="bg-background rounded-xl shadow-2xl p-6 max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
                    <button className="absolute top-2 right-2 text-xl text-muted-foreground hover:text-primary" onClick={() => setOpenCert(null)}>
                      &times;
                    </button>
                    <h3 className="text-xl font-bold mb-2 text-center">{openCert.title}</h3>
<img src={asset(openCert.image)} alt={openCert.title} className="w-full rounded-lg mb-4 border border-accent" />
<div className="text-center text-muted-foreground text-sm mb-2">
  {openCert.issuer} &bull; {openCert.year}
</div>
                    <div className="text-center text-accent font-mono text-xs">{openCert.category}</div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="text-center">
              <Card className="glass border-accent/20 p-12 bg-gradient-to-r from-accent/5 to-secondary/5">
                <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Always open to new opportunities in robotics, AI, and automation. Let’s innovate together.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-neon-primary hover:shadow-neon-primary/70 transition-all duration-300 inline-block"
                  onClick={() => setShowContactModal(true)}
                  ref={contactBtnRef}
                >
                  Get In Touch
                </motion.button>

                {/* Floating Contact Modal */}
                {showContactModal && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="relative bg-gradient-to-br from-[#181a2aee] to-[#23244aee] border-2 border-cyan-400 rounded-2xl shadow-2xl w-full max-w-xl p-0 overflow-hidden">
                      <button
                        className="absolute top-2 right-2 text-2xl text-cyan-300 hover:text-pink-400 font-bold z-10"
                        onClick={() => setShowContactModal(false)}
                        aria-label="Close contact form"
                      >
                        ✕
                      </button>
                      <iframe
                        src="https://n8n-pgct.onrender.com/form/5ae1af06-cb63-48f1-b955-ed152e63d926"
                        className="w-full h-[540px] rounded-b-2xl border-0 bg-transparent"
                        title="Contact Kishore"
                      />
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <ContactSection />
      <Footer />
      <WebAssistant />
    </>
  );
}
