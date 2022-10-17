import React from 'react'

const Address = () => {
  return (
    <div className="mt-3 container">
<h3  className='text-center'>Please Enter Your Address</h3>

<form className='form d-flex'>
<input type="text" placeholder='Name'/>
<input type="email" placeholder='Email'/>
<input type="text" placeholder='Country'/>
<input type="text" placeholder='City'/>
<input type="text" placeholder='Zip-code'/>
<input type="text" placeholder='Phone-Number'/>
<textarea  cols="40" rows="5" placeholder="Enter your all address "/>
</form>
<button className="btn btn-warning text-center mt-3 btn-address" onClick={()=>{}}>Save and Continue</button>


    </div>
  )
}

export default Address