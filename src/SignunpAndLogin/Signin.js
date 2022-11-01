import React from 'react'
import "./style.css"
const Signin = () => {
  return (
    <div className='log-form'>

<div className='d-flex flex-column container w-25 h-25 m-5 p-2 card text-center'>
<h1 className='mt-5'>
    <strong>
      Sign in
    </strong>
  </h1>
<input type="text" name='email' className='m-3 input' placeholder='Email'  />
<input type="text" name='subject' className='m-3 input' placeholder='Password'  />
<button className='btn btn-warning m-3'>
  Signin 
</button>
<div className='text-center'>
or
</div>
<button className='btn btn-warning m-3'>
  signup
</button>
</div>


    </div>
  )
}

export default Signin