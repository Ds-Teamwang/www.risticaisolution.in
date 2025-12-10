import React, { useState } from 'react';
import { MOCK_COURSES } from '../constants';
import { Star, Users, Clock, Filter, Search } from 'lucide-react';
import { useStore } from '../context/Store';
import CourseModal from '../components/CourseModal';
import { Course } from '../types';

const Courses: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { searchQuery, user, enrollCourse } = useStore();

  const categories = ['All', 'Development', 'Business'];
  
  const filteredCourses = MOCK_COURSES.filter(course => {
    const matchesCategory = filter === 'All' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-display font-bold text-white mb-2">Course Marketplace</h1>
          <p className="text-textMuted mb-6">Master new skills with our premium Development and Business curriculum.</p>
          
          {/* Mobile Search (visible only if search not in nav, but nav has it. Adding here for clarity on page context if needed, but relying on navbar search mainly) */}
        </div>
        
        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          <Filter size={20} className="text-textMuted hidden md:block flex-shrink-0" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === cat 
                  ? 'bg-accentCyan text-background' 
                  : 'bg-white/5 text-textLight hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => setSelectedCourse(course)}
              className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accentPink/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs text-white font-medium uppercase tracking-wide">
                  {course.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">{course.title}</h3>
                <p className="text-textMuted text-sm mb-4">By {course.instructor}</p>
                
                <div className="flex items-center gap-4 text-xs text-textMuted mb-6">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>Self-paced</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-white">₹{course.price.toLocaleString()}</span>
                  <button className={`bg-white/10 hover:bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ${user?.enrolledCourses.includes(course.id) ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : ''}`}>
                    {user?.enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-textMuted">
          <Search size={48} className="mb-4 opacity-20" />
          <p className="text-lg">No courses found matching "{searchQuery}"</p>
          <button onClick={() => setFilter('All')} className="mt-4 text-accentPink hover:underline">Clear filters</button>
        </div>
      )}

      {/* Course Modal */}
      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        onEnroll={() => {}}
      />
    </div>
  );
};

export default Courses;
