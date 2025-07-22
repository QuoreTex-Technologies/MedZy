// import React, { useState } from 'react';
// import { 
//   Users, 
//   FileText, 
//   MessageSquare, 
//   Star, 
//   Calendar, 
//   Settings, 
//   BarChart3, 
//   TrendingUp, 
//   Eye, 
//   Edit, 
//   Trash2, 
//   Plus, 
//   Search, 
//   Filter,
//   Download,
//   Bell,
//   LogOut,
//   Home,
//   BookOpen,
//   UserCheck,
//   Activity
// } from 'lucide-react';

// interface AdminDashboardProps {
//   onLogout: () => void;
// }

// const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock data for demonstration
//   const stats = {
//     totalUsers: 547,
//     totalArticles: 156,
//     totalPosts: 423,
//     avgRating: 4.8,
//     newUsersToday: 23,
//     articlesThisMonth: 12,
//     postsThisWeek: 67,
//     feedbackCount: 189
//   };

//   const recentUsers = [
//     { id: 1, name: 'Dr. Pratik Jaiswal', email: 'pratiksaraiyya@gmail.com', joinDate: '2025-03-15', status: 'Active' },
//     { id: 2, name: 'Dr. Heramb Jawanjal', email: 'herambjawanj@gmail.com', joinDate: '2024-03-14', status: 'Active' },
//     { id: 3, name: 'Dr. Nandini Wahane', email: 'wahane-nandi@gmail.com', joinDate: '2024-03-13', status: 'Pending' },
//     { id: 4, name: 'Dr. Samruddhi Ratnaparkhi', email: 'samurparkhi@gmail.com', joinDate: '2024-03-12', status: 'Active' },
//     { id: 5, name: 'Dr. Shruti Mukhwane', email: 'mukhwane.shruti@gmail.com', joinDate: '2024-03-11', status: 'Active' }
//   ];

//   const recentArticles = [
//     { id: 1, title: 'NHS Application Process Guide', author: 'Admin', date: '2024-03-15', status: 'Published', views: 1234 },
//     { id: 2, title: 'PLAB Exam Preparation Tips', author: 'Dr. Johnson', date: '2024-03-14', status: 'Draft', views: 0 },
//     { id: 3, title: 'UK Medical System Overview', author: 'Dr. Hassan', date: '2024-03-13', status: 'Published', views: 856 },
//     { id: 4, title: 'Visa Requirements Guide', author: 'Admin', date: '2024-03-12', status: 'Published', views: 2341 },
//     { id: 5, title: 'Clinical Governance in NHS', author: 'Dr. Wilson', date: '2024-03-11', status: 'Review', views: 0 }
//   ];

//   const recentFeedback = [
//     { id: 1, user: 'Dr. Sarah Johnson', rating: 5, comment: 'Excellent platform for IMG preparation', date: '2024-03-15' },
//     { id: 2, user: 'Dr. Ahmed Hassan', rating: 4, comment: 'Very helpful resources and community', date: '2024-03-14' },
//     { id: 3, user: 'Dr. Maria Santos', rating: 5, comment: 'Great support from the community', date: '2024-03-13' },
//     { id: 4, user: 'Dr. James Wilson', rating: 4, comment: 'Comprehensive study materials', date: '2024-03-12' }
//   ];

//   const sidebarItems = [
//     { id: 'overview', label: 'Overview', icon: Home },
//     { id: 'users', label: 'Users', icon: Users },
//     { id: 'articles', label: 'Articles', icon: FileText },
//     { id: 'blog', label: 'Blog Posts', icon: BookOpen },
//     { id: 'feedback', label: 'Feedback', icon: MessageSquare },
//     { id: 'analytics', label: 'Analytics', icon: BarChart3 },
//     { id: 'events', label: 'Events', icon: Calendar },
//     { id: 'settings', label: 'Settings', icon: Settings }
//   ];

