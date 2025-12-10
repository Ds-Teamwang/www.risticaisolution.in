import React from 'react';
import { useStore } from '../context/Store';
import { Navigate, Link } from 'react-router-dom';
import { MOCK_COURSES } from '../constants';
import { Calendar, BookOpen, Clock, Video } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const myCourses = MOCK_COURSES.filter(c => user.enrolledCourses.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-6 mb-12">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accentPink p-1">
          <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full bg-surface" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, {user.name}</h1>
          <p className="text-textMuted">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Courses */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="text-accentCyan" /> My Learning
          </h2>
          
          {myCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myCourses.map(course => (
                <div key={course.id} className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
                  <div className="h-32 overflow-hidden relative">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Link to={`/courses`} className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm hover:bg-white/30 transition-colors">
                          Continue Learning
                        </Link>
                     </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white truncate">{course.title}</h3>
                    <div className="mt-3 bg-white/5 rounded-full h-1.5 w-full overflow-hidden">
                       <div className="bg-green-400 h-full w-[35%]"></div>
                    </div>
                    <p className="text-xs text-textMuted mt-2">35% Completed</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 border border-white/5 rounded-2xl p-8 text-center">
              <p className="text-textMuted mb-4">You haven't enrolled in any courses yet.</p>
              <Link to="/courses" className="text-accentPink hover:text-white font-medium">Browse Courses</Link>
            </div>
          )}
        </div>

        {/* Right Col: Appointments */}
        <div className="space-y-8">
           <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calendar className="text-accentPink" /> Appointments
          </h2>

          <div className="space-y-4">
            {user.appointments.length > 0 ? (
              user.appointments.map((apt, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                   <div className="flex justify-between items-start mb-2">
                     <h3 className="font-bold text-white text-sm">Consultation</h3>
                     <span className={`text-xs px-2 py-0.5 rounded-full ${
                       new Date(apt.date) > new Date() ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                     }`}>
                       {new Date(apt.date) > new Date() ? 'Upcoming' : 'Past'}
                     </span>
                   </div>
                   <div className="text-xs text-textMuted space-y-1">
                     <div className="flex items-center gap-2"><Calendar size={12}/> {apt.date}</div>
                     <div className="flex items-center gap-2"><Clock size={12}/> {apt.time} ({apt.duration} min)</div>
                     <div className="flex items-center gap-2 mt-2 text-accentCyan"><Video size={12}/> Google Meet Link</div>
                   </div>
                </div>
              ))
            ) : (
              <div className="bg-white/5 border border-white/5 rounded-2xl p-8 text-center">
                <p className="text-textMuted mb-4 text-sm">No upcoming appointments.</p>
                <Link to="/book" className="text-accentPink hover:text-white font-medium text-sm">Book Consultation</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
