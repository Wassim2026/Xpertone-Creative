import React from 'react'
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
import './Home.css';
import Card1 from "./images/CEO.jpg";
import Card2 from "./images/Opertional.png";
import Card3 from "./images/Creative Director.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog} from '@fortawesome/free-solid-svg-icons';
import {faPerson} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp, FaPhoneAlt, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
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
                <img src={slider1} className="carousel-img d-block w-100 img-fluid" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={slider2} className="carousel-img d-block w-100 img-fluid" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={slider3} className="carousel-img d-block w-100 img-fluid" alt="Slide 3" />
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
        <div className="container-fluid px-0 text-white text-center">
                <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faBlog} beat/> Our Journey</h2>
                <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
                 Founded over a decade ago, Xpertone Creative began with a simple mission: to provide high-quality, customizable apparel and safety gear that meets the needs of businesses and individuals. From humble beginnings, we’ve grown into a trusted provider, serving clients across various industries with our innovative solutions. Our commitment to quality, safety, and customer satisfaction has been the cornerstone of our success.
                </p>
                </div>
                <div className="container-fluid px-0 text-white text-center">
                <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faBlog} beat/> Our Mission</h2>
                <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
                 At Xpertone Creative, our mission is to empower our clients with products that combine style, functionality, and safety. We strive to deliver exceptional customization options, ensuring every product reflects your unique identity while adhering to the highest safety standards.
                </p>
                <section className="text-white text-center py-5 why-choose hover-section">
          <div className="container">
            <h2 className="fw-bold mb-3 hover-green">Our Core Values</h2>
            <p className="fs-5 hover-green">
              Discover the principles that drive our commitment to excellence.
            </p>
          </div>
        </section>
      </div>

      {/* Feature Cards Section */}
      <section className="feature-scroll-wrapper text-white">
        <div className="feature-scroll px-3">
          {[
            { icon: "shield-alt", title: "Safety", desc: "Our safety gear complies with industry standards like ANSI/ISEA 107, keeping you protected.." },
            { icon: "star", title: "Quality", desc: "We use premium materials and advanced printing techniques to ensure every product meets the highest standards.." },
            { icon: "user", title: "Customer Focus", desc: "Your satisfaction is our priority, with flexible orders and dedicated support.." },
            { icon: "lightbulb", title: "Innovation", desc: "We continuously innovate to offer the latest in apparel design and safety solutions." },
          ].map((card, idx) => (
            <div key={idx} className="feature-card p-4 border rounded-4 bg-dark bg-opacity-50 text-center">
              <i className={`fas fa-${card.icon} text-success fs-1 mb-3`}></i>
              <h5 className="fw-bold">{card.title}</h5>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
       <section className="feature-scroll-wrapper product-grid-section py-5 text-white">
        <div className="container-fluid px-0 text-white text-center">
        <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faPerson} beat/> Meet Our Team</h2>
        <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
          Our dedicated professionals are here to bring your vision to life.
        </p>
        </div>
        </section>
      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="custom-service-card d-flex flex-column h-100">
              <div className="card-image-placeholder">
                <img
                  src={Card1}
                  alt="Website Design & Development"
                  className="img-fluid w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                <h5 className="fw-bold mb-3">Founder & CEO</h5>
              </div>
            </div>
          </div>
      
          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="custom-service-card d-flex flex-column h-100">
              <div className="card-image-placeholder">
                <img
                  src={Card2}
                  alt="CRM"
                  className="img-fluid w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                <h5 className="fw-bold mb-3">Creative Director</h5>
                
              </div>
            </div>
          </div>
      
          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="custom-service-card d-flex flex-column h-100">
              <div className="card-image-placeholder">
                <img
                  src={Card3}
                  alt="Video Production"
                  className="img-fluid w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                <h5 className="fw-bold mb-3">Operations Manager</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                
    
  )
}

export default About
