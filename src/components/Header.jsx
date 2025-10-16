import logo from '../assets/FlickX-Africa-Transparent-3.png';

export default function Header({ onLoginClick }) {

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="FlickX Africa" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#learn" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Learn
            </a>
            <a href="#studio" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Studio
            </a>
            <a href="#talent" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Talent
            </a>
            <a href="#fund" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Fund
            </a>
            <a href="#creative-base" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Creative Base
            </a>
            <a href="#about-us" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              About Us
            </a>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={onLoginClick}
              className="bg-deep-blue text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-sky-blue transition-colors"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
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
