import { Course, ServicePackage, Testimonial } from './types';

export const MOCK_COURSES: Course[] = [
  // Development & Tech Courses - ₹49,999
  {
    id: 'd1',
    title: 'No-Code Development Masterclass',
    instructor: 'Ristic AI Team',
    rating: 4.8,
    students: 150,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    tags: ['No-Code', 'Automation', 'Web'],
    description: "Learn to build scalable web applications without writing a single line of code. Master tools like Bubble, Webflow, and Zapier to launch your startup in weeks, not months.",
    curriculum: ["Intro to No-Code", "Database Design", "Building Logic & Workflows", "API Integrations", "Publishing & Scaling"]
  },
  {
    id: 'd2',
    title: 'Full-Stack Development Bootcamp',
    instructor: 'Ristic AI Team',
    rating: 4.9,
    students: 220,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    tags: ['React', 'Node', 'Database'],
    description: "A complete zero-to-hero bootcamp covering the MERN stack. Build real-world projects, learn server management, and master modern frontend frameworks.",
    curriculum: ["HTML/CSS/JS Basics", "React & Hooks", "Node.js & Express", "MongoDB & SQL", "Deployment & DevOps"]
  },
  {
    id: 'd3',
    title: 'Website Development Professional',
    instructor: 'Ristic AI Team',
    rating: 4.7,
    students: 310,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    tags: ['Web Design', 'HTML/CSS'],
    description: "Master the art of creating stunning, responsive websites. Focus on UI/UX principles, accessibility, and modern CSS techniques.",
    curriculum: ["Design Principles", "Responsive Layouts", "Animations", "CMS Integration", "SEO Basics"]
  },
  {
    id: 'd4',
    title: 'Native Mobile App Development',
    instructor: 'Ristic AI Team',
    rating: 4.9,
    students: 180,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    tags: ['iOS', 'Android', 'React Native'],
    description: "Build high-performance native apps for iOS and Android using React Native. Learn to access device features like camera, GPS, and push notifications.",
    curriculum: ["React Native Basics", "Navigation", "State Management", "Native Modules", "App Store Deployment"]
  },
  {
    id: 'd5',
    title: 'E-commerce Website & App Development',
    instructor: 'Ristic AI Team',
    rating: 4.8,
    students: 250,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    tags: ['E-commerce', 'Shopify', 'Stripe'],
    description: "Launch your own online store. Learn to integrate payment gateways, manage inventory, and secure customer data.",
    curriculum: ["E-commerce Fundamentals", "Platform Selection", "Payment Integration", "Security & Compliance", "Marketing Tools"]
  },
  {
    id: 'd6',
    title: 'Product / Brand Website Building',
    instructor: 'Ristic AI Team',
    rating: 4.8,
    students: 140,
    price: 49999,
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    tags: ['Branding', 'Niche Markets'],
    description: "Create brand-centric digital experiences. Focus on storytelling, visual identity, and converting visitors into loyal customers.",
    curriculum: ["Brand Strategy", "Visual Storytelling", "High-Conversion Layouts", "Analytics", "Launch Strategy"]
  },

  // Business-Oriented Courses - ₹19,999
  {
    id: 'b1',
    title: 'Build My Own Website Course',
    instructor: 'Ristic AI Team',
    rating: 4.7,
    students: 400,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1493612276216-9c5907c6ce61?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    tags: ['Personal', 'DIY'],
    description: "Empower yourself to build your personal digital presence. Perfect for freelancers, consultants, and hobbyists.",
    curriculum: ["Choosing a Platform", "Content Strategy", "Basic Customization", "Domain & Hosting", "Maintenance"]
  },
  {
    id: 'b2',
    title: 'Build My Business Website Course',
    instructor: 'Ristic AI Team',
    rating: 4.8,
    students: 350,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    tags: ['Small Business', 'Marketing'],
    description: "Get your small business online. Learn to create pages that sell your services and attract local customers.",
    curriculum: ["Business Requirements", "Local SEO", "Lead Generation Forms", "Testimonials & Trust", "Google Maps Integration"]
  },
  {
    id: 'b3',
    title: 'Build My Company Website Course',
    instructor: 'Ristic AI Team',
    rating: 4.8,
    students: 200,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    tags: ['Corporate', 'Enterprise'],
    description: "Professional training for corporate website management. Learn about corporate identity, press rooms, and investor relations pages.",
    curriculum: ["Corporate Identity", "Stakeholder Management", "Security Protocols", "Multi-language Support", "Intranets"]
  },
  {
    id: 'b4',
    title: 'Build My Brand Website Course',
    instructor: 'Ristic AI Team',
    rating: 4.9,
    students: 280,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    tags: ['Branding', 'Identity'],
    description: "For influencers and creators. Build a hub for your content, merchandise, and community.",
    curriculum: ["Brand Aesthetics", "Social Media Integration", "Merch Store Setup", "Community Forums", "Newsletter Integration"]
  },
  {
    id: 'b5',
    title: 'Build My Personal Website Course',
    instructor: 'Ristic AI Team',
    rating: 4.7,
    students: 500,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    tags: ['Portfolio', 'Blog'],
    description: "Showcase your work and resume. Ideal for job seekers and creative professionals.",
    curriculum: ["Portfolio Best Practices", "Resume Integration", "Blogging", "Contact Forms", "SEO for Names"]
  },
  {
    id: 'b6',
    title: 'Build My Community/Institution Website',
    instructor: 'Ristic AI Team',
    rating: 4.8,
    students: 150,
    price: 19999,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
    tags: ['Non-profit', 'Community'],
    description: "Connect your community. Build websites for schools, villages, religious groups, or non-profits.",
    curriculum: ["Member Management", "Event Calendars", "Donation Systems", "News & Updates", "Accessibility"]
  }
];

export const SERVICE_CATALOG = [
  {
    category: "AI Services",
    items: [
      "AI Automation Setup",
      "AI Agent Creation for Businesses",
      "Custom AI Chat Agents",
      "Workflow & Business Automation",
      "AI Consulting & Integration Services"
    ]
  },
  {
    category: "Website & App Development",
    items: [
      "Build Website for Business, Company, Brand",
      "Build Website for Restaurant, Hotel",
      "Build Website for School, College, Organization",
      "Build Website for Community / Village / Religious Groups",
      "Personal / Portfolio Website",
      "Build Native Mobile App (Business, Company, Brand, etc.)",
      "Build Native Mobile App (Personal Use)"
    ]
  },
  {
    category: "E-commerce Services",
    items: [
      "Build E-commerce Website",
      "Build E-commerce Mobile App",
      "Setup Payment Systems, Catalog, Checkout",
      "Full E-commerce Launch Package"
    ]
  },
  {
    category: "Consultation & Counseling",
    items: [
      "Course Counseling",
      "AI Automation Consultation",
      "Business Tech Consultation",
      "Services Discussion",
      "Govt Documentation Processing Consultation",
      "Any Custom Requirements"
    ]
  }
];

export const MOCK_SERVICES: ServicePackage[] = []; 

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Chen',
    role: 'Startup Founder',
    content: "Ristic Ai Solution's course on agents completely transformed how we handle customer support. Highly recommended!",
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Julia Vance',
    role: 'Marketing Director',
    content: "The consultation service was worth every penny. We saved months of dev time using their no-code strategies.",
    avatar: 'https://picsum.photos/100/100?random=11'
  }
];