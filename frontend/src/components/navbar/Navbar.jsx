// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom'; // Use NavLink for active state
// import logo from '../../assets/logoSH.webp';

// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex justify-between items-center py-4 px-6">
//       {/* Logo */}
//       <div>
//         <img src={logo} alt="Logo" className="" /> {/* Adjust width as needed */}
//       </div>

//       {/* Navigation Items */}
//       <nav>
//         <ul className="flex space-x-6 text-md  items-center">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-black underline decoration-1 underline-offset-4'
//                   : 'hover:text-gray-700'
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/team"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-black underline decoration-1 underline-offset-4'
//                   : 'hover:text-gray-700'
//               }
//             >
//               Team
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/gallery"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-black underline decoration-1 underline-offset-4'
//                   : 'hover:text-gray-700'
//               }
//             >
//               Gallery
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-black underline decoration-1 underline-offset-4'
//                   : 'hover:text-gray-700'
//               }
//             >
//               Contact us
//             </NavLink>
//           </li>
//           <li>
//             <button
//               onClick={() => navigate('/donate')} // Navigate to /donate
//               className="bg-pink-400 text-center text-white px-4 py-1 rounded hover:bg-pink-500 transition-all"
//             >
//               Donate
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logoSH.webp';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-30 bg-white">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="" />
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 text-md items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline decoration-1 underline-offset-4'
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
            <li>
              <button
                onClick={() => navigate('/donate')}
                className="bg-pink-400 text-center text-white px-4 py-1 rounded hover:bg-pink-500 transition-all"
              >
                Donate
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute inset-0 bg-black opacity-50" onClick={closeMenu}></div>
        <nav className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="text-gray-600 hover:text-gray-900">
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline decoration-1 underline-offset-4'
                    : 'hover:text-gray-700'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-black underline decoration-1 underline-offset-4'
                    : 'hover:text-gray-700'
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/donate');
                  closeMenu();
                }}
                className="bg-pink-400 text-center text-white px-4 py-1 rounded hover:bg-pink-500 transition-all inline-block"
              >
                Donate
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;