//   const renderOverview = () => (
//     <div className="space-y-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Total Users</p>
//               <p className="text-2xl font-bold text-[#0c8e95]">{stats.totalUsers.toLocaleString()}</p>
//               <p className="text-xs text-green-600 mt-1">+{stats.newUsersToday} today</p>
//             </div>
//             <div className="w-12 h-12 bg-[#0c8e95] bg-opacity-10 rounded-lg flex items-center justify-center">
//               <Users className="text-[#0c8e95]" size={24} />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Articles</p>
//               <p className="text-2xl font-bold text-[#f96331]">{stats.totalArticles}</p>
//               <p className="text-xs text-green-600 mt-1">+{stats.articlesThisMonth} this month</p>
//             </div>
//             <div className="w-12 h-12 bg-[#f96331] bg-opacity-10 rounded-lg flex items-center justify-center">
//               <FileText className="text-[#f96331]" size={24} />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Blog Posts</p>
//               <p className="text-2xl font-bold text-[#0fb8ce]">{stats.totalPosts}</p>
//               <p className="text-xs text-green-600 mt-1">+{stats.postsThisWeek} this week</p>
//             </div>
//             <div className="w-12 h-12 bg-[#0fb8ce] bg-opacity-10 rounded-lg flex items-center justify-center">
//               <BookOpen className="text-[#0fb8ce]" size={24} />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Avg Rating</p>
//               <p className="text-2xl font-bold text-[#ffd89e]">{stats.avgRating}</p>
//               <p className="text-xs text-gray-600 mt-1">{stats.feedbackCount} reviews</p>
//             </div>
//             <div className="w-12 h-12 bg-[#ffd89e] bg-opacity-20 rounded-lg flex items-center justify-center">
//               <Star className="text-[#f96331]" size={24} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Users</h3>
//           <div className="space-y-3">
//             {recentUsers.slice(0, 5).map((user) => (
//               <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="font-medium text-gray-800">{user.name}</p>
//                   <p className="text-sm text-gray-600">{user.email}</p>
//                 </div>
//                 <div className="text-right">
//                   <span className={`px-2 py-1 text-xs rounded-full ${
//                     user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {user.status}
//                   </span>
//                   <p className="text-xs text-gray-500 mt-1">{user.joinDate}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Articles</h3>
//           <div className="space-y-3">
//             {recentArticles.slice(0, 5).map((article) => (
//               <div key={article.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="font-medium text-gray-800">{article.title}</p>
//                   <p className="text-sm text-gray-600">by {article.author}</p>
//                 </div>
//                 <div className="text-right">
//                   <span className={`px-2 py-1 text-xs rounded-full ${
//                     article.status === 'Published' ? 'bg-green-100 text-green-800' : 
//                     article.status === 'Draft' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {article.status}
//                   </span>
//                   <p className="text-xs text-gray-500 mt-1">{article.views} views</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderUsers = () => (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
//         <div className="flex items-center space-x-3">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#0c8e95] focus:outline-none"
//             />
//           </div>
//           <button className="flex items-center space-x-2 px-4 py-2 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors">
//             <Plus size={16} />
//             <span>Add User</span>
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {recentUsers.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-[#0c8e95] rounded-full flex items-center justify-center">
//                         <span className="text-white font-medium">{user.name.charAt(0)}</span>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.joinDate}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 text-xs rounded-full ${
//                       user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex items-center space-x-2">
//                       <button className="text-[#0c8e95] hover:text-[#0a7a80]">
//                         <Eye size={16} />
//                       </button>
//                       <button className="text-blue-600 hover:text-blue-800">
//                         <Edit size={16} />
//                       </button>
//                       <button className="text-red-600 hover:text-red-800">
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderArticles = () => (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-800">Article Management</h2>
//         <div className="flex items-center space-x-3">
//           <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//             <Filter size={16} />
//             <span>Filter</span>
//           </button>
//           <button className="flex items-center space-x-2 px-4 py-2 bg-[#f96331] text-white rounded-lg hover:bg-[#e55a2b] transition-colors">
//             <Plus size={16} />
//             <span>New Article</span>
//           </button>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {recentArticles.map((article) => (
//                 <tr key={article.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <div className="text-sm font-medium text-gray-900">{article.title}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.author}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 text-xs rounded-full ${
//                       article.status === 'Published' ? 'bg-green-100 text-green-800' : 
//                       article.status === 'Draft' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {article.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.views.toLocaleString()}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="flex items-center space-x-2">
//                       <button className="text-[#0c8e95] hover:text-[#0a7a80]">
//                         <Eye size={16} />
//                       </button>
//                       <button className="text-blue-600 hover:text-blue-800">
//                         <Edit size={16} />
//                       </button>
//                       <button className="text-red-600 hover:text-red-800">
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderFeedback = () => (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
//         <h2 className="text-2xl font-bold text-gray-800">Feedback Management</h2>
//         <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//           <Download size={16} />
//           <span>Export</span>
//         </button>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 space-y-4">
//           {recentFeedback.map((feedback) => (
//             <div key={feedback.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h4 className="font-medium text-gray-800">{feedback.user}</h4>
//                   <div className="flex items-center mt-1">
//                     {Array.from({ length: 5 }, (_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         className={i < feedback.rating ? 'text-[#ffd89e] fill-current' : 'text-gray-300'}
//                       />
//                     ))}
//                     <span className="ml-2 text-sm text-gray-600">{feedback.rating}/5</span>
//                   </div>
//                 </div>
//                 <span className="text-sm text-gray-500">{feedback.date}</span>
//               </div>
//               <p className="text-gray-700">{feedback.comment}</p>
//               <div className="flex items-center justify-end mt-4 space-x-2">
//                 <button className="text-[#0c8e95] hover:text-[#0a7a80] text-sm">Reply</button>
//                 <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="space-y-6">
//           <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Rating Overview</h3>
//             <div className="space-y-3">
//               {[5, 4, 3, 2, 1].map((rating) => (
//                 <div key={rating} className="flex items-center space-x-3">
//                   <span className="text-sm text-gray-600">{rating}</span>
//                   <Star size={14} className="text-[#ffd89e] fill-current" />
//                   <div className="flex-1 bg-gray-200 rounded-full h-2">
//                     <div 
//                       className="bg-[#ffd89e] h-2 rounded-full" 
//                       style={{ width: `${rating === 5 ? 60 : rating === 4 ? 30 : rating === 3 ? 8 : rating === 2 ? 2 : 0}%` }}
//                     ></div>
//                   </div>
//                   <span className="text-sm text-gray-600">
//                     {rating === 5 ? 60 : rating === 4 ? 30 : rating === 3 ? 8 : rating === 2 ? 2 : 0}%
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Total Reviews</span>
//                 <span className="font-bold text-[#0c8e95]">{stats.feedbackCount}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Average Rating</span>
//                 <span className="font-bold text-[#f96331]">{stats.avgRating}/5</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">This Month</span>
//                 <span className="font-bold text-[#0fb8ce]">47</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderAnalytics = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">User Growth</h3>
//           <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
//             <div className="text-center">
//               <TrendingUp className="mx-auto text-[#0c8e95] mb-2" size={48} />
//               <p className="text-gray-600">Chart visualization would go here</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Content Performance</h3>
//           <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
//             <div className="text-center">
//               <BarChart3 className="mx-auto text-[#f96331] mb-2" size={48} />
//               <p className="text-gray-600">Chart visualization would go here</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//         <h3 className="text-lg font-bold text-gray-800 mb-4">Platform Activity</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <div className="text-center p-4 bg-gray-50 rounded-lg">
//             <Activity className="mx-auto text-[#0c8e95] mb-2" size={32} />
//             <p className="text-2xl font-bold text-gray-800">1,234</p>
//             <p className="text-sm text-gray-600">Daily Active Users</p>
//           </div>
//           <div className="text-center p-4 bg-gray-50 rounded-lg">
//             <Eye className="mx-auto text-[#f96331] mb-2" size={32} />
//             <p className="text-2xl font-bold text-gray-800">5,678</p>
//             <p className="text-sm text-gray-600">Page Views</p>
//           </div>
//           <div className="text-center p-4 bg-gray-50 rounded-lg">
//             <MessageSquare className="mx-auto text-[#0fb8ce] mb-2" size={32} />
//             <p className="text-2xl font-bold text-gray-800">234</p>
//             <p className="text-sm text-gray-600">Comments</p>
//           </div>
//           <div className="text-center p-4 bg-gray-50 rounded-lg">
//             <UserCheck className="mx-auto text-[#ffd89e] mb-opacity-80" size={32} />
//             <p className="text-2xl font-bold text-gray-800">89%</p>
//             <p className="text-sm text-gray-600">User Satisfaction</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'overview':
//         return renderOverview();
//       case 'users':
//         return renderUsers();
//       case 'articles':
//         return renderArticles();
//       case 'blog':
//         return renderArticles(); // Same structure for blog posts
//       case 'feedback':
//         return renderFeedback();
//       case 'analytics':
//         return renderAnalytics();
//       case 'events':
//         return (
//           <div className="text-center py-12">
//             <Calendar className="mx-auto text-gray-400 mb-4" size={64} />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Events Management</h3>
//             <p className="text-gray-600">Event management features coming soon...</p>
//           </div>
//         );
//       case 'settings':
//         return (
//           <div className="text-center py-12">
//             <Settings className="mx-auto text-gray-400 mb-4" size={64} />
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Settings</h3>
//             <p className="text-gray-600">Platform settings and configuration options...</p>
//           </div>
//         );
//       default:
//         return renderOverview();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
//         {/* Logo */}
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center">
//             <img 
//               src="/assets/Logo.jpg" 
//               alt="Medzy Logo" 
//               className="h-10 w-10 rounded-full mr-3 object-cover"
//             />
//             <div>
//               <span className="text-xl font-bold text-[#0c8e95]">MEDZY</span>
//               <p className="text-xs text-gray-600">Admin Dashboard</p>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 p-4">
//           <ul className="space-y-2">
//             {sidebarItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => setActiveTab(item.id)}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
//                       activeTab === item.id
//                         ? 'bg-[#0c8e95] text-white'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     <Icon size={20} />
//                     <span>{item.label}</span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Logout */}
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={onLogout}
//             className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//           >
//             <LogOut size={20} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-gray-800">
//               {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
//             </h1>
//             <div className="flex items-center space-x-4">
//               <button className="relative p-2 text-gray-600 hover:text-[#0c8e95] transition-colors">
//                 <Bell size={20} />
//                 <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-[#0c8e95] rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">A</span>
//                 </div>
//                 <span className="text-gray-700 font-medium">Admin</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-6 overflow-auto">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;