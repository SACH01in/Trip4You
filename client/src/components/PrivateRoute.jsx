import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../Context/userContext';

const PrivateRoute = () => {
  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;