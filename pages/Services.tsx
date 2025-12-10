import React from 'react';
import { SERVICE_CATALOG } from '../constants';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Professional <span className="text-accentPink">Services</span> & Consultation
        </h1>
        <p className="text-textMuted max-w-2xl mx-auto text-lg">
          From full-scale AI automation to custom app development, we build it all. Book a consultation to discuss your vision.
        </p>
      </div>

      {/* Pricing Banner */}
      <div className="bg-gradient-to-r from-primary to-[#4b0f94] rounded-3xl p-8 mb-16 shadow-2xl shadow-primary/20 animate-fade-in-up">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Book an Expert Consultation</h2>
            <p className="text-white/80">
              Speak directly with our engineers and consultants to plan your project or get career guidance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="bg-black/30 backdrop-blur rounded-xl p-4 border border-white/10 text-center min-w-[160px]">
                <div className="text-sm text-textMuted mb-1 flex items-center justify-center gap-2"><Clock size={14}/> 30 Minutes</div>
                <div className="text-2xl font-bold text-accentCyan">₹999</div>
             </div>
             <div className="bg-black/30 backdrop-blur rounded-xl p-4 border border-white/10 text-center min-w-[160px]">
                <div className="text-sm text-textMuted mb-1 flex items-center justify-center gap-2"><Clock size={14}/> 1 Hour</div>
                <div className="text-2xl font-bold text-accentCyan">₹1,999</div>
             </div>
          </div>
          <Link 
            to="/book" 
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Service Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICE_CATALOG.map((cat, idx) => (
          <div key={idx} className="bg-surface border border-white/10 rounded-3xl p-8 hover:border-accentPink/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-white/5">
              {cat.category}
            </h3>
            
            <ul className="space-y-4 mb-8">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 rounded-full bg-accentCyan/10 flex items-center justify-center flex-shrink-0">
                     <Check size={12} className="text-accentCyan" />
                   </div>
                   <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link 
                to="/book" 
                className="inline-flex items-center gap-2 text-accentPink font-medium hover:text-white transition-colors group"
              >
                Book Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Process Section */}
      <div className="mt-24 border-t border-white/5 pt-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Consultation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Book Slot', text: 'Select 30 mins (₹999) or 1 hour (₹1,999).' },
              { step: '02', title: 'Discuss', text: 'Deep dive into your requirements via video call.' },
              { step: '03', title: 'Plan', text: 'Receive a roadmap or immediate guidance.' },
              { step: '04', title: 'Execute', text: 'We start building your solution or you take the lead.' }
            ].map((item) => (
              <div key={item.step} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-white/10 mb-4">{item.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-textMuted">{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;