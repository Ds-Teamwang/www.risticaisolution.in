import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { MOCK_COURSES, SERVICE_CATALOG } from '../constants';
import { Link } from 'react-router-dom';

const AiAgentWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I am the Ristic Ai Solution Assistant. I can help you find courses, pricing, or services. What are you looking for today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const generateResponse = (text: string): string => {
    const lower = text.toLowerCase().trim();

    // 1. END CONVERSATION LOGIC (Highest Priority)
    const isClosing = 
      /(bye|goodbye|tata|see ya|cya)/.test(lower) ||
      /(that'?s (all|enough|it)|nothing else|i'?m (done|good)|end chat|quit|leave|stop)/.test(lower) ||
      /(no|nah|nope|not really).*(thanks|thank you)/.test(lower) ||
      /^(no|nope|nah|not really)$/.test(lower);

    if (isClosing) {
      return "It was a pleasure assisting you today! If you need anything else in the future, Ristic Ai Solution is here to help. Have a wonderful day!";
    }

    // 2. Gratitude (User says thanks, but didn't say 'no')
    if (/(thanks|thank you|thx|appreciate it)/.test(lower)) {
        return "You are very welcome! I'm happy to help. Is there anything else you'd like to know about our courses, services, or pricing?";
    }

    // 3. Greetings
    if (/(hi|hello|hey|greetings|morning|afternoon)/.test(lower)) {
      return "Hello! Welcome to Ristic Ai Solution. I'm here to guide you through our AI courses and development services. How can I assist you today?";
    }

    // 4. Booking / Consultation (Specific Logic Requested)
    if (lower.includes('book') || lower.includes('appointment') || lower.includes('consultation') || lower.includes('schedule') || lower.includes('meet') || lower.includes('slot')) {
      return "Our expert consultations are priced at ₹999 for 30 minutes and ₹1,999 for 1 hour. These sessions are perfect for planning your project or getting personalized guidance.\n\nWould you like to book a slot now?";
    }

    // 5. Course Specific Search
    const matchedCourse = MOCK_COURSES.find(c => 
      lower.includes(c.title.toLowerCase()) || 
      c.tags.some(t => lower.includes(t.toLowerCase())) ||
      (lower.includes('course') && c.category.toLowerCase().includes(lower))
    );

    if (matchedCourse) {
      return `I found a great match: "${matchedCourse.title}".\n\nIt covers topics like ${matchedCourse.tags.join(', ')} and is priced at ₹${matchedCourse.price.toLocaleString()}.\n\nYou can view full details on our Courses page. Would you like to enroll in this course or book a consultation to discuss it?`;
    }

    // 6. Service Specific Search
    // Flatten the catalog to find a matching service item
    const allServices = SERVICE_CATALOG.flatMap(cat => cat.items);
    const matchedService = allServices.find(item => lower.includes(item.toLowerCase()));
    
    if (matchedService) {
      return `We definitely offer "${matchedService}".\n\nThis is part of our professional services. We can handle everything from design to deployment.\n\nWould you like to book a consultation to discuss your requirements for this service?`;
    }

    // 7. AI General Queries (Specific Logic Requested)
    if (lower.includes('ai') || lower.includes('agent') || lower.includes('gpt') || lower.includes('bot') || lower.includes('artificial intelligence') || lower.includes('automation')) {
       return "We specialize in AI solutions! You might be interested in our 'AI Agent Suite' for business automation or our 'No-Code Development Masterclass' if you want to build it yourself.\n\nWould you like to explore our AI Services page to see what we can build for you, or book a consultation?";
    }

    // 8. Services General
    if (lower.includes('service') || lower.includes('develop') || lower.includes('build') || lower.includes('web') || lower.includes('app')) {
      return "We offer comprehensive development services including Custom Websites, Native Mobile Apps, and E-commerce solutions. You can find more details on our Services page.\n\nWould you like me to guide you there, or would you like to book a consultation to discuss your project?";
    }

    // 9. Pricing (General)
    if (lower.includes('price') || lower.includes('cost') || lower.includes('fee') || lower.includes('much')) {
      return "Our Development & Tech courses are ₹49,999, and Business/Website courses are ₹19,999. For services, we offer consultations at ₹999 (30 mins) and ₹1,999 (1 hour) to assess your project cost.\n\nAre you interested in learning or hiring us for a project?";
    }

    // 10. Contact & Support
    if (lower.includes('contact') || lower.includes('email') || lower.includes('support') || lower.includes('phone') || lower.includes('call') || lower.includes('location') || lower.includes('where')) {
      return "You can reach us at support@risticaisolution.in or visit www.risticaisolution.in. For the fastest assistance, we recommend booking a consultation directly through the website.\n\nWould you like to proceed with a booking?";
    }

    // Default Fallback
    return "I can help with Courses, Services, Pricing, or Booking appointments. Could you please specify what you are looking for so I can assist you better?";
  };

  const handleSend = (textInput?: string) => {
    const msgText = textInput || input;
    if (!msgText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: msgText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate network delay for realism
    setTimeout(() => {
      const responseText = generateResponse(msgText);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  const suggestedPrompts = [
    "View Course Pricing",
    "Build me a website",
    "Book a consultation",
    "What is No-Code?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] h-[550px] bg-[#2A0D45] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accentPink p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">Ristic AI Assistant</h3>
                <div className="flex items-center gap-1.5 opacity-80">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-medium">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-[#21073B]/50 relative">
            <div className="p-4 space-y-4 min-h-full" ref={scrollRef}>
              <div className="text-center text-xs text-white/30 my-4">
                {new Date().toLocaleDateString()}
              </div>
              
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'assistant' ? 'bg-gradient-to-br from-primary to-accentCyan' : 'bg-white/10'}`}>
                    {msg.role === 'assistant' ? <Sparkles size={14} className="text-white" /> : <User size={14} className="text-white" />}
                  </div>
                  <div className={`p-3.5 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm whitespace-pre-line ${
                    msg.role === 'assistant' 
                      ? 'bg-[#371B58] text-gray-100 rounded-tl-none border border-white/5' 
                      : 'bg-gradient-to-r from-primary to-accentPink text-white rounded-tr-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accentCyan flex items-center justify-center shadow-lg">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-[#371B58] p-4 rounded-2xl rounded-tl-none flex items-center gap-1.5 w-16 border border-white/5">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Suggested Prompts (only if few messages) */}
          {messages.length < 3 && !isTyping && (
             <div className="px-4 pb-2 bg-[#21073B]/50 flex gap-2 overflow-x-auto no-scrollbar">
                {suggestedPrompts.map((prompt, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="whitespace-nowrap px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-accentCyan transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
             </div>
          )}

          {/* Input */}
          <div className="p-3 bg-[#1a052e] border-t border-white/10">
            <div className="flex gap-2 items-end">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accentPink/50 focus:bg-white/10 transition-all placeholder:text-white/20"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="bg-accentPink hover:bg-pink-600 text-white p-3 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pink-500/20 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-[10px] text-center text-white/20 mt-2">
              AI can make mistakes. Please verify important details.
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl shadow-primary/50 flex items-center justify-center transition-all duration-300 z-50 relative ${
          isOpen ? 'bg-gray-800 rotate-90 ring-2 ring-white/20' : 'bg-gradient-to-tr from-primary via-[#9d00ff] to-accentCyan hover:scale-110 animate-bounce-slow'
        }`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
        
        {/* Notification Badge */}
        {!isOpen && messages.length > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#21073B]"></span>
        )}
      </button>
    </div>
  );
};

export default AiAgentWidget;