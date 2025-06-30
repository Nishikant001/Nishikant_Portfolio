import React from 'react';
import { 
  Calendar, 
  MapPin, 
  ExternalLink,
  Award,
  Code,
  Users,
  Target
} from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
  id: 1,
  title: "Software Developer",
  company: "Excelligent Consulting Services",
  companyUrl: "https://excelligent.co.in/",
  location: "Bhubneshwar, Odisha",
  duration: "Jan 2025 - Present",
  type: "Full-time",
  description: "Working as a full-stack software developer on diverse projects involving MERN stack, .NET technologies, Python, and PHP. Responsible for end-to-end development, API integrations, backend architecture, and building responsive frontends. Collaborating with cross-functional teams to deliver scalable and secure software solutions.",
  achievements: [
    "Successfully delivered multiple full-stack applications using MERN and .NET",
    "Contributed to both backend logic and frontend UI across different tech stacks",
    "Integrated third-party APIs and implemented secure authentication mechanisms"
  ],
  skills: ["React", "Node.js", "MongoDB", ".NET Core", "Python", "Django", "PHP", "MySQL", "Express", "Redux", "Tailwind CSS"],
  current: true
},
    {
  id: 2,
  title: "Founder & Instructor",
  company: "Webmasters Learning",
  companyUrl: "https://webmasterslearning-two.vercel.app/",
  location: "Cuttack, Odisha",
  duration: "Jun 2023 - Present",
  type: "Full-time",
  description: "Founded and currently manage Webmasters Learning, a tech training platform aimed at upskilling students and professionals in full-stack development. Designed structured courses, conducted hands-on sessions, and mentored learners in building real-world projects using modern technologies.",
  achievements: [
    "Trained 50+ students in MERN, Java Full Stack, and Python Full Stack development",
    "Designed and delivered project-based learning content covering frontend, backend, and deployment",
    "Built and maintained the official platform for Webmasters Learning"
  ],
  skills: ["MERN Stack", "Java", "Python", "React", "Node.js", "Express", "MongoDB", "MySQL", "Bootstrap", "Tailwind CSS"],
  current: true
},
    {
  id: 3,
  title: "MERN Full-stack Developer",
  company: "Ervon Technologys",
  companyUrl: "https://ervon.tech/",
  location: "Mumbai, Maharashtra",
  duration: "Dec 2023 - Nov 2024",
  type: "Full-time",
  description: "Worked as a MERN full-stack developer contributing to multiple client and internal projects. Responsible for building RESTful APIs, integrating front-end interfaces with backend services, and managing MongoDB databases. Collaborated with senior developers to implement scalable, secure, and performance-optimized applications.",
  achievements: [
    "Successfully delivered 3 full-stack web projects using MERN",
    "Built reusable components and dynamic UIs with React.js",
    "Integrated backend APIs with MongoDB and handled user authentication"
  ],
  skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
  current: false
}

  ];

  return (
    <section id="experience" className="py-20 bg-orange-50 relative">
      {/* Decorative top border inspired by Indian patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
      
      {/* Background decorative element - Mandala pattern */}
      <div className="absolute top-40 right-10 w-72 h-72 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#b8336a" strokeWidth="1">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <circle cx="50" cy="50" r="10" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 40 * Math.cos(i * Math.PI/6)}
                y2={50 + 40 * Math.sin(i * Math.PI/6)}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <circle
                key={`outer-${i}`}
                cx={50 + 35 * Math.cos(i * Math.PI/4)}
                cy={50 + 35 * Math.sin(i * Math.PI/4)}
                r="3"
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="5" fill="#b8336a" fillOpacity="0.5" />
        </svg>
      </div>
      
      {/* Background decorative element - Paisley pattern */}
      <div className="absolute bottom-40 left-10 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#b8336a" strokeWidth="1">
            <path d="M30,80 Q10,60 20,40 Q30,20 50,30 Q70,40 60,60 Q50,80 30,80 Z" />
            <path d="M35,70 Q25,55 30,45 Q35,35 45,40 Q55,45 50,55 Q45,70 35,70 Z" />
            <circle cx="42" cy="52" r="2" fill="#b8336a" fillOpacity="0.3" />
            <circle cx="38" cy="58" r="1.5" fill="#b8336a" fillOpacity="0.3" />
            <circle cx="46" cy="62" r="1" fill="#b8336a" fillOpacity="0.3" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            My journey in web development, from learning the basics to leading teams and delivering impactful solutions.
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-white border-4 border-orange-500 rounded-full hidden md:block" style={{top: '2rem'}}></div>
                
                {/* Experience card */}
                <div className="md:ml-20 bg-white rounded-2xl shadow-lg p-8 border border-orange-100 hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                        {exp.current && (
                          <span className="ml-3 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-orange-600 font-semibold text-lg mb-2">
                        <Award className="h-5 w-5 mr-2" />
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-orange-700 transition-colors duration-200 flex items-center group"
                        >
                          {exp.company}
                          <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-orange-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Code className="h-5 w-5 mr-2 text-orange-600" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full border border-orange-200 hover:bg-orange-200 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">2 Years</h3>
            <p className="text-gray-600">Professional Experience</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <Code className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">20+ Projects</h3>
            <p className="text-gray-600">Successfully Delivered</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">2 Companies</h3>
            <p className="text-gray-600">Worked With</p>
          </div>
        </div>
        
        {/* Additional decoration - Indian-inspired border */}
        <div className="relative mt-20 py-8">
          <div className="absolute left-0 right-0 h-px bg-orange-200" style={{
            backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 6px, #fdba74 6px, #fdba74 12px)",
          }}></div>
          
          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each role has contributed to my growth as a developer, shaping my expertise in modern web technologies and team collaboration.
            </p>
          </div>
          
          <div className="absolute left-0 right-0 bottom-0 h-px bg-orange-200" style={{
            backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 6px, #fdba74 6px, #fdba74 12px)",
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;