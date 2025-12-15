import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Simple auth simulation
  const isAuthenticated = false; // Change to true to test access

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
