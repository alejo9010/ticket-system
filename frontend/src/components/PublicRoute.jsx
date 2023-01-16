import { useAuthStatus } from '../hooks/useAuthStatus';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from './Spinner';

const PublicRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return !loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
