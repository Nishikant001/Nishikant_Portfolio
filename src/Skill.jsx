import React from 'react';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'React.js', proficiency: 90 },
    { name: 'Vite', proficiency: 85 },
    { name: 'Tailwind CSS', proficiency: 92 },
    { name: 'JavaScript', proficiency: 88 },
    { name: 'HTML5/CSS3', proficiency: 95 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', proficiency: 80 },
    { name: 'Express', proficiency: 78 },
    { name: 'MongoDB', proficiency: 75 },
    { name: 'RESTful APIs', proficiency: 85 },
    { name: 'Firebase', proficiency: 82 },
    { name: '.Net Core', proficiency: 82 },
  ];
  
  const otherSkills = [
    { name: 'UI/UX Design', proficiency: 88 },
    { name: 'Responsive Design', proficiency: 92 },
    { name: 'Git/GitHub', proficiency: 85 },
    { name: 'Figma', proficiency: 78 },
    { name: 'Performance Optimization', proficiency: 83 },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50 relative">
      {/* Background pattern inspired by Indian block prints */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e06377' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Chakra-inspired decorative element */}
      <div className="absolute top-10 left-10 opacity-5 w-64 h-64">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e06377" strokeWidth="2"/>
          <circle cx="50" cy="50" r="35" fill="none" stroke="#e06377" strokeWidth="2"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="#e06377" strokeWidth="2"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="#e06377" strokeWidth="2"/>
          <circle cx="50" cy="50" r="5" fill="#e06377"/>
        </svg>
      </div>
      
      {/* Lotus-inspired decorative element */}
      <div className="absolute bottom-10 right-10 opacity-5 w-64 h-64">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, i) => (
            <path 
              key={i}
              d={`M50,50 Q${50 + 30 * Math.cos(i * Math.PI / 4)},${50 + 30 * Math.sin(i * Math.PI / 4)} 50,20`}
              fill="none"
              stroke="#b8336a"
              strokeWidth="2"
              transform={`rotate(${i * 45}, 50, 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="5" fill="#b8336a"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Blending <span className="text-orange-600">technical expertise</span> with creative vision, 
            like the skilled artisans of India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Frontend Development</h3>
            
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-orange-600">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indian-inspired decorative element */}
            <div className="mt-8 pt-8 border-t border-orange-100 flex justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full transform rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Backend Development</h3>
            
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-orange-600">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indian-inspired decorative element */}
            <div className="mt-8 pt-8 border-t border-orange-100 flex justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full transform rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Other Skills */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-orange-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">Other Skills</h3>
            
            <div className="space-y-5">
              {otherSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-orange-600">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Indian-inspired decorative element */}
            <div className="mt-8 pt-8 border-t border-orange-100 flex justify-center">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full transform rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional skills with Indian-inspired design */}
        <div className="mt-16 pt-16 border-t border-orange-200">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-12">Additional Expertise</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['SEO', 'WordPress', 'Networking', 'TypeScript', 'Redux', 'GraphQL', 'Next.js', 'AWS', 'Docker', 'Python', 'Core Java', 'Php'].map((skill) => (
              <div key={skill} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white border-2 border-orange-200 rounded-full flex items-center justify-center transform rotate-45 shadow-md hover:shadow-lg hover:border-orange-500 transition-all duration-300">
                  <div className="transform -rotate-45">
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indian-inspired quote */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="relative">
            <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 text-6xl text-orange-500 opacity-20">❝</div>
            <div className="absolute bottom-0 right-0 transform translate-x-3 translate-y-3 text-6xl text-orange-500 opacity-20">❞</div>
            <blockquote className="italic text-xl text-gray-700 px-8 py-4">
              "Just as the skilled artisans of India blend tradition with innovation, I merge technical expertise with creative vision to craft digital experiences that are both functional and beautiful."
            </blockquote>
          </div>
          <p className="mt-4 text-gray-600">— My Development Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;