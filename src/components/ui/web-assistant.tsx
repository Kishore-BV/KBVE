import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Minimize2, Maximize2, Send, Download } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const WebAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Kishore\'s AI assistant. Ask me about his projects, skills, or experience!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kishore_BV_Resume.pdf';
    link.download = 'Kishore_BV_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Check if user is asking about resume download
    const isResumeRequest = inputMessage.toLowerCase().includes('resume') || 
                           inputMessage.toLowerCase().includes('cv') || 
                           inputMessage.toLowerCase().includes('download');

    // Simulate AI response
    setTimeout(() => {
      let response: string;
      
      if (isResumeRequest) {
        response = 'I\'ll download Kishore\'s resume for you right away!';
        handleDownloadResume();
      } else {
        const responses = [
          'Kishore specializes in full-stack development with React, Node.js, and 3D technologies!',
          'I can help you navigate to any section of the portfolio. What would you like to explore?',
          'Kishore has worked on several impressive projects including 3D web experiences and AI-powered dashboards.',
          'Would you like me to download his resume or redirect you to a specific project?',
          'Kishore is passionate about creating immersive digital experiences. Check out the Projects section!'
        ];
        response = responses[Math.floor(Math.random() * responses.length)];
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);

    setInputMessage('');
  };

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={toggleAssistant}
          className="w-14 h-14 rounded-full bg-gradient-primary shadow-neon-primary hover:shadow-neon-primary animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: isMinimized ? 0.3 : 1, 
              y: isMinimized ? 100 : 0 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 w-80 z-40"
          >
            <Card className="glass border-primary/30 overflow-hidden">
              {/* Header */}
              <CardHeader className="bg-gradient-primary/10 border-b border-primary/20 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-mono text-sm text-foreground">AI Assistant</span>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="h-6 w-6 p-0"
                    >
                      {isMinimized ? (
                        <Maximize2 className="w-3 h-3" />
                      ) : (
                        <Minimize2 className="w-3 h-3" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                      className="h-6 w-6 p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              {!isMinimized && (
                <CardContent className="p-0">
                  <div className="h-64 overflow-y-auto p-3 space-y-3">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-2 rounded-lg text-sm ${
                            message.isUser
                              ? 'bg-gradient-primary text-primary-foreground'
                              : 'bg-card/50 text-foreground border border-primary/20'
                          }`}
                        >
                          {message.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="p-3 border-t border-primary/20">
                    <div className="flex gap-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask me anything..."
                        className="bg-card/50 border-primary/20 focus:border-primary/40"
                      />
                      <Button
                        size="sm"
                        onClick={handleSendMessage}
                        className="bg-gradient-primary hover:shadow-neon-primary"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};