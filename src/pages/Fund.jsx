import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import penImage from '../assets/pen.jpg';
import '../components/GridStyles.css';

export default function Fund() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleCloseAuth = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={handleShowLogin} />
      
      <main>
        <section className="relative bg-soft-white overflow-hidden pb-8 lg:pb-12 min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-[60%] relative">
              <div className="grid-container w-full h-full"></div>
            </div>
          </div>

          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-deep-blue">Fund Your Vision.</span><br />
                <span className="text-deep-blue">Tell </span><span style={{ color: '#FFCC00' }}>Your Story.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Access grants and investment to bring your African creative projects to life.<br />
                From development to distribution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              >
                <button 
                  onClick={handleShowSignup}
                  className="bg-deep-blue hover:bg-sky-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center shadow-2xl hover:shadow-3xl shadow-blue-500/25"
                >
                  Apply for Funding
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                {/* Small blue gradient ball */}
                <div className="absolute -bottom-4 right-8 w-16 h-16 bg-gradient-to-br from-sky-blue to-deep-blue rounded-full shadow-lg animate-bounce"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { number: "2,000+", label: "Active Creatives" },
                { number: "200+", label: "Companies Hiring" },
                { number: "1,500+", label: "Jobs Filled" },
                { number: "$500M+", label: "Earnings Generated" }
              ].map((stat, index) => (
                <div key={index} className="text-center flex items-center gap-3">
                  <div className="border-l border-sky-blue/60 h-16"></div>
                  <div className="flex flex-col">
                    <div className="text-3xl lg:text-4xl font-bold text-deep-blue mb-2">{stat.number}</div>
                    <div className="text-deep-blue">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: '#0057A0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Funding Options</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                {
                  title: "Creative Grants",
                  amount: "Up to 10 Million",
                  description: "Receive grants to kickstart your creative projects with an emphasis on innovative, socially relevant stories."
                },
                {
                  title: "Production Investment",
                  amount: "Up to 10 Million",
                  description: "Apply for direct investment in your film, TV or new media project with an emphasis on commercially viable distribution plans."
                },
                {
                  title: "Co-Production Deals",
                  amount: "Up to 10 Million",
                  description: "Strong partnerships to co-fund and co-produce your film, TV or new media project, with shared resources and global distribution access."
                },
                {
                  title: "Innovation Fund",
                  amount: "Up to 10 Million",
                  description: "Apply for grants to explore new technologies, storytelling formats and innovative approaches to media creation."
                }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-transparent border border-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ 
                    width: '590px', 
                    height: '390px'
                  }}
                >
                  <h3 className="font-semibold text-white mb-4" style={{ fontSize: '32px', width: '504px', height: '32px' }}>{option.title}</h3>
                  <div className="font-semibold mb-6 text-gray-500" style={{ fontSize: '20px' }}>{option.amount}</div>
                  <p className="text-white/80 leading-relaxed" style={{ fontSize: '18px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{option.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Look For</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe in finding the best way to create impactful storytelling, partnering with you to deeply understand your goals and challenges.
                </p>
                <div className="w-[484px] h-[401px] rounded-2xl overflow-hidden">
                  <img 
                    src={penImage} 
                    alt="Person writing with pen on paper" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="space-y-8">
                  {[
                    { title: "Strong Story", description: "A compelling narrative that resonates with a wide audience, authentic voice and unique vision." },
                    { title: "Talented Team", description: "Experienced and passionate creators with a proven track record or clear potential for excellence." },
                    { title: "Market Potential", description: "Clear audience, distribution strategy, and path to commercial success or meaningful impact." }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 border-2 border-black rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-black mb-2">{item.title}</h3>
                          <p className="text-black">{item.description}</p>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="ml-4 mt-6 border-t border-black"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Funded Projects</h2>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {showLogin && (
        <LoginForm
          onSwitchToSignup={handleShowSignup}
          onClose={handleCloseAuth}
        />
      )}

      {showSignup && (
        <SignupForm
          onSwitchToLogin={handleShowLogin}
          onClose={handleCloseAuth}
        />
      )}
    </div>
  );
}
