import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import futureImage from '../assets/future.jpg';
import missionImage from '../assets/mission.jpg';
import fifaLogo from '../assets/fifa.png';
import worldremitLogo from '../assets/worldremit.png';
import sterlingLogo from '../assets/sterling.png';
import donJulioLogo from '../assets/don_julio_logo.svg.png';
import maggiLogo from '../assets/maggi.png';

export default function About() {
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
          
          <div className="relative max-w-7xl mx-auto text-center z-10 pt-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-deep-blue block">Africa's Complete <span style={{color: '#F8BD00'}}>Creative</span></span>
              <span className="text-deep-blue block">Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to FlickX Africa the digital headquarters of African creativity, where learning innovation, talent and funding power the creative future.
            </p>
          </div>
        </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-900 text-lg font-medium">
                FlickX Africa
              </p>
            </div>
            
            <div>
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
                  <div key={index} className="flex items-start">
                    <div className="w-px bg-gray-300 h-16 mr-4"></div>
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-black mb-2">{stat.number}</div>
                      <div className="text-black text-lg">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="relative py-20 px-4 max-w-7xl mx-auto rounded-2xl">
          <div className="relative rounded-2xl" style={{ width: '1193px', height: '371px', margin: '0 auto' }}>
            <img 
              src={futureImage} 
              alt="Future Background" 
              className="w-full h-full object-cover rounded-2xl"
              style={{ width: '1193px', height: '371px' }}
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">The Future Starts Here</h2>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-1">
                <div className="relative rounded-2xl overflow-hidden" style={{ width: '590px', height: '360px' }}>
                  <img 
                    src={missionImage} 
                    alt="Mission" 
                    className="w-full h-full object-cover"
                    style={{ width: '590px', height: '360px' }}
                  />
                </div>
              </div>
              <div className="order-2 md:order-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-4">Mission</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Democratize access to world-class creative education and resources across Africa, empowering storytellers to create authentic content and build sustainable careers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-4">Vision</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A thriving African creative ecosystem where talent is nurtured, stories are celebrated, and creators compete on the world stage.
                    </p>
                  </div>
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

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-black mb-12">Core Values</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-deep-blue text-white rounded-xl shadow-lg flex items-center justify-center" style={{ width: '570px', height: '278px' }}>
                  <div className="flex flex-row items-center justify-between w-full px-8">
                    <p className="text-5xl font-bold" style={{ color: '#B3B3B3' }}>01</p>
                    <div className="flex-1 ml-8" style={{ width: '301px', height: '72px' }}>
                      <h4 className="text-xl font-medium mb-2" style={{ width: '256px', height: '32px' }}>African-Centered</h4>
                      <p className="text-base text-gray-200 max-w-md">
                        We celebrate authentic African voices, perspectives, and stories rooted in excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-deep-blue text-white rounded-xl shadow-lg flex items-center justify-center" style={{ width: '570px', height: '278px' }}>
                  <div className="flex flex-row items-center justify-between w-full px-8">
                    <p className="text-5xl font-bold" style={{ color: '#B3B3B3' }}>02</p>
                    <div className="flex-1 ml-8" style={{ width: '301px', height: '72px' }}>
                      <h4 className="text-xl font-medium mb-2" style={{ width: '256px', height: '32px' }}>Excellence First</h4>
                      <p className="text-base text-gray-200 max-w-md">
                        World-class quality in everything from courses to facilities, mentors to support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-deep-blue text-white rounded-xl shadow-lg flex items-center justify-center" style={{ width: '570px', height: '278px' }}>
                  <div className="flex flex-row items-center justify-between w-full px-8">
                    <p className="text-5xl font-bold" style={{ color: '#B3B3B3' }}>03</p>
                    <div className="flex-1 ml-8" style={{ width: '301px', height: '72px' }}>
                      <h4 className="text-xl font-medium mb-2" style={{ width: '256px', height: '32px' }}>Community-Driven</h4>
                      <p className="text-base text-gray-200 max-w-md">
                        We celebrate authentic African voices, perspectives, and stories rooted in excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-deep-blue text-white rounded-xl shadow-lg flex items-center justify-center" style={{ width: '570px', height: '278px' }}>
                  <div className="flex flex-row items-center justify-between w-full px-8">
                    <p className="text-5xl font-bold" style={{ color: '#B3B3B3' }}>04</p>
                    <div className="flex-1 ml-8" style={{ width: '301px', height: '72px' }}>
                      <h4 className="text-xl font-medium mb-2" style={{ width: '256px', height: '32px' }}>Impact</h4>
                      <p className="text-base text-gray-200 max-w-md">
                        We push boundaries and embrace new technologies to create meaningful industry impact.
                      </p>
                    </div>
                  </div>
                </div>
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
