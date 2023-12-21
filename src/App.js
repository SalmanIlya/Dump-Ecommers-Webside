// import React, { useContext } from 'react'
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Nave from "./Component/Navebar/Nave";
import Cart from "./Component/Cart/Cart";
import PageNotFound from "./Component/page not found/PageNotFound";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Component/footer/Footer";
import Address from "./Component/Address/Address";
import Signin from "./SignunpAndLogin/Signin";
import Signup from "./SignunpAndLogin/Signup";
import About from "./Component/about/About";
import Paymentscreen from "./Component/Payment/Paymentscreen";
import Product from "./Component/products/MainPoroduct";
import Contact from "./Component/Contact/Contact";
import { useState } from "react";
import Profile from "./Component/Profile/Profile";
import Cookies from "js-cookie";
const App = () => {
  const [loginUser, setLoginUser] = useState({});
  const [ProductId, SetProductId] = useState("");
  const [ProductTitle, setProductTitle] = useState("");
  const [ProductImg, setProductImg] = useState("");
  const [quantity, SetQuantity] = useState();
  Cookies.set(loginUser.accessTocken, "true");

  return (
    <div className="app">
      <ToastContainer />

      <main className>
        <Routes>
          <Route
            exect
            path="/"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />
                <Home loginUser={loginUser} />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/contact"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/product"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />

                <Product loginUser={loginUser} />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/about"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />

                <About />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/:id"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />

                <ProductDetail loginUser={loginUser} />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/cart"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />
                <Cart
                  SetProductId={SetProductId}
                  setProductTitle={setProductTitle}
                  setProductImg={setProductImg}
                  SetQuantity={SetQuantity}
                  loginUser={loginUser}
                />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/sign/in"
            element={<Signin setLoginUser={setLoginUser} />}
          />
          <Route
            exect
            path="/sign/up"
            element={<Signup setLoginUser={setLoginUser} />}
          />
          <Route
            exect
            path="/address"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />
                <Address
                  ProductId={ProductId}
                  ProductTitle={ProductTitle}
                  ProductImg={ProductImg}
                  quantity={quantity}
                  loginUser={loginUser}
                />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/cart/payment"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />
                <Paymentscreen />
                <Footer />
              </>
            }
          />
          <Route
            exect
            path="/user/profile"
            element={
              <>
                <Nave loginUser={loginUser} setLoginUser={setLoginUser} />

                <Profile loginUser={loginUser} />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
