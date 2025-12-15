import { Navigate } from 'react-router-dom';

const useAuth = () => {
  return false; // simulate authentication state
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
