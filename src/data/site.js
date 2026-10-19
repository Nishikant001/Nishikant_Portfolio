import trading from '../assets/projects/trading.webp'
import freelancing from '../assets/projects/freelancing.webp'
import webmaster from '../assets/projects/webmaster.webp'
import app from '../assets/projects/app.webp'
import gym from '../assets/projects/gym.webp'
import optical from '../assets/projects/optical.webp'

export const profile = {
  name: 'Nishikant Sahoo',
  firstName: 'Nishikant',
  email: 'sahoonishikant008@gmail.com',
  phone: '+91-6372770485',
  phoneHref: 'tel:+916372770485',
  location: 'Cuttack, Odisha, India',
  linkedin: 'https://www.linkedin.com/in/nishikant008',
  github: 'https://github.com/Nishikant001',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Each role is two lines so the stacked hero headline keeps a constant height.
export const heroRoles = [
  ['Full Stack', 'Developer'],
  ['Team', 'Lead'],
  ['Enterprise', 'Applications'],
  ['SAP ERP', 'Integration'],
  ['UI/UX', 'Design'],
]

export const techStack = [
  'React', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite', 'React Native',
  'Node.js', 'Express', 'REST APIs', '.NET Core', 'Python', 'Django', 'PHP', 'Core Java',
  'MongoDB', 'MySQL', 'PostgreSQL', 'Sequelize', 'Firebase',
  'SAP integration', 'Git & GitHub', 'Nginx', 'PM2', 'Linux deployment', 'Docker', 'AWS',
  'Figma', 'Next.js', 'GraphQL',
]

export const expertise = [
  {
    icon: 'Layers',
    title: 'Full stack web development',
    text: 'End-to-end MERN applications for business use: React interfaces, Node and Express services, MongoDB and SQL data.',
  },
  {
    icon: 'Monitor',
    title: 'React frontend engineering',
    text: 'Reusable component systems, Redux state and responsive Tailwind interfaces that hold up on every screen size.',
  },
  {
    icon: 'Server',
    title: 'Backend and API architecture',
    text: 'REST APIs, Express and .NET Core services, secure authentication and third-party integrations.',
  },
  {
    icon: 'Network',
    title: 'SAP ERP integration',
    text: 'Connecting web backends to SAP ERP so enterprise data and documents flow into the applications teams already use.',
  },
  {
    icon: 'PenTool',
    title: 'UI/UX design',
    text: 'Interfaces designed in Figma and carried through to production code, so the build matches the design.',
  },
  {
    icon: 'Rocket',
    title: 'Deployment and technical leadership',
    text: 'Linux deployments with Nginx and PM2, plus guiding developers through delivery and code quality.',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Trading Platform',
    category: 'web',
    image: trading,
    description:
      'A modern trading web platform offering real-time charts, market insights, and secure transactions tailored for Indian investors.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    demoLink: 'https://jolly-lollipop-237f09.netlify.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 2,
    title: 'WebAlchemists, a digital agency platform',
    category: 'web',
    image: freelancing,
    description:
      'A freelancing website built for a digital agency to showcase services, display a portfolio, manage client inquiries, and streamline project handling.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    demoLink: 'https://web-alchemists-frontend.vercel.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 3,
    title: 'Educational Platform',
    category: 'web',
    image: webmaster,
    description: 'An online learning platform with courses, quizzes, and progress tracking.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    demoLink: 'https://webmasterslearning-two.vercel.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 4,
    title: 'Moto Mate',
    status: 'In progress',
    category: 'mobile',
    image: app,
    description:
      'A mobile application offering on-demand roadside assistance such as fuel delivery, tire change, and towing, with real-time location tracking and service booking.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe', 'Redux'],
    demoLink: '',
    codeLink: '',
  },
  {
    id: 5,
    title: 'Gym Platform',
    category: 'web',
    image: gym,
    description:
      'A fitness platform for a gym business featuring membership plans, trainer profiles, class schedules, and online payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    demoLink: 'https://monstergym63.vercel.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 6,
    title: 'Optical Fiber Website',
    category: 'design',
    image: optical,
    description:
      'A responsive website design for an optical fiber service provider, presenting network solutions, service offerings, and project highlights.',
    technologies: ['Figma'],
    demoLink:
      'https://www.figma.com/proto/22JjLmNQ4XfLXex8M18geN/Untitled?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&content-scaling=fixed',
    demoLabel: 'Figma prototype',
    codeLink: '',
  },
]

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
]

export const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Excelligent Consulting Services',
    companyUrl: 'https://excelligent.co.in/',
    location: 'Bhubaneswar, Odisha',
    duration: 'Jan 2025 – Present',
    type: 'Full-time',
    description:
      'Full-stack developer on diverse projects involving the MERN stack, .NET technologies, Python, and PHP. Responsible for end-to-end development, API integrations, backend architecture, and responsive frontends, working with cross-functional teams to deliver scalable and secure software.',
    achievements: [
      'Delivered multiple full-stack applications using MERN and .NET',
      'Contributed to backend logic and frontend UI across different tech stacks',
      'Integrated third-party APIs and implemented secure authentication',
    ],
    skills: ['React', 'Node.js', 'MongoDB', '.NET Core', 'Python', 'Django', 'PHP', 'MySQL', 'Express', 'Redux', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Founder & Instructor',
    company: 'Webmasters Learning',
    companyUrl: 'https://webmasterslearning-two.vercel.app/',
    location: 'Cuttack, Odisha',
    duration: 'Jun 2023 – Present',
    type: 'Full-time',
    description:
      'Founded and runs Webmasters Learning, a tech training platform that upskills students and professionals in full-stack development. Designed structured courses, ran hands-on sessions, and mentored learners building real-world projects.',
    achievements: [
      'Trained 50+ students in MERN, Java Full Stack, and Python Full Stack development',
      'Designed project-based learning content covering frontend, backend, and deployment',
      'Built and maintains the official platform for Webmasters Learning',
    ],
    skills: ['MERN Stack', 'Java', 'Python', 'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'MERN Full-stack Developer',
    company: 'Ervon Technologys',
    companyUrl: 'https://ervon.tech/',
    location: 'Mumbai, Maharashtra',
    duration: 'Dec 2023 – Nov 2024',
    type: 'Full-time',
    description:
      'MERN full-stack developer on client and internal projects. Built RESTful APIs, connected front-end interfaces to backend services, and managed MongoDB databases alongside senior developers.',
    achievements: [
      'Delivered 3 full-stack web projects using MERN',
      'Built reusable components and dynamic UIs with React.js',
      'Integrated backend APIs with MongoDB and handled user authentication',
    ],
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git'],
  },
]
