import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./style.css"
const Paymentscreen = () => {
  return (
    <div className='main-div  '>
      <Helmet>
                <title>
                    Payment page
                </title>
            </Helmet>
      <div>
      <i class="fa-regular fa-credit-card"></i>
    {" "}
      <span>
        Add New Card
      </span>
      </div>
<div>
<div className='d-flex flex-column m-3 '>
    <input type="text" className=' inputes' placeholder='card holder name' required/>
  </div>
  <div className='d-flex flex-column m-3 '>
    <input type="text"  className=' inputes' placeholder='card number' required/>
  </div>
  <div className='d-flex flex-column m-3 '>
    <label form='Expiration'>Expiration:</label>
    <div className=' d-flex'>
    <input  className=' input1'placeholder='MM'/>
    /
    <input  className=' input1' placeholder='YY'/>/
    <input  className='input1' placeholder='CVV'/>
    </div>
   
<button className='btn btn-warning m-5'>
  pay now
</button>
  </div>

</div>


    </div>
  )
}

export default Paymentscreen