import React from 'react'
import Home from './Component/Home'
import { Route, Routes } from "react-router-dom"
import Nave from './Component/Nave'
import Cart from './Component/Cart'
import PageNotFound from './Component/PageNotFound'
import "./App.css"
import ProductDetail from './Component/ProductDetail'
import Footer from './Component/Footer'
import Address from './Component/Address'
import Signin from './SignunpAndLogin/Signin'
import Signup from './SignunpAndLogin/Signup'
const App = () => {
  return (
    <div className='app'>
      <Nave />
      <main className='main'>

        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route exect path="/product/:id" element={<ProductDetail />} />
          <Route exect path="/cart" element={<Cart />} />
          <Route exect path="/sign/in" element={<Signin />} />
          <Route exect path="/sign/up" element={<Signup />} />
          <Route exect path="/address" element={<Address />} />
          <Route exect path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
