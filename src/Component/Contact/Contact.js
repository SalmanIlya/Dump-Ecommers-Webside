import React from 'react'
import "./style.css"
const Contact = () => {
  return (
    <div className='contact'>


<div className='d-flex flex-column container p-5 w-50 h-50 text-center card'>
<h1><strong>
    Contact us
    </strong></h1>
<input type="text" name='name' className='m-3 input' placeholder='Name'  />
<input type="text" name='email' className='m-3 input' placeholder='Email'  />
<input type="text" name='subject' className='m-3 input' placeholder='Subject'  />
<textarea  rows={5} name="massage" className='m-3 ' placeholder='Enter your massage' />
<button className='btn btn-warning mt-3'>send</button>
</div>
    </div>
  )
}

export default Contact