import React from 'react'
import slider2 from './images/slider2.jpg';
import slider4 from './images/slider5.png';
import slider3 from './images/slider6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog} from '@fortawesome/free-solid-svg-icons';
import Card1 from "./images/image29.png";
import Card2 from "./images/image30.png";
import Card3 from "./images/image31.png"
import Card4 from "./images/image32.png";
import Card5 from "./images/image33.png";
import Card6 from "./images/image34.png"
import { FaWhatsapp, FaPhoneAlt, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

const Blog = () => {
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
              <img src={slider2} className="d-block w-100 img-fluid" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={slider3} className="d-block w-100 img-fluid" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={slider4} className="d-block w-100 img-fluid" alt="Slide 3" />
            </div>
          </div>
        </div>

        {/* Overlay Text */}
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3 w-100">
          <div className="container bg-dark bg-opacity-50 p-3 p-md-5 rounded">
            <h1 className="fw-bold fs-3 fs-md-1">
              Insights & Trends : <br className="d-none d-md-block" />
              from Xpertone Creative
            </h1>
            <p className="lead mt-2">
              Stay updated with the latest in IT, digital marketing, printing, and safety solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 text-white text-center">
        <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faBlog} beat/> Our Latest Blog Posts</h2>
        <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
         Discover XpertOne Creative’s range of custom apparel, safety gear, and printing products, designed for your business needs in Dubai.
        </p>
        </div>
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
                  <h5 className="fw-bold mb-3">Top Digital Marketing Trends to Watch in 2025</h5>
                  <p className="small">
                    Posted on May 15, 2025 | By Xpertone Creative.
                  </p>
                  <p className="small">
                   From AI-driven campaigns to hyper-personalized content, explore the digital marketing
                  </p>
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
                  <h5 className="fw-bold mb-3">Choosing the Right Safety Gear for Your Team</h5>
                  <p className="small">
                   Posted on May 10, 2025 | By Xpertone Creative.
                  </p>
                   <p className="small">
                  Learn key factors for selecting safety vests and apparel that meet ANSI/ISEA standards.
                  </p>
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
                  <h5 className="fw-bold mb-3">Eco-Friendly Printing: Sustainable Solutions</h5>
                  <p className="small">
                    Posted on May 5, 2025 | By Xpertone Creative
                  </p>
                  <p className="small">
                    Discover how sustainable printing materials can reduce your environmental footprint.
                  </p>
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="container my-5">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="custom-service-card d-flex flex-column h-100">
                <div className="card-image-placeholder">
                  <img
                    src={Card4}
                    alt="Website Design & Development"
                    className="img-fluid w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                  <h5 className="fw-bold mb-3">Streamlining Operations with Modern IT Solutions</h5>
                  <p className="small">
                   Posted on April 28, 2025 | By Xpertone Creative
                  </p>
                  <p className="small">
                   Learn how cloud computing and CRM systems can boost business efficiency.
                  </p>
                </div>
              </div>
              
            </div>
        
            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="custom-service-card d-flex flex-column h-100">
                <div className="card-image-placeholder">
                  <img
                    src={Card5}
                    alt="CRM"
                    className="img-fluid w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                  <h5 className="fw-bold mb-3">Why Video Content is Key for Branding in 2025</h5>
                  <p className="small">
                  Posted on April 20, 2025 | By Xpertone Creative
                  </p>
                   <p className="small">
                 See how high-quality video production can elevate your brand’s engagement.
                  </p>
                </div>
              </div>
            </div>
        
            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="custom-service-card d-flex flex-column h-100">
                <div className="card-image-placeholder">
                  <img
                    src={Card6}
                    alt="Video Production"
                    className="img-fluid w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                  <h5 className="fw-bold mb-3">Boost Your Brand with Custom Apparel</h5>
                  <p className="small">
                   Posted on April 15, 2025 | By Xpertone Creative
                  </p>
                  <p className="small">
                  Explore how custom apparel like polo t-shirts can enhance brand visibility.
                  </p>
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

export default Blog
