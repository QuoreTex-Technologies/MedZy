// import React from 'react';
// import { Calendar, MessageCircle, Heart, Share2 } from 'lucide-react';

// const Blog: React.FC = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "My Journey from India to NHS: A Personal Story",
//       excerpt: "Sharing my experience of transitioning from practicing medicine in India to working in the NHS.",
//       author: "Dr. Raj Patel",
//       date: "March 15, 2024",
//       comments: 23,
//       likes: 45,
//       image: "/assets/stethescope.jpg",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "PLAB 2 Experience: What to Expect",
//       excerpt: "Detailed breakdown of the PLAB 2 examination process and preparation tips.",
//       author: "Dr. Maria Santos",
//       date: "March 12, 2024",
//       comments: 18,
//       likes: 32,
//       image: "/assets/microscope.jpg"
//     },
//     {
//       id: 3,
//       title: "Adapting to UK Medical Culture",
//       excerpt: "Cultural differences and adaptation strategies for international medical graduates.",
//       author: "Dr. Ahmed Hassan",
//       date: "March 10, 2024",
//       comments: 15,
//       likes: 28,
//       image: "https://images.pexels.com/photos/4021775/4021775-landscape-3000x2000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     },
//     {
//       id: 4,
//       title: "Foundation Programme Application Tips",
//       excerpt: "Essential tips for successfully applying to the UK Foundation Programme.",
//       author: "Dr. Lisa Chen",
//       date: "March 8, 2024",
//       comments: 20,
//       likes: 38,
//       image: "https://images.pexels.com/photos/5452266/5452266-landscape-3000x2000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     }
//   ];

//   return (
//     <section id="blog" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8e95] mb-4">
//             Community Blog
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
//             Real stories, experiences, and insights from our community members
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//           {/* Featured Post */}
//           <div className="lg:col-span-2">
//             <div className="bg-gradient-to-r from-[#0c8e95] to-[#0fb8ce] rounded-2xl overflow-hidden shadow-xl">
//               <div className="flex flex-col lg:flex-row">
//                 <div className="lg:w-1/2">
//                   <img 
//                     src={blogPosts[0].image} 
//                     alt={blogPosts[0].title}
//                     className="w-full h-48 sm:h-64 lg:h-full object-cover"
//                   />
//                 </div>
//                 <div className="lg:w-1/2 p-6 sm:p-8 text-white">
//                   <div className="flex items-center space-x-2 mb-4">
//                     <span className="px-3 py-1 bg-[#f96331] text-white text-sm rounded-full">
//                       Featured
//                     </span>
//                   </div>
//                   <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
//                     {blogPosts[0].title}
//                   </h3>
//                   <p className="text-base sm:text-lg mb-6 opacity-90">
//                     {blogPosts[0].excerpt}
//                   </p>
//                   <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between space-y-4 xs:space-y-0">
//                     <div className="flex items-center space-x-3 xs:space-x-4">
//                       <div className="flex items-center space-x-2">
//                         <Calendar size={16} />
//                         <span className="text-sm">{blogPosts[0].date}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <MessageCircle size={16} />
//                         <span className="text-sm">{blogPosts[0].comments}</span>
//                       </div>
//                     </div>
//                     <button className="px-4 sm:px-6 py-2 bg-white text-[#0c8e95] rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium text-sm sm:text-base">
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Regular Posts */}
//           {blogPosts.slice(1).map((post) => (
//             <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <img 
//                 src={post.image} 
//                 alt={post.title}
//                 className="w-full h-40 sm:h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
//                   {post.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   {post.excerpt}
//                 </p>
                
//                 <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between mb-4 space-y-2 xs:space-y-0">
//                   <div className="flex items-center space-x-4 text-sm text-gray-500">
//                     <div className="flex items-center space-x-1">
//                       <Calendar size={14} />
//                       <span>{post.date}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <MessageCircle size={14} />
//                       <span>{post.comments}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center justify-between mt-4">
//                   <span className="text-sm text-gray-600">{post.author}</span>
//                   <div className="flex items-center space-x-2">
//                     <button className="flex items-center space-x-1 text-[#f96331] hover:text-[#e55a2b] transition-colors duration-200">
//                       <Heart size={16} />
//                       <span className="text-sm">{post.likes}</span>
//                     </button>
//                     <button className="text-gray-500 hover:text-[#0c8e95] transition-colors duration-200">
//                       <Share2 size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="px-8 py-3 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 font-medium">
//             View All Posts
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;