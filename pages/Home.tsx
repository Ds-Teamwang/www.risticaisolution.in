import React from 'react';
import { ArrowRight, Code, Cpu, Globe, ShoppingBag, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentPink/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPink to-accentCyan">AI Courses</span>, Automation Systems & Full-Stack Web + App Development
            </h1>
            <p className="text-lg text-textMuted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Learn to build AI agents, automate workflows with no-code tools, or hire us to deliver full-stack AI products. The future is automated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accentPink text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
                Get Started
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                Book Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
             {/* Abstract CSS Graphic simulating 3D */}
             <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 border-2 border-accentCyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border-2 border-accentPink/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border-2 border-primary/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" 
                  alt="AI Neural Network Abstract" 
                  className="absolute inset-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)] rounded-full object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21073B] via-transparent to-transparent" />
             </div>
             
             {/* Floating Badges */}
             <div className="absolute top-10 right-10 bg-surface/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl animate-bounce delay-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Code size={20} /></div>
                  <div>
                    <p className="text-xs text-textMuted">Efficiency</p>
                    <p className="font-bold text-white">+400%</p>
                  </div>
                </div>
             </div>
             <div className="absolute bottom-20 left-0 bg-surface/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accentPink/20 rounded-lg text-accentPink"><Cpu size={20} /></div>
                  <div>
                    <p className="text-xs text-textMuted">AI Agents</p>
                    <p className="font-bold text-white">Active</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to scale</h2>
          <p className="text-textMuted">Comprehensive ecosystem for learners and businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Layers className="w-8 h-8 text-accentCyan" />, title: 'Course Marketplace', desc: 'Expert-led courses on LLMs, Prompt Engineering, and Full-stack dev.' },
            { icon: <Cpu className="w-8 h-8 text-accentPink" />, title: 'AI Agent Suite', desc: 'Deploy intelligent chatbots and automation agents in minutes.' },
            { icon: <Code className="w-8 h-8 text-purple-400" />, title: 'No-Code Builder', desc: 'Drag-and-drop website and app creation tools.' },
            { icon: <ShoppingBag className="w-8 h-8 text-yellow-400" />, title: 'Digital Commerce', desc: 'Sell your own prompts, templates, and digital assets.' },
            { icon: <Globe className="w-8 h-8 text-blue-400" />, title: 'Web Services', desc: 'Done-for-you website and native app development.' },
            { icon: <Zap className="w-8 h-8 text-green-400" />, title: 'Consultations', desc: 'One-on-one strategy calls with AI experts.' },
          ].map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trusted by Innovators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-2xl bg-[#21073B] border border-white/5 relative">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-white/20" />
                  <div>
                    <h4 className="text-white font-semibold">{t.name}</h4>
                    <p className="text-textMuted text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Bottom */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-primary via-[#4b0f94] to-accentPink relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Future-Proof Your Career?</h2>
             <Link to="/courses" className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
               Explore Courses
             </Link>
           </div>
           {/* Decorative circles */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;