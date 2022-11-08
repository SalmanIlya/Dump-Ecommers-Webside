import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Ratings/Ratings";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/AddCart";

const Product = (props) => {
  const { allProduct, category } = props;
  const dispatch = useDispatch();

  const products = category
    ? allProduct.filter((item) => item.category === category)
    : allProduct;

  return (
    <div className="w-100 ">
      <h3 className="text-center m-5"> Our Product</h3>
      <div className="products container ">
        {products.map((item) => {
          const { id, image, categort, title, price, rating, count } = item;
          return (
            <div className="card " key={id}>
              <Link to={`/product/${id}`}>
                <img
                  src={image}
                  className="card-img-top"
                  alt={categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{title.slice(0,7)}</p>
                <h5 className="card-title">
                  <strong>${price}</strong>{" "}
                  <Rating
                    rating={rating}
                    numReviews={count}
                    className="color"
                  />
                </h5>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                  className="btn btn-warning btn1"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
