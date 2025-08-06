import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const footerLinks = {
    platform: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: '5-Step System', href: '#five-step-system' }
    ],
    resources: [
      { label: 'PLAB Preparation', href: '#' },
      { label: 'NHS Applications', href: '#' },
      { label: 'Study Materials', href: '#' },
      { label: 'Mock Exams', href: '#' },
      { label: 'Career Guidance', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTermsModal(true);
  };

  const closeModal = () => {
    setShowPrivacyModal(false);
    setShowTermsModal(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
               
               
                <img 
                  src="/assets/medzycircle.jpg" 
                  alt="MedzyHQ Logo" 
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full mr-2 sm:mr-3 object-cover"
                />


                <span className="text-xl sm:text-2xl font-bold text-[#0fb8ce]">MedzyHQ</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                MedzyHQ guides international doctors through every challenge from interview prep to relocation so you can thrive in the UK healthcare system.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/medzy.hq/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0fb8ce] transition-colors duration-200">
                  <Instagram  size={20} />
                </a>
                <a href="https://www.linkedin.com/in/medzy-hq-089b50376/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0fb8ce] transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#0fb8ce]">Platform</h3>
              <ul className="space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 text-[#0fb8ce]">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#f96331]" size={16} />
                  <span className="text-sm sm:text-base text-gray-400">support@medzy.com</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Phone className="text-[#f96331]" size={16} />
                  <span className="text-sm sm:text-base text-gray-400">+44 20 7123 4567</span>
                </div> */}
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#f96331]" size={16} />
                  <span className="text-sm sm:text-base text-gray-400">London, United Kingdom</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm sm:text-base font-medium mb-2">Newsletter</h4>
                <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg xs:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#0c8e95] text-sm"
                  />
                  <button className="px-4 py-2 bg-[#0c8e95] text-white rounded-lg xs:rounded-l-none hover:bg-[#0a7a80] transition-colors duration-200 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © 2025 Medzy. All rights reserved. | Designed for International Medical Graduates
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <button
                onClick={handlePrivacyClick}
                className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={handleTermsClick}
                className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#0fb8ce]">Privacy Policy</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
                             <div className="prose prose-sm max-w-none">
                 <p className="text-gray-700 mb-4">
                   <strong>Last updated:</strong> July 2025
                 </p>
                 <p className="text-gray-700 mb-4">
                   At <strong>MedzyHQ</strong>, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our Site.
                 </p>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">1. Information We Collect</h3>
                 <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                   <li><strong>Personal Data:</strong> Name, email, and contact details when you subscribe or contact us.</li>
                   <li><strong>Usage Data:</strong> IP address, browser type, pages visited (via cookies).</li>
                 </ul>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">2. How We Use Your Data</h3>
                 <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                   <li>To provide and improve our services.</li>
                   <li>To respond to inquiries and send updates (if subscribed).</li>
                   <li>For analytics to enhance user experience.</li>
                 </ul>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">3. Data Sharing</h3>
                 <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                   <li>We do not sell your data.</li>
                   <li>We may share with trusted service providers (e.g., hosting, analytics) under confidentiality agreements.</li>
                 </ul>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">4. Cookies</h3>
                 <p className="text-gray-700 mb-4">
                   We use cookies to track usage. You can disable cookies in your browser settings.
                 </p>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">5. Data Security</h3>
                 <p className="text-gray-700 mb-4">
                   We implement security measures to protect your data but cannot guarantee absolute security.
                 </p>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">6. Your Rights</h3>
                 <p className="text-gray-700 mb-4">
                   You may request access, correction, or deletion of your personal data by contacting us.
                 </p>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">7. Third-Party Links</h3>
                 <p className="text-gray-700 mb-4">
                   We are not responsible for the privacy practices of external sites.
                 </p>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">8. Changes to This Policy</h3>
                 <p className="text-gray-700 mb-4">
                   Updates will be posted here. Continued use means acceptance.
                 </p>
                 
                 <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">Contact Us</h3>
                 <p className="text-gray-700">
                   For privacy concerns, contact: <strong>support@medzy.com</strong>
                 </p>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#0fb8ce]">Terms of Service</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>Last updated:</strong> July 2025
                </p>
                <p className="text-gray-700 mb-4">
                  Welcome to <strong>MedzyHQ</strong> ("we," "us," or "our"). These Terms and Conditions govern your use of our website, <strong>www.medzyhq.com</strong> (the "Site"), which provides guidance for medical doctors and students relocating to the UK, interview preparation, and mental health support.
                </p>
                <p className="text-gray-700 mb-4">
                  By accessing or using the Site, you agree to comply with these Terms. If you do not agree, please refrain from using the Site.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">1. Use of the Site</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                  <li>The content on MedzyHQ is for informational purposes only and does not constitute professional medical, legal, or immigration advice.</li>
                  <li>You must be at least 18 years old to use this Site.</li>
                  <li>You agree not to misuse the Site, including unauthorized access, data scraping, or distributing harmful content.</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">2. Intellectual Property</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                  <li>All content (text, graphics, logos) is owned by MedzyHQ and protected by copyright laws.</li>
                  <li>You may not reproduce, modify, or distribute our content without permission.</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">3. User Contributions</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                  <li>If you submit comments or feedback, you grant us the right to use them without compensation.</li>
                  <li>Do not post harmful, misleading, or offensive content.</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">4. Disclaimer of Warranties</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                  <li>The Site is provided "as is." We do not guarantee accuracy, completeness, or reliability of the content.</li>
                  <li>We are not liable for any decisions made based on the information provided.</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">5. Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  MedzyHQ is not responsible for any damages (direct or indirect) arising from your use of the Site.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">6. Third-Party Links</h3>
                <p className="text-gray-700 mb-4">
                  The Site may contain links to external websites. We are not responsible for their content or practices.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">7. Changes to Terms</h3>
                <p className="text-gray-700 mb-4">
                  We may update these Terms at any time. Continued use constitutes acceptance of changes.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">8. Governing Law</h3>
                <p className="text-gray-700 mb-4">
                  These Terms are governed by the laws of UK/England & Wales.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0fb8ce] mb-2">Contact Us</h3>
                <p className="text-gray-700">
                  For questions, contact: <strong>support@medzy.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;