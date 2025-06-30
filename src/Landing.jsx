import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import img from '../src/assets/heroic-1.png'
import logo from '../src/assets/logo/logo-copy-3.png'
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-4 px-6 md:px-12 lg:px-24 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" className='h-14 -ms-7 mt-2' />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 nav">
            <a href="#" className="text-blue-900">Home</a>
            <a href="#" className="text-blue-900 hover:text-orange-500">About</a>
            <a href="#" className="text-blue-900 hover:text-orange-500">Services</a>
            <a href="#" className="text-blue-900 hover:text-orange-500">Portfolio</a>
            <a href="#" className="text-blue-900 hover:text-orange-500">Team</a>
            <a href="#" className="text-blue-900 hover:text-orange-500">Contact</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-orange-500">
                <span>Extra Pages</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-900">
              Let's Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-blue-900 font-medium">What you do today</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
             
Excelligent’s goal is to make business applications 
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">
                Discover More
              </button>
              <button className="border border-blue-900 text-black hover:text-white px-6 py-3 rounded-md hover:bg-blue-900">
                See our services
              </button>
            </div>
          </div>

          {/* Right Content - Image with Background */}
          <div className="relative">
            {/* Background shapes */}
            <div className="absolute right-0 top-0 w-96 h-96">
              <div className="absolute right-0 top-0 w-72 h-72 bg-blue-900 rounded-full"></div>
              <div className="absolute right-20 top-20 w-72 h-72 bg-blue-600 rounded-full opacity-75"></div>
            </div>
            
            {/* Placeholder for the person image */}
            <div className="relative z-10">
              <img 
                src={img}
                alt="Business professional" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Background diagonal lines */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-gray-100 to-white transform -skew-y-3"></div>
      </div>
    </div>
  );
};

export default LandingPage;