import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, Building2, PenTool, Landmark, Briefcase, Zap, CheckCircle, Phone, ArrowRight } from 'lucide-react';

const WhyRisticAi: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      
      {/* Header Section */}
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="inline-block py-1 px-3 rounded-full bg-accentCyan/10 text-accentCyan text-sm font-bold tracking-wide mb-4">
          OUR MISSION
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
          Unlock Your Future With <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPink to-accentCyan">AI, Automation & Development</span>
        </h1>
        <div className="max-w-4xl mx-auto text-lg text-textMuted leading-relaxed space-y-4">
          <p>
            Whether you’re a student, business owner, company, brand, institution, organization, unemployed professional, aspiring entrepreneur, content creator, video editor, image editor, blogger, or content writer—your success begins with the power of AI.
          </p>
          <p>
            At <strong>Ristic AI Solution</strong>, we help you learn the most in-demand AI skills, build smart automation systems, and develop high-quality websites & native mobile apps so you can grow your career, brand, or business faster than ever.
          </p>
        </div>
      </div>

      {/* Main Value Prop */}
      <div className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-yellow-400" size={32} />
              Learn AI & Earn Money From Anywhere
            </h2>
            <p className="text-textLight text-lg">
              No matter who you are, you can unlock opportunities with:
            </p>
            <ul className="space-y-3">
              {[
                "AI skill training for high-income careers",
                "Automation systems that do work for you",
                "Web & app development to build your online presence",
                "Tools to start or scale an online business",
                "AI-powered content creation for creators & marketers"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-textMuted">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white font-semibold pt-2 italic border-l-4 border-accentPink pl-4">
              "Work from anywhere. Earn from anywhere. Grow from anywhere."
            </p>
          </div>
          <div className="w-full md:w-1/3">
             <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#4b0f94] to-primary p-1">
               <div className="w-full h-full bg-[#1a052e] rounded-xl flex items-center justify-center p-8 text-center">
                 <div>
                   <Sparkles className="w-16 h-16 text-accentCyan mx-auto mb-4 animate-pulse" />
                   <h3 className="text-2xl font-bold text-white mb-2">Future Proof</h3>
                   <p className="text-textMuted text-sm">Join the AI revolution today and stay ahead of the curve.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Target Audiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
        {/* Students */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
            <GraduationCap className="text-blue-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">For Students</h3>
          <p className="text-textMuted mb-4">Start building your future early with:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Real AI projects</li>
            <li>• Portfolio-ready automation systems</li>
            <li>• Freelancing skills you can start using immediately</li>
            <li>• Opportunities to earn while still studying</li>
          </ul>
        </div>

        {/* Businesses */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
            <Building2 className="text-purple-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">For Businesses, Companies & Brands</h3>
          <p className="text-textMuted mb-4">We deliver:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Custom AI automations that save time & money</li>
            <li>• Smart chatbots, agents & workflow systems</li>
            <li>• Full web & mobile app development</li>
            <li>• AI-driven marketing & content solutions</li>
            <li>• Digital transformation for every industry</li>
          </ul>
        </div>

        {/* Creators */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
            <PenTool className="text-pink-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">For Creators, Editors & Writers</h3>
          <p className="text-textMuted mb-4">Boost productivity & earning power:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Create content faster with AI</li>
            <li>• Edit images & videos using smart AI tools</li>
            <li>• Automate social media posting & engagement</li>
            <li>• Generate blog ideas, scripts & articles instantly</li>
            <li>• Build your own content-based business or brand</li>
          </ul>
        </div>

        {/* Institutions */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
            <Landmark className="text-yellow-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">For Institutions & Organizations</h3>
          <p className="text-textMuted mb-4">We provide:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• AI training programs for students & staff</li>
            <li>• Automation for internal operations</li>
            <li>• Custom platforms for digital transformation</li>
            <li>• Scalable web & mobile solutions</li>
          </ul>
        </div>

        {/* Entrepreneurs */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors md:col-span-2">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-green-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">For Unemployed Individuals & Future Entrepreneurs</h3>
              <p className="text-textMuted mb-4">If you want to start earning or launch a business, we help you:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300">
                <div>• Learn AI & automation from scratch</div>
                <div>• Offer AI services to clients</div>
                <div>• Build & sell websites or apps</div>
                <div>• Create digital products</div>
                <div>• Start your freelancing or agency journey</div>
              </div>
              <p className="mt-4 text-white font-medium">You don’t need experience — you only need the right guidance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary & CTA */}
      <div className="bg-gradient-to-r from-primary to-accentPink rounded-3xl p-1 md:p-12 text-center">
        <div className="bg-[#21073B]/20 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">Ristic AI Solution — Your Partner for Growth</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Next-Gen AI Courses",
              "Done-For-You Automation",
              "Website Development",
              "Native Mobile App Development",
              "AI Tools for Creators",
              "Freelancing Guidance",
              "Entrepreneur Support"
            ].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white border border-white/20">
                ✔ {tag}
              </span>
            ))}
          </div>

          <div className="max-w-2xl mx-auto border-t border-white/20 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Future?</h3>
            <p className="text-white/80 mb-8">
              Contact Ristic AI Solution to learn AI, build automations, develop apps, or grow your brand. Your success story starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/book" className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </Link>
              <a href="tel:+918178360147" className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Phone size={20} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhyRisticAi;
