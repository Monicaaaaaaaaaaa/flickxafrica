import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Learn from '../components/Learn';
import Studio from '../components/Studio';
import Talent from '../components/Talent';
import Fund from '../components/Fund';
import CreativeBase from '../components/CreativeBase';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

export default function Landing() {
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
    <main>
      <Header onLoginClick={handleShowLogin} />
      <Home />
      <Learn />
      <Studio />
      <Talent />
      <Fund />
      <CreativeBase onAuthClick={handleShowLogin} />
      <AboutUs />
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
    </main>
  );
}
