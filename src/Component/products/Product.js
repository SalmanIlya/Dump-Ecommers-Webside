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
    <div className="w-100">
      <h3 className="text-center m-5"> Our Product</h3>
      <div className="products container ">
        {products.map((item) => {
          return (
            <div className="card " key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating
                    rating={item.rating}
                    numReviews={item.count}
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
