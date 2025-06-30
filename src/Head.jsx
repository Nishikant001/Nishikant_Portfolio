import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MainLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className=" bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Top border with Indian pattern */}
      <div className="h-2 w-full bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
      
      {/* Navbar */}
      <nav className="bg-white shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo with Indian-inspired colors */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                  NS
                </div>
                <span className="ml-3 text-xl font-semibold text-gray-800">
                  Nishikant Sahoo
                </span>
              </div>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 px-3 py-2 text-sm font-medium">About</a>
              <a href="#experience" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 px-3 py-2 text-sm font-medium">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 px-3 py-2 text-sm font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-300 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#home" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#skills" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <main>
        {children}
      </main>
      
      
    </div>
  );
};

export default MainLayout;