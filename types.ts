export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  category: 'AI' | 'No-code' | 'Development' | 'Business';
  tags: string[];
  description?: string;
  curriculum?: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  priceStart: string;
  features: string[];
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Appointment {
  id: string;
  service: string; // e.g., "Consultation" or specific service name
  date: string;
  time: string;
  duration: string;
  price: number;
  status: 'confirmed' | 'pending' | 'completed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[]; // List of Course IDs
  appointments: Appointment[];
  avatar?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  time: Date;
}
