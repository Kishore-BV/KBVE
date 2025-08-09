import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLinksProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  className?: string;
}

export const SocialLinks = ({
  variant = 'outline',
  size = 'default',
  className = ''
}: SocialLinksProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button 
        asChild 
        variant={variant}
        size={size}
        className="gap-2 hover:bg-primary/10 transition-colors"
      >
        <a href="https://github.com/Kishore-BV" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      
      <Button 
        asChild 
        variant={variant}
        size={size}
        className="gap-2 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
      >
        <a href="https://www.linkedin.com/in/kishore-bv-521133229" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      
      <Button 
        asChild 
        variant={variant}
        size={size}
        className="gap-2 hover:bg-red-500/10 hover:text-red-500 transition-colors"
      >
        <a href="mailto:Kishorebv612@gmail.com">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
    </div>
  );
};
