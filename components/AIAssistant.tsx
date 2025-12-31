
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Welcome to the HUB. I am the SH3RiF Concierge. How can I help secure or scale your vision today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await getGeminiResponse(input);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || 'Connection timed out. Please try again.' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-teal-500 text-slate-950 shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 neon-glow group relative border-4 border-slate-950"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain brightness-0" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        {!isOpen && <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-950 animate-pulse"></div>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[80vh] bg-slate-950 border border-slate-800 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-500 border-teal-500/20">
          <div className="p-6 bg-teal-500 text-slate-950 font-bold flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-slate-950 p-1 bg-slate-950 flex items-center justify-center">
                 <img src="logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading tracking-tight text-lg">SH3RiF HUB AI</span>
            </div>
            <div className="flex items-center text-[10px] space-x-1.5 uppercase tracking-tighter bg-slate-950/20 px-2 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
              <span className="font-bold">Live Stream Active</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-teal-500 text-slate-950 rounded-tr-none font-medium'
                      : 'bg-slate-900 text-slate-100 rounded-tl-none border border-slate-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-900 px-5 py-3 rounded-2xl rounded-tl-none border border-slate-800">
                  <div className="flex space-x-1.5 py-1">
                    <div className="w-2 h-2 bg-teal-500/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500/60 rounded-full animate-bounce [animation-delay:-.15s]"></div>
                    <div className="w-2 h-2 bg-teal-500/60 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 border-t border-slate-900 bg-slate-950/80 backdrop-blur-md">
            <div className="flex space-x-3 bg-slate-900 rounded-2xl p-2 border border-slate-800 focus-within:border-teal-500/50 transition-colors shadow-inner">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our AI Concierge..."
                className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none text-slate-100 placeholder:text-slate-600"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center disabled:opacity-20 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="mt-3 text-[10px] text-center text-slate-600 font-bold uppercase tracking-[0.2em]">
              SH3RiF AI Encryption Enabled
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
