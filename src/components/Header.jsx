import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/FlickX-Africa-Transparent-3.png';

export default function Header({ onLoginClick }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLearnPage = location.pathname === '/learn';
  const isStudioPage = location.pathname === '/studio';
  const isTalentPage = location.pathname === '/talent';
  const isFundPage = location.pathname === '/fund';
  const isCreativeBasePage = location.pathname === '/creative-base';
  const isLabPage = location.pathname === '/lab';
  const isAboutPage = location.pathname === '/about';

  return (
    <header className="bg-white border-b border-gray-100 relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="FlickX Africa" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/" className={`${isHomePage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/learn" className={`${isLearnPage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Learn
            </Link>
            <Link to="/studio" className={`${isStudioPage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Studio
            </Link>
            <Link to="/talent" className={`${isTalentPage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Talent
            </Link>
            <Link to="/fund" className={`${isFundPage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Fund
            </Link>
            <Link to="/creative-base" className={`${isCreativeBasePage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Creative Base
            </Link>
            <Link to="/lab" className={`${isLabPage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              Lab
            </Link>
            <Link to="/about" className={`${isAboutPage ? 'bg-deep-blue text-white' : 'text-deep-blue hover:text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}>
              About Us
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={onLoginClick}
              className="bg-white border border-deep-blue text-deep-blue hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Login
            </button>
            <button 
              onClick={onLoginClick}
              className="bg-deep-blue hover:bg-sky-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-deep-blue p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
