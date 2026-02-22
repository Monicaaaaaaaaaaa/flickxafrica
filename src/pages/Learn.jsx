import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import CurvedSection from '../components/CurvedSection';
import { booksIcon, arrowIcon, handshakeIcon, hatIcon } from '../assets/icons';
import penImage from '../assets/pen.jpg';
import instructorImage from '../assets/instructor.jpg';
import learnImage from '../assets/learn.jpg';

export default function Learn() {
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
    <div className="min-h-screen bg-soft-white">
      <Header onLoginClick={handleShowLogin} />
      
      <main className="pt-20">
        <section className="relative bg-soft-white overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-deep-blue">
                  Learn <span className="text-accent-yellow">In-Demand</span> Creative Skills,<br />the African Way
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Learn from the masters who are shaping African Cinema. Build the skills to tell stories that move, inspire, and transform our world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleShowSignup}
                    className="bg-deep-blue hover:bg-sky-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center shadow-2xl hover:shadow-3xl shadow-blue-500/25"
                  >
                    Start your journey
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-deep-blue border-2 border-deep-blue px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                    Login
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-96 lg:h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                          src={learnImage} 
                          alt="Learn illustration" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral-red rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl">✏️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            >
              {[
                { number: "200+", label: "courses available" },
                { number: "300+", label: "tutors available" },
                { number: "1,500", label: "jobs filled" },
                { number: "$500M+", label: "earnings generated" }
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

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose FlickX</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: booksIcon,
                  title: "Expert-Led Courses",
                  description: "Learn from award-winning African filmmakers and industry professionals"
                },
                {
                  icon: arrowIcon,
                  title: "Hands-On Projects",
                  description: "Apply your skills with real-world projects and portfolio-building assignments"
                },
                {
                  icon: handshakeIcon,
                  title: "Community Support",
                  description: "Connect with fellow learners and get feedback from mentors"
                },
                {
                  icon: hatIcon,
                  title: "Industry Certificates",
                  description: "Earn recognized certificates that validate your skills and boost your career"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-[20px] p-6 text-center w-[246px] h-[480px]"
                >
                  <div className="bg-white border border-gray-200 rounded-[20px] p-3 mb-4 flex items-center justify-center w-[202px] h-[218px] mx-auto">
                    <img src={feature.icon} alt={feature.title} className="w-24 h-24 object-contain" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
                </p>
                <div className="w-[484px] h-[401px] rounded-2xl overflow-hidden">
                  <img 
                    src={penImage} 
                    alt="Person writing with pen on paper" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-8">
                  {[
                    { title: "Choose Your Course", description: "Browse our catalog and select courses that match your goals." },
                    { title: "Learn at Your Pace", description: "Access video lessons, resources, and assignments anytime." },
                    { title: "Build Your Portfolio", description: "Complete projects and showcase your work." },
                    { title: "Get Certified", description: "Earn certificates and advance your career." }
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
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Courses</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Atomic Habits",
                  facilitator: "James Clear",
                  progress: "50%",
                  modulesCompleted: 8,
                  totalModules: 12,
                  image: instructorImage
                },
                {
                  title: "Atomic Habits",
                  facilitator: "James Clear",
                  progress: "50%",
                  modulesCompleted: 8,
                  totalModules: 12,
                  image: instructorImage
                },
                {
                  title: "Atomic Habits",
                  facilitator: "James Clear",
                  progress: "50%",
                  modulesCompleted: 8,
                  totalModules: 12,
                  image: instructorImage
                }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 flex flex-col"
                  style={{ 
                    width: '371.5px', 
                    height: '341px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="rounded-full overflow-hidden border-2 border-gray-200" style={{ width: '170px', height: '170px' }}>
                      <img 
                        src={course.image} 
                        alt={`${course.facilitator} - Instructor`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/150x150?text=Instructor';
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {course.title}
                  </h3>

                  <p className="text-sm text-black mb-2">
                    Facilitator: {course.facilitator}
                  </p>

                  <div className="space-y-2 mt-auto">
                    <div className="text-sm text-sky-blue font-medium">
                      Progress: {course.progress} out of 100%
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-black">
                        Modules: {course.modulesCompleted}/{course.totalModules}
                      </div>
                      <button 
                        onClick={handleShowLogin}
                        className="bg-deep-blue hover:bg-sky-blue text-white font-medium transition-colors duration-200 rounded-lg"
                        style={{ width: '110px', height: '36.67px' }}
                      >
                        Resume
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CurvedSection heading="What Our Students Say" />

        <section className="bg-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-deep-blue rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: 'calc(100% / 9) calc(100% / 4)'
                }}></div>
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
                    Ready to start your<br />creative career?
                  </h2>
                  <button 
                    onClick={handleShowSignup}
                    className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200"
                  >
                    Start Now
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto bg-sky-blue rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 relative">
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 relative blur-md">
                          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                          <div className="absolute inset-2 bg-yellow-300 rounded-full blur-lg opacity-80"></div>
                          <div className="absolute inset-4 bg-yellow-200 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-7xl text-white blur-md">⚡</div>
                      
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-5xl blur-md">
                        <div className="relative">
                          <span className="text-red-500">◆</span>
                          <div className="absolute inset-0 flex items-center justify-center text-sm text-white">
                            🤲
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-5xl text-white blur-md">
                        ⭐
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
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
