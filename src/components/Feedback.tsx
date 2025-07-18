import React, { useState } from 'react';
import { Star, User, Calendar, ThumbsUp, MessageCircle } from 'lucide-react';

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const testimonials = [
    {
      id: 1,
      name: "Dr. Samruddhi Ratnaparkhi",
      role: "Junior Doctor, NHS",
      rating: 5,
      comment: "Medzy was instrumental in my successful transition to the NHS. The community support and resources are exceptional.",
      date: "March 2024",
      avatar: "assets/sam.jpeg",
      likes: 24,
      replies: 3
    },
    {
      id: 2,
      name: "Dr. Nandini Wahane",
      role: "Foundation Year 1",
      rating: 5,
      comment: "The PLAB preparation resources and mock exams helped me pass on my first attempt. Highly recommend to all IMGs.",
      date: "February 2024",
      avatar: "assets/nandu.png",
      likes: 18,
      replies: 2
    },
    {
      id: 3,
      name: "Dr. Siddheshwari Koli",
      role: "Specialist Registrar",
      rating: 4,
      comment: "Great platform for networking and finding job opportunities. The blog posts are very informative and helpful.",
      date: "February 2024",
      avatar: "assets/siddhi.png",
      likes: 15,
      replies: 1
    },
    {
      id: 4,
      name: "Dr. Heramb Jawanjal",
      role: "Consultant",
      rating: 5,
      comment: "As someone who helps IMGs, I regularly recommend Medzy. The quality of content and community support is outstanding.",
      date: "January 2024",
      avatar: "assets/heramb.jpeg",
      likes: 32,
      replies: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', { rating, feedback });
    setRating(0);
    setFeedback('');
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating 
            ? 'text-[#ffd89e] fill-current' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-[#ffd89e]' : ''}`}
        onClick={interactive ? () => setRating(index + 1) : undefined}
      />
    ));
  };

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img src="/assets/stethescope.jpg" alt="Feedback Stethescope" className="mx-auto mb-6 w-32 h-32 object-cover rounded-2xl shadow-lg" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-4">
            Community Feedback
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            See what our community members say about their experience with Medzy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Feedback Form */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#0c8e95] to-[#0fb8ce] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Rating</label>
                  <div className="flex space-x-1">
                    {renderStars(rating, true)}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Feedback</label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full p-3 rounded-lg text-gray-800 border border-gray-300 focus:border-[#0c8e95] focus:outline-none resize-none text-sm sm:text-base"
                    rows={4}
                    placeholder="Tell us about your experience with Medzy..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-[#f96331] text-white rounded-lg hover:bg-[#e55a2b] transition-colors duration-200 font-medium text-sm sm:text-base"
                >
                  Submit Feedback
                </button>
              </form>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 sm:mt-8 bg-gray-50 rounded-xl p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-4">Community Stats</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(5)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">4.8/5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Reviews</span>
                  <span className="font-bold text-[#0c8e95]">324</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-bold text-[#f96331]">95%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-2 space-y-2 xs:space-y-0">
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm">
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="text-gray-500 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {testimonial.date}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                        {testimonial.comment}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-[#f96331] transition-colors duration-200">
                          <ThumbsUp size={14} />
                          <span>{testimonial.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-[#0c8e95] transition-colors duration-200">
                          <MessageCircle size={14} />
                          <span>{testimonial.replies} replies</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="px-4 sm:px-6 py-3 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 font-medium text-sm sm:text-base">
                Load More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;