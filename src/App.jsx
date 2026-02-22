import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Learn from './pages/learn.jsx';
import Lab from './pages/Lab';
import About from './pages/About';
import Studio from './pages/Studio';
import Talent from './pages/Talent';
import Fund from './pages/Fund';
import CreativeBase from './pages/CreativeBase';
import LMS from './pages/LMS';
import ResetPasswordForm from './components/auth/ResetPasswordForm';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  
  return <Outlet />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Landing />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/about" element={<About />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/fund" element={<Fund />} />
            <Route path="/creative-base" element={<CreativeBase />} />
          </Route>
  
          <Route element={<PrivateRoute />}>
            <Route path="/lms" element={<LMS />} />
          </Route>
          
          {/* Password reset routes */}
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
