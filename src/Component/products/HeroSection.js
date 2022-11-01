import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navagete=useNavigate()
  return (
    <div className='  d-flex flex-row p-3 bg-dark'>
        <div  className='w-50 mt-5 pt-5 m-5 p-5 text-white' >
          <h1  className='mt-3'><strong>
          CHOOSE <br/>
            YOUR STYLE
          </strong>
          </h1>
          <p>
         <strong>
         well come to your own ecommers webside 

          </strong> 
           <br/> start shopping  now 
          </p>
          
          <div className='d-flex justify-content-around w-50 mt-3'>
            <button className='btn btn-warning m-2' onClick={()=>{
                navagete("/")
            }}>Home</button>
            <button className='btn btn-warning m-2' onClick={()=>{
                navagete("/product")
            }}>Shop now</button>

          </div>
        </div>
        <img src='herosection/1.png' className='w-50 p-5' alt='img'   />
      </div>
  )
}

export default HeroSection