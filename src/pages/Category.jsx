import React from 'react'
import '../components/category.css';
import { useParams } from 'react-router-dom';

const data = {
  Sandals:[
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
      name: "Corkys Pizzazz Womens Sandal",
      price: 29.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511ReLbnhBL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51PKIa89gHL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51wdLKHkbuL._AC_SY695_.jpg",
    },
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
      name: "Corkys Pizzazz Womens Sandal",
      price: 29.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511ReLbnhBL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51PKIa89gHL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51wdLKHkbuL._AC_SY695_.jpg",
    },
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
      name: "Corkys Pizzazz Womens Sandal",
      price: 29.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511ReLbnhBL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51PKIa89gHL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51wdLKHkbuL._AC_SY695_.jpg",
    },
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
      name: "Corkys Pizzazz Womens Sandal",
      price: 29.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511ReLbnhBL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51PKIa89gHL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51wdLKHkbuL._AC_SY695_.jpg",
    },
  ],
  Sneakers:[
    {
      name: "Kayak Slip On Boat Sneakers",
      price: 45.50,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511OO7t6HVL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/614bxQ0GuGL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51xvXhi0z7L._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 57.90,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51bLEcrNYiL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51QToE5FarL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51g0J1p4QyL._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 34.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71fZ7TFrkAL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71lMeuxPyVL._AC_SX695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81N2QFXXrML._AC_SX695_.jpg",
    },
    {
      name: "Kayak Slip On Boat Sneakers",
      price: 45.50,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511OO7t6HVL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/614bxQ0GuGL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51xvXhi0z7L._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 57.90,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51bLEcrNYiL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51QToE5FarL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51g0J1p4QyL._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 34.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71fZ7TFrkAL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71lMeuxPyVL._AC_SX695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81N2QFXXrML._AC_SX695_.jpg",
    },
    {
      name: "Kayak Slip On Boat Sneakers",
      price: 45.50,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511OO7t6HVL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/614bxQ0GuGL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51xvXhi0z7L._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 57.90,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51bLEcrNYiL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51QToE5FarL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51g0J1p4QyL._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 34.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71fZ7TFrkAL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71lMeuxPyVL._AC_SX695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81N2QFXXrML._AC_SX695_.jpg",
    },
    {
      name: "Kayak Slip On Boat Sneakers",
      price: 45.50,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/511OO7t6HVL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/614bxQ0GuGL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51xvXhi0z7L._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 57.90,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51bLEcrNYiL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51QToE5FarL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51g0J1p4QyL._AC_SY695_.jpg",
    },
    {
      name: "Swank Laceless Sneakers",
      price: 34.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71fZ7TFrkAL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/71lMeuxPyVL._AC_SX695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81N2QFXXrML._AC_SX695_.jpg",
    },
  ],
  Boots:[
    {
      name: "Corkys Footwear Cabin Fever",
      price: 59.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61-jRtFdOPL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Pecan Pie ",
      price: 62.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/712zQD9R0rL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Mood",
      price: 129.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/612BIy9bsUL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61kcrA3+G7L._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/512kVLJWS+L._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Cabin Fever",
      price: 59.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61-jRtFdOPL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Pecan Pie ",
      price: 62.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/712zQD9R0rL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Mood",
      price: 129.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/612BIy9bsUL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61kcrA3+G7L._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/512kVLJWS+L._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Cabin Fever",
      price: 59.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61-jRtFdOPL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Pecan Pie ",
      price: 62.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/712zQD9R0rL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Mood",
      price: 129.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/612BIy9bsUL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61kcrA3+G7L._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/512kVLJWS+L._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Cabin Fever",
      price: 59.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61-jRtFdOPL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Pecan Pie ",
      price: 62.99,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/712zQD9R0rL._AC_SX695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/617Lh06S8hL._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41UuH3jOBaL._AC_SY695_.jpg",
    },
    {
      name: "Corkys Footwear Mood",
      price: 129.95,
      image1:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/612BIy9bsUL._AC_SY695_.jpg",
      image2:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61kcrA3+G7L._AC_SY695_.jpg",
      image3:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/512kVLJWS+L._AC_SY695_.jpg",
    },
  ]
}

const Category = () => {
  const { category } = useParams();
  const categoryData = data[category] || [];

  return (
    <div className='category-container'>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="product-list">
        {categoryData.map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.image1} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
