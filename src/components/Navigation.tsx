import React, { useState } from 'react';
import { Menu, X, User, UserCheck } from 'lucide-react';

interface NavigationProps {
  onLoginClick: (type: 'student' | 'admin') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: '5-Step System', href: '#five-step-system' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/logoremovebg.png" 
              alt="MedzyHQ Logo" 
              className="h-8 w-8 sm:h-14 sm:w-14 rounded-full mr-2 sm:mr-3 object-cover"
            />
            <span className="text-lg sm:text-xl font-bold text-[#0c8e95]">MedzyHQ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#0c8e95] transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Login Buttons */}
          {/* <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button
              onClick={() => onLoginClick('student')}
              className="flex items-center space-x-1 xl:space-x-2 px-3 xl:px-4 py-2 text-[#0c8e95] border border-[#0c8e95] rounded-lg hover:bg-[#0c8e95] hover:text-white transition-colors duration-200 text-sm xl:text-base"
            >
              <User size={16} />
              <span>Student Login</span>
            </button>
            <button
              onClick={() => onLoginClick('admin')}
              className="flex items-center space-x-1 xl:space-x-2 px-3 xl:px-4 py-2 bg-[#f96331] text-white rounded-lg hover:bg-[#e55a2b] transition-colors duration-200 text-sm xl:text-base"
            >
              <UserCheck size={16} />
              <span>Admin Login</span>
            </button>
          </div> */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#0c8e95] transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-[#0c8e95] hover:bg-gray-50 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* <div className="pt-4 px-4 space-y-3">
              <button
                onClick={() => {
                  onLoginClick('student');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-[#0c8e95] border border-[#0c8e95] rounded-lg hover:bg-[#0c8e95] hover:text-white transition-colors duration-200 font-medium"
              >
                <User size={16} />
                <span>Student Login</span>
              </button>
              <button
                onClick={() => {
                  onLoginClick('admin');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#f96331] text-white rounded-lg hover:bg-[#e55a2b] transition-colors duration-200 font-medium"
              >
                <UserCheck size={16} />
                <span>Admin Login</span>
              </button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;