import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../Context/userContext';

const PublicRoute = () => {
  const { isAdmin } = useContext(UserContext);

  if (isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;