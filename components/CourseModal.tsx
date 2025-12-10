import React from 'react';
import { X, Star, Users, Check, BookOpen, ShoppingCart } from 'lucide-react';
import { Course } from '../types';
import { useStore } from '../context/Store';
import { useNavigate } from 'react-router-dom';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const { user } = useStore();
  const navigate = useNavigate();

  if (!course) return null;

  const handleEnrollClick = () => {
    // Navigate to payment page with course data
    navigate('/payment', { 
      state: { 
        type: 'course', 
        data: course 
      } 
    });
    onClose();
  };

  const isEnrolled = user?.enrolledCourses.includes(course.id);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-[#21073B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-white/20 transition-colors">
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image & Main Info */}
          <div className="relative h-64 md:h-auto">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#21073B] via-transparent to-transparent md:hidden"></div>
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col">
            <div className="mb-2">
              <span className="px-3 py-1 rounded-full bg-accentCyan/10 text-accentCyan text-xs font-bold uppercase tracking-wide">
                {course.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 leading-tight">{course.title}</h2>
            <div className="flex items-center gap-4 text-sm text-textMuted mb-6">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span className="font-bold">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>{course.curriculum?.length || 5} Modules</span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {course.description || "Join this comprehensive course to master new skills. Expert-led instruction with practical projects."}
            </p>

            <div className="mb-8">
              <h3 className="text-white font-bold mb-3">What you'll learn</h3>
              <ul className="space-y-2">
                {course.curriculum?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-textMuted">
                    <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                )) || (
                   <>
                    <li className="flex items-start gap-2 text-sm text-textMuted"><Check size={16} className="text-green-400 mt-0.5" /> <span>Industry standard practices</span></li>
                    <li className="flex items-start gap-2 text-sm text-textMuted"><Check size={16} className="text-green-400 mt-0.5" /> <span>Real-world project completion</span></li>
                   </>
                )}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-textMuted text-xs mb-1">Total Price</p>
                <p className="text-3xl font-bold text-white">₹{course.price.toLocaleString()}</p>
              </div>
              <button 
                onClick={handleEnrollClick}
                disabled={isEnrolled}
                className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                  isEnrolled 
                    ? 'bg-green-500/20 text-green-400 cursor-default' 
                    : 'bg-white text-primary hover:bg-gray-100 shadow-lg shadow-white/10'
                }`}
              >
                {isEnrolled ? (
                  <>Enrolled <Check size={20} /></>
                ) : (
                  <>Enroll Now <ShoppingCart size={20} /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;