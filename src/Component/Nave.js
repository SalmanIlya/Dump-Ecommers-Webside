import React from 'react'
import { Link } from "react-router-dom"
import {  useSelector } from "react-redux"

const Nave = () => {
          // const dispatch=useDispatch()
          const {cart} = useSelector((state) => state.cartitem)
          const quantity=cart.length
          return (
<nav className="navbar navbar-expand-lg  bg-light navbar-fixed-top  fixed-top ">
                    <div className="container">
                                        <Link className="navbar-brand  " to="/">Navbar</Link>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                  <span className="navbar-toggler-icon"></span>
                                        </button>
                <div className="collapse navbar-collapse ml-5 nav-ul " id="navbarNav">
                                     <ul className="navbar-nav ">
                                                            <li className="nav-item  ">
                                                                      <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                                                            </li>
                                             <li className="nav-item  ">
                                             <Link className="nav-link active " aria-current="page" to="/cart">Cart {
                                                   quantity === 0 ? <span></span> :
                                               <span className='bg-warning text-dark  span' >{quantity}</span>}</Link>
                                                            </li>
                                        <li className='nav-item me-3'><button type="button" className="btn btn-warning "><Link to="/sign/in" className='text-decoration-none text-dark'>Signin</Link></button></li>
                                        <li className='nav-item'><button type="button" className="btn btn-outline-warning"><Link to="/sign/up" className='text-decoration-none text-dark'>Signup</Link></button></li>

                                                  </ul>
                                        </div>
                              </div>
                    </nav>


          )
}

export default Nave
