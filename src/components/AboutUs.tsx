import React from 'react';
import { Target, Heart, Users, TrendingUp, Award, Globe, Shield, Lightbulb } from 'lucide-react';

const AboutUs: React.FC = () => {
  const goals = [
    {
      icon: Users,
      title: "“Helping IMG doctors achieve success in the NHS.",
      description: "Our ambitious target to support international medical graduates"
    },
    {
      icon: Globe,
      title: "Create the UK's largest IMG mentorship community",
      description: "Building connections and support networks for lasting success"
    },
    {
      icon: Shield,
      title: "Partner with NHS Trusts for smoother onboarding",
      description: "Direct collaboration with healthcare institutions"
    },
    {
      icon: Heart,
      title: "Establish IMG mental wellness support systems",
      description: "Prioritizing mental health throughout the journey"
    }
  ];

  const whyChoose = [
    {
      icon: Heart,
      title: "IMG-Focused, Doctor-Led",
      description: "Built by IMGs who understand your journey"
    },
    {
      icon: Award,
      title: "NHS-Experienced Trainers",
      description: "Learn from professionals working in the NHS"
    },
    {
      icon: Lightbulb,
      title: "Tech-Backed Learning",
      description: "Powered by Medicforce & Quoretex innovation"
    },
    {
      icon: TrendingUp,
      title: "Support Beyond the Job",
      description: "Comprehensive support throughout your career"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-6">
            Healing the Healers. Empowering the Future.
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
            At MedzyHQ, we understand that the journey of an International Medical Graduate is more than just exams and interviews. It's about belonging, support, and a smooth transition into the NHS workforce.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
            Our founders, who are IMG doctors themselves, built this platform to eliminate confusion, isolation, and burnout. Our mission is to walk with you, step by step, until you're confident and settled in your NHS career.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 font-medium">
              We use a proven 5-Step Support Model to ensure no doctor walks this path alone.
            </p>
          </div>
        </div>

  

        <div className="max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl text-gray-700 font-medium mb-6 leading-relaxed text-center">
        Create an IMG community to help and support each other.
            </p>
            </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#0c8e95] to-[#0fb8ce] rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 mr-4" />
              
              <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
              
            </div>
            <p className="text-lg leading-relaxed">
              To become the most trusted bridge for international doctors entering the UK healthcare system ensuring every IMG not only survives but thrives.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f96331] to-[#ff7849] rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Heart className="w-12 h-12 mr-4" />
              <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>• Guide IMGs with accurate, current NHS application support</li>
              <li>• Offer personalized CV reviews & interview simulations</li>
              <li>• Assist with relocation, accommodation, and UK settlement</li>
              <li>• Prioritize mental health and professional well-being</li>
              <li>• Build a lifelong community of connected doctors</li>
            </ul>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0c8e95] text-center mb-12">Our Goals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0c8e95] bg-opacity-10 rounded-full mx-auto mb-4">
                  <goal.icon className="text-[#0c8e95] w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">{goal.title}</h4>
                <p className="text-gray-600 text-center text-sm">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose MedzyHQ */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0c8e95] text-center mb-12">Why Choose MedzyHQ?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-[#f96331] bg-opacity-10 rounded-full mx-auto mb-4">
                  <item.icon className="text-[#f96331] w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Are you ready to transform your NHS journey?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* <button className="px-8 py-4 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 font-medium text-lg">
            Book 1:1 Career Planning Session 
            </button> */}
            {/* <button className="px-8 py-4 border-2 border-[#0c8e95] text-[#0c8e95] rounded-lg hover:bg-[#0c8e95] hover:text-white transition-colors duration-200 font-medium text-lg">
            Download 5-Step Success Guide   
            </button> */}
            <button className="px-8 py-4 bg-[#f96331] text-white rounded-lg hover:bg-[#e55a2b] transition-colors duration-200 font-medium text-lg">
                     Join our next seminar/webinar.”
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;