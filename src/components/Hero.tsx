import React from 'react';
import { Play, Users, FileText, Award, Calendar, Download, Video } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Video Background Section - Full Viewport */}
      <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 64px)', marginTop: '64px' }}>

        <div className="absolute inset-0 w-full h-full z-0">
          <video
            src="/assets/HomeBG.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
        </div>
      </section>

      {/* Content Section - Below Video */}
      <section id="home" className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Main Headline */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              From Overseas to <span className="text-[#0fb8ce]">NHS</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">We've Got Your Back</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto opacity-90">
              MedzyHQ guides international doctors through every challenge from interview prep to relocation so you can thrive in the UK healthcare system.
            </p>
          </div>
          
          {/* CTA Buttons */}
          {/* <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <button className="group flex items-center justify-center space-x-3 px-6 py-4 bg-[#0c8e95] text-white rounded-xl hover:bg-[#0a7a80] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Video size={20} />
                <span className="font-medium">Book Live Webinar</span>
              </button>
              <button className="group flex items-center justify-center space-x-3 px-6 py-4 bg-[#f96331] text-white rounded-xl hover:bg-[#e55a2b] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Calendar size={20} />
                <span className="font-medium">Book Consultation</span>
              </button>
              <button className="group flex items-center justify-center space-x-3 px-6 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#0c8e95] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download size={20} />
                <span className="font-medium">Download 5-Step Guide</span>
              </button>
              <button className="group flex items-center justify-center space-x-3 px-6 py-4 bg-[#0fb8ce] text-white rounded-xl hover:bg-[#0da5b8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <FileText size={20} />
                <span className="font-medium">Get CV Reviewed</span>
              </button>
            </div>
          </div> */}

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-[#f96331] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tailored Interview Coaching</h3>
              <p className="text-lg opacity-90 leading-relaxed">Personalized preparation for NHS interviews with expert guidance</p>
            </div>
            
            <div className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-[#0fb8ce] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">CV Enhancement for NHS Standards</h3>
              <p className="text-lg opacity-90 leading-relaxed">Professional CV optimization for UK healthcare system</p>
            </div>
            
            <div className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-[#ffd89e] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-[#0c8e95]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accommodation & Relocation Support</h3>
              <p className="text-lg opacity-90 leading-relaxed">Complete support for your UK transition journey</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
