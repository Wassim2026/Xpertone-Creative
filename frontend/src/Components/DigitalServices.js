import React from 'react';
import slider1 from './images/slider4 .png';
import slider2 from './images/slider5.png';
import slider3 from './images/slider6.png';
import image24 from './images/image24.png';
import image25 from './images/image25.png';
import image26 from './images/image26.png';
import image27 from './images/image27.png';
import image28 from './images/image28.png';




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
                  src={slider3}
                  className="carousel-img d-block w-100 img-fluid"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider1}
                  className="carousel-img d-block w-100 img-fluid"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={slider2}
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
       <div className="container my-5">
  <div className="horizontal-scroll-wrapper py-3 px-2">
    <div className="d-flex flex-nowrap gap-4">
      {/* Card 1 */}
      <div className="custom-service-card card-width">
        <div className="card-image-placeholder">
          <img src={image24} alt="Website Design & Development" className="img-fluid w-100" style={{ height: "200px", objectFit: "cover" }} />
        </div>
        <div className="p-4 text-center text-white bg-dark rounded-bottom">
          <h5 className="fw-bold mb-3">Website Design & Development</h5>
          <p className="small">Craft visually stunning, user-friendly websites that captivate and convert.Responsive Design
Seamless Navigation
Optimized Performance</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="custom-service-card card-width">
        <div className="card-image-placeholder">
          <img src={image25} alt="CRM" className="img-fluid w-100" style={{ height: "200px", objectFit: "cover" }} />
        </div>
        <div className="p-4 text-center text-white bg-dark rounded-bottom">
          <h5 className="fw-bold mb-3">App Development</h5>
          <p className="small">Build innovative, user-friendly apps tailored to engage your audience. Android & iOS AppsVR & Web  AppsOngoing Support.</p>
        </div>
      </div>
     {/* Card 3 */}
      <div className="custom-service-card card-width">
        <div className="card-image-placeholder">
          <img src={image27} alt="CRM" className="img-fluid w-100" style={{ height: "200px", objectFit: "cover" }} />
        </div>
        <div className="p-4 text-center text-white bg-dark rounded-bottom">
          <h5 className="fw-bold mb-3">Social Media Management</h5>
          <p className="small">Engage your audience with strategic content and impactful social media campaigns. Content Creation Audience Engagement Paid Ad Management.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="custom-service-card card-width">
        <div className="card-image-placeholder">
          <img src={image26} alt="CRM" className="img-fluid w-100" style={{ height: "200px", objectFit: "cover" }} />
        </div>
        <div className="p-4 text-center text-white bg-dark rounded-bottom">
          <h5 className="fw-bold mb-3">Customer Relationship Management (CRM)</h5>
          <p className="small">Streamline processes and build lasting customer relationships with CRM solutions. Centralized Database Sales Automation Analytics & Insights.</p>
        <a href="https://www.propfusion.io/" class="crm-button" target="_blank" rel="noopener noreferrer" aria-label="Learn more about CRM Solutions with Propfusion">
                            <i class="fas fa-link"></i> Learn More
                        </a>
        </div>
      </div>
      {/* Card 5 */}
      <div className="custom-service-card card-width">
        <div className="card-image-placeholder">
          <img src={image28} alt="CRM" className="img-fluid w-100" style={{ height: "200px", objectFit: "cover" }} />
        </div>
        <div className="p-4 text-center text-white bg-dark rounded-bottom">
          <h5 className="fw-bold mb-3">Video Production</h5>
          <p className="small">Create engaging, high-quality videos to tell your brand’s story. Strategic Planning Professional Filming Post-Production Editing</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default DigitalServices;
