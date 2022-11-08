import React from 'react'
import "./style.css"
const Contact = () => {
  return (
    <div className='contact pt-3'>


<div className='d-flex flex-column container p-3   text-center contact-us '>
<h1><strong>
    Contact us
    </strong></h1>
    <div>
    <input type="text" name='name' className='m-3 input' placeholder='Name'  />
<input type="text" name='email' className='m-3 input ' placeholder='Email'  />
<input type="text" name='subject' className='m-3 input ' placeholder='Subject'  />
    </div>

<div className=''>
<textarea  rows={5}   name="massage" className='m-3 ' placeholder='Enter your massage' />

</div>
<div>
<button className='btn btn-warning mt-3'>send</button>

</div>
</div>
    </div>
  )
}

export default Contact