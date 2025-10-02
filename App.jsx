import { AuthProvider } from './contexts/AuthContext';
import Landing from './pages/Landing';

export default function App() {
  return (
    <AuthProvider>
      <Landing />
    </AuthProvider>
  );
}
