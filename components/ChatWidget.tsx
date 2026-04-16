"use client";

import { useState, useRef, useEffect, FormEvent } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const text = userInput.trim();
    if (!text || isLoading) return;

    setError(null);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        let errorMsg = `Server error ${response.status}`;
        try {
          const parsed = JSON.parse(errorBody);
          errorMsg = parsed.error || errorMsg;
        } catch { errorMsg = errorBody || errorMsg; }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text || 'Sorry, I could not generate a response.',
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Floating Button with pulsing animation */}
      <div className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
      )}>
        <div className="absolute inset-0 rounded-full bg-[#b58b54]/40 animate-ping [animation-duration:3s]"></div>
        <div className="absolute -inset-2 rounded-full border border-[#b58b54]/30 animate-[spin_4s_linear_infinite]"></div>
        <button
          onClick={() => setIsOpen(true)}
          className="relative p-4 rounded-full bg-gradient-to-br from-[#b58b54] to-[#8a6838] text-white shadow-[0_10px_25px_rgba(181,139,84,0.5)] hover:scale-105 hover:shadow-[0_15px_35px_rgba(181,139,84,0.6)] transition-all ease-out duration-300 backdrop-blur-md border border-white/20"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-80 md:w-96 rounded-2xl flex flex-col z-50 transition-all duration-500 transform origin-bottom-right shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-xl bg-white/80 border border-white/40",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#b58b54] to-[#8a6838] text-white rounded-t-2xl border-b border-white/10 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm drop-shadow-md">Ceylon Tea Assistant</h3>
              <p className="text-[11px] text-white/80 font-medium tracking-wide uppercase">Ask me anything</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="relative z-10 p-2 text-white/70 hover:text-white rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[400px] min-h-[300px] bg-[#faf9f6]/60 backdrop-blur-sm">
          {messages.length === 0 && (
            <div className="text-center text-neutral-500 text-sm mt-10">
              <p>Hello! I am your AI assistant here to help you explore our Ceylon Tea offerings and assist with inquiries.</p>
            </div>
          )}
          
          {messages.map(m => (
            <div key={m.id} className={cn("flex w-full", m.role === 'user' ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap flex gap-2 items-start shadow-sm",
                  m.role === 'user' 
                    ? "bg-gradient-to-br from-[#b58b54] to-[#8a6838] text-white rounded-br-sm border border-white/10" 
                    : "bg-white/90 backdrop-blur-md border border-white shadow-md text-neutral-800 rounded-bl-sm"
                )}
              >
                {m.role === 'user' ? null : <Bot className="w-4 h-4 mt-0.5 shrink-0 text-[#b58b54]" />}
                <span>{m.content}</span>
              </div>
            </div>
          ))}

          {error && (
            <div className="flex w-full justify-center my-2">
               <div className="bg-red-50 text-red-600 border border-red-100 rounded-xl px-4 py-2 text-xs text-center shadow-sm max-w-[85%]">
                 Error: {error}
               </div>
            </div>
          )}
          
          {isLoading && !error && (
            <div className="flex w-full justify-start">
              <div className="bg-white/90 backdrop-blur-md border text-neutral-500 border-white shadow-md rounded-2xl rounded-bl-sm px-4 py-2 text-sm flex gap-2 items-center">
                <Bot className="w-4 h-4 text-[#b58b54]" />
                <span className="flex space-x-1">
                  <span className="w-1.5 h-1.5 bg-[#b58b54]/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#b58b54]/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#b58b54]/60 rounded-full animate-bounce"></span>
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/60 bg-white/80 backdrop-blur-xl rounded-b-2xl">
          <form onSubmit={onFormSubmit} className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about our teas..."
              className="flex-1 bg-white/80 border border-[#ead9bc] shadow-inner rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#b58b54]/30 placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-[#b58b54] hover:bg-[#8a6838] text-white shadow-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
