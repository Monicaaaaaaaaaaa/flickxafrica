import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ children, fallback }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-blue"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-white to-white">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Restricted</h2>
          <p className="text-gray-600 mb-6">Please sign in to access this content.</p>
          <button className="bg-deep-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-blue transition-colors">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

ProtectedRoute.defaultProps = {
  fallback: null,
};
