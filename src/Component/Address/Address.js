import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"
const Address = () => {
  const navagete=useNavigate()
  return (
    <div className="text-center address ">

<div className='d-flex flex-column container p-3 card w-50 h-75'>
<h1>
    <strong>
     Enter your Address
    </strong>
  </h1>
<input type="text" name='name' className='m-3 input' placeholder='Name'  />
<input type="text" name='moble' className='m-3 input' placeholder='Phone Number'  />
<input type="text" name='email' className='m-3 input' placeholder='Email'  />
<input type="text" name='country' className='m-3 input' placeholder='Country'  />
<input type="text" name='city' className='m-3 input' placeholder='city'  />
<input type="text" name='zip-code' className='m-3 input' placeholder='zip-code'  />
<textarea  rows={5} name="massage" className='m-3 ' placeholder='Enter your massage' />
<button className='btn btn-warning m-3' onClick={()=>{
  navagete("/cart/payment")
}}>
  Save
</button>
</div>

    </div>
  )
}

export default Address