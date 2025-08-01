import React from 'react';
import { Search, MessageSquare, Home, Briefcase, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const FiveStepSystem: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState<any>(null);

  const steps = [
    {
      number: 1,
      title: "Job Application",
      description: "Tailored guidance on applying, interview preparation, and standing out in your NHS journey.",
      icon: Search,
      color: "bg-[#0c8e95]",
      features: [
        "Application guidance and optimization",
        "Stand-out strategies for competitive positions",
        "Document preparation and review"
      ]
    },
    {
      number: 2,
      title: "Interview Preparation",
      description: "Mock interviews, clinical scenario practice, and confidence coaching.",
      icon: MessageSquare,
      color: "bg-[#f96331]",
      features: [
        "Comprehensive mock interview sessions",
        "Clinical scenario practice",
        "Confidence-building techniques",
        "NHS-specific interview strategies"
      ]
    },
    {
      number: 3,
      title: "Relocation Support",
      description: "Help with housing, UK essentials, and post-arrival adjustments.",
      icon: Home,
      color: "bg-[#0fb8ce]",
      features: [
        "Housing assistance and recommendations",
        "UK essentials setup guidance",
        "Post-arrival adjustment support",
        "Local area orientation"
      ]
    },
    {
      number: 4,
      title: "Job Support",
      description: "On-the-job support, NHS culture training, and peer mentoring.",
      icon: Briefcase,
      color: "bg-[#ffd89e]",
      features: [
        "On-the-job support and guidance",
        "NHS culture and system training",
        "Peer mentoring connections",
        "Professional development planning"
      ]
    },
    {
      number: 5,
      title: "Mental Health Support",
      description: "Workshops, and access to wellness resources are available.",
      icon: Heart,
      color: "bg-[#e74c3c]",
      features: [
        "Mental wellness workshops",
        "Access to wellness resources",
        "Stress management techniques"
      ]
    }
  ];

  const handleOpenModal = (step: any) => {
    setActiveStep(step);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveStep(null);
  };

  return (
    <section id="five-step-system" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-4">
            🔄 Our Proven 5-Step Support System
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive methodology designed to guide you through every stage of your NHS journey, ensuring no doctor walks this path alone.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className={`${step.color} rounded-2xl p-8 sm:p-12 text-white`}>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mr-4">
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-sm font-medium opacity-80">Step {step.number}</span>
                        <h3 className="text-2xl sm:text-3xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-[#0c8e95]">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                    📌 What's Included:
                  </h4>
                  <div className="space-y-4">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-[#0c8e95] w-5 h-5 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                  {/* Register/Enquire Button */}
                  <div className="mt-8 text-center">
                    <button
                      className="px-6 py-2 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0fb8ce] transition-colors font-semibold shadow"
                      onClick={() => handleOpenModal(step)}
                    >
                       Enquire
                    </button>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Step {step.number} of 5</span>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`w-2 h-2 rounded-full ${
                              dot <= step.number ? 'bg-[#0c8e95]' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal Pop-up */}
        {modalOpen && activeStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${activeStep.color} rounded-full flex items-center justify-center mr-4`}>
                  <activeStep.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0c8e95]">{activeStep.title}</h3>
                  <p className="text-gray-600 text-sm">Step {activeStep.number}</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">{activeStep.description}</p>
              <ul className="mb-6 list-disc list-inside text-gray-600">
                {activeStep.features.map((feature: string, idx: number) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold mb-2 text-[#0c8e95]">Register / Enquire</h4>
              <RegistrationForm />
            </div>
          </div>
        )}

        {/* Process Flow */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            Your Journey Timeline
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-3`}>
                    <step.icon className="text-white w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">Step {step.number}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="text-gray-400 w-6 h-6 hidden lg:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#0c8e95] to-[#0fb8ce] rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your 5-Step Journey?
          </h3>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join thousands of successful IMGs who have transformed their NHS careers with our proven system
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-3 bg-white text-[#0c8e95] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Start Your Journey Today
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0c8e95] transition-colors duration-200 font-medium">
              Download Free Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveStepSystem;