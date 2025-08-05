import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
  category: 'engineering' | 'ai' | 'design' | 'programming' | 'frontend' | 'backend' | 'tools' | 'mobile';
}

const categoryColors = {
  engineering: 'from-primary to-primary-glow',
  ai: 'from-secondary to-secondary-glow',
  design: 'from-accent to-accent-glow',
  programming: 'from-purple-500 to-pink-500',
  frontend: 'from-primary to-primary-glow',
  backend: 'from-secondary to-secondary-glow',
  tools: 'from-accent to-accent-glow',
  mobile: 'from-purple-500 to-pink-500'
};

export const SkillCard: React.FC<SkillProps> = ({ name, level, icon, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="group p-4 rounded-lg glass border border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="text-primary group-hover:animate-pulse">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
      
      {/* Skill Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground capitalize">{category}</span>
          <span className="text-primary font-mono">{level}%</span>
        </div>
        <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className={`h-full bg-gradient-to-r ${categoryColors[category]} rounded-full`}
          />
        </div>
      </div>
    </motion.div>
  );
};