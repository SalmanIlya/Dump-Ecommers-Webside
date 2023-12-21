import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import "./style.css"
const Address = ({ProductId,quantity,loginUser,ProductTitle, ProductImg}) => {
  const [userAddress,SetUserAddress]=useState({})
  const handleChange=(e)=>{
    const { name, value } = e.target
    SetUserAddress({
      ...userAddress,
      [name]: value
    })
  }
  // console.log(userAddress);
  const cart = useSelector((state) => state.cartitem)
  const amount=cart.cartTotalAmount
  const [userOrder,SetUserOrder]=useState({
    userId:loginUser._id,
    products:[{
      productId:ProductId,
      quantity:quantity
    }],
    amount:amount,
    address:userAddress
  })
  const navagete = useNavigate()

// console.log(userAddress);
const CongurmOrder=()=>{
  axios.post("http://localhost:5000/api/orders/order",
  {
    userId:loginUser._id,
    userImg:loginUser.img,
    userName:loginUser.username,
    userEmail:loginUser.email,
      productId:ProductId,
      productTitle:ProductTitle,
      productImg:ProductImg,
      quantity:quantity,
    amount:amount,
    address:userAddress
  }

  ).then((res)=>{
    toast.success('your Order has been confurm ', {
      position: toast.POSITION.BOTTOM_LEFT
  });
    navagete("/cart/payment")

  }).catch((err)=>{
    toast.error('Please give your complete information', {
      position: toast.POSITION.BOTTOM_LEFT
  });

  })
}
  return (
    <div className='contact pt-3'>
      <Helmet>
        <title>
          Address please
        </title>
      </Helmet>
      <div className=' p-4'></div>
      <div className='d-flex flex-column container p-3  mt-5  shadow-lg text-center contact-us '>
<div className='mt-5'></div>
        <h1><strong>
          Enter Your  Address
        </strong></h1>
        <div>
          <input type="text" name='name' required={true}  value={userAddress.name} onChange={(e)=>{handleChange(e)}} className='m-3 input' placeholder='Name' />
          <input type="email" name='email'  required={true} value={userAddress.email} onChange={(e)=>{handleChange(e)}} className='m-3 input ' placeholder='Email' />
          <input type="text" name='phoneNumber'  required={true} value={userAddress.phoneNumber} onChange={(e)=>{handleChange(e)}} className='m-3 input ' placeholder='PhoneNumber' />
          <input type="text" name='country'  required={true} value={userAddress.country} onChange={(e)=>{handleChange(e)}} className='m-3 input ' placeholder='Country' />
          <input type="text" name='city'  required={true} value={userAddress.city} onChange={(e)=>{handleChange(e)}} className='m-3 input ' placeholder='City' />
          <input type="text" name='zipCode'  required={true} value={userAddress.zipCode} onChange={(e)=>{handleChange(e)}} className='m-3 input ' placeholder='ZipCode' />
        </div>

        <div className=''>
          <textarea rows={5} name="Address" className='m-3' value={userAddress.Address} onChange={(e)=>{handleChange(e)}} placeholder='complete address Eg(Country/City/HomeTown/House No/Etc ...)' />

        </div>
        <div>
          <button className='btn btn-warning mt-3 m-5' onClick={() => {
            CongurmOrder()
          }}>save</button>

        </div>
      </div>
    </div>
  )
}

export default Address