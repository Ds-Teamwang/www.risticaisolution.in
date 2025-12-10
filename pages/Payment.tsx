import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../context/Store';
import { Lock, CreditCard, ShieldCheck, ArrowLeft, CheckCircle } from 'lucide-react';
import { Course, Appointment } from '../types';

const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { enrollCourse, bookAppointment, user, login, showToast } = useStore();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardName, setCardName] = useState('');

  // Extract payment details from navigation state
  const { type, data } = location.state || {};
  
  useEffect(() => {
    if (!type || !data) {
      navigate('/');
    }
  }, [type, data, navigate]);

  if (!type || !data) return null;

  const isCourse = type === 'course';
  const item = data as (Course | Appointment);
  const price = isCourse ? (item as Course).price : (item as Appointment).price;
  const title = isCourse ? (item as Course).title : `Consultation: ${(item as Appointment).service}`;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Payment Processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Execute the actual action in the store
      if (isCourse) {
        enrollCourse((item as Course).id);
      } else {
        bookAppointment(item as Appointment);
      }
      
    }, 2000);
  };

  const handleFinish = () => {
    navigate('/dashboard');
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        <div className="max-w-md w-full bg-surface border border-white/10 rounded-3xl p-8 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-2 ring-green-500/50">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Payment Successful!</h2>
          <p className="text-textMuted mb-6">
            You have successfully paid <span className="text-white font-bold">₹{price.toLocaleString()}</span> for {title}.
          </p>
          <button 
            onClick={handleFinish}
            className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-background flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Order Summary */}
        <div className="space-y-6">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-textMuted hover:text-white transition-colors">
            <ArrowLeft size={16} /> Cancel
          </button>
          
          <div className="bg-surface border border-white/10 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="flex gap-4 mb-6">
              {isCourse && (item as Course).image && (
                <img src={(item as Course).image} alt={title} className="w-20 h-20 rounded-lg object-cover" />
              )}
              <div>
                <h3 className="font-bold text-white text-lg leading-tight mb-1">{title}</h3>
                <p className="text-sm text-textMuted">{isCourse ? 'Lifetime Access' : 'Video Consultation'}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-textMuted text-sm">
                <span>Subtotal</span>
                <span>₹{price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-textMuted text-sm">
                <span>Tax (18% GST)</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between text-white font-bold text-xl pt-2 border-t border-white/5 mt-2">
                <span>Total</span>
                <span className="text-accentCyan">₹{price.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-xs text-green-400 bg-green-400/10 p-3 rounded-lg">
              <ShieldCheck size={16} />
              <span>Secure 256-bit SSL Encrypted Payment</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-surface border border-white/10 rounded-3xl p-8 h-fit">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-xl font-bold text-white">Payment Details</h2>
             <div className="flex gap-2">
               <div className="w-8 h-5 bg-white/10 rounded"></div>
               <div className="w-8 h-5 bg-white/10 rounded"></div>
             </div>
          </div>

          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-xs text-textMuted mb-1">Cardholder Name</label>
              <input 
                type="text" 
                required 
                placeholder="John Doe"
                value={cardName}
                onChange={e => setCardName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-accentPink outline-none" 
              />
            </div>

            <div>
              <label className="block text-xs text-textMuted mb-1">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute top-3.5 left-3 text-white/30 w-5 h-5" />
                <input 
                  type="text" 
                  required 
                  placeholder="0000 0000 0000 0000"
                  maxLength={19}
                  value={cardNumber}
                  onChange={e => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-3 text-white focus:border-accentPink outline-none font-mono" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-textMuted mb-1">Expiry Date</label>
                <input 
                  type="text" 
                  required 
                  placeholder="MM/YY"
                  maxLength={5}
                  value={expiry}
                  onChange={e => setExpiry(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-accentPink outline-none font-mono" 
                />
              </div>
              <div>
                <label className="block text-xs text-textMuted mb-1">CVC</label>
                <div className="relative">
                  <Lock className="absolute top-3.5 left-3 text-white/30 w-4 h-4" />
                  <input 
                    type="password" 
                    required 
                    placeholder="123"
                    maxLength={3}
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-9 pr-3 text-white focus:border-accentPink outline-none font-mono" 
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-accentPink text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
            >
              {loading ? (
                <>Processing...</>
              ) : (
                <>Pay ₹{price.toLocaleString()}</>
              )}
            </button>
            
            <p className="text-center text-xs text-textMuted mt-4">
              This is a secure mock payment gateway for demonstration.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;