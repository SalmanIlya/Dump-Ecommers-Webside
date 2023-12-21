import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/AddCart";
import axios from "axios";
const Product = (props) => {
  const navagate = useNavigate();

  
  const { allProduct, category, loginUser } = props;
  const [cartproduct, setCartProduct] = useState({
    userId: "",
    products: [
      {
        productId: "",
      },
    ],
  });
  const addtocardbtn = async (item, user) => {
    setCartProduct({
      userId: user._id,
      products: [
        {
          productId: item._id,
        },
      ],
    });
    await axios
      .post("http://localhost:5000/api/cart/cart/", cartproduct)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        alert("error", err);
      });
  };
  const [a, b] = useState(0);
  const [c, d] = useState(4);
  const dispatch = useDispatch();
  const products = category
    ? allProduct.filter((item) => item.category === category)
    : allProduct;
  return (
    <div className="w-100  ">

      <div className="products container ">
        {products.slice(a, c).map((item) => {
            const { id, image, category, title, price } = item;
          
         
            return (
              <Link  className="card-items product-text">
                <Link to={`/${id}`}>

                <div className="card-images">
                  <img src={image} alt={title} />
                </div>
                </Link>

                <div className="card-text">
                  <h4>{title.slice(0,10)}</h4>
                  <h5>${price}</h5>
                  <button className="card-btn"
                  
                  onClick={() => {
                
                                navagate("/sign/in");
                                dispatch(addToCart(item));
                              }}
                  >Add to Card</button>
                </div>
              </Link>)})}
              </div>
         
      <div className="mt-5 d-flex justify-content-between p-5 ">
        <button
          className="btn btn-warning"
          onClick={() => {
            if (a === 0) {
              b(0);
            } else {
              b(a - 4);
              d(c - 4);
            }
          }}
        >
          {"<"}pervious
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            console.log(allProduct.length < c);
            if (
              allProduct.length <= c ||
              allProduct.length === c ||
              products.length <= allProduct
            ) {
              console.log("if is working");
              d(4);
              b(0);
            } else {
              if (allProduct.length >= c) {
                console.log("else is working");
                b(a + 4);
                d(c + 4);
              }
            }
          }}
        >
          Next{">"}
        </button>
      </div>
    </div>
  );
};

export default Product;
