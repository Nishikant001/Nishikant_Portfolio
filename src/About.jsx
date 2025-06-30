import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import nishi from '../src/assets/logo/nishi.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements - inspired by Indian patterns */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-red-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-amber-500 to-orange-600"></div>
      
      {/* Diya (lamp) inspired decorative element */}
      <div className="absolute -top-10 -right-10 opacity-5 w-64 h-64">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,20 C60,20 70,30 70,45 C70,60 60,70 50,70 C40,70 30,60 30,45 C30,30 40,20 50,20 Z" fill="#e06377"/>
          <path d="M35,70 L65,70 L60,85 L40,85 Z" fill="#b8336a"/>
          <path d="M42,85 L58,85 L55,95 L45,95 Z" fill="#b8336a"/>
          <path d="M45,95 L55,95 L53,100 L47,100 Z" fill="#b8336a"/>
        </svg>
      </div>
      
      {/* Peacock feather inspired decorative element */}
      <div className="absolute -bottom-16 -left-16 opacity-5 w-64 h-64">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M25,25 C40,10 60,10 75,25 C90,40 90,60 75,75 C60,90 40,90 25,75 C10,60 10,40 25,25 Z" fill="none" stroke="#e06377" strokeWidth="1"/>
          <circle cx="50" cy="50" r="8" fill="#b8336a"/>
          <circle cx="50" cy="50" r="4" fill="#724e91"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover my journey from <span className="text-orange-600">Banglore to Digital</span>,
            blending Indian heritage with modern web development.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Profile image with Indian-inspired border */}
          <div className="lg:w-2/5 relative">
            <div className="w-72 h-72 md:w-80 md:h-80 relative mx-auto">
              {/* Decorative frame inspired by Indian art */}
              <div className="absolute inset-0 border-2 border-orange-500 rounded-lg transform rotate-45"></div>
              <div className="absolute inset-4 border-2 border-red-500 rounded-lg transform -rotate-45"></div>
              
              {/* Actual image container */}
              

              <div className="relative top-5 right-3">
                          {/* Background shapes */}
                          <div className="absolute -right-8 -top-14 w-72 h-72">
                            <div className="absolute right-10 top-12 w-64 h-64 bg-orange-600   rounded-full"></div>
                            <div className="absolute right-16 top-20 w-64 h-64 bg-red-500 rounded-full opacity-75"></div>
                          </div>
                          
                          {/* Placeholder for the person image */}
                          <div className="relative z-10 -right-10">
                            <img 
                              src={nishi}
                              alt="Business professional" 
                              className="w-64 h-auto object-cover rounded-full"
                            />
                          </div>
                        </div>

              
            </div>
          </div>
          
          {/* Bio text */}
          <div className="lg:w-3/5">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Crafting digital experiences with <span className="text-orange-600">Indian creativity</span> and global standards
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Namaste! I'm a passionate software developer from India, specializing in creating beautiful and functional Software applications. With expertise in React, Vite, and Tailwind CSS,.Net, React Native, Python  I combine the rich artistic heritage of India with modern design principles to create unique digital experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in technology began with a fascination for both tradition and innovation. I believe that the best digital products honor cultural heritage while embracing cutting-edge technology. This philosophy guides my approach to every project.
            </p>
            
            {/* Key highlights with Indian-inspired icons */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 border border-orange-100 transition-all duration-300 hover:shadow-md hover:bg-orange-100">
                <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Technical Expertise</h4>
                <p className="text-sm text-center text-gray-600">1+ years of software development experience</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 border border-orange-100 transition-all duration-300 hover:shadow-md hover:bg-orange-100">
                <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Client Projects</h4>
                <p className="text-sm text-center text-gray-600">50+ successful projects delivered</p>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-lg bg-orange-50 border border-orange-100 transition-all duration-300 hover:shadow-md hover:bg-orange-100">
                <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Education</h4>
                <p className="text-sm text-center text-gray-600">Computer Science And Engineering, BijuPattnaik University</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indian-inspired decorative divider */}
        <div className="relative h-8 my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-orange-500 rounded-full transform rotate-45">
              <div className="w-8 h-8 bg-orange-50 rounded-full transform -rotate-45"></div>
            </div>
          </div>
        </div>
        
        {/* Personal philosophy - inspired by Indian wisdom */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-medium text-gray-800 italic mb-6">
            "I believe in 'Unity in Diversity' - bringing together different design elements and technologies 
            to create harmonious digital experiences that resonate with people around the world."
          </h3>
          
          <div className="mt-12 inline-flex items-center px-6 py-3 rounded-full border border-orange-200 bg-orange-50">
            <span className="text-orange-600 font-medium">Available for freelance projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;