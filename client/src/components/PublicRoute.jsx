import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../Context/userContext';

const PublicRoute = () => {
  const { user, isAdmin } = useContext(UserContext);

  if (isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  } else if (!user){
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;