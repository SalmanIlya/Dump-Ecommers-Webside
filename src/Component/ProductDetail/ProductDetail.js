import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { GetProduct } from '../../Store/SingleProductsRoutes';
import {addToCart} from "../../Store/AddCart"
import { Helmet } from "react-helmet-async";
import "./style.css"
import Rating from "../Ratings/Ratings";
export default function ProductDetail() {

          const params = useParams()
          const { id } = params
          const dispatch = useDispatch()
          const Product = useSelector((state) => state.oneProductStore.Product)
          useEffect(() => {
                    dispatch(GetProduct(id))
          }, [dispatch])

          return (
                    <div className="maindiv container">
                        <Helmet>
                <title>
                   product Detail page
                </title>
            </Helmet>

                              <div className="firstDiv">
                                        <img src={Product.image} alt={Product.title} />
                              </div>
                              <div className="secondDiv ">
                                        <h3>Name: {Product.title}</h3>
                                        <h3>Price : ${Product.price}</h3>
                                <Rating/>

                                        <button type="button" onClick={() => { dispatch(addToCart(Product)) }} className="btn btn-warning mt-3">Add To Cart</button>


                              </div>
                              <div>

                              </div>

                    </div>
          );
}