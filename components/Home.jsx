import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <section id="home" className="bg-gradient-to-br from-soft-white to-white py-32 relative overflow-hidden min-h-screen flex items-center">
      <motion.div 
        className="absolute top-16 left-16 w-48 h-48 bg-sky-blue/20 rounded-full opacity-60"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div 
        className="absolute top-32 right-32 w-32 h-32 bg-sky-blue/30 rounded-full opacity-40"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-16 left-1/3 w-24 h-24 bg-deep-blue/20 rounded-full opacity-50"
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-16 right-16 w-64 h-64 bg-yellow-100 rounded-full opacity-40"
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-50"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      ></motion.div>
      
            <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-100 rounded-full opacity-30"
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-green-100 rounded-full opacity-40"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
      ></motion.div>

      <motion.div 
        className="absolute top-24 left-1/4 w-12 h-12 bg-pink-100 rounded-full opacity-50"
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-10 right-1/3 w-10 h-10 bg-indigo-100 rounded-full opacity-40"
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-48 left-1/3 w-8 h-8 bg-teal-100 rounded-full opacity-60"
        animate={{ y: [0, 8, 0], x: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      ></motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          >
            The Digital HeadQuaters of <span className="text-sky-blue">African Creativity</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            A cultural operating system that connects designers, doers, hackers, and thinkers across Africa and globally.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
                        <motion.button 
              onClick={() => setShowLogin(true)}
              className="bg-deep-blue text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg flex items-center group transition-colors"
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span>Start Your Journey</span>
              <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.button>
            <a 
              href="#learn"
              className="group text-charcoal hover:text-deep-blue text-lg font-medium transition-colors flex items-center"
            >
              <span className="relative pr-5">
                Learn More
                <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </a>
          </div>

          <div className="relative bg-white rounded-3xl p-16 shadow-2xl max-w-5xl mx-auto border border-gray-100">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-gray-100 transition-colors border-2 border-gray-200">
                <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-500">Video or Lms Screen shot</h3>
            </div>
          </div>
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
    </section>
  );
}
