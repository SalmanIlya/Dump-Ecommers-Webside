import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
const Nave = ({ loginUser, setLoginUser }) => {
  const navigation = useNavigate();
  const { cart } = useSelector((state) => state.cartitem);
  let quantity = cart.length;
  if (loginUser._id) {
    quantity = cart.length;
  }
  console.log(quantity);
  return (
    <nav className="navbar navbar-expand-lg   bg-light  ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/logo/logo.jpg" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler navbar-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-5 nav-ul  " id="navbarNav">
          <ul className="navbar-nav text-center j mr-5 ">
            <li className="nav-item   ">
              <NavLink
                className="nav-link mx-1 mt-1 active "
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item   ">
              <NavLink
                className="nav-link mx-1 mt-1 active "
                aria-current="page"
                to="/product"
              >
                Product
              </NavLink>
            </li>

            <li className="nav-item   ">
              <NavLink
                className="nav-link mx-1 mt-1 active "
                aria-current="page"
                to="/cart"
              >
                Cart{" "}
                {quantity === 0 ? (
                  <span></span>
                ) : (
                  <span className="bg-warning text-dark  span ">
                    {quantity}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item   ">
              <NavLink
                className="nav-link mx-1 mt-1 active "
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item  ">
              <NavLink
                className="nav-link mx-1 mt-1 active "
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            {loginUser && loginUser._id ? (
              <>
                <li
                  className="nav-link d-flex"
                  onClick={() => {
                    navigation("/user/profile");
                  }}
                >
                  {" "}
                  <p className="h-6  cursor-pointer mt-1">
                    <NavLink className="link ">
                      <img
                        src={loginUser.img}
                        height="30"
                        width="30"
                        className="rounded-circle"
                      />
                    </NavLink>
                  </p>
                </li>
                <li className="nav-item  m-2">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg btn-sm btn-xs "
                    onClick={() => {
                      setLoginUser({});
                    }}
                  >
                    <NavLink to="" className="text-decoration-none text-dark">
                      Logout
                    </NavLink>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item  m-2">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg btn-sm btn-xs "
                  >
                    <NavLink
                      to="/sign/in"
                      className="text-decoration-none text-dark"
                    >
                      Signin
                    </NavLink>
                  </button>
                </li>
                <li className="nav-item  m-2">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg btn-sm btn-xs"
                  >
                    <NavLink
                      to="/sign/up"
                      className="text-decoration-none text-dark"
                    >
                      Signup
                    </NavLink>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nave;
