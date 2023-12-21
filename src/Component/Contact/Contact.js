import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./style.css"
const Contact = () => {
  return (
    <div className='contact mt-5 pt-3'>
<div className='mt-5'></div>
      <Helmet>
        <title>
          Contact us
        </title>
      </Helmet>
      <div className='d-flex flex-column container p-3 shadow-lg     contact-us '>
        <h1 className='text-center m-5'><strong>
          Contact us
        </strong></h1>
        <div>
          <div className='d-flex flex-column align-items-center'>
          <input type="text" name='name' className='m-3 input' placeholder='Name' />
          </div>
          <div className='d-flex flex-column align-items-center'>
          <input type="text" name='email' className='m-3 input ' placeholder='Email' />
          </div>

          <div className='d-flex flex-column align-items-center'>
          <textarea rows={5} name="massage" className='m-3 ' placeholder='Enter your massage' />

          </div>
        </div>

      

        
        <div>
          <button className='btn btn-warning mt-3'>send</button>

        </div>
      </div>
    </div>
  )
}

export default Contact