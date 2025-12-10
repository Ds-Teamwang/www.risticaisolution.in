import React, { useState } from 'react';
import { Menu, X, Search, Bell, User as UserIcon, LogOut, LayoutDashboard, Check, Trash2, ChevronDown, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../context/Store';
import AuthModal from './AuthModal';
import { MOCK_COURSES, SERVICE_CATALOG } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Desktop profile dropdown
  const [showNotifications, setShowNotifications] = useState(false); // Desktop notifications
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Desktop dropdown state
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null); // Mobile accordion state

  const { user, logout, notifications, markNotificationRead, markAllNotificationsRead, clearNotifications, searchQuery, setSearchQuery } = useStore();
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (location.pathname !== '/courses') {
      navigate('/courses');
    }
  };

  const handleCourseClick = (courseTitle: string) => {
    setSearchQuery(courseTitle);
    navigate('/courses');
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleServiceClick = () => {
    navigate('/services');
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Group courses for dropdown
  const devCourses = MOCK_COURSES.filter(c => c.category === 'Development');
  const busCourses = MOCK_COURSES.filter(c => c.category === 'Business');

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#21073B]/90 border-b border-white/10" onMouseLeave={() => setActiveDropdown(null)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-accentPink to-accentCyan flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white hidden sm:block">
                  Ristic <span className="text-accentCyan">Ai Solution</span>
                </span>
              </Link>
            </div>

            {/* Center Group: Links + Search */}
            <div className="flex-1 flex items-center justify-center gap-6 px-4">
              
              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center space-x-1">
                <Link
                  to="/"
                  onMouseEnter={() => setActiveDropdown(null)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive('/') ? 'text-accentCyan' : 'text-textLight hover:text-white'
                  }`}
                >
                  Home
                </Link>

                {/* Courses Dropdown Trigger */}
                <div 
                  className="relative group h-16 flex items-center"
                  onMouseEnter={() => setActiveDropdown('courses')}
                >
                  <Link
                    to="/courses"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                      isActive('/courses') ? 'text-accentCyan' : 'text-textLight group-hover:text-white'
                    }`}
                  >
                    Courses <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  {/* Courses Mega Menu */}
                  {activeDropdown === 'courses' && (
                    <div className="absolute top-14 left-0 w-[600px] bg-[#2A0D45] border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-8 animate-fade-in-up origin-top-left z-50"
                         onMouseEnter={() => setActiveDropdown('courses')}
                         onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div>
                        <h4 className="flex items-center gap-2 text-accentCyan font-bold mb-4 uppercase text-xs tracking-wider">
                          <CodeIcon className="w-4 h-4" /> Development & Tech
                        </h4>
                        <ul className="space-y-2">
                          {devCourses.map(course => (
                            <li key={course.id}>
                              <button 
                                onClick={() => handleCourseClick(course.title)}
                                className="text-sm text-textMuted hover:text-white hover:translate-x-1 transition-all text-left w-full truncate"
                              >
                                {course.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-accentPink font-bold mb-4 uppercase text-xs tracking-wider">
                          <BriefcaseIcon className="w-4 h-4" /> Business & Personal
                        </h4>
                        <ul className="space-y-2">
                          {busCourses.map(course => (
                            <li key={course.id}>
                              <button 
                                onClick={() => handleCourseClick(course.title)}
                                className="text-sm text-textMuted hover:text-white hover:translate-x-1 transition-all text-left w-full truncate"
                              >
                                {course.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-white/10">
                          <Link to="/courses" className="text-xs font-bold text-white hover:text-accentCyan flex items-center gap-1">
                            View All Courses <ChevronRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Services Dropdown Trigger */}
                <div 
                  className="relative group h-16 flex items-center"
                  onMouseEnter={() => setActiveDropdown('services')}
                >
                  <Link
                    to="/services"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                      isActive('/services') ? 'text-accentCyan' : 'text-textLight group-hover:text-white'
                    }`}
                  >
                    Services <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Services Mega Menu */}
                  {activeDropdown === 'services' && (
                    <div className="absolute top-14 left-0 w-[500px] bg-[#2A0D45] border border-white/10 rounded-xl shadow-2xl p-6 grid grid-cols-1 gap-6 animate-fade-in-up origin-top-left z-50"
                         onMouseEnter={() => setActiveDropdown('services')}
                         onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {SERVICE_CATALOG.map((cat, idx) => (
                          <div key={idx}>
                            <h4 className="text-white font-bold text-sm mb-3">{cat.category}</h4>
                            <ul className="space-y-1.5">
                              {cat.items.slice(0, 4).map((item, i) => (
                                <li key={i}>
                                  <button 
                                    onClick={handleServiceClick}
                                    className="text-xs text-textMuted hover:text-accentCyan text-left w-full truncate"
                                  >
                                    {item}
                                  </button>
                                </li>
                              ))}
                              {cat.items.length > 4 && (
                                <li>
                                  <Link to="/services" className="text-[10px] text-accentPink hover:underline">
                                    + {cat.items.length - 4} more
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-white/10">
                         <Link to="/book" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-2 flex items-center justify-center text-sm font-bold text-white transition-colors">
                            Book a Consultation
                         </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex w-full max-w-xs relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400 group-focus-within:text-accentPink transition-colors" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="block w-full pl-10 pr-3 py-1.5 border border-white/10 rounded-full leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-accentPink/50 sm:text-sm transition-all"
                  placeholder="Search courses..."
                />
              </div>

            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="text-textMuted hover:text-white transition-colors relative focus:outline-none p-2 rounded-full hover:bg-white/5"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-accentPink rounded-full animate-pulse border border-[#21073B]"></span>
                  )}
                </button>
                {showNotifications && (
                   <div className="absolute right-0 mt-2 w-80 bg-surface border border-white/10 rounded-xl shadow-xl overflow-hidden animate-fade-in-up origin-top-right z-50">
                     <div className="p-3 border-b border-white/10 flex justify-between items-center bg-[#1a052e]">
                       <span className="text-xs font-bold text-white">Notifications ({unreadCount})</span>
                       <div className="flex gap-2">
                         {notifications.length > 0 && (
                           <>
                             <button onClick={markAllNotificationsRead} className="text-accentCyan hover:text-white transition-colors" title="Mark all read">
                               <Check size={14} />
                             </button>
                             <button onClick={clearNotifications} className="text-red-400 hover:text-white transition-colors" title="Clear all">
                               <Trash2 size={14} />
                             </button>
                           </>
                         )}
                       </div>
                     </div>
                     <div className="max-h-80 overflow-y-auto">
                       {notifications.length > 0 ? (
                         notifications.map(n => (
                           <div 
                             key={n.id} 
                             onClick={() => markNotificationRead(n.id)}
                             className={`p-3 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors relative ${!n.read ? 'bg-white/5' : ''}`}
                           >
                              <div className="flex justify-between items-start mb-1">
                                <p className={`text-sm font-medium ${!n.read ? 'text-white' : 'text-gray-400'}`}>{n.title}</p>
                                <span className="text-[10px] text-textMuted whitespace-nowrap ml-2">{formatTime(n.time)}</span>
                              </div>
                              <p className="text-xs text-textMuted line-clamp-2">{n.message}</p>
                              {!n.read && <span className="absolute top-3 right-2 w-1.5 h-1.5 bg-accentCyan rounded-full"></span>}
                           </div>
                         ))
                       ) : (
                         <div className="p-8 text-center flex flex-col items-center text-textMuted">
                           <Bell className="w-8 h-8 mb-2 opacity-20" />
                           <p className="text-xs">No notifications</p>
                         </div>
                       )}
                     </div>
                     {notifications.length > 0 && (
                       <div className="p-2 bg-[#1a052e] border-t border-white/10 text-center">
                         <button onClick={clearNotifications} className="text-[10px] text-textMuted hover:text-white transition-colors">
                           Clear all history
                         </button>
                       </div>
                     )}
                   </div>
                )}
              </div>
              
              {/* User Profile / Login */}
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 focus:outline-none group"
                  >
                    <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full border border-white/20 group-hover:border-accentPink transition-colors" />
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-surface border border-white/10 rounded-xl shadow-xl overflow-hidden animate-fade-in-up z-50 origin-top-right">
                      <div className="p-4 border-b border-white/10 bg-[#1a052e]">
                        <p className="text-sm font-bold text-white truncate">{user.name}</p>
                        <p className="text-xs text-textMuted truncate">{user.email}</p>
                      </div>
                      <Link 
                        to="/dashboard" 
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm text-textLight hover:bg-white/5 transition-colors"
                      >
                        <LayoutDashboard size={16} /> Dashboard
                      </Link>
                      <button 
                        onClick={() => { logout(); setShowProfileMenu(false); }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition-colors text-left"
                      >
                        <LogOut size={16} /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-gradient-to-r from-primary to-accentPink text-white px-5 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 whitespace-nowrap"
                >
                  Sign In / Join
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
               {user && (
                  <button onClick={() => navigate('/dashboard')} className="text-textLight hover:text-white">
                     <img src={user.avatar} alt="User" className="w-6 h-6 rounded-full border border-white/20" />
                  </button>
               )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#2A0D45] border-b border-white/10 absolute w-full z-40 max-h-[90vh] overflow-y-auto">
            <div className="px-4 pt-4 pb-2">
               <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="block w-full px-3 py-2 border border-white/10 rounded-lg bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-accentPink text-sm mb-4"
                placeholder="Search courses..."
              />
            </div>
            <div className="px-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'text-accentCyan bg-white/5' : 'text-textLight hover:text-white'
                }`}
              >
                Home
              </Link>
              
              {/* Mobile Courses Accordion */}
              <div>
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'courses' ? null : 'courses')}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-textLight hover:bg-white/5"
                >
                  Courses <ChevronDown size={16} className={`transition-transform ${mobileExpanded === 'courses' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === 'courses' && (
                  <div className="pl-6 pr-2 py-2 space-y-4 bg-white/5 rounded-lg my-1 mx-2">
                    <div>
                      <h5 className="text-xs font-bold text-accentCyan mb-2 uppercase">Development</h5>
                      <ul className="space-y-2">
                        {devCourses.map(c => (
                          <li key={c.id}>
                            <button onClick={() => handleCourseClick(c.title)} className="text-sm text-textMuted hover:text-white w-full text-left">{c.title}</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-accentPink mb-2 uppercase">Business</h5>
                      <ul className="space-y-2">
                         {busCourses.map(c => (
                          <li key={c.id}>
                            <button onClick={() => handleCourseClick(c.title)} className="text-sm text-textMuted hover:text-white w-full text-left">{c.title}</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-textLight hover:bg-white/5"
                >
                  Services <ChevronDown size={16} className={`transition-transform ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
                </button>
                 {mobileExpanded === 'services' && (
                  <div className="pl-6 pr-2 py-2 space-y-4 bg-white/5 rounded-lg my-1 mx-2">
                    {SERVICE_CATALOG.map((cat, idx) => (
                      <div key={idx}>
                         <h5 className="text-xs font-bold text-white mb-1.5">{cat.category}</h5>
                         <ul className="space-y-1">
                           {cat.items.map((item, i) => (
                             <li key={i}>
                               <button onClick={handleServiceClick} className="text-sm text-textMuted hover:text-white w-full text-left py-0.5">{item}</button>
                             </li>
                           ))}
                         </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 mt-4 pt-4">
                {user ? (
                   <>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-3 py-2 text-textLight hover:bg-white/5 rounded-md">
                       <LayoutDashboard size={18} /> My Dashboard
                    </Link>
                    <button onClick={() => { logout(); setIsOpen(false); }} className="flex items-center gap-2 px-3 py-2 text-red-400 w-full text-left hover:bg-white/5 rounded-md">
                       <LogOut size={18} /> Sign Out
                    </button>
                   </>
                ) : (
                  <button 
                    onClick={() => { setAuthModalOpen(true); setIsOpen(false); }}
                    className="w-full bg-gradient-to-r from-primary to-accentPink text-white px-5 py-3 rounded-md font-medium"
                  >
                    Sign In / Join
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};

// Icons helper
const CodeIcon = ({className}:{className?:string}) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const BriefcaseIcon = ({className}:{className?:string}) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

export default Navbar;