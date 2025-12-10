import React, { useState } from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight, DollarSign, Video, Check, Phone, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/Store';
import { Appointment } from '../types';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [duration, setDuration] = useState<'30' | '60'>('30');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceInterest, setServiceInterest] = useState('Consultation');
  
  const { user, login } = useStore();
  const navigate = useNavigate();
  
  const timeSlots = ['09:00 AM', '10:00 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const getPrice = () => duration === '30' ? 999 : 1999;
  const getDurationLabel = () => duration === '30' ? '30 Minutes' : '1 Hour';

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    
    // If not logged in, auto-create a session
    if (!user) {
       login(name, email);
    }

    // Construct the appointment object
    const appointment: Appointment = {
      id: Date.now().toString(),
      service: serviceInterest,
      date,
      time,
      duration,
      price: getPrice(),
      status: 'confirmed'
    };

    // Navigate to payment
    navigate('/payment', {
      state: {
        type: 'booking',
        data: appointment
      }
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Sidebar Info */}
        <div className="md:w-1/3 bg-gradient-to-br from-primary to-[#4b0f94] p-8 text-white flex flex-col justify-between">
          <div>
            <Link to="/services" className="flex items-center gap-2 text-sm text-white/70 hover:text-white mb-8">
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              Get expert advice on AI automation, web/app development, or course guidance. Choose your preferred duration.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                 <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Total Price</div>
                 <div className="text-3xl font-bold text-accentCyan">₹{getPrice()}</div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-white/70" />
                  <span className="font-medium">{getDurationLabel()}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video size={18} className="text-white/70" />
                  <span>Video Call (Google Meet)</span>
                </div>
                {date && time && (
                  <div className="flex items-center gap-3 animate-fade-in">
                    <Calendar size={18} className="text-white/70" />
                    <span className="text-accentPink font-medium">{date} at {time}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="font-bold text-sm mb-3">Need immediate help?</h4>
            <div className="space-y-3">
              <a href="tel:+918178360147" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Phone size={16} /> +91 81783 60147
              </a>
              <a 
                href="https://wa.me/918178360147" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 rounded-lg transition-colors shadow-lg"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-xs text-white/50 pt-4">
            Ristic Ai Solution • Secured Payment
          </div>
        </div>

        {/* Main Form Area */}
        <div className="md:w-2/3 p-8 bg-[#21073B]">
          {step === 1 && (
            <div className="animate-fade-in h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Select Duration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setDuration('30')}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                      duration === '30' 
                        ? 'bg-accentPink/20 border-accentPink text-white' 
                        : 'bg-white/5 border-white/10 text-textMuted hover:bg-white/10'
                    }`}
                  >
                    <span className="font-bold">30 Minutes</span>
                    <span className="text-sm">₹999</span>
                  </button>
                  <button 
                    onClick={() => setDuration('60')}
                    className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                      duration === '60' 
                        ? 'bg-accentPink/20 border-accentPink text-white' 
                        : 'bg-white/5 border-white/10 text-textMuted hover:bg-white/10'
                    }`}
                  >
                    <span className="font-bold">1 Hour</span>
                    <span className="text-sm">₹1,999</span>
                  </button>
                </div>
              </div>

              <div className="mb-8">
                 <h3 className="text-xl font-bold text-white mb-4">Select Date & Time</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-textMuted mb-2">Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none"
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-textMuted mb-2">Time Slot</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none appearance-none"
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                 </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => setStep(2)}
                  disabled={!date || !time}
                  className="w-full bg-white text-primary font-bold py-4 rounded-xl disabled:opacity-50 hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Continue to Details <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleBook} className="animate-fade-in h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6">Your Information</h3>
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-textMuted mb-1">Full Name</label>
                    <input 
                        type="text" required 
                        value={user?.name || name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-textMuted mb-1">Phone (Optional)</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-textMuted mb-1">Email Address</label>
                  <input 
                    type="email" required 
                    value={user?.email || email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs text-textMuted mb-1">Service Interest (Optional)</label>
                  <select 
                    value={serviceInterest}
                    onChange={(e) => setServiceInterest(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none"
                  >
                     <option>Consultation</option>
                     <option>AI Services</option>
                     <option>Web/App Development</option>
                     <option>E-commerce</option>
                     <option>Course Counseling</option>
                     <option>Govt Documentation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-textMuted mb-1">Brief Description</label>
                  <textarea rows={3} placeholder="What would you like to discuss?" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accentPink outline-none"></textarea>
                </div>
              </div>
              
              <div className="mt-auto pt-4 flex gap-4">
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 font-medium"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  className="w-2/3 bg-gradient-to-r from-primary to-accentPink text-white font-bold py-3 rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Pay ₹{getPrice()} & Book <DollarSign size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;