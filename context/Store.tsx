import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Appointment, Notification } from '../types';

interface StoreContextType {
  user: User | null;
  isLoading: boolean;
  login: (name: string, email: string) => void;
  logout: () => void;
  bookAppointment: (apt: Appointment) => void;
  enrollCourse: (courseId: string) => void;
  notifications: Notification[];
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  clearNotifications: () => void;
  addNotification: (title: string, message: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showToast: (message: string, type?: 'success' | 'error') => void;
  toast: { message: string; type: 'success' | 'error'; visible: boolean } | null;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean } | null>(null);

  // Load user from local storage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('ristic_user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      loadNotificationsForUser(parsedUser.id);
    } else {
      setNotifications([]);
    }
    setIsLoading(false);
  }, []);

  // Save user to local storage on change
  useEffect(() => {
    if (user) {
      localStorage.setItem('ristic_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ristic_user');
    }
  }, [user]);

  const loadNotificationsForUser = (userId: string) => {
    const savedNotifs = localStorage.getItem(`ristic_notifications_${userId}`);
    if (savedNotifs) {
      // Parse dates back to Date objects
      const parsed = JSON.parse(savedNotifs).map((n: any) => ({
        ...n,
        time: new Date(n.time)
      }));
      setNotifications(parsed);
    } else {
      // Default welcome for new user session if none exist
      const welcome: Notification = {
          id: Date.now().toString(),
          title: 'Welcome to Ristic Ai',
          message: 'Explore our AI courses and services today.',
          read: false,
          time: new Date()
      };
      setNotifications([welcome]);
      localStorage.setItem(`ristic_notifications_${userId}`, JSON.stringify([welcome]));
    }
  };

  const saveNotifications = (userId: string, notifs: Notification[]) => {
    localStorage.setItem(`ristic_notifications_${userId}`, JSON.stringify(notifs));
  };

  const addNotification = (title: string, message: string) => {
    if (!user) return;
    const newNotif: Notification = {
      id: Date.now().toString(),
      title,
      message,
      read: false,
      time: new Date()
    };
    const updated = [newNotif, ...notifications];
    setNotifications(updated);
    saveNotifications(user.id, updated);
  };

  const login = (name: string, email: string) => {
    // Check if user exists in mock DB (localStorage for simplicity here)
    // In a real app, this would be an API call
    const existingData = localStorage.getItem(`ristic_user_data_${email}`);
    let activeUser: User;

    if (existingData) {
      activeUser = JSON.parse(existingData);
    } else {
      activeUser = {
        id: Date.now().toString(),
        name,
        email,
        enrolledCourses: [],
        appointments: [],
        avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
      };
      // Save new user data
      localStorage.setItem(`ristic_user_data_${email}`, JSON.stringify(activeUser));
    }

    setUser(activeUser);
    loadNotificationsForUser(activeUser.id);
    
    // Add welcome notification if it's a fresh login
    setTimeout(() => {
      // We use a slight delay/check to avoid spamming if desired, 
      // but here we just add it to the state directly for immediate feedback
      // Note: addNotification requires 'user' state to be set, which might not be immediate in this closure
      // So we manually update logic or rely on the loaded notifications.
      // For simplicity, we just toast here, notifications are loaded via loadNotificationsForUser
    }, 100);
    
    showToast(`Welcome back, ${name}!`);
  };

  const logout = () => {
    setUser(null);
    setNotifications([]);
    showToast('Logged out successfully');
  };

  const bookAppointment = (apt: Appointment) => {
    if (!user) return;
    const updatedUser = { ...user, appointments: [...user.appointments, apt] };
    setUser(updatedUser);
    // Persist to "DB"
    localStorage.setItem(`ristic_user_data_${user.email}`, JSON.stringify(updatedUser));
    
    addNotification('Appointment Confirmed', `Your ${apt.duration} min ${apt.service} is scheduled for ${apt.date}.`);
    showToast('Appointment booked successfully!');
  };

  const enrollCourse = (courseId: string) => {
    if (!user) return;
    if (user.enrolledCourses.includes(courseId)) {
      showToast('You are already enrolled in this course.', 'error');
      return;
    }
    const updatedUser = { ...user, enrolledCourses: [...user.enrolledCourses, courseId] };
    setUser(updatedUser);
    // Persist to "DB"
    localStorage.setItem(`ristic_user_data_${user.email}`, JSON.stringify(updatedUser));
    
    addNotification('Course Enrollment', 'You have successfully enrolled in a new course. Happy Learning!');
    showToast('Enrolled successfully! Check your Dashboard.');
  };

  const markNotificationRead = (id: string) => {
    if (!user) return;
    const updated = notifications.map(n => n.id === id ? { ...n, read: true } : n);
    setNotifications(updated);
    saveNotifications(user.id, updated);
  };

  const markAllNotificationsRead = () => {
    if (!user) return;
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
    saveNotifications(user.id, updated);
  };

  const clearNotifications = () => {
    if (!user) return;
    setNotifications([]);
    saveNotifications(user.id, []);
    showToast('Notifications cleared');
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <StoreContext.Provider value={{
      user,
      isLoading,
      login,
      logout,
      bookAppointment,
      enrollCourse,
      notifications,
      markNotificationRead,
      markAllNotificationsRead,
      clearNotifications,
      addNotification,
      searchQuery,
      setSearchQuery,
      showToast,
      toast
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};