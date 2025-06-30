import React, { useState } from 'react';
import { ExternalLink,  Code } from 'lucide-react';
import gym from "../src/assets/projects/gym.png";
import webmaster from "../src/assets/projects/webmaster.png";
import freelancing from "../src/assets/projects/freelancing.png";
import app from "../src/assets/projects/app.jpg";
import optical from "../src/assets/projects/optical.png";
import trading from "../src/assets/projects/trading.png";

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
const projects = [
  {
    id: 1,
    title: 'Trading Platform',
    category: 'web',
    image: trading,
    description: 'A modern trading web platform offering real-time charts, market insights, and secure transactions tailored for Indian investors.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    demoLink: 'https://monstergym63.vercel.app/', // Replace with actual trading demo
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 2,
    title: 'WebAlchemists – Digital Agency Platform',
    category: 'web',
    image: freelancing,
    description: 'A modern freelancing website built for a digital agency to showcase services, display a portfolio, manage client inquiries, and streamline project handling with a responsive and user-friendly interface.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    demoLink: 'https://web-alchemists-frontend.vercel.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 3,
    title: 'Educational Platform',
    category: 'web',
    image: webmaster,
    description: 'An online learning platform with courses, quizzes, and progress tracking, inspired by traditional Indian educational values.',
    technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    demoLink: 'https://webmasterslearning-two.vercel.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 4,
    title: 'Moto Mate App (On going)',
    category: 'mobile',
    image: app,
    description: 'A mobile application offering on-demand roadside assistance services like fuel delivery, tire change, and towing, using real-time location tracking and user-friendly service booking.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe', 'Redux'],
    demoLink: '#',
    codeLink: '',
  },
  {
    id: 5,
    title: 'Gym Platform',
    category: 'web',
    image: gym,
    description: 'A modern fitness platform for a gym business featuring membership plans, trainer profiles, class schedules, and online payment integration for seamless user experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    demoLink: 'https://monstergym63.vercel.app/',
    codeLink: 'https://github.com/Nishikant001?tab=repositories',
  },
  {
    id: 6,
    title: 'Optical Fiber Website',
    category: 'design',
    image: optical,
    description: 'A modern and responsive website design for an Optical Fiber service provider, showcasing network solutions, service offerings, and project highlights with a clean and professional UI.',
    technologies: ['Figma'],
    demoLink: 'https://www.figma.com/proto/22JjLmNQ4XfLXex8M18geN/Untitled?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&content-scaling=fixed',
    codeLink: '',
  }
];

  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Decorative top border inspired by Indian patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
      
      {/* Background decorative element - inspired by Indian mandala */}
      <div className="absolute top-40 right-8 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e06377" strokeWidth="1"/>
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45}, 50, 50)`}>
              <path d="M50,5 L55,15 L45,15 Z" fill="#e06377"/>
              <path d="M50,95 L55,85 L45,85 Z" fill="#e06377"/>
            </g>
          ))}
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45 + 22.5}, 50, 50)`}>
              <path d="M50,10 Q65,35 50,60 Q35,35 50,10" fill="none" stroke="#b8336a" strokeWidth="1"/>
            </g>
          ))}
        </svg>
      </div>
      
      {/* Background decorative element - inspired by paisley */}
      <div className="absolute bottom-40 left-8 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50,10 C70,10 80,30 80,50 C80,65 70,80 50,80 C30,80 20,65 20,50 C20,35 30,25 40,25 C50,25 55,35 55,45 C55,55 50,60 40,60 C35,60 30,55 30,50"
            fill="none"
            stroke="#b8336a"
            strokeWidth="1"
          />
          <path 
            d="M50,10 C30,10 20,30 20,50 C20,65 30,80 50,80 C70,80 80,65 80,50 C80,35 70,25 60,25 C50,25 45,35 45,45 C45,55 50,60 60,60 C65,60 70,55 70,50"
            fill="none"
            stroke="#b8336a"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover my work that combines <span className="text-orange-600">technical excellence</span> with 
            creative vision inspired by India's rich design heritage.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                : 'bg-white border border-orange-200 text-gray-700 hover:border-orange-400'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'web' 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                : 'bg-white border border-orange-200 text-gray-700 hover:border-orange-400'
            }`}
          >
            Web Development
          </button>
          <button 
            onClick={() => setFilter('mobile')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'mobile' 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                : 'bg-white border border-orange-200 text-gray-700 hover:border-orange-400'
            }`}
          >
            Mobile Apps
          </button>
          <button 
            onClick={() => setFilter('design')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'design' 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                : 'bg-white border border-orange-200 text-gray-700 hover:border-orange-400'
            }`}
          >
            UI/UX Design
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-orange-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project image with overlay effect */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end gap-3">
                      <a 
                        href={project.demoLink}
                        className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.codeLink}
                        className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-orange-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <GitHub className="h-5 w-5" /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-orange-100">
                  <span className="text-sm text-gray-500 capitalize">{project.category}</span>
                  <a 
                    href={project.demoLink}
                    className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-red-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional decoration - Indian-inspired border */}
        <div className="relative mt-20 py-8">
          <div className="absolute left-0 right-0 h-px bg-orange-200" style={{
            backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 6px, #fdba74 6px, #fdba74 12px)",
          }}></div>
          
          <div className="text-center">
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Code className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </div>
          
          <div className="absolute left-0 right-0 bottom-0 h-px bg-orange-200" style={{
            backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 6px, #fdba74 6px, #fdba74 12px)",
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;