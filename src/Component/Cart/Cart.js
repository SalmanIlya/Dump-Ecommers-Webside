import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {  useSelector ,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import {increase,decrease,removeItem,clearCart, getTotal} from "../../Store/AddCart"
import "./style.css"
const Cart = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cart = useSelector((state) => state.cartitem)
 useEffect(()=>{
  dispatch(getTotal())
 },[cart,dispatch])

  return (
    <div  className='card-main-div pt-2'>
      <Helmet>
        <title>
          Card
        </title>
      </Helmet>
{
  cart.cart.length===0 ?
  <div className='text-center '>
    <h3 className='mt-3'>Cart Is Empty Please Go For Shopping</h3>
    <button className="btn btn-warning  mt-3" onClick={()=>{navigate("/")}}>Go For Shoping</button>
    </div>:
  <div>
    <div >

    <h3 className='text-center div-1 '>Cart Products</h3>
    </div>
    <table className="table container">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Price</th>
      <th scope="col">Total Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
    cart.cart.map((item)=>{
return (
<tbody key={item.id}>
    <tr>
      <td ><img src={item.image} alt={item.title} className="cardimg mt-1"  /></td>
      <td className=''><strong> ${(item.price).toFixed(2)}</strong></td>
      <td className=''><strong>$ {(item.price*item.CardQuantity
).toFixed(2)}</strong></td>
      <td className='d-flex'>
      <button className='btn btn-light h-75' onClick={()=>{dispatch(increase(item.id))}}>+</button>
        <p className='mt-2 px-2'>{item.CardQuantity
}</p>
        <button className='btn btn-light h-75' onClick={()=>{dispatch(decrease(item.id))}}>-</button>
      </td>
      <td >
      <i onClick={()=>{dispatch(removeItem(item.id))}} className="fa-regular fa-trash-can"></i>
      </td>
    </tr>
  </tbody>
)
    })
  }
</table>
<div className='my-div'>
  <div>
<button className="btn btn-warning" onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
</div>
<div className='mydiv'>
  <span>Subtotal</span>
  <span><strong> ${}</strong></span>
<button className="btn btn-warning" onClick={()=>{
  navigate("/address")
}}>Proceed to checkout</button>
  
</div>
</div>


  </div>
}

    </div>
  )
}

export default Cart