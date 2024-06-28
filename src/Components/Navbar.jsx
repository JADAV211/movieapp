import { useState } from 'react';
import {  FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Search from './Seach';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Top Rating', link: '/top-rating' },
    { name: 'Upcoming', link: '/upcoming' },

  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-lg">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-red-500">MovieDB</div>
      </div>
      <div className="hidden md:flex flex-grow justify-center space-x-6">
        {menuItems.map((item, index) => (
          <li key={index} className="list-none">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `text-lg text-gray-700 ${isActive ? 'text-red-500' : 'hover:text-red-500'}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </div>
      <div className="hidden md:flex items-center">
        <Search />
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-4 z-10">
          <ul className="flex flex-col items-center space-y-6">
            {menuItems.map((item, index) => (
              <li key={index} className="list-none">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `text-lg text-gray-700 ${isActive ? 'text-red-500' : 'hover:text-red-500'}`
                  }
                  onClick={toggleMobileMenu} // Close menu on click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Search />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
