import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

export default function Lab() {
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
