import React from 'react';
import { Users, MessageSquare, Calendar, Globe, Award, BookOpen } from 'lucide-react';

const Community: React.FC = () => {
  const communityStats = [
    { icon: Users, label: 'Active Members', value: '500+', color: 'text-[#0c8e95]' },
    { icon: MessageSquare, label: 'Daily Messages', value: '850+', color: 'text-[#f96331]' },
    { icon: Calendar, label: 'Events This Month', value: '12', color: 'text-[#0fb8ce]' },
    { icon: Globe, label: 'Countries', value: '45+', color: 'text-[#ffd89e]' }
  ];

  const forumTopics = [
    {
      id: 1,
      title: "PLAB 2 Preparation Group",
      description: "Join fellow candidates preparing for PLAB 2 examination",
      members: 432,
      posts: 1248,
      category: "Exams",
      color: "bg-[#0c8e95]"
    },
    {
      id: 2,
      title: "Foundation Programme Q&A",
      description: "Get answers about the UK Foundation Programme application",
      members: 298,
      posts: 875,
      category: "Applications",
      color: "bg-[#f96331]"
    },
    {
      id: 3,
      title: "NHS Job Opportunities",
      description: "Share and find job opportunities in the NHS",
      members: 567,
      posts: 2341,
      category: "Jobs",
      color: "bg-[#0fb8ce]"
    },
    {
      id: 4,
      title: "International IMG Support",
      description: "Support group for international medical graduates",
      members: 789,
      posts: 3456,
      category: "Support",
      color: "bg-[#ffd89e]"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "PLAB 2 Mock Examination",
      date: "March 25, 2024",
      time: "10:00 AM GMT",
      attendees: 45,
      type: "Virtual"
    },
    {
      id: 2,
      title: "NHS Application Workshop",
      date: "March 28, 2024",
      time: "2:00 PM GMT",
      attendees: 67,
      type: "Hybrid"
    },
    {
      id: 3,
      title: "CV Writing Masterclass",
      date: "April 2, 2024",
      time: "6:00 PM GMT",
      attendees: 32,
      type: "Virtual"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img src="/assets/medchair.jpg" alt="Community Med Chair" className="mx-auto mb-6 w-32 h-32 object-cover rounded-2xl shadow-lg" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-4">
            Join Our Community
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow IMGs, share experiences, and support each other on your NHS journey
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <stat.icon className={`${stat.color} w-8 h-8`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.value}</h3>
              <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Forum Topics */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c8e95] mb-6">Popular Forum Topics</h3>
            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <div key={topic.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${topic.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-2 mb-2">
                        <h4 className="text-base sm:text-lg font-bold text-gray-800">{topic.title}</h4>
                        <span className={`px-2 py-1 ${topic.color} text-white text-xs rounded-full`}>
                          {topic.category}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-3">{topic.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{topic.members} members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare size={14} />
                          <span>{topic.posts} posts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c8e95] mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f96331] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{event.title}</h4>
                      <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 text-sm text-gray-600 mb-3 space-y-1 xs:space-y-0">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                        <span className="px-2 py-1 bg-[#0fb8ce] text-white rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-2 xs:space-y-0">
                        <span className="text-sm text-gray-500">{event.attendees} attending</span>
                        <button className="px-3 sm:px-4 py-2 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 text-sm">
                          Join Event
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="px-4 sm:px-6 py-3 bg-[#f96331] text-white rounded-lg hover:bg-[#e55a2b] transition-colors duration-200 font-medium text-sm sm:text-base">
                View All Events
              </button>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0c8e95] mb-6 text-center">Community Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0c8e95] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#0c8e95] w-8 h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Peer Support</h4>
              <p className="text-sm sm:text-base text-gray-600">Connect with peers facing similar challenges and share experiences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f96331] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-[#f96331] w-8 h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Study Groups</h4>
              <p className="text-sm sm:text-base text-gray-600">Join or create study groups for PLAB preparation and more</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0fb8ce] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#0fb8ce] w-8 h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Expert Guidance</h4>
              <p className="text-sm sm:text-base text-gray-600">Get advice from experienced professionals who've made the transition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;