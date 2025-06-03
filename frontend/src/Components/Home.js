import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { FaWhatsapp, FaPhoneAlt, FaCalendarAlt, FaEnvelope } from "react-icons/fa";

import Card1 from "./images/Card1.png";
import Card2 from "./images/Card2.png";
import Card3 from "./images/Caed3.png"
import slider1 from './images/slider1.jpg';
import slider2 from './images/slider2.jpg';
import slider3 from './images/slider3.jpg';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/products/all");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  fetchProducts();
}, []);

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

        {/* Why Choose Section */}
        <section className="text-white text-center py-5 why-choose hover-section">
          <div className="container">
            <h2 className="fw-bold mb-3 hover-green">Why Choose Xpertone Creative</h2>
            <p className="fs-5 hover-green">
              Discover the key features that make us a leader in technology, marketing, printing, and safety solutions.
            </p>
          </div>
        </section>
      </div>

      {/* Feature Cards Section */}
      <section className="feature-scroll-wrapper text-white">
        <div className="feature-scroll px-3">
          {[
            { icon: "shield-alt", title: "Safety Compliance", desc: "Meets ANSI/ISEA 107 standards for visibility." },
            { icon: "tshirt", title: "Durable Materials", desc: "Premium cotton, Dri-Fit, and rip-stop fabrics." },
            { icon: "heart", title: "Comfort Fit", desc: "Designed for all-day comfort and functionality." },
            { icon: "leaf", title: "Eco-Friendly Options", desc: "Sustainable printing and materials available." },
            { icon: "layer-group", title: "Versatile Styles", desc: "For Labourers, Supervisors, and Engineers." },
            { icon: "headset", title: "Quick Support", desc: "Responsive customer service for your orders." },
            { icon: "boxes", title: "Scalable Orders", desc: "From single items to bulk orders." },
            { icon: "paint-brush", title: "Full Customization", desc: "Add logos, text, or designs to any product." },
          ].map((card, idx) => (
            <div key={idx} className="feature-card p-4 border rounded-4 bg-dark bg-opacity-50 text-center">
              <i className={`fas fa-${card.icon} text-success fs-1 mb-3`}></i>
              <h5 className="fw-bold">{card.title}</h5>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Products Section */}
     <section className="feature-scroll-wrapper product-grid-section py-5 text-white">
  <div className="container-fluid px-0 text-white text-center">
  <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faCartShopping} beat/> Our Products</h2>
  <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
    Discover XpertOne Creative’s range of custom apparel, safety gear, and printing products, designed for your business needs in Dubai.
  </p>


    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-row">
        {products.map((product, index) => (
          <div key={index} className="scroll-card">
            <div className="custom-product-card d-flex flex-column h-100">
              <div className="product-image-wrapper bg-light p-3 d-flex align-items-center justify-content-center">
               <img
  src={
    product.imageUrl.startsWith('/uploads')
      ? `http://localhost:5001${product.imageUrl}`
      : `http://localhost:5001/uploads/${product.imageUrl}`
  }
  alt={product.name}
  className="img-fluid product-image"
/>
              </div>
              <div className="p-3 flex-grow-1 d-flex flex-column justify-content-between bg-dark text-white text-center">
                <h6 className="fw-bold mb-2 small">{product.name}</h6>
                <div className="price-box border border-success rounded-pill py-1 px-3 mx-auto text-success mb-2 small">
                  {product.price}
                </div>
                <a
                  href={`https://wa.me/971501234567?text=Hi%20XpertOne%20Creative%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-pill mt-2"
                >
                  <i className="fab fa-whatsapp me-2 vibrate-icon"></i> Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
 <div className="container-fluid px-0 text-white text-center">
  <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faServicestack} bounce />  Our Digital Services</h2>
  <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
   Empower your business with our cutting-edge digital solutions.
  </p>
</div>
<div className="container  px-3 px-md-5 my-5 ">
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
          <h5 className="fw-bold mb-3">Website Design & Development</h5>
          <p className="small">
            Craft visually stunning, user-friendly websites that captivate and convert.
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
          <h5 className="fw-bold mb-3">Customer Relationship Management (CRM)</h5>
          <p className="small">
            Streamline processes and build lasting customer relationships with CRM solutions.
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
          <h5 className="fw-bold mb-3">Video Production</h5>
          <p className="small">
            Create engaging, high-quality videos to tell your brand’s story.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid px-0 text-white text-center">
  <h2 className="fw-bold hover-green mb-3"><FontAwesomeIcon icon={faServicestack} bounce />  A Decade of Excellence in IT, Digital Marketing, Printing, and Safety Solutions</h2>
  <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
   Xpertone Creative has been delivering premium IT services, digital marketing, printing, and safety gear for over a decade. Our mission is to empower businesses and individuals with innovative, high-quality solutions.

Know More
  </p>
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
    
  );
};

export default Home;
