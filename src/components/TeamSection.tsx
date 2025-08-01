import React from 'react';
import { Users, Award, Code, Palette, Star, MapPin, Calendar, Trophy } from 'lucide-react';

const TeamSection: React.FC = () => {
  const founders = [
    {
      name: "Dr. Bipin Gaikwad",
      role: "Founder | NHS Doctor | IMG Advocate",
      description: "With firsthand experience navigating the NHS as an international graduate, Dr. Gaikwad is the heart behind MedzyHQ's mission.",
      image: "https://images.pexels.com/photos/5452293/5452293-landscape-3000x2000.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      icon: Award,
      color: "bg-[#0c8e95]",
      stats: { experience: "8+ Years NHS", patients: "5000+ Helped", specialty: "Internal Medicine" }
    },
    {
      name: "Dr. Hassan Zahid Leon",
      role: "Co-Founder | Interview Strategist | Career Coach",
      description: "Dr. Leon specializes in high-impact coaching for clinical interviews and supports candidates from various cultural and educational backgrounds.",
      image: "https://images.pexels.com/photos/5452201/5452201-landscape-3000x2000.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      icon: Users,
      color: "bg-[#f96331]",
      stats: { experience: "6+ Years Coaching", success: "95% Success Rate", interviews: "1000+ Mock Sessions" }
    }
  ];

  const partners = [
    {
      name: "Medicforce Team",
      role: "Tech Implementation & Digital Onboarding",
      description: "Bringing healthcare and tech together, Medicforce ensures MedzyHQ's systems are smooth, scalable, and secure.",
      image: "https://images.pexels.com/photos/4021775/4021775-landscape-3000x2000.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      icon: Code,
      color: "bg-[#0fb8ce]",
      stats: { projects: "50+ Healthcare Apps", uptime: "99.9% Reliability", users: "100K+ Active Users" }
    },
    {
      name: "Quoretex",
      role: "Design & AI Integration",
      description: "Responsible for creating intuitive platforms and AI-powered career support tools to guide IMG doctors digitally.",
      image: "assets/qtpromo.png",
      icon: "logo",
      //   color: "bg-[#ffd89e]",
      stats: { designs: "200+ UI/UX Projects", ai: "AI-Powered Tools", awards: "15+ Design Awards" }
    }
  ];

  const teamStats = [
    { icon: Trophy, label: "Combined Experience", value: "25+ Years" },
    { icon: Users, label: "Doctors Supported", value: "2,500+" },
    { icon: Star, label: "Success Rate", value: "95%" },
    { icon: MapPin, label: "Countries Served", value: "45+" }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-4">
            Meet the Founders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {/* You can add a subtitle here if needed */}
          </p>
        </div>

        {/* Meet the Founders Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0c8e95] mb-4">
              
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((member, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-[#0c8e95] font-semibold mb-2 text-base">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* In Collaboration With Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0c8e95] mb-4">
              In Collaboration With
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((member, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-[#0c8e95] font-semibold mb-2 text-base">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#0c8e95] to-[#0fb8ce] rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          "Consult with our experts.
          </h3>
          {/* <p className="text-lg sm:text-xl mb-8 opacity-90">
            Get personalized guidance from professionals who understand your journey
          </p> */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-3 bg-white text-[#0c8e95] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0c8e95] transition-colors duration-200 font-medium">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;