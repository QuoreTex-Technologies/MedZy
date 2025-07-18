import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Award, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Star, 
  Download, 
  Play, 
  FileText, 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ChevronRight,
  Target,
  Brain,
  Stethoscope,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Calendar as CalendarIcon,
  BookmarkPlus
} from 'lucide-react';

interface StudentDashboardProps {
  onLogout: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const studentData = {
    name: 'Dr. Pratik Jaiswal',
    email: 'pratiksaraiyya@gmail.com',
    country: 'India',
    examStatus: 'PLAB 1 Passed',
    progress: 75,
    nextExam: 'PLAB 2',
    examDate: '2026-05-15',
    studyStreak: 12,
    completedCourses: 8,
    totalCourses: 12
  };

  const recentActivities = [
    { id: 1, type: 'course', title: 'Completed: NHS Application Process', time: '2 hours ago', status: 'completed' },
    { id: 2, type: 'exam', title: 'Mock PLAB 2 Exam', score: '85%', time: '1 day ago', status: 'passed' },
    { id: 3, type: 'discussion', title: 'Replied in: PLAB Preparation Group', time: '2 days ago', status: 'active' },
    { id: 4, type: 'resource', title: 'Downloaded: Clinical Guidelines PDF', time: '3 days ago', status: 'downloaded' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'PLAB 2 Mock Exam', date: '2024-03-25', time: '10:00 AM', type: 'exam' },
    { id: 2, title: 'NHS Application Workshop', date: '2024-03-28', time: '2:00 PM', type: 'workshop' },
    { id: 3, title: 'Study Group Meeting', date: '2024-03-30', time: '6:00 PM', type: 'meeting' },
    { id: 4, title: 'CV Writing Session', date: '2024-04-02', time: '4:00 PM', type: 'session' }
  ];

  const courses = [
    { 
      id: 1, 
      title: 'PLAB 1 Preparation', 
      progress: 100, 
      status: 'completed',
      lessons: 24,
      duration: '40 hours',
      instructor: 'Dr. Michael Johnson'
    },
    { 
      id: 2, 
      title: 'PLAB 2 Clinical Skills', 
      progress: 65, 
      status: 'in-progress',
      lessons: 18,
      duration: '35 hours',
      instructor: 'Dr. Emma Wilson'
    },
    { 
      id: 3, 
      title: 'NHS Application Guide', 
      progress: 90, 
      status: 'in-progress',
      lessons: 12,
      duration: '20 hours',
      instructor: 'Dr. James Taylor'
    },
    { 
      id: 4, 
      title: 'UK Medical System Overview', 
      progress: 0, 
      status: 'not-started',
      lessons: 15,
      duration: '25 hours',
      instructor: 'Dr. Lisa Chen'
    }
  ];

  const studyStats = [
    { label: 'Study Hours This Week', value: '28', change: '+12%', icon: Clock, color: 'text-[#0c8e95]' },
    { label: 'Practice Questions', value: '342', change: '+8%', icon: Brain, color: 'text-[#f96331]' },
    { label: 'Mock Exam Score', value: '85%', change: '+5%', icon: Target, color: 'text-[#0fb8ce]' },
    { label: 'Study Streak', value: '12 days', change: 'New Record!', icon: Award, color: 'text-[#ffd89e]' }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'exams', label: 'Exams & Tests', icon: GraduationCap },
    { id: 'study-plan', label: 'Study Plan', icon: CalendarIcon },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'resources', label: 'Resources', icon: FileText },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#0c8e95] to-[#0fb8ce] rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {studentData.name}!</h1>
            <p className="text-lg opacity-90">Continue your journey to NHS success</p>
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">{studentData.examStatus}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span className="text-sm">Next: {studentData.nextExam}</span>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-3xl sm:text-4xl font-bold">{studentData.progress}%</div>
            <div className="text-sm opacity-90">Overall Progress</div>
            <div className="w-32 bg-white/20 rounded-full h-2 mt-2 mx-auto lg:mx-0">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-300" 
                style={{ width: `${studentData.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {studyStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                  <Icon className={`${stat.color} w-6 h-6`} />
                </div>
                <span className="text-xs text-green-600 font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.status === 'completed' ? 'bg-green-100' :
                    activity.status === 'passed' ? 'bg-blue-100' :
                    activity.status === 'active' ? 'bg-[#0c8e95] bg-opacity-10' : 'bg-gray-100'
                  }`}>
                    {activity.type === 'course' && <BookOpen className="w-5 h-5 text-green-600" />}
                    {activity.type === 'exam' && <GraduationCap className="w-5 h-5 text-blue-600" />}
                    {activity.type === 'discussion' && <MessageSquare className="w-5 h-5 text-[#0c8e95]" />}
                    {activity.type === 'resource' && <Download className="w-5 h-5 text-gray-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.title}</p>
                    {activity.score && <p className="text-sm text-blue-600 font-medium">Score: {activity.score}</p>}
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-[#f96331] pl-4 py-2">
                  <h4 className="font-medium text-gray-800">{event.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                    event.type === 'exam' ? 'bg-red-100 text-red-800' :
                    event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'meeting' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#0c8e95] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  course.status === 'completed' ? 'bg-green-100 text-green-800' :
                  course.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {course.status === 'completed' ? 'Completed' :
                   course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#0c8e95] h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <BookOpen size={16} />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2 col-span-2">
                  <User size={16} />
                  <span>{course.instructor}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 bg-[#0c8e95] text-white rounded-lg hover:bg-[#0a7a80] transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Play size={16} />
                  <span>{course.status === 'not-started' ? 'Start Course' : 'Continue'}</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <BookmarkPlus size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'courses':
        return renderCourses();
      case 'exams':
        return (
          <div className="text-center py-12">
            <GraduationCap className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Exams & Tests</h3>
            <p className="text-gray-600">Practice exams and assessments coming soon...</p>
          </div>
        );
      case 'study-plan':
        return (
          <div className="text-center py-12">
            <CalendarIcon className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Study Plan</h3>
            <p className="text-gray-600">Personalized study planning features coming soon...</p>
          </div>
        );
      case 'community':
        return (
          <div className="text-center py-12">
            <Users className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
            <p className="text-gray-600">Connect with fellow students and mentors...</p>
          </div>
        );
      case 'resources':
        return (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Resources</h3>
            <p className="text-gray-600">Study materials and resources library...</p>
          </div>
        );
      case 'progress':
        return (
          <div className="text-center py-12">
            <TrendingUp className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Detailed progress analytics and insights...</p>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-12">
            <User className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Profile Settings</h3>
            <p className="text-gray-600">Manage your profile and preferences...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Settings</h3>
            <p className="text-gray-600">Account settings and preferences...</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <img 
              src="/assets/Logo.jpg" 
              alt="Medzy Logo" 
              className="h-10 w-10 rounded-full mr-3 object-cover"
            />
            <div>
              <span className="text-xl font-bold text-[#0c8e95]">MEDZY</span>
              <p className="text-xs text-gray-600">Student Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#0c8e95] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Student Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-[#0c8e95] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">SA</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{studentData.name}</p>
              <p className="text-xs text-gray-600">{studentData.country}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-[#0c8e95] transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#0c8e95] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">SA</span>
                </div>
                <span className="text-gray-700 font-medium">Student</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;