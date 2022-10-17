import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { GetProduct } from '../Store/ProductReducer';
import {Link} from "react-router-dom"
import { addToCart } from "../Store/AddCart"
function Home() {
          const dispatch = useDispatch()
          
          const Product = useSelector((state) => state.productStore.Product)
          useEffect(() => {
                    dispatch(GetProduct())
          }, [dispatch])

          return (<div>
                    <h3 className="text-center mt-5">Our product</h3>
                    <div className="products">
                              {Product.map((item) => {
                                        return (
                                            <div className="card" key={item.id}>
<Link to={`/product/${item.id}`}>
<img src={item.image} className="card-img-top" alt={item.categort} />
    </Link>
<div className="card-body">
<p className="card-title">{item.title}</p>
<h5 className="card-title"><strong>${item.price}</strong> </h5>
<button type="button" onClick={() => { dispatch(addToCart(item))}} className="btn btn-warning btn1">Add To Cart</button>
                                                                </div>
                                                      </div>
                                        )

                              })
                              }
                    </div>
          </div>
          );
}

export default Home;
