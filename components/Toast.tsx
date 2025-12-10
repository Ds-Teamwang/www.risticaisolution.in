import React from 'react';
import { useStore } from '../context/Store';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast: React.FC = () => {
  const { toast } = useStore();

  if (!toast || !toast.visible) return null;

  return (
    <div className="fixed top-24 right-6 z-[60] animate-fade-in-up">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${
        toast.type === 'success' 
          ? 'bg-surface/95 border-green-500/50 text-white' 
          : 'bg-surface/95 border-red-500/50 text-white'
      }`}>
        {toast.type === 'success' ? (
          <CheckCircle className="text-green-400 w-5 h-5" />
        ) : (
          <AlertCircle className="text-red-400 w-5 h-5" />
        )}
        <span className="font-medium text-sm">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
