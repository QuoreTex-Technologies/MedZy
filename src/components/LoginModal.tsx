import React, { useState } from 'react';
import { X, Mail, Lock, User, UserCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  loginType: 'student' | 'admin';
  onLogin: (type: 'student' | 'admin') => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, loginType, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication - in production, this would validate against a backend
    if (email && password) {
      console.log('Login submitted:', { email, password, loginType, isLogin });
    }
    onLogin(loginType);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            {loginType === 'student' ? (
              <User className="text-[#0c8e95]" size={24} />
            ) : (
              <UserCheck className="text-[#f96331]" size={24} />
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              {loginType === 'student' ? 'Student' : 'Admin'} {isLogin ? 'Login' : 'Sign Up'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#0c8e95] focus:outline-none text-sm sm:text-base"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#0c8e95] focus:outline-none text-sm sm:text-base"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#0c8e95] focus:outline-none text-sm sm:text-base"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 text-white rounded-lg font-medium transition-colors duration-200 ${
              loginType === 'student'
                ? 'bg-[#0c8e95] hover:bg-[#0a7a80]'
                : 'bg-[#f96331] hover:bg-[#e55a2b]'
            } text-sm sm:text-base`}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#0c8e95] hover:text-[#0a7a80] transition-colors duration-200 text-sm sm:text-base"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>

          {isLogin && (
            <div className="text-center">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-xs sm:text-sm"
              >
                Forgot your password?
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginModal;