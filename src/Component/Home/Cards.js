import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../Store/ProductReducer";
import { addToCart } from "../../Store/AddCart";
import { Link } from "react-router-dom";
import Rating from "../Ratings/Ratings";

import "./style.css";

const Cards = () => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productStore.Product);
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  return (

<div  >
  <h3 className="text-center pt-4">Latest Products</h3>
  <div className="product d-flex container">
    
    
            {product.slice(0, 4).map((item) => {
              const { id, image, categort, title, price, rating, count } = item;
              // console.log("title",title.Typeof());
              return (
                <div className="card " key={id}>
                  <Link to={`/product/${id}`}>
                    <img src={image} className="card-img  " alt={categort} />
                  </Link>
                  <div className="card-body">
                    <p className="card-title">{title.slice(0, 7)}</p>
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
                      className="btn btn-warning  btn1 btn-lg
                      btn-sm
                      btn-xs"
                    
                    >add to cart
                    </button>
                  </div>
                </div>
              );
            })}
  
  </div>

    
    </div>
  );
};

export default Cards;
