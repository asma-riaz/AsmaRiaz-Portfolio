export const projects = [
  {
    id: 'eliteverse',
    title: 'EliteVerse',
    subtitle: 'Full Stack E-Commerce Platform',
    period: 'May 2026',
    fileName: 'eliteverse.jsx',
    video: '/projects/eliteverse.mp4',
    description:
      'A production-ready e-commerce platform with product listings, a dynamic cart and wishlist, and a multi-step checkout flow with real-time client-side card validation. Separate buyer and admin portals run on JWT-based authentication, and the admin dashboard ships with full CRUD for inventory and orders alongside a Recharts analytics panel for revenue and order trends.',
    tech: ['React JS', 'PHP', 'MySQL', 'JWT', 'Recharts', 'Tailwind CSS'],
    features: [
      'Dynamic cart and wishlist with a multi-step checkout flow',
      'Role-based buyer and admin portals secured with JWT',
      'Recharts analytics panel visualizing revenue and order volume',
      'Full CRUD admin dashboard for inventory and orders',
    ],
    challenges: [
      'Architected JWT authentication with role separation between buyers and admins',
      'Built a RESTful PHP and MySQL backend handling persistence across every session',
      'Implemented real-time client-side validation across a multi-step checkout',
    ],
    github: 'https://github.com/asma-riaz/EliteVerse-ecommerce',
    // TODO: replace with your live Vercel URL once the backend host is finalized
    live: '',
  },
  {
    id: 'zestybites',
    title: 'ZestyBites',
    subtitle: 'Restaurant Management Website',
    period: 'Mar 2026',
    fileName: 'zestybites.php',
    video: '/projects/zestybites.mp4',
    description:
      'A multi-page restaurant website with interactive menu browsing, a service showcase, and a contact form, driven by JavaScript for smooth in-page transitions and real-time UI feedback. A secure PHP and MySQL backend powers an admin dashboard with login authentication and role-based access, letting staff manage menu items and inquiries without touching code.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Interactive menu browsing with smooth in-page transitions',
      'Admin dashboard for menu and customer inquiry management',
      'Role-based authentication separating staff and admin access',
      'Real-time UI feedback across every interaction',
    ],
    challenges: [
      'Built secure PHP and MySQL authentication without exposing admin routes',
      'Designed a no-code menu management flow for non-technical staff',
    ],
    github: 'https://github.com/asma-riaz/ZestyBites-Restaurant',
    live: '',
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    subtitle: 'Student Records Portal',
    period: 'Mar 2026',
    fileName: 'students.php',
    video: '/projects/student-management-system.mp4',
    description:
      'A full-stack student records portal with a protected admin interface supporting complete CRUD operations, built with PHP prepared statements throughout to eliminate SQL injection risk. Data browsing is organized into department-wise collapsible sections with CGPA-based color coding and client-side pill filters for instant record lookup.',
    tech: ['PHP', 'MySQL', 'XAMPP', 'phpMyAdmin', 'HTML5', 'CSS3'],
    features: [
      'Department-wise collapsible sections for fast browsing',
      'CGPA-based color coding for instant visual assessment',
      'Client-side pill filters with zero page reloads',
      'Protected admin interface with full CRUD operations',
    ],
    challenges: [
      'Used PHP prepared statements throughout to eliminate SQL injection risk',
      'Designed an intuitive browsing experience for large record sets',
    ],
    github: 'https://github.com/asma-riaz/student-management-system',
    live: '',
  },
  {
    id: 'tic-tac-toe-ai',
    title: 'Tic-Tac-Toe with AI Opponent',
    subtitle: 'Browser Game',
    period: 'Jan 2026',
    fileName: 'game.js',
    video: '/projects/tic-tac-toe-ai.mp4',
    description:
      'A polished browser-based Tic-Tac-Toe game with dynamic win detection, live turn tracking, and an unbeatable minimax AI opponent that evaluates every possible game state to always play optimally.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Unbeatable minimax AI opponent',
      'Dynamic win detection and live turn tracking',
      'Fluid responsiveness from mobile to desktop',
    ],
    challenges: [
      'Replaced an exploitable heuristic with a full minimax search',
      'Achieved clamp()-based responsive scaling without media query breakpoints',
    ],
    github: 'https://github.com/asma-riaz/Tic-Tac-Toe-game',
    live: 'https://tic-tac-toe-game-by-asma.netlify.app/',
  },
]
