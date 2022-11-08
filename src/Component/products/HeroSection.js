import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"
const HeroSection = () => {
    const navagete=useNavigate()
  return (
    <div className='bg-dark hero-div '>
      <div className='container hero-div'>

        <div  className='text-white hero-text-div' >
          <h1  className='mt-3'><strong>
          CHOOSE <br/>
            YOUR STYLE
          </strong>
          </h1>
          <p>
         <strong>
         well come to your own <br/>
         
          ecommers webside 
          </strong> 
           <br/> start shopping  now 
          </p>
          <div className='d-flex justify-content-around div-btn'>
            <button className='btn btn-warning  ' onClick={()=>{
                navagete("/")
            }}>Home</button>
            <button className='btn btn-warning  ' onClick={()=>{
                navagete("/product")
            }}>Shop now</button>

          </div>

        </div>

        <div className=''>
        <img src='herosection/3.png' className='hero-image ' alt='img'   />
        </div>
      </div>

      </div>
  )
}

export default HeroSection