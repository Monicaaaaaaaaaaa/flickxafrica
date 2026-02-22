import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import CurvedSection from '../components/CurvedSection';
import blackguy from '../assets/blackguy.jpg';
import penImage from '../assets/pen.jpg';
import fifaLogo from '../assets/fifa.png';
import worldremitLogo from '../assets/worldremit.png';
import sterlingLogo from '../assets/sterling.png';
import maggiLogo from '../assets/maggi.png';
import donJulioLogo from '../assets/don_julio_logo.svg.png';
import whattoexpectImage from '../assets/whattoexpect.jpg';

export default function Talent() {
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
      
      <main>
        <section className="relative py-32 px-4 bg-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-16 left-1/4 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 opacity-80 rounded-full shadow-lg"></div>
            <div className="absolute top-12 right-1/3 transform translate-x-1/2 w-12 h-12 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full shadow-lg"></div>
            <div className="absolute top-0 -right-48 w-64 h-64 bg-gradient-to-tl from-yellow-500 via-yellow-200 to-yellow-100 opacity-90 rounded-full shadow-xl"></div>
            <div className="absolute bottom-0 -left-24 w-56 h-56 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight relative">
                <span className="text-deep-blue block">Your Next <span className="relative inline-block">
                  <span style={{color: '#F4B400'}}>Big</span>
                  <svg 
                    className="absolute -bottom-2 left-0 w-full"
                    height="20"
                    viewBox="0 0 180 20"
                    fill="none"
                  >
                    <path 
                      d="M2 15 C50 8, 90 2, 130 8, 178 12" 
                      stroke="#0057A0" 
                      strokeWidth="2"
                      fill="none"
                    />
                    <path 
                      d="M8 18 C55 10, 95 4, 135 10, 172 15" 
                      stroke="#0057A0" 
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span> Break</span>
                <span className="text-deep-blue block">Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Flickx is a platform for talent and creatives who want to work on projects, collaborate with other creatives, and get paid for their work. Join Flickx today and start your next big break.
              </p>
              <div className="flex gap-4">
                <button onClick={handleShowSignup} className="bg-deep-blue hover:bg-sky-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                  Create Profile
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button onClick={handleShowLogin} className="bg-white border-2 border-deep-blue text-deep-blue hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Hire
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-[571px] h-[571px] mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <img src={blackguy} alt="Talent" className="w-full h-full object-cover rounded-full object-[50%_20%]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "2,000+", label: "Active Creatives" },
                { number: "200+", label: "Companies Hiring" },
                { number: "1,500+", label: "Jobs Filled" },
                { number: "$500M+", label: "Earnings Generated" }
              ].map((stat, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-px bg-sky-blue h-20 mr-4 opacity-50"></div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-deep-blue mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-lg">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We believe that the best way to create successful talent connections is to work closely with both creatives and companies to understand their goals and challenges.
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
                    { title: "Create Your Profile", description: "Develop your portfolio, add your experience, and showcase your work." },
                    { title: "Get Discovered", description: "Our algorithm matches you with relevant roles, and companies can find you." },
                    { title: "Land the Gig", description: "Apply directly, negotiate your rate, and get hired for projects that match your skills." }
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

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-black mb-16">What to Expect</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={whattoexpectImage} 
                      alt="Film & TV Projects" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Film & TV Projects</h3>
                  <p className="text-black">
                    Work on feature films, series, documentaries, and web content with leading African production companies.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={whattoexpectImage} 
                      alt="Career Growth" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Career Growth</h3>
                  <p className="text-black">
                    Access mentorship programs, skill development workshops, and networking opportunities with industry leaders.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300" style={{width: '382px', height: '527px'}}>
                <div className="pt-6">
                  <div className="overflow-hidden rounded-xl mx-auto" style={{width: '324px', height: '256px'}}>
                    <img 
                      src={whattoexpectImage} 
                      alt="Creative Community" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Creative Community</h3>
                  <p className="text-black">
                    Connect with thousands of African creatives, collaborate on projects, and build lasting professional relationships.
                  </p>
                </div>
              </div>
            </div>
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

        <CurvedSection heading="Success Stories" />

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
