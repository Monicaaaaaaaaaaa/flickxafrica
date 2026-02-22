import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import CurvedSection from '../components/CurvedSection';
import bgImage from '../assets/bgImg.jpg';
import firstPicture from '../assets/first-picture.png';
import secondPicture from '../assets/second-picture.png';
import thirdPicture from '../assets/3rd-picture.png';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import fifaLogo from '../assets/fifa.png';
import worldremitLogo from '../assets/worldremit.png';
import sterlingLogo from '../assets/sterling.png';
import donJulioLogo from '../assets/don_julio_logo.svg.png';
import maggiLogo from '../assets/maggi.png';
import '../components/GridStyles.css';

export default function Home() {
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
    <>
      <section className="relative bg-soft-white overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-[60%] relative">
            <div className="grid-container w-full h-full"></div>
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-deep-blue">Build.</span> <span className="text-deep-blue">Create.</span> <span className="text-accent-yellow">Earn.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Welcome to FlickX Africa the digital headquarters of African creativity, where learning innovation, talent and funding power the creative future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <button 
                onClick={handleShowSignup}
                className="bg-deep-blue hover:bg-sky-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center shadow-2xl hover:shadow-3xl shadow-blue-500/25"
              >
                Start your journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              {/* Small blue gradient ball */}
              <div className="absolute -bottom-4 right-8 w-16 h-16 bg-gradient-to-br from-sky-blue to-deep-blue rounded-full shadow-lg animate-bounce"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                <img 
                  src={bgImage} 
                  alt="Video Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="text-white text-lg font-medium mt-4">
                    video or lms screenshot
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-2xl text-gray-900">
              Trusted by innovators<br />worldwide
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="flex items-center">
              <img 
                src={fifaLogo} 
                alt="FIFA" 
                className="h-6 lg:h-8 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-blue-900 hidden">FIFA</span>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-black"></div>
            
            <div className="flex items-center">
              <img 
                src={worldremitLogo} 
                alt="WorldRemit" 
                className="h-6 lg:h-8 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-lg font-semibold text-purple-600 hidden">WorldRemit</span>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-black"></div>
            
            <div className="flex items-center">
              <img 
                src={sterlingLogo} 
                alt="Sterling" 
                className="h-6 lg:h-8 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-lg font-semibold text-black hidden">Sterling</span>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-black"></div>
            
            <div className="flex items-center">
              <img 
                src={donJulioLogo} 
                alt="Don Julio" 
                className="h-6 lg:h-8 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-lg font-bold text-black hidden" style={{ fontFamily: 'cursive' }}>Don Julio</span>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-black"></div>
            
            <div className="flex items-center">
              <img 
                src={maggiLogo} 
                alt="Maggi" 
                className="h-6 lg:h-8 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-lg font-bold text-red-600 hidden">Maggi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-900 text-lg font-medium">
                FlickX Africa
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-black leading-relaxed mb-8">
                At FlickX, we believe creative excellence should be simple, personalized, and always within reach. We've reimagined how success is achieved, combining cutting-edge training with a human touch to create a seamless, talent-first experience.
              </p>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { number: "2,000+", label: "available masterclass courses" },
                  { number: "50+", label: "industry mentors on standby" },
                  { number: "1,200+", label: "Readily available insights & trends" },
                  { number: "15,000+", label: "Total creative job listings annually" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-px bg-gray-300 h-16 mr-4"></div>
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-black mb-2">{stat.number}</div>
                      <div className="text-black text-lg">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-deep-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Exploring FlickX ecosystem
              </h2>
              <p className="text-lg leading-relaxed">
                Every organization moves differently. That's why we develop solutions built on insight, expertise, and a sharp understanding of your brand. Our strategic, creative, and technological disciplines strengthen one another giving you an approach that aligns precisely with the growth you want to achieve.
              </p>
            </motion.div>

            <div className="space-y-10">
              {[
                {
                  title: "Creative Base",
                  description: "Discover the latest insights and trends. Create with valid information.",
                  features: ["Industry reports", "Talent mapping", "Policy tracking"]
                },
                {
                  title: "Learn",
                  description: "Master your craft with courses, masterclasses and verified certificates.",
                  features: ["200+ Courses", "Expert facilitators", "Career-ready skills"]
                },
                {
                  title: "Studio",
                  description: "Professional production services from concept to screen.",
                  features: ["End to end production", "Verified Talent Pool", "Equipment & studios"]
                },
                {
                  title: "Talent",
                  description: "Connect with opportunities and collaborations. Explore Africa's talent network.",
                  features: ["Verified profiles", "Live job board", "Skill ratings"]
                },
                {
                  title: "Fund",
                  description: "Access grants, funding, and investment capital.",
                  features: ["Seed grants", "Equity investment", "Fellowship programs"]
                },
                {
                  title: "Lab",
                  description: "Where creativity meets emerging technology.",
                  features: ["AI, VR, AR tools", "Innovation showcase", "R&D resources"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-sky-blue pb-6 last:border-b-0"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-semibold flex items-center">
                      <span className="w-3 h-3 border-2 border-white rounded-full mr-3"></span>
                      {item.title}
                    </h3>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <p className="text-white/90 mb-3">{item.description}</p>
                  <div className="space-y-1">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-16"></div>

      <CurvedSection />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Learn more <br /> from our blog
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team boasts top green energy experts, driving innovation in sustainability.
            </p>
              <div className="lg:hidden text-center mt-8">
                <button onClick={handleShowLogin} className="px-8 py-3 border border-black text-black rounded-full hover:bg-gray-800 transition duration-300 inline-block">
                  See all
                </button>
              </div>
            <div className="hidden lg:block mt-32">
              <button onClick={handleShowLogin} className="px-8 py-3 border border-black text-black rounded-full hover:bg-gray-800 transition duration-300 inline-block">
                See all
              </button>
            </div>
          </motion.div>

          <div className="lg:w-1/2 space-y-8">
            {[
              { id: 1, title: "Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts", author: "Wade Warren", readTime: "7 min read", image: firstPicture, authorImage: t1 },
              { id: 2, title: "From Trash to Treasure: The Promising World of Biomass Energy", author: "Jenny Wilson", readTime: "12 min read", image: secondPicture, authorImage: t2 },
              { id: 3, title: "Hydrogen: Fueling the Green Energy Revolution", author: "Leslie Alexander", readTime: "5 min read", image: thirdPicture, authorImage: t3 }
            ].map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: post.id * 0.1 }}
                className="flex items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
              >
                <img src={post.image} alt={post.title} className="w-24 h-24 rounded-lg object-cover mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{post.title}</h3>
                  <div className="flex items-center text-black text-sm">
                    <img src={post.authorImage} alt={post.author} className="w-5 h-5 rounded-full mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <h2 className="text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
                  Ready to Flick the<br />Switch?
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
    </>
  );
}
