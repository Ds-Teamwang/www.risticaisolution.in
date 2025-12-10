import React from 'react';
import { Twitter, Linkedin, Github, Mail, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="text-xl font-display font-bold text-white mb-4">Ristic <span className="text-accentCyan">Ai Solution</span></h3>
            <p className="text-textMuted text-sm leading-relaxed mb-6">
              Empowering the future with next-gen AI education, bespoke development services, and automated solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/918178360147" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-green-400 transition-colors" title="Chat on WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-textMuted hover:text-accentPink transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-textMuted hover:text-accentPink transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-textMuted hover:text-accentPink transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li><Link to="/courses" className="hover:text-accentCyan transition-colors">Courses Marketplace</Link></li>
              <li><Link to="/services" className="hover:text-accentCyan transition-colors">AI Agents Suite</Link></li>
              <li><Link to="/services" className="hover:text-accentCyan transition-colors">No-code Builder</Link></li>
              <li><Link to="/courses" className="hover:text-accentCyan transition-colors">Templates</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-textMuted">
              <li><Link to="/services" className="hover:text-accentCyan transition-colors">Documentation</Link></li>
              <li><Link to="/services" className="hover:text-accentCyan transition-colors">API Reference</Link></li>
              <li><Link to="/services" className="hover:text-accentCyan transition-colors">Community</Link></li>
              <li><Link to="/book" className="hover:text-accentCyan transition-colors">Contact Us</Link></li>
              <li className="flex items-center gap-2 pt-2">
                <Phone size={14} className="text-accentPink" />
                <a href="tel:+918178360147" className="hover:text-white transition-colors">+91 81783 60147</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-green-400" />
                <a href="https://wa.me/918178360147" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp Support</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-xs text-textMuted mb-4">Get the latest AI trends and course discounts.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-background border border-white/10 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-accentPink"
              />
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm transition-colors border border-white/5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-textMuted">
          <p>&copy; {new Date().getFullYear()} Ristic Ai Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;