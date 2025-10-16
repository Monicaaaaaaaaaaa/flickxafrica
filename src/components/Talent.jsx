import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';

import talent1 from '../assets/talent1.png';
import talent2 from '../assets/talent2.png';

export default function Talent() {
    const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleTalentAction = () => {
    if (isAuthenticated) {
      // Handle authenticated action, e.g., navigate to a protected route
    } else {
      setShowLogin(true);
    }
  };

  const talentMembers = [
    {
      name: "John Doe",
      role: "Director",
      image: talent1,
      rating: 5
    },
    {
      name: "Amina",
      role: "Cinematographer",
      image: talent2,
      rating: 5
    },
    {
      name: "Oshoporu Emmanuel",
      role: "Film Editor",
      image: talent1,
      rating: 5
    }
  ];

  return (
    <section id="talent" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FlickX Talent
          </h2>
          <p className="text-lg text-gray-600">
            Connect With The Best Talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {talentMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto object-contain bg-white p-1"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>
              <div className="flex justify-center mb-4">
                {[...Array(member.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <button 
                onClick={handleTalentAction}
                className="text-deep-blue text-sm font-medium hover:text-sky-blue transition-colors"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.button 
            onClick={handleTalentAction}
            className="bg-deep-blue text-white px-8 py-3 rounded-full text-base font-medium transition-colors shadow-md flex items-center group"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span>Browse All Talent</span>
            <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.button>
        </div>
        {showLogin && (
          <LoginForm
            onSwitchToSignup={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
            onClose={() => setShowLogin(false)}
          />
        )}

        {showSignup && (
          <SignupForm
            onSwitchToLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
            onClose={() => setShowSignup(false)}
          />
        )}
      </div>
    </section>
  );
}

