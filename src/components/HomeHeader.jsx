import React from "react";
import "./homeHeader.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const HomeHeader = ({ labels }) => {
  const images = [
    "https://arrow22.com/cdn/shop/products/image_2bd579d3-bfee-47e3-98f2-1265fac8199d.jpg?v=1679165373",
    "https://julesandjamesboutique.com/cdn/shop/files/A1BF45C2-6D91-4F82-A602-ACA1CC04A0FF.jpg?v=1704808891",
    "https://shopaudaciousboutique.com/cdn/shop/files/IMG_7900_1_2048x.jpg?v=1692731720",
  ];

  return (
    <div className="home-header">
      {/* Mobile Carousel */}
      <div className="mobile-carousel">
        <Slider>
          {images.map((image, index) => (
            <Link to={`/category/${labels[index]}`} key={index} className="image-container">
              <img src={image} alt="" className="header-image" />
              <div className="overlay">
                <h1>{labels[index]}</h1>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      {/* Desktop Images */}
      <div className="desktop-images">
        {images.map((image, index) => (
          <Link to={`/category/${labels[index]}`} key={index} className="image-container">
            <img src={image} alt="" className="header-image" />
            <div className="overlay">
              <h1>{labels[index]}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeHeader;


