import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Info */}
          <div className="col-md-6 col-lg-4">
            <h5 className="footer-title">Xpertone Creative</h5>
            <p className="footer-text">
              Your one-stop shop for premium IT, marketing & creative solutions. Innovate with XC.
              Our Journey
Founded over a decade ago, Xpertone Creative began with a simple mission: to provide high-quality, customizable apparel and safety gear that meets the needs of businesses and individuals. From humble beginnings, we’ve grown into a trusted provider, serving clients across various industries with our innovative solutions. Our commitment to quality, safety, and customer satisfaction has been the cornerstone of our success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/about">Privacy Policy</Link></li>
              <li><Link to="/contact-support">Contact Us</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Digital Services</Link></li>
              <li><Link to="/products">Printing Services</Link></li>
              <li>
                <a
                  href="https://wa.me/971581516936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center gap-2"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-success" />
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-12 col-lg-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com/share/198D9L7Eer/" className="facebook">
                <FontAwesomeIcon icon={faFacebook} bounce/> 
              </a>
              <a href="https://www.instagram.com/xpertonecreative?igsh=ZG45d2wydG5jbXV2" className="instagram">
                <FontAwesomeIcon icon={faInstagram} bounce />
              </a>
              <a href="/" className="twitter">
                <FontAwesomeIcon icon={faTwitter} beat/> 
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          © 2025 <span className="brand-name">Xpertone Creative</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
