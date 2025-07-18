import React from 'react';
import { Play, Users, BookOpen, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/assets/homevid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
        Expert Resources for Your Transition into the <span className="text-[#0fb8ce]">NHS</span>
        </h1>  
        <p className="text-lg xs:text-xl sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto animate-slide-up">
        Helping IMGs Thrive in the UK Healthcare System
        </p>
        <div className="flex flex-col xs:flex-row items-center justify-center space-y-4 xs:space-y-0 xs:space-x-4 sm:space-x-6 mb-8 sm:mb-12">
          <button className="flex items-center space-x-2 px-8 py-3 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 text-lg font-medium">
            <Play size={20} />
            <span>Start Learning</span>
          </button>
          <button className="flex items-center space-x-2 px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0c8e95] transition-colors duration-200 text-lg font-medium">
            <Users size={20} />
            <span>Join Community</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#f96331] rounded-full mx-auto mb-3 sm:mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">2,500+</h3>
            <p className="text-base sm:text-lg">Active Members</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#0fb8ce] rounded-full mx-auto mb-3 sm:mb-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">150+</h3>
            <p className="text-base sm:text-lg">Learning Resources</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#ffd89e] rounded-full mx-auto mb-3 sm:mb-4">
              <Award className="text-[#0c8e95]" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">95%</h3>
            <p className="text-base sm:text-lg">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;