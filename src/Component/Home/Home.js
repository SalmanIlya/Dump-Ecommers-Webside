import React from "react";
import { Helmet } from "react-helmet-async";
import Ratings from "../Ratings/Ratings";
import Slider from "../slider/Slider";
import Cards from "./Cards";
import Reviews from "./Reviews";
import "./style.css";
const Home = ({ loginUser }) => {
  return (
    <div className="">
      <div className=" "></div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <h3 className="text-center headings mt-5">Latest Products</h3>

      <Cards loginUser={loginUser} />
      <div className="container div-img w-100">
        <img src="newimg/1.jpg" className="w-50 p-2 " alt="image/1.jpg" />
        <img src="newimg/2.jpg" className="w-50 p-2" alt="image/2.jpg" />
      </div>

      <h3 className="text-center m-4">
        <strong>Customer Reviews</strong>
      </h3>
      <div className="reviews">
        {Reviews.map((item) => {
          return (
            <div className="div-reviews  bg-light  p-4" key={item.id}>
              <p>{item.name}</p>
              <Ratings newitem={item.newitem} />
              <p className="review-text">{item.text.slice(0, 150)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
