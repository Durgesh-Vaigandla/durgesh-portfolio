
import { Project, Milestone, FilterType, SkillCategory, Service, Testimonial, ProcessStep, FAQItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hackfest 2K25',
    description: 'Orchestrated a national-level hackathon platform handling real-time collaboration for 300+ participants. Implemented live scoring and dynamic team management.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Experimental',
    featured: false,
    image: 'https://picsum.photos/600/400?random=1',
    link: 'https://hackfest2k25.mlsc.live/',
    impact: 'Supported 300+ concurrent users with zero downtime.'
  },
  {
    id: '2',
    title: 'MLSC Live',
    description: 'Engineered the central community hub for Microsoft Learn Student Club, streamlining event registrations and member directory management.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Open Source',
    featured: false,
    image: 'https://picsum.photos/600/400?random=2',
    link: 'https://mlsc.live/',
    impact: 'Reduced event registration time by 40%.'
  },
  {
    id: '3',
    title: 'IITB Dashboard',
    description: 'Built a high-performance data visualization dashboard for IIT Bombay technical events, processing complex datasets into actionable real-time analytics.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=3',
    link: 'https://iitbthra25.treeinvault.com/',
    impact: 'Real-time tracking for event organizers.'
  },
  {
    id: '4',
    title: 'CSEdge',
    description: 'Developed an immersive agency website to increase client engagement and showcase creative capabilities.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: true,
    image: 'https://picsum.photos/600/400?random=4',
    link: 'https://csedge.co/',
    impact: 'Increased session duration by 60%.'
  },
  {
    id: '5',
    title: 'Sunshine Public School',
    description: 'Digitized institutional workflows including admissions and student resources, improving administrative efficiency.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=5',
    link: 'https://www.sunshine-publicschool.com/'
  },
  {
    id: '6',
    title: 'Neufology',
    description: 'Corporate identity platform for digital transformation services.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=6',
    link: 'https://neufology.in/'
  },
  {
    id: '7',
    title: 'Siddharth Institutions LMS',
    description: 'Created a scalable Learning Management System to track student progress and deliver educational content effectively.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=7',
    link: 'https://lms.mlsc.live/'
  },
  {
    id: '8',
    title: 'Vega Logistics',
    description: 'Logistics platform with real-time shipment tracking integration.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=8',
    link: 'https://www.vegalogisticsltd.com/'
  },
  {
    id: '9',
    title: 'UB Biosciences',
    description: 'Aquaculture solutions company website with e-commerce capabilities.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: true,
    image: 'https://picsum.photos/600/400?random=9',
    link: 'https://ubbiosciences.com/',
    impact: 'Boosted online inquiries by 35%.'
  },
  {
    id: '10',
    title: 'Rakshanth Technologies',
    description: 'Tech solutions portfolio and service listing.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=10',
    link: 'https://rakshanth.com/'
  },
  {
    id: '11',
    title: 'Kingdom Trainings',
    description: 'Educational platform for professional career development.',
    tech: ['HTML', 'CSS', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=11',
    link: 'https://kingdomtrainings.co/'
  },
  {
    id: '12',
    title: 'Goldstone General Contractors',
    description: 'Construction business portfolio.',
    tech: ['HTML', 'CSS', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=12',
    link: 'https://goldstonegc.org/'
  },
  {
    id: '13',
    title: 'Xeedo Project',
    description: 'Experimental UI/UX exploration project.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Experimental',
    featured: false,
    image: 'https://picsum.photos/600/400?random=13',
    link: 'https://xeedo.org/home'
  },
  {
    id: '14',
    title: 'Pinnacle Casa Projects',
    description: 'Real estate showcase with virtual tours.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=14',
    link: 'https://pinnaclecasaprojects.in/'
  },
  {
    id: '15',
    title: 'Aavanto',
    description: 'Corporate site for IT solutions and digital transformation.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: true,
    image: 'https://picsum.photos/600/400?random=15',
    link: 'https://aavanto.com/',
    impact: 'Enhanced digital brand presence and lead gen.'
  },
  {
    id: '16',
    title: 'Sugarology',
    description: 'Boutique bakery brand website.',
    tech: ['HTML', 'CSS', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=16',
    link: 'https://sugarology.in/'
  },
  {
    id: '17',
    title: 'Spark Dance Academy',
    description: 'Academy management and registration system.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=17',
    link: 'https://sparkdanceacademyq8.com/'
  },
  {
    id: '18',
    title: 'Chaya Print Tech',
    description: 'Printing technology machinery showcase.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=18',
    link: 'http://chayaprinttech.com/'
  },
  {
    id: '19',
    title: 'DeQualita',
    description: 'Interior design portfolio showcase.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=19',
    link: 'https://www.dequalitaprojects.com/'
  },
  {
    id: '20',
    title: 'GH Enterprise',
    description: 'B2B trading enterprise website.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=20',
    link: 'http://ghenterprise.com'
  },
  {
    id: '21',
    title: 'Superior Furnitures',
    description: 'Furniture catalog with product filtering.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=21',
    link: 'https://superiorfurnitures.in/'
  },
  {
    id: '22',
    title: 'Laundryours',
    description: 'On-demand laundry service booking platform.',
    tech: ['HTML', 'Bootstrap', 'JS'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=22',
    link: 'https://laundryours.com/'
  },
  {
    id: '23',
    title: 'TreeIn Connect',
    description: 'Business networking and digital card platform.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=23',
    link: 'https://treeinvault.com/'
  },
  {
    id: '24',
    title: 'POS UB Biosciences',
    description: 'Inventory and sales management dashboard.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=24',
    link: 'http://pos.ubbiosciences.com'
  },
  {
    id: '25',
    title: 'Infinite Green',
    description: 'Sustainable energy solutions showcase.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=25',
    link: 'https://infinitegreen.in/'
  },
  {
    id: '26',
    title: 'SKP Fortune',
    description: 'Real estate and business fortune management platform.',
    tech: ['ReactJS', 'Vite', 'NodeJS', 'Tailwind'],
    category: 'Commercial',
    featured: false,
    image: 'https://picsum.photos/600/400?random=26',
    link: 'http://skp-fortune.netlify.app'
  }
];

export const MILESTONES: Milestone[] = [
  { 
    id: 'm1', 
    year: 'Present', 
    title: 'Project Engineering Intern @ Aavanto', 
    description: 'Developing production-grade systems and scalable web solutions using Next.js and Cloud technologies. Focusing on performance optimization and modern architectural patterns.',
    type: 'work'
  },
  { 
    id: 'm2', 
    year: '2024', 
    title: 'Organizer - Siddharth HackFest 2K25', 
    description: 'Led a 300+ participant national-level hackathon. Managed logistics, technical infrastructure, and mentorship, driving innovation across top tech campuses.',
    type: 'work'
  },
  { 
    id: 'm3', 
    year: '2024', 
    title: 'Beta Microsoft Learn Student Ambassador', 
    description: 'Mentoring 500+ students, conducting technical workshops on Azure & AI, and building active developer communities.',
    type: 'work'
  },
  { 
    id: 'm4', 
    year: '2024', 
    title: 'GirlScript Summer of Code Admin', 
    description: 'Served as Project Administrator for GSSoC, facilitating open-source contributions, reviewing PRs, and managing project workflows for hundreds of contributors.',
    type: 'work'
  },
  {
    id: 'e1',
    year: '2023 - 2026',
    title: 'B.Tech in Computer Science (AI & ML)',
    description: 'Siddartha Institute of Science & Technology, Puttur. Specializing in Artificial Intelligence and Machine Learning.',
    type: 'education'
  },
  { 
    id: 'm5', 
    year: '2023', 
    title: 'Hackathon Winner & Innovation', 
    description: 'Secured 2nd Place at "Hack with Nellore" (Triptopia AI) and 1st Prize in Front-End Design at Trishna 2K24, demonstrating rapid prototyping skills.',
    type: 'work'
  },
  {
    id: 'e2',
    year: '2019 - 2022',
    title: 'Diploma in Electronics & Communication',
    description: 'Government Polytechnic Addanki. Built a strong foundation in hardware-software interfacing and logic design.',
    type: 'education'
  },
  {
    id: 'e3',
    year: '2016 - 2019',
    title: 'Secondary School Certificate',
    description: 'Sri Krishna Chaitanya E.M. High School.',
    type: 'education'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    level: 'Advanced',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript/TypeScript'],
    context: 'My core stack for building fast, SEO-friendly, and scalable user interfaces. I use these to deliver production-grade applications.'
  },
  {
    level: 'Intermediate',
    skills: ['Python', 'Node.js', 'MongoDB', 'Firebase', 'Framer Motion'],
    context: 'Backend and animation tools I use to build robust APIs, manage real-time data, and add polish to the user experience.'
  },
  {
    level: 'Exploring',
    skills: ['Three.js / R3F', 'AI/ML Integration', 'PostgreSQL'],
    context: 'Continuously expanding my horizon into 3D web experiences and integrating intelligence into web applications.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Scalable, high-performance web applications built with Next.js, React, and modern CSS frameworks.',
    features: ['Custom UI/UX Design', 'SEO & Performance Optimization', 'CMS Integration', 'Responsive Layouts'],
    recommended: true
  },
  {
    title: 'App Development',
    description: 'Native-feel mobile applications for iOS and Android using React Native.',
    features: ['Cross-Platform Support', 'Native API Integration', 'App Store Deployment', 'Real-time Features'],
    recommended: false
  },
  {
    title: 'ML & AI Models',
    description: 'Intelligent solutions powered by Python, TensorFlow, and Scikit-learn.',
    features: ['Predictive Analytics', 'NLP & Chatbots', 'Data Visualization', 'Model Training'],
    recommended: false
  },
  {
    title: 'SEO & GMB Growth',
    description: 'Comprehensive strategies to boost your digital presence and local search rankings.',
    features: ['Google My Business Setup', 'Keyword Strategy', 'Technical SEO Audit', 'Traffic Growth'],
    recommended: false
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We hop on a call to dissect your problem, define your goals, and map out the scope. No technical jargon, just business strategy.'
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'I design the system architecture and UI wireframes. You get a clear visual of what we are building before a single line of code is written.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'I build your application in sprints, providing you with weekly updates and testable demos. You are never left in the dark.'
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy to production, set up analytics, and ensure everything runs smoothly. I stay on board for post-launch support.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Siddharth Institutions',
    role: 'Administration',
    company: 'MLSC',
    content: 'Durgesh transformed our student management process. The LMS he built handles thousands of students effortlessly. Highly recommended.'
  },
  {
    id: 't2',
    name: 'Prem Doniparthi',
    role: 'Founder',
    company: 'UB Biosciences',
    content: 'Our e-commerce sales jumped 35% after the redesign. The site is incredibly fast and the admin panel makes inventory management a breeze.'
  },
  {
    id: 't3',
    name: 'Hackfest Team',
    role: 'Event Coordinators',
    company: 'Hackfest 2K25',
    content: 'The platform handled 300+ concurrent users without a glitch. The real-time scoring feature was a game changer for our event.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How much do you charge for a project?",
    answer: "Every project is unique. I provide a custom quote based on your specific requirements, timeline, and complexity after our initial discovery call. This ensures you only pay for exactly what you need."
  },
  {
    question: "How long does it take to build a project?",
    answer: "A standard marketing website takes 2-3 weeks. Complex web applications usually take 4-8 weeks. I work in sprints and provide weekly updates so you always know the status."
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes! I offer a 30-day bug-free guarantee. After that, I have maintenance packages available for updates, security checks, and minor improvements."
  },
  {
    question: "Do I need to have the design ready?",
    answer: "Not necessarily. I can design the UI/UX for you as part of the project. However, if you already have designs in Figma, I can work directly from those."
  }
];

export const FILTERS = [FilterType.ALL, FilterType.REACT, FilterType.NEXT, FilterType.AI, FilterType.THREE];
