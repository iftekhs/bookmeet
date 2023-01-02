import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useRole from '../../hooks/useRole';
import Loader from '../../Pages/Shared/Loader/Loader';

const UserRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [userRole, userRoleLoading] = useRole(user?.email);
  const location = useLocation();

  if (loading || userRoleLoading) {
    return <Loader></Loader>;
  }

  if (user && userRole === 'user') {
    return children;
  }

  logOut();
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
