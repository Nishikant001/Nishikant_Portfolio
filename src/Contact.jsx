import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Instagram,
  
  
} from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-orange-50 relative">
      {/* Decorative top border inspired by Indian patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600"></div>
      
      {/* Background decorative element - Henna pattern */}
      <div className="absolute top-40 right-10 w-72 h-72 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#b8336a" strokeWidth="1">
            <path d="M50,10 C70,10 90,30 70,50 C90,70 70,90 50,90 C30,90 10,70 30,50 C10,30 30,10 50,10 Z" />
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M50,50 Q${50 + 25 * Math.cos(i * Math.PI/4)},${50 + 25 * Math.sin(i * Math.PI/4)} ${50 + 40 * Math.cos(i * Math.PI/4)},${50 + 40 * Math.sin(i * Math.PI/4)}`}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <circle
                key={`c-${i}`}
                cx={50 + 40 * Math.cos(i * Math.PI/4)}
                cy={50 + 40 * Math.sin(i * Math.PI/4)}
                r="3"
              />
            ))}
          </g>
          <circle cx="50" cy="50" r="5" fill="#b8336a" fillOpacity="0.5" />
        </svg>
      </div>
      
      {/* Background decorative element - Rangoli dots */}
      <div className="absolute bottom-40 left-10 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              {[...Array(10)].map((_, j) => (
                <circle
                  key={`${i}-${j}`}
                  cx={10 + i * 9}
                  cy={10 + j * 9}
                  r={1 + Math.abs(i - 4.5) + Math.abs(j - 4.5) < 5 ? 2 : 1}
                  fill="#b8336a"
                />
              ))}
            </g>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-600 font-medium mb-1">Email</h4>
                  <a href="mailto:sahoonishikant008@gmail.com" className="text-lg text-orange-600 hover:text-orange-700 transition-colors duration-300">
                    sahoonishikant008@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-600 font-medium mb-1">Phone</h4>
                  <a href="tel:+91-6372770485" className="text-lg text-orange-600 hover:text-orange-700 transition-colors duration-300">
                    +91-6372770485
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-gray-600 font-medium mb-1">Location</h4>
                  <p className="text-lg text-gray-800">
                    Cuttack, Odisha, India
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="mt-10">
              <h4 className="text-gray-800 font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="www.linkedin.com/in/nishikant008" 
                  className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Nishikant001" 
                  className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              
                
              </div>
            </div>
            
            {/* Availability note */}
            <div className="mt-10 p-4 border border-orange-200 rounded-lg bg-orange-50">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="ml-2 text-gray-700 font-medium">
                  Currently available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Hello! I'm interested in collaborating on a project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 flex items-center justify-center rounded-lg text-white font-medium transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="ml-3">Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Additional decoration - Indian-inspired border */}
        <div className="relative mt-20 py-8">
          <div className="absolute left-0 right-0 h-px bg-orange-200" style={{
            backgroundImage: "repeating-linear-gradient(to right, transparent, transparent 6px, #fdba74 6px, #fdba74 12px)",
          }}></div>
          
          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thank you for visiting my portfolio. I look forward to connecting with you and discussing how we can work together.
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

export default ContactSection;