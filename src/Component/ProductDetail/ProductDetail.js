import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../Store/AddCart'
import { GetProduct } from '../../Store/SingleProductsRoutes'
import Ratings from '../Ratings/Ratings'
import ProductRatungs from './ProductRatungs'
import "./style.css"
const ProductDetail = () => {
        const parms=useParams()
        const {id}=parms
        const dispatch=useDispatch()
        const product=useSelector((state)=>state.oneProductStore.Product)
        useEffect(()=>{
            dispatch(GetProduct(id))
        },[dispatch,id])
        // console.log(product);
        // const item=product.rating
//       const newitem=item.rate
  return (
        <div>
 <Helmet>
        <title>
          product detail page
        </title>
      </Helmet>
    <div className='detail-page d-flex  container '>
<div >
        <img src={product.image} alt={product.title} className=" img " />
</div>
<div className='div-2'></div>
<div className=' div-text '>
        <h3>
                {product.title}
        </h3>
        <p>
                {product.description}
        </p>
        <Ratings />
        <p>
                ${product.price}
        </p>
        
        <button className='btn btn-warning' onClick={()=>{
                dispatch(addToCart(product))
        }}>add to card</button>
</div>
    </div>
<ProductRatungs/>

    </div>

  )
}

export default ProductDetail