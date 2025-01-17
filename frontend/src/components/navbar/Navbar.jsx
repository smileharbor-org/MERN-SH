import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active state
import logo from '../../assets/logoSH.webp';

function Navbar() {
  return (
    <>
      <div className="flex flex-col items-center py-6">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo"  />
        </div>

        {/* Navigation Items */}
        <nav className="mt-4">
          <ul className="flex space-x-6 font-mono text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline  decoration-1 underline-offset-4'
                    : 'hover:text-gray-700'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline decoration-1 underline-offset-4'
                    : 'hover:text-gray-700'
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline decoration-1 underline-offset-4'
                    : 'hover:text-gray-700'
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline decoration-1 underline-offset-4'
                    : 'hover:text-gray-700'
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
