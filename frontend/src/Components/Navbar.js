import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from "./images/Logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faUserPlus,
  faRightFromBracket,
  faGear,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setShowDropdown(false); // close dropdown on route change
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom py-3 shadow-sm sticky-top bg-black">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="XpertOne Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Auth */}
        <div className="collapse navbar-collapse justify-content-lg-between" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center gap-lg-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Digital Services' },
              { path: '/products', label: 'Printing Services' },
              { path: '/about', label: 'About' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li key={path} className="nav-item">
                <NavLink className="nav-link text-white" to={path} end>
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Mobile Auth Buttons */}
            <li className="nav-item d-lg-none mt-3">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="btn btn-danger w-100">
                  <FontAwesomeIcon icon={faRightFromBracket} className="me-2" /> Logout
                </button>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outline-light w-100 mb-2">
                    <FontAwesomeIcon icon={faRightToBracket} className="me-2" /> Login
                  </NavLink>
                  <NavLink to="/createuser" className="btn btn-light text-primary fw-bold w-100">
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Sign Up
                  </NavLink>
                </>
              )}
            </li>
          </ul>

          {/* Desktop Auth Area */}
          <div className="d-none d-lg-flex align-items-center position-relative">
            {isLoggedIn ? (
              <div className="user-dropdown position-relative">
                <FaUserCircle size={35} 
                  className="text-danger cursor-pointer "
                 
                />  <FontAwesomeIcon icon={faChevronDown} size={30} onClick={toggleDropdown} />
                {showDropdown && (
                  <div className="position-absolute end-0 mt-2 bg-dark rounded shadow-sm p-2" style={{ zIndex: 999, minWidth: '150px' }}>
                    <button
                      className="dropdown-item text-white d-flex align-items-center"
                      onClick={() => { navigate('/settings'); setShowDropdown(false); }}
                    >
                      <FontAwesomeIcon icon={faGear} className="me-2" /> Settings
                    </button>
                    <button
                      className="dropdown-item text-danger d-flex align-items-center"
                      onClick={handleLogout}
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} className="me-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-light">
                 <FontAwesomeIcon icon={faRightToBracket} className="me-2" /> Login
               </NavLink>
             <NavLink to="/createuser" className="btn btn-light text-primary fw-bold ms-2">
               <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Sign Up
               </NavLink>
                      </>

            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
