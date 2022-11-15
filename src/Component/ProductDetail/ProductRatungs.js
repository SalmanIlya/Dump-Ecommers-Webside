import React, { useState } from 'react'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
const ProductRatungs = () => {
    const [number,SetNumber]=useState(0)
    const stars=Array(5).fill()
  return (
    <div  className='p-3 text-center' >
        <div >
<div className='text-center'>

        {
            stars.map((_,index)=>{
return (<>

    {number>=1+index ?<AiFillStar 

    key={index} className="text-center "
    
onMouseOver={()=>{SetNumber(index+1)}}
onMouseLeave={()=>{SetNumber()}}
    onClick={()=>{SetNumber(index+1)}} style={{color:"orange",fontSize:"22px"}} /> :
    <AiOutlineStar key={index} className="text-center " 
    onClick={()=>{SetNumber(index+1)}}
    style={{color:"orange",fontSize:"22px"}} 
    onMouseOver={()=>{SetNumber(index+1)}}
onMouseLeave={()=>{SetNumber()}}
    />
    }
</>

)
            })
        }
</div>

        <br/>
        <textarea rows={5} cols={50} className="textarea" placeholder="Comment here ..."/>
        </div>

        <button className='btn btn-warning'>Submit</button>

    </div>
  )
}

export default ProductRatungs