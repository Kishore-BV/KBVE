import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-lg overflow-hidden border border-primary/20"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-card/50 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-muted-foreground">
            {title || `${language}.${language === 'javascript' ? 'js' : language === 'typescript' ? 'ts' : 'txt'}`}
          </span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={copyToClipboard}
          className="h-6 w-6 p-0 hover:bg-primary/10"
        >
          {copied ? (
            <Check className="w-3 h-3 text-green-400" />
          ) : (
            <Copy className="w-3 h-3 text-muted-foreground" />
          )}
        </Button>
      </div>

      {/* Code Content */}
      <div className="p-4 bg-card/30">
        <pre className="text-sm font-mono text-foreground overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
};