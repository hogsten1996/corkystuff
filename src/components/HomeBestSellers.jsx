import React from 'react';
import './homeBestSellers.css';
import { Link } from 'react-router-dom';

const bestSellers = [
  {
    name: "Carley Womens Casual Wedge 2.5in",
    price: 57.99,
    image1:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71rjt-6bLmL._AC_SX695_.jpg",
    image2:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71WK2y-N1rL._AC_SX695_.jpg",
    image3:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71bqvOLwpsL._AC_SX695_.jpg",
  },
  {
    name: "Womens Refreshing Casual Sandals",
    price: 55.26,
    image1:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51q+QtmIt2L._AC_SY695_.jpg",
    image2:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51mRtKcnGoL._AC_SY695_.jpg",
    image3:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51FmI0J+oXL._AC_SY695_.jpg",
  },
  {
    name: "Womens Kayak Slip On Boat Sneakers",
    price: 45.0,
    image1:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61S3fyI8BrL._AC_SX695_.jpg",
    image2:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51-VeJYkc7L._AC_.jpg",
    image3:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51bGe5YNKZL._AC_.jpg",
  },
  {
    name: "Womans Guilty Pleasure Wedge Sandal",
    price: 57.99,
    image1:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81XlK5BjkUL._AC_SX575_.jpg",
    image2:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81sgdetsaDL._AC_SX575_.jpg",
    image3:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71wyYlajAUL._AC_SX575_.jpg",
  },
];

const HomeBestSellers = () => {
  return (
    <div className='bestSellers-container'>
      <h1>Shop Best Sellers</h1>
      <div className="best-sellers-container">
        {bestSellers.map((product, index) => (
          <Link to={`/product/${index}`} key={index} className="product-card">
            <img src={product.image1} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeBestSellers;

