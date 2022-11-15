import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Ratings/Ratings";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/AddCart";

const Product = (props) => {
  const { allProduct, category } = props;
  const [a,b]=useState(0)
  const [c,d]=useState(8)
  const dispatch = useDispatch();

  const products = category
    ? allProduct.filter((item) => item.category === category)
    : allProduct;


  return (
    <div className="w-100 ">
      <h3 className="text-center m-5"> Our Product</h3>
     
      <div className="products container ">
        {products.slice(a,c).map((item) => {
          const { id, image, categort, title, price, rating,  } = item;
          const {rate,count}=rating
         const newitem=rate.toFixed()
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
                    newitem={newitem}
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
      
        
      <div className="mt-5 d-flex justify-content-between ">
        <button className="btn btn-warning" onClick={()=>{
          if(a===0){
            b(0)
          }else{
          b(a-4)
           d(c-4)
          }
           }}>{"<"}pervious</button>
            <button className="btn btn-warning" onClick={()=>{
console.log(allProduct.length<c);
              if(allProduct.length<=c || allProduct.length===c||products.length<=allProduct){
                console.log("if is working");
                d(8)
                b(0)
              }
              else{
                if(allProduct.length>=c){
                  console.log("else is working");
                b(a+4)
                d(c+4)
                }
                
                }
         
          }
           }>Next{">"}</button>
      </div>
    </div>
  );
};

export default Product;
