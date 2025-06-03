import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping} from '@fortawesome/free-solid-svg-icons';
const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // 5seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen d-flex justify-content-center align-items-center">
      <h1 className="splash-text"><FontAwesomeIcon icon={faBagShopping} className="me-3  fa-xl" bounce/> XpertOne Creative</h1>
    </div>
  );
};

export default SplashScreen;
