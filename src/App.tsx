import React, { useState } from 'react';
// import AdminDashboard from './components/AdminDashboard';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
// import Articles from './components/Articles';
// import Blog from './components/Blog';
// import Community from './components/Community';
// import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';
import TeamSection from './components/TeamSection';
import FiveStepSystem from './components/FiveStepSystem';

import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'admin'>('student');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);

  const handleLoginClick = (type: 'student' | 'admin') => {
    setLoginType(type);
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogin = (type: 'student' | 'admin') => {
    if (type === 'admin') {
      setIsAdminLoggedIn(true);
    } else {
      setIsStudentLoggedIn(true);
    }
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setIsStudentLoggedIn(false);
  };

  // Show admin dashboard if admin is logged in
  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onLoginClick={handleLoginClick} />
      <Hero />
      {/* <Articles />
      <Blog />
      <Community />
      <Feedback /> */}
      <AboutUs/>
      <TeamSection/>
      <FiveStepSystem />
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseModal} 
        loginType={loginType}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;