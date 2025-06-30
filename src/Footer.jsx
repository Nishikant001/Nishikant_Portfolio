// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         {/* Footer with Indian design elements */}
//       <footer className="bg-gray-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="border-t-2 border-orange-500 pt-8 flex flex-col md:flex-row justify-between">
//             <div>
//               <h3 className="text-xl font-bold mb-4">Your Name</h3>
//               <p className="text-gray-300 max-w-md">
//                 Professional web developer specializing in React, Vite and Tailwind CSS.
//               </p>
//             </div>
//             <div className="mt-8 md:mt-0">
//               <h4 className="text-lg font-semibold mb-2">Connect</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-white hover:text-orange-400 transition-colors duration-300">
//                   <span className="sr-only">LinkedIn</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-white hover:text-orange-400 transition-colors duration-300">
//                   <span className="sr-only">GitHub</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-white hover:text-orange-400 transition-colors duration-300">
//                   <span className="sr-only">Twitter</span>
//                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
//             <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
//             <div className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full"></div>
//           </div>
//         </div>
//       </footer>
      
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram, 
 
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Top decorative border - inspired by Indian patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
      
      {/* Back to top button */}
      <div className="flex justify-center">
        <button 
          onClick={scrollToTop}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center -translate-y-1/2 hover:shadow-lg transition-all duration-300 hover:-translate-y-[calc(50%+4px)]"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="col-span-full md:col-span-1">
            <h3 className="text-xl font-bold mb-6">Your Name</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full stack developer specializing in modern web technologies with a passion for creating beautiful, 
              functional user experiences inspired by Indian design sensibilities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                aria-label="GitHub profile"
              >
                {/* <GitHub className="h-5 w-5" /> */}
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                aria-label="Twitter profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                aria-label="Instagram profile"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contact@example.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                >
                  <Mail className="h-5 w-5 mr-3 text-gray-500" />
                  <span>contact@example.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+91XXXXXXXXXX"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-3 text-gray-500" />
                  <span>+91 XX XXXX XXXX</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-500 mt-1" />
                <span className="text-gray-400">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates on projects and articles.</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-white"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative middle border */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="w-full h-px bg-gray-800" style={{
          backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 6px, #4B5563 6px, #4B5563 12px)",
        }}></div>
      </div>
      
      {/* Copyright section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 mx-3 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 mx-3 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 mx-3 text-sm">Sitemap</a>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-600 text-sm flex items-center justify-center">
          Made with <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" /> in India
        </div>
      </div>
      
      {/* Bottom decorative border inspired by Indian patterns */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
    </footer>
  );
};

export default Footer;
