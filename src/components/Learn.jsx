import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';

export default function Learn() {
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleCourseAction = () => {
    if (isAuthenticated) {
      //Redirect to LMS when available
      alert('Redirecting to LMS');
    } else {
      setShowLogin(true);
    }
  };
  return (
    <section id="learn" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flickx Learn
          </h2>
          <p className="text-lg text-gray-600">
            Make learning accessible and career-ready
          </p>
        </div>

        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/5">
              <img 
                src="/src/assets/first picture.png" 
                alt="Introduction to African Cinematography" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:w-3/5 lg:pt-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Introduction to African Cinematography
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Learn the fundamentals of visual storytelling
              </p>
              <motion.button 
                onClick={handleCourseAction}
                className="bg-deep-blue text-white px-8 py-3 rounded-full text-base font-semibold transition-colors shadow-md flex items-center group"
                whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span>Explore Course</span>
                <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/5">
              <img 
                src="/src/assets/second picture.png" 
                alt="Art of Screening" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:w-3/5 lg:pt-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Art of Screening
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Master the craft of writing compelling Stories
              </p>
              <motion.button 
                onClick={handleCourseAction}
                className="bg-deep-blue text-white px-8 py-3 rounded-full text-base font-semibold transition-colors shadow-md flex items-center group"
                whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span>Explore Course</span>
                <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="w-full overflow-x-auto rounded-lg no-scrollbar">
            <div className="flex w-max">
              <img src="/src/assets/first picture.png" alt="Course preview 1" className="w-80 h-48 object-cover" />
              <img src="/src/assets/second picture.png" alt="Course preview 2" className="w-80 h-48 object-cover" />
              <img src="/src/assets/3rd picture.png" alt="Course preview 3" className="w-80 h-48 object-cover" />
              <img src="/src/assets/4th pic.png" alt="Course preview 4" className="w-80 h-48 object-cover" />
              <img src="/src/assets/5th pic.png" alt="Course preview 5" className="w-80 h-48 object-cover" />
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleCourseAction}
              className="text-gray-700 hover:text-deep-blue font-semibold text-lg transition-colors flex items-center group"
            >
              Discover More
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
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
