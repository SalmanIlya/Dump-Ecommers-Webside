import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { increase, decrease, removeItem, clearCart, getTotal } from "../../Store/AddCart"
import "./style.css"
import {toast} from "react-toastify"
const Cart = ({ loginUser,SetProductId, SetQuantity,setProductTitle,setProductImg}) => {
  const [cartItem, setCartItem] = useState("")
  // const [Products,setProduct]=useState([])
  // const [itemquantity,SetItemQuantity]=useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cartitem)
  
  const factchdate = async () => {
    await axios.get("http://localhost:5000/api/cart/").then((res) => {
      setCartItem(res.data)
      return res.data
    }).catch((err) => {
      return err
    })
  }
  useEffect(() => {

    factchdate()
    dispatch(getTotal())
  
  }, [cart, dispatch])

  const cartdata=cart.cart
  const product =  cartdata.filter((item) => item._id ===cartItem._id )
  const productId=  product.map((item) =>  item.id )
  const ProducTitle=  product.map((item) =>item.title )
  const ProducImg=  product.map((item) =>item.img )
 
const allQuantity=cart.cartTotalQuantity
SetProductId(productId.toString())
setProductImg(ProducImg.toString())
setProductTitle(ProducTitle.toString())
SetQuantity(allQuantity)


  return (
    <div className='card-main-div'>
      <Helmet>
        <title>
          Card
        </title>
      </Helmet>
      {
         cart.cart.length===0 ?
          <div className=' box '>
         <h3 className='mt-3'>Cart Is Empty Please Go For Shopping</h3>
         <button className="btn btn-warning  mt-3" onClick={() => { navigate("/") }}>Go For Shoping</button>
       </div>
       
         : <div>
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
                product.map((item) => {
           const totalprice=item.price * item.CardQuantity
           const price=item.price
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td ><img src={item.image} alt={item.title} className="cardimg mt-1" /></td>
                        <td className=''><strong> ${price}</strong></td>
                        <td className=''><strong>$ {totalprice}</strong></td>
                        <td className='d-flex'>
                          <button className='btn btn-light h-75' onClick={() => { dispatch(increase(item.id)) }}>+</button>
                          <p className='mt-2 px-2'>{item.CardQuantity
                          }</p>
                          <button className='btn btn-light h-75' onClick={() => { dispatch(decrease(item.id)) }}>-</button>
                        </td>
                        <td >
                          <i onClick={() => {
                            dispatch(removeItem(item.id))
                          }

                          } className="fa-regular fa-trash-can"></i>
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>
            <div className='my-div'>
              <div>
                <button className="btn btn-warning" onClick={() => { dispatch(clearCart()) }}>Clear Cart</button>
              </div>
              <div className='mydiv'>
                <span>Subtotal</span>
                <span><strong>Totla Price:  ${cart.cartTotalAmount}</strong></span>
                <span><strong>Total Quantity: {cart.cartTotalQuantity}</strong></span>
                <br />
{

  loginUser._id===undefined ?
  <button className="btn btn-warning" onClick={() => {
    toast.info("Please login or signup")
    }}>Proceed to checkout</button>:
  <button className="btn btn-warning" onClick={() => {
    navigate("/address")
  }}>Proceed to checkout</button> 
 
}
              

              </div>
            </div>


          </div>  
        
      }

    </div>
  )
}

export default Cart