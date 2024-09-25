import { useState } from 'react';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-gray-950 text-gray-200 py-4 shadow-md lg:fixed  w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-10">
        <div className="text-3xl font-bold font-DmSerif text-indigo-400">
          <NavLink to="/">Arpit Tiwari</NavLink>
        </div>

        {/* Hamburger Icon - Visible on mobile and tablet, hidden on larger screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <CgClose size={28} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300" />
            ) : (
              <CgMenuRightAlt size={28} className="text-gray-200 hover:text-indigo-400 transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Menu - Hidden on mobile and tablet, visible on larger screens */}
        <ul
          className={`lg:flex lg:space-x-6 lg:static absolute left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent z-40 transition-transform duration-300 font-RobotoMono ${
            isMenuOpen ? 'block top-16' : 'hidden'
          } lg:block`}
        >
          <li>
            <NavLink
              to="/"
              className="block lg:inline-block lg:px-4 lg:py-1 text-gray-200 hover:text-indigo-400 transition-colors duration-300 border-solid rounded-2xl border-2 border-white "
              exact
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="block lg:inline-block p-4 lg:p-0 text-gray-200 hover:text-indigo-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className="block lg:inline-block p-4 lg:p-0 text-gray-200 hover:text-indigo-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
