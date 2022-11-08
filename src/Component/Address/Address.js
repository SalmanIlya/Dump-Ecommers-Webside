import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import "./style.css"
const Address = () => {
  const  navagete=useNavigate()
  return (
    <div className='contact pt-3'>
 <Helmet>
        <title>
          Address please
        </title>
      </Helmet>

<div className='d-flex flex-column container p-3   text-center contact-us '>
<h1><strong>
 Enter Your  Address 
    </strong></h1>
    <div>
    <input type="text" name='name' className='m-3 input' placeholder='Name'  />
<input type="email" name='email' className='m-3 input ' placeholder='Email'  />
<input type="text" name='phoneNumber' className='m-3 input ' placeholder='PhoneNumber'  />
<input type="text" name='country' className='m-3 input ' placeholder='Country'  />
<input type="text" name='city' className='m-3 input ' placeholder='City'  />
<input type="text" name='zipCode' className='m-3 input ' placeholder='Zip=Code'  />
    </div>

<div className=''>
<textarea  rows={5}   name="massage" className='m-3 ' placeholder='complete address Eg(Country/City/HomeTown/House No/Etc ...)' />

</div>
<div>
<button className='btn btn-warning mt-3' onClick={()=>{
  navagete("/cart/payment")
}}>save</button>

</div>
</div>
    </div>
  )
}

export default Address