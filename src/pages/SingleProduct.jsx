import React from "react";
import { useParams } from "react-router-dom";
import "../components/singleProduct.css";

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

const SingleProduct = () => {
  const { productId } = useParams();

  const index = parseInt(productId, 10);
  if (isNaN(index) || index < 0 || index >= bestSellers.length) {
    return <div>Product not found</div>;
  }

  const product = bestSellers[index];

  return (
    <div className="single-product">
      <h1>{product.name}</h1>
      <div className="product-details">
        <img src={product.image1} alt={product.name} />
        <div className="text-details">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="secondary-images">
        <img src={product.image1} alt={product.name} />
        <img src={product.image2} alt={product.name} />
        <img src={product.image3} alt={product.name} />
      </div>
      <div>
        <h3>Product Desc</h3>
        <p>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          dolores reprehenderit iure debitis soluta odit voluptate praesentium
          accusantium nihil quae quas aut obcaecati ab perspiciatis dignissimos
          laudantium facilis similique sit. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Repellat in veniam dolorem enim
          doloribus cum illum illo deleniti reprehenderit repudiandae sint modi
          fugiat eaque provident placeat, aperiam inventore autem quam.
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
