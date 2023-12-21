import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Store/AddCart";
import { GetProduct } from "../../Store/SingleProductsRoutes";

import "./style.css";
import Cards from "../Home/Cards";

const ProductDetail = ({ loginUser }) => {
  const parms = useParams();
  const { id } = parms;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.oneProductStore.Product);
  useEffect(() => {
    dispatch(GetProduct(id));
  }, [dispatch, id]);
  const size = 10;
  // const des=product.description.slice(0,200)
  console.log(product.description);
  return (
    <div className="product-detail-page">
      <div className="product-box">
        <img src={product.image} className="image" />
        <div className="text-box">
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
          <p style={{ textAlign: "justify" }}>{product.description}</p>

          <button
            className="btn btn-warning "
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to card
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;
