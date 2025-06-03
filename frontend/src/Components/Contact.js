import React from 'react';
import slider1 from './images/slider4 .png';
import slider2 from './images/slider5.png';
import slider3 from './images/slider6.png';
import './Home.css';
import { FaWhatsapp, FaPhoneAlt, FaCalendarAlt, FaEnvelope } from "react-icons/fa";




import './Home.css';

const DigitalServices = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#081828' }}>
        {/* Slider and Overlay */}
        <div className="home-background slider-container position-relative">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={slider1}
                  className="carousel-img d-block w-100 img-fluid"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider2}
                  className="carousel-img d-block w-100 img-fluid"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider3}
                  className="carousel-img d-block w-100 img-fluid"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>

          {/* Overlay Text */}
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3 w-100">
            <div className="container bg-dark bg-opacity-50 p-3 p-md-5 rounded">
              <h1 className="fw-bold fs-4 fs-md-2">
                Xpertone Creative: <br className="d-none d-md-block" />
                Innovate, Market, Print – Your All-in-One Solution
              </h1>
              <p className="lead mt-2 fs-6 fs-md-5">
                Premium IT Services, Digital Marketing, Printing, and Safety Gear for businesses and individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    <section className="contact-form-section">
      <div className="container">
        <h2 className="form-heading">Send Us a Message</h2>
        <p className="form-subtitle">
          Fill out the form below, and our team will get back to you promptly.
        </p>

        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Name <span>*</span></label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Enter your company name (optional)" />
            </div>
            <div className="form-group phone-group">
              <label>Phone Number <span>*</span></label>
              <div className="phone-input-wrapper">
                <select className="country-code">
                  <option value="+971">🇦🇪 +971 (UAE)</option>
                  <option value="+91">🇮🇳 +91 (India)</option>
                  <option value="+1">🇺🇸 +1 (USA)</option>
                  <option value="+1">GB +44 (UK)</option>
                  <option value="+1">IN +91 (India)</option>
                  <option value="+1">SA +966 (Saudi Arabia)</option>


                </select>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address <span>*</span></label>
              <input type="email" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label>Requirement <span>*</span></label>
              <select required>
                <option value="">Select a requirement</option>
                <option value="web">T Shirt</option>
                <option value="design">Safety Vest</option>
                <option value="marketing">Cap</option>
                <option value="marketing">Scrub Suit</option>
                <option value="marketing">IT Services</option>
                <option value="marketing">Digital Marketing</option>


              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us more about your needs (optional)" />
            </div>
          </div>

          <div className="form-submit">
           <a href="tel:+971526353298" className="submit-button">Submit & Info on WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
<section className="get-in-touch-section py-5 text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Get in Touch</h2>
        <p className="mb-5">Reach out to Xpertone Creative through your preferred method.</p>
        <div className="row justify-content-center g-4">
          {/* WhatsApp */}
          <div className="col-12 col-sm-6 col-md-3">
            <a
              href="https://wa.me/971526353298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              <div className="contact-card p-4 text-center h-100">
                <FaWhatsapp size={32} className="text-success mb-2" />
                <h6 className="fw-bold mb-1">WhatsApp</h6>
                <p className="mb-0">+971 52 635 3298</p>
              </div>
            </a>
          </div>

          {/* Call */}
          <div className="col-12 col-sm-6 col-md-3">
            <a href="tel:+971526353298" className="text-decoration-none text-white">
              <div className="contact-card p-4 text-center h-100">
                <FaPhoneAlt size={28} className="text-success mb-2" />
                <h6 className="fw-bold mb-1">Call</h6>
                <p className="mb-0">+971 52 635 3298</p>
              </div>
            </a>
          </div>

          {/* Meeting */}
          <div className="col-12 col-sm-6 col-md-3">
            <a
              href="https://wa.me/971526353298?text=Hi%2C%20I%20would%20like%20to%20book%20a%20meeting."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              <div className="contact-card p-4 text-center h-100">
                <FaCalendarAlt size={28} className="text-success mb-2" />
                <h6 className="fw-bold mb-1">Meet</h6>
                <p className="mb-0">Book A Meeting</p>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className="col-12 col-sm-6 col-md-3">
            <a href="mailto:info@xpertonecreative.com" className="text-decoration-none text-white">
              <div className="contact-card p-4 text-center h-100">
                <FaEnvelope size={28} className="text-success mb-2" />
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="mb-0">info@xpertonecreative.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default DigitalServices;
