import React from 'react'
import Home from './Component/Home/Home'
import { Route, Routes } from "react-router-dom"
import Nave from './Component/Navebar/Nave'
import Cart from './Component/Cart/Cart'
import PageNotFound from './Component/page not found/PageNotFound'
import "./App.css"
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ProductDetail from './Component/ProductDetail/ProductDetail'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Component/footer/Footer'
import Address from './Component/Address/Address'
import Signin from './SignunpAndLogin/Signin'
import Signup from './SignunpAndLogin/Signup'
import About from './Component/about/About'
import Paymentscreen from './Component/Payment/Paymentscreen'
import Product from './Component/products/MainPoroduct'
import Contact from './Component/Contact/Contact'
const App = () => {
  return (
    <div className='app'>
      <ToastContainer/>
      <Nave />
      <main className='main' >

        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/contact" element={<Contact/>} />
          <Route exect path="/product" element={<Product />} />
          <Route exect path="/about" element={<About />} />
          <Route exect path="/product/:id" element={<ProductDetail />} />
          <Route exect path="/cart" element={<Cart />} />
          <Route exect path="/sign/in" element={<Signin />} />
          <Route exect path="/sign/up" element={<Signup />} />
          <Route exect path="/address" element={<Address />} />
          <Route exect path="/cart/payment" element={<Paymentscreen />} />
          <Route  path="*" element={<PageNotFound />} />
        </Routes>
      </main> 

      <Footer />
    </div>
  )
}

export default App
