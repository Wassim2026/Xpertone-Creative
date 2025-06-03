import React from 'react'
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/image6.png"
import image7 from "./images/image7.png"
import image8 from "./images/image8.png"
import image9 from "./images/image9.png"
import image10 from "./images/image10.png"
import image17 from "./images/image17.png"
import image11 from "./images/image11.png"
import image12 from "./images/image12.png"
import image13 from "./images/image13.png"
import image14 from "./images/image14.png"
import image15 from "./images/image15.png"
import image16 from "./images/image17.png"
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image18 from "./images/image18.png"
import image19 from "./images/image19.png"
import image21 from "./images/image20.png"
import image22 from "./images/image22.png"
import image23 from "./images/image23.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog} from '@fortawesome/free-solid-svg-icons';

const PrintingServices = () => {
  return (
    <div>
      <div className="container-fluid px-0 text-white text-center">
        <h2 className="fw-bold hover-green mb-3">
          <FontAwesomeIcon icon={faBlog} beat/> XC Printing Services
        </h2>
        <p className="fw-bold hover-green mx-auto mb-4 px-3" style={{ maxWidth: '800px' }}>
          Discover XpertOne Creative’s range of custom apparel, safety gear, and printing products, designed for your business needs in Dubai.
        </p>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {[{
            image: image3,
            title: "Polo T-Shirt (Cotton 220gsm Single Color)"
            
          }, {
            image: image4,
            title: "Polo T-Shirt (Cotton 220gsm Dual/Multi Color)"
          }, {
            image: image1,
            title: "Safety Vest General"
          }, {
            image: image2,
            title: "Safety Vest (Supervisor)"
          }, {
            image: image18,
            title: "Safety Vest (Engineer)"
          }, {
            image: image19,
            title: "Cap"
          }, {
            image: image21,
            title: "Business Cards (Matt Lamination 350gsm)"
          }, {
            image: image22,
            title: "Business Cards (Round Corners Matt Lamination 400gsm)"
          }, {
            image: image23,
            title: "Business Cards (Rounded Corner Spot UV Matt Lamination 400gsm)"
          }, {
            image: image23,
            title: "Business Cards (Rounded Corner Spot UV Velvet Lamination 760mic)"
          }, {
            image: image5,
            title: "Business Cards (Rounded Corner PETT Glossy Lamination 760mic)"
          }, {
            image: image6,
            title: "Business Cards (Rounded Corner Gold Foil Spot UV Velvet Lamination)"
          }, {
            image: image8,
            title: "Business Cards (Rounded Corner PETT Gold Glossy Lamination 760mic)"
          }, {
            image: image7,
            title: "Flyer A6 (14.85×10.5 cm, Glossy Paper 170gsm)"
          }, {
            image: image9,
            title: "Flyer A5 (14.85×21.0 cm, Glossy Paper 170gsm)"
          }, {
            image: image10,
            title: "Flyer A4 (29.7×21.0 cm, Glossy Paper 170gsm)"
          }, {
            image: image17,
            title: "Flyer A3 (29.7×42.0 cm, Glossy Paper 170gsm)"
          },
        {
            image: image11,
            title: "Flyer DL (Glossy Paper 170gsm)"
          },
        {
            image: image12,
            title: "Envelope DL (269×263 mm, Wood Free Paper 120gsm)"
          },
        {
            image: image13,
            title: "Envelope A5 (318×379 mm, Wood Free Paper 120gsm)"
          },
        {
            image: image14,
            title: "Envelope A4 (485×388 mm, Wood Free Paper 120gsm)"
          },
        {
            image: image15,
            title: "Door Hanger (Glossy 170gsm)"
          },
        {
            image: image16,
            title: "Door Hanger (Matt Lamination 350gsm)"
          },].map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="custom-service-card d-flex flex-column h-100">
                <div className="card-image-placeholder">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="img-fluid w-100"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="p-4 text-center text-white flex-grow-1 d-flex flex-column justify-content-between bg-dark rounded-bottom">
                  <h5 className="fw-bold mb-3">{card.title}</h5>
                  <a
                  href={`https://wa.me/971501234567?text=Hi%20XpertOne%20Creative%2C%20I%20am%20interested%20in%20`}
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
  )
}

export default PrintingServices
