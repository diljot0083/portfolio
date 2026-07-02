import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapPin } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `nav-link inline-block transition transform duration-300 hover:scale-110 ${isActive ? 'active-nav-link' : ''}`;

  return (
    <nav className="bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] shadow-md overflow-x-hidden transition-colors duration-300">
      <div className="max-w-8xl mx-auto flex justify-between items-center md:px-6 md:py-4.5 px-4 py-4">
        <div className="text-2xl inline-block transition transform duration-300 hover:scale-110 text-[var(--text-primary)]">
          <NavLink to="/">
            <FaMapPin />
          </NavLink>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex flex-wrap gap-6 text-md font-semibold overflow-hidden text-[var(--text-primary)]">
            <li>
              <NavLink to="/home" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle text-lg p-2 rounded-full border border-[var(--nav-border)] text-[var(--text-primary)]"
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;