import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with subtle Indian pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-amber-100 opacity-90 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e06377' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative elements inspired by Indian rangoli */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-44 md:h-44 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="#e06377">
            <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0"/>
            <path d="M50 20 C55 35 65 45 80 50 C65 55 55 65 50 80 C45 65 35 55 20 50 C35 45 45 35 50 20" fill="#fff"/>
            <path d="M50 30 C53 40 60 47 70 50 C60 53 53 60 50 70 C47 60 40 53 30 50 C40 47 47 40 50 30" fill="#e06377"/>
          </g>
        </svg>
      </div>
      
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-36 h-36 md:w-48 md:h-48 opacity-10 rotate-45">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="#b8336a">
            <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0"/>
            <path d="M50 20 C55 35 65 45 80 50 C65 55 55 65 50 80 C45 65 35 55 20 50 C35 45 45 35 50 20" fill="#fff"/>
            <path d="M50 30 C53 40 60 47 70 50 C60 53 53 60 50 70 C47 60 40 53 30 50 C40 47 47 40 50 30" fill="#b8336a"/>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Indian-inspired decorative separator */}
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 rounded-full"></div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Namaste, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-transparent bg-clip-text">Nishikant Sahoo</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
            Professional <span className="text-orange-600">Software Developer</span> from India
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Crafting elegant digital experiences with a touch of Indian heritage.
            Specializing in modern MERN development with React, Node, and MongoDB.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-600 text-sm mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-orange-600" />
      </div>
      
      {/* Top right corner decoration - inspired by Indian henna patterns */}
      <div className="absolute top-0 right-0 h-32 w-32 md:h-48 md:w-48 overflow-hidden opacity-10">
        <div className="absolute -top-12 -right-12 h-48 w-48 md:h-64 md:w-64 rounded-full border-8 border-orange-600"></div>
        <div className="absolute -top-8 -right-8 h-32 w-32 md:h-48 md:w-48 rounded-full border-4 border-red-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;