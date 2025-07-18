import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const Articles: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "NHS Application Process: Complete Guide for IMGs",
      excerpt: "Everything you need to know about applying to work in the NHS as an international medical graduate.",
      author: "Dr. Sarah Johnson",
      readTime: "8 min read",
      category: "Application",
      image: "/assets/stethescope.jpg"
    },
    {
      id: 2,
      title: "PLAB Exam Preparation: Tips and Strategies",
      excerpt: "Proven strategies to help you pass the PLAB exam and secure your medical career in the UK.",
      author: "Prof. Michael Chen",
      readTime: "12 min read",
      category: "Exams",
      image: "/assets/microscope.jpg"
    },
    {
      id: 3,
      title: "Understanding UK Medical System and Culture",
      excerpt: "Navigate the cultural differences and medical practices in the UK healthcare system.",
      author: "Dr. Priya Sharma",
      readTime: "10 min read",
      category: "Culture",
      image: "/assets/hospitalbeds.jpg"
    },
    {
      id: 4,
      title: "Visa Requirements and Documentation",
      excerpt: "Complete guide to visa requirements and documentation needed for medical professionals.",
      author: "James Wilson",
      readTime: "15 min read",
      category: "Visa",
      image: "/assets/viareq.mp4"
    },
    {
      id: 5,
      title: "Clinical Governance in NHS Trusts",
      excerpt: "Understanding clinical governance frameworks and quality assurance in NHS settings.",
      author: "Dr. Emma Thompson",
      readTime: "11 min read",
      category: "Clinical",
      image: "/assets/medicin.jpg"
    },
    {
      id: 6,
      title: "Networking and Professional Development",
      excerpt: "Build your professional network and advance your career in the UK medical field.",
      author: "Dr. Robert Taylor",
      readTime: "9 min read",
      category: "Career",
      image: "/assets/networking medical.mp4"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-4">
            Latest Articles
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and guidance for your NHS journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                {article.image.includes('.mp4') ? (
                  <video
                    src={article.image}
                    className="w-full h-40 sm:h-48 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0c8e95] text-white text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-4 space-y-2 xs:space-y-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-[#0c8e95] hover:text-[#0a7a80] transition-colors duration-200 font-medium">
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 font-medium">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;