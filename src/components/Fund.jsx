import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import burgundyWallet from '../assets/burgundy-wallet.png';

export default function Fund() {
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleFundingAction = () => {
    if (isAuthenticated) {
      alert('Redirecting to LMS');
    } else {
      setShowLogin(true);
    }
  };
  return (
    <section id="fund" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FlickX Fund
          </h2>
          <p className="text-lg text-gray-600">
            Bridge Creators and Capital
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/5">
            <img 
              src={burgundyWallet} 
              alt="FlickX Fund - Investment" 
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="lg:w-3/5 lg:pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Investment Philosophy
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A brief paragraph about the fund's mission to invest in and nurture African creative projects.
            </p>

            <motion.button 
              onClick={handleFundingAction}
              className="bg-deep-blue text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-md flex items-center group"
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span>Apply For Funding</span>
              <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </motion.button>
          </div>
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
