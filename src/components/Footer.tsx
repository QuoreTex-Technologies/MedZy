import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    platform: [
      { label: 'Home', href: '#home' },
      { label: 'Articles', href: '#articles' },
      { label: 'Blog', href: '#blog' },
      { label: 'Community', href: '#community' },
      { label: 'Feedback', href: '#feedback' }
    ],
    resources: [
      { label: 'PLAB Preparation', href: '#' },
      { label: 'NHS Applications', href: '#' },
      { label: 'Study Materials', href: '#' },
      { label: 'Mock Exams', href: '#' },
      { label: 'Career Guidance', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/Logo.jpg" 
                alt="Medzy Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-2 sm:mr-3 object-cover"
              />
              <span className="text-xl sm:text-2xl font-bold text-[#0fb8ce]">MEDZY</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
              Empowering International Medical Graduates to successfully transition to the UK NHS system through comprehensive resources and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0fb8ce] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0fb8ce] transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0fb8ce] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0fb8ce] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-[#0fb8ce]">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-[#0fb8ce]">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-[#0fb8ce]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-[#f96331]" size={16} />
                <span className="text-sm sm:text-base text-gray-400">support@medzy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#f96331]" size={16} />
                <span className="text-sm sm:text-base text-gray-400">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#f96331]" size={16} />
                <span className="text-sm sm:text-base text-gray-400">London, United Kingdom</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm sm:text-base font-medium mb-2">Newsletter</h4>
              <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg xs:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#0c8e95] text-sm"
                />
                <button className="px-4 py-2 bg-[#0c8e95] text-white rounded-lg xs:rounded-l-none hover:bg-[#0a7a80] transition-colors duration-200 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 Medzy. All rights reserved. | Designed for International Medical Graduates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;