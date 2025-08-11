import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { ThemedModal } from '@/components/ui/ThemedModal';

interface ContactButtonProps extends ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
}

export const ContactButton = ({
  variant = 'default',
  size = 'default',
  className = '',
  children = 'Get in Touch',
  ...props
}: ContactButtonProps) => {
  const [open, setOpen] = useState(false);
  // Hardcoded n8n form URL as per user request
  const n8nFormUrl = 'https://n8n-pgct.onrender.com/form/5ae1af06-cb63-48f1-b955-ed152e63d926';

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={`group relative overflow-hidden ${variant === 'default' 
          ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70' 
          : ''} ${className}`}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
        {children}
      </Button>
      <ThemedModal open={open} onClose={() => setOpen(false)}>
        <iframe
          src={n8nFormUrl}
          title="Get in Touch Form"
          className="w-[90vw] max-w-xl h-[80vh] rounded-xl border-2 border-primary bg-background"
          style={{ minHeight: 500, background: 'transparent' }}
        />
      </ThemedModal>
    </>
  );
};
