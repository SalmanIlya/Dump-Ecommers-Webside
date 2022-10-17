import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { GetProduct } from '../Store/SingleProductsRoutes';
import {addToCart} from "../Store/AddCart"
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

                              <div className="firstDiv">
                                        <img src={Product.image} alt={Product.title} />
                              </div>
                              <div className="secondDiv ">
                                        <h3>Name: {Product.title}</h3>
                                        <h3>Price : ${Product.price}</h3>
                                        <button type="button" onClick={() => { dispatch(addToCart(Product)) }} className="btn btn-warning">Add To Cart</button>


                              </div>
                              <div>

                              </div>

                    </div>
          );
}