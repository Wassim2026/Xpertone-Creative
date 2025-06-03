import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUserPlus, faHeadset, faCommentDots, faGear } from '@fortawesome/free-solid-svg-icons';
import './Settings.css';

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container py-5 animate__animated animate__fadeIn">
      <div className="card shadow-lg rounded-4 p-4 mx-auto" style={{ maxWidth: '650px' }}>
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faGear} size="2x" className="mb-2 text-primary" />
          <h2 className="fw-bold">Settings</h2>
        </div>
        {/* Account Section */}
        <div className="border-bottom pb-4 mb-4">
          <h5 className="fw-semibold mb-3">Account</h5>
          <div className="d-grid gap-3">
            <Link to="/signup" className="btn btn-outline-success">
              <FontAwesomeIcon icon={faUserPlus} className="me-2" />
              Create New Account
            </Link>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
              Logout
            </button>
          </div>
        </div>
        {/* Help & Info Section */}
        <div className="border-bottom pb-4 mb-4">
          <h5 className="fw-semibold mb-3">Help & Info</h5>
          <div className="d-grid gap-3">
            <Link to="/contact" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={faHeadset} className="me-2" />
              Contact Support
            </Link>
            <Link to="/about" className="btn btn-outline-primary">
              <FontAwesomeIcon icon={faCommentDots} className="me-2" />
              About
            </Link>
          </div>
        </div>
        {/* Navigation */}
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-outline-primary">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};


export default SettingsPage;


