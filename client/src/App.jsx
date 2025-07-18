import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserContext from './Context/userContext';
import AdminDashboard from './pages/admin/AdminDashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import PublicRoute from './components/PublicRoute';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import UserProfile from './pages/UserProfile';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Public Routes */}
        <Route path="/user/" element={<PublicRoute />}>
          <Route path=":name" element={<UserProfile />} />
          {/* Add more public routes here */}
        </Route>
      
        {/* Private Routes */}
        <Route path="/admin/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          {/* Add more private routes here */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;