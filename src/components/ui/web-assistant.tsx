import { useEffect, useMemo, useRef, useState } from 'react';
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
      id: 'welcome',
      content:
        "Hello! I'm Kishore's AI assistant. Ask me about his projects, skills, or experience!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // ====== CONFIG ======
  const webhookUrl =
    'https://n8n-pgct.onrender.com/webhook/2cf00af6-03e1-4407-9765-a66b01233fe9/chat';

  // ====== UTILS ======
  const getSessionId = () => {
    const key = 'n8n_chat_session';
    let sid = localStorage.getItem(key);
    if (!sid) {
      sid = (crypto as any)?.randomUUID?.() || String(Date.now());
      localStorage.setItem(key, sid);
    }
    return sid;
  };

  const parseN8nReply = (data: any): string => {
    // Supports common shapes from Chat Trigger / Respond nodes / Agents
    return (
      data?.text ??
      data?.output ??
      data?.response?.text ??
      data?.reply ??
      data?.message ??
      data?.content ??
      'Sorry, I could not get a response.'
    );
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Kishore_BV_Resume.pdf'; // keep your file at /public
    link.download = 'Kishore_BV_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addMessage = (msg: Omit<Message, 'id' | 'timestamp'>) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, timestamp: new Date(), ...msg },
    ]);
  };

  const handleSendMessage = async () => {
    const text = inputMessage.trim();
    if (!text || isSending) return;

    // Add user message immediately
    addMessage({ content: text, isUser: true });

    // Clear input & show typing
    setInputMessage('');
    setIsSending(true);

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chatInput: text,            // IMPORTANT: what n8n expects
          sessionId: getSessionId(),  // keep memory threaded
          metadata: { source: 'portfolio-web' },
        }),
      });

      let aiContent: string;
      if (!res.ok) {
        aiContent = `Sorry, there was a problem with the assistant service (HTTP ${res.status}).`;
      } else {
        const data = await res.json().catch(() => ({}));
        aiContent = parseN8nReply(data);
      }

      // Quick helper: if user asks for resume
      if (/\b(resume|cv|download)\b/i.test(text)) {
        aiContent += `\n\nYou can also download it here: `;
        // Render a subtle inline button beneath
      }

      addMessage({ content: aiContent, isUser: false });
    } catch (e) {
      addMessage({
        content: 'Sorry, there was a network error connecting to the assistant.',
        isUser: false,
      });
    } finally {
      setIsSending(false);
    }
  };

  const toggleAssistant = () => {
    setIsOpen((v) => !v);
    setIsMinimized(false);
  };

  // Send on Enter
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
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
          aria-label="Open AI Assistant"
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
              y: isMinimized ? 100 : 0,
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
                      aria-label={isMinimized ? 'Maximize' : 'Minimize'}
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
                      aria-label="Close assistant"
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
                          {/* Inline resume button if bot mentioned it */}
                          {!message.isUser && /download it here/i.test(message.content) && (
                            <div className="mt-2">
                              <Button
                                size="sm"
                                variant="secondary"
                                className="h-7"
                                onClick={handleDownloadResume}
                              >
                                <Download className="w-3 h-3 mr-1" />
                                Download Resume
                              </Button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {isSending && (
                      <div className="flex justify-start">
                        <div className="px-3 py-2 rounded-lg bg-card/50 border border-primary/20 text-foreground text-sm">
                          <span className="inline-flex gap-1">
                            <span className="animate-pulse">●</span>
                            <span className="animate-pulse [animation-delay:120ms]">●</span>
                            <span className="animate-pulse [animation-delay:240ms]">●</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="p-3 border-top border-primary/20">
                    <div className="flex gap-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="Ask me anything..."
                        className="bg-card/50 border-primary/20 focus:border-primary/40"
                        disabled={isSending}
                      />
                      <Button
                        size="sm"
                        onClick={handleSendMessage}
                        className="bg-gradient-primary hover:shadow-neon-primary"
                        disabled={isSending}
                        aria-label="Send message"
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
