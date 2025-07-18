import React, { useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import UserContext from '../Context/userContext';
import Button from './Button';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-[rgba(255,255,255,0.8)] backdrop-blur-md shadow-xl shadow-indigo-200/50 sticky top-0 left-0 w-full z-50 px-3 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-900 transition-colors duration-300">
            Trip4You
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-4">
            {[
              { name: "Home", path: "/" },
              { name: "Trips", path: "/trips" },
              { name: "Offers", path: "/offers" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => {
              return (
                <li key={index} className="text-lg font-medium">
                  <Link
                    to={item.path}
                    className={`hover:underline transition-colors duration-300 ${
                      pathname === item.path
                        ? 'text-indigo-600 hover:text-indigo-900 font-semibold'
                        : 'text-zinc-500 hover:text-indigo-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {user ? 
            <Link to={`/user/${user.name}`} className="flex items-center space-x-2">
              <div className={`w-12 h-12 rounded-full bg-indigo-600`}>
                <img src={user?.profilePicture} alt={`${user.name}'s profile`} className="w-full h-full rounded-full object-cover" />
              </div>
            </Link>
            :
            <Button label="Sign In" onClick={() => navigate('/login')} />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;