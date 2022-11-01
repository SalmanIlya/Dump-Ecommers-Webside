import React  from 'react'
import Slider from '../slider/Slider'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetProduct } from "../../Store/ProductReducer";
import { Link } from "react-router-dom";
import { addToCart } from "../../Store/AddCart";
import { Helmet } from "react-helmet-async";
import Rating from "../Ratings/Ratings";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Reviews from './Reviews';
import "./style.css"


const Home = () => {
    const dispatch = useDispatch();

  const Product = useSelector((state) => state.productStore.Product);
  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);
  
  return (
    <div>
      <Helmet>
        <title>
          home page
        </title>
      </Helmet>
      <div className=''>

        <Slider/>
        <h3 className='text-center mt-5'>Recomended for you</h3>

        {/* <div className="product container mt-5"> */}
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="product container mt-5 "
    >

<SwiperSlide >

      {Product.slice(0, 1).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>
<SwiperSlide>

      {Product.slice(1, 2).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>
<SwiperSlide>

      {Product.slice(2, 3).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>
<SwiperSlide>

      {Product.slice(3, 4).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>
<SwiperSlide>

      {Product.slice(4, 5).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>
<SwiperSlide>

      {Product.slice(5, 6).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>
<SwiperSlide>

      {Product.slice(6, 7).map((item) => {
          return (

            
            <div className="card m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>

<SwiperSlide>

      {Product.slice(7, 8).map((item) => {
          return (

            
            <div className="card  m-2 col-xs-1 col-sm-2 col-md-3 col-md-3" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  className="card-img-top m-2 col-xs-1 col-sm-2 col-md-3 col-md-3"
                  alt={item.categort}
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{item.title}</p>
                <h5 className="card-title">
                  <strong>${item.price}</strong>{" "}
                  <Rating rating={item.rating}
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
</SwiperSlide>

       </Swiper>
      </div>
      <div className='container d-flex mt-5'>
        <img src='/newimg/1.jpg' className=' img m-1' alt='img' />
        <img src='/newimg/2.jpg' className=' img m-1 ' alt='img' />
      </div>
      <h3 className='text-center mt-5'>customer reviews</h3>
      <div className="d-flex container">
        {
          Reviews.map((item)=>{
            return (
              <div key={item.id} className=" w-25  m-5 p-2 bg-light rounded-5 col-xs-1 col-sm-1 col-md-2 col-xl-3 " >
               <div className='d-flex '>
                <img src={item.image} className="reviews-image rounded-circle"/>
                 <p>{item.name}</p></div>
                <Rating ratings={item.ratings}/>
                <p>{item.text}</p>
              </div>
            )
          })
        }
      </div>
      <hr/>
    </div>
    
  )
}

export default Home