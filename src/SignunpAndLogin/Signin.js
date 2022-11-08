import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./style.css"
const Signin = () => {
  return (
    <div className='contact pt-2'>

<Helmet>
        <title>
          Signin
        </title>
      </Helmet>
<div className='d-flex flex-column container p-3 ml-2    text-center contact-div '>
<h1><strong>
    Login your Account
    </strong></h1>
<input type="text" name='email' className='m-3 input ' placeholder='Email'  />
<input type="password" name='password' className='m-3 input ' placeholder='Password'  />
<div>
<button className='btn btn-warning   '>send</button>

</div>
</div>
    </div>
  )
}

export default Signin