import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./style.css"
const Signup = () => {
  return (
    <div className='contact pt-2'>
<Helmet>
  <title>signup</title>
</Helmet>

<div className='d-flex flex-column container p-3   text-center contact-div '>
<h1><strong>
    Create Account
    </strong></h1>
<input type="text" name='name' className='m-3 input' placeholder='Name'  />
<input type="email" name='email' className='m-3 input' placeholder='Email'  />
<input type="password" name='password' className='m-3 input ' placeholder='Password'  />
<input type="password" name='confurmpassword' className='m-3 input ' placeholder='Confurm password'  />
<div>
<button className='btn btn-warning  mr-5 '>send</button>

</div>
</div>
    </div>
  )
}

export default Signup