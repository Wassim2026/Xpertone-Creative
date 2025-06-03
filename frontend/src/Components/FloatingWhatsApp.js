import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import './Home.css';
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/971526353298"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsApp;
