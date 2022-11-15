import React from 'react'
import { Helmet } from 'react-helmet-async'
import Ratings from '../Ratings/Ratings'
import Slider from "../slider/Slider"
import Cards from './Cards'
import Reviews from './Reviews'
import "./style.css"
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Home 
        </title>
      </Helmet>
      <Slider/>
      <Cards/>
      <div className='container div-img w-100'>
        <img  src='newimg/1.jpg' className='w-50 p-2 ' alt='image/1.jpg'  />
        <img  src='newimg/2.jpg' className='w-50 p-2'  alt='image/2.jpg' />
      </div>
      <h3 className='text-center m-4'>
          <strong>
          Customer Reviews
          </strong>
        </h3>
      <div className='d-flex container  reviews'>
      
        {
          Reviews.map((item)=>{
            
            return (
              <div className='div-reviews  bg-light  p-4' key={item.id}>
                <p>
                  {item.name}
                </p>
<Ratings newitem={item.newitem} />
<p>
  {item.text}
</p>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home