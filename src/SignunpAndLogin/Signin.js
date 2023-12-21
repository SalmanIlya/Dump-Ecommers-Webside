import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = ({ setLoginUser }) => {
  const navagate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const sign_up = () => {
    axios
      .post("http://localhost:5000/api/admin/login", state)
      .then((res) => {
        toast.success("Successfully Login", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        setLoginUser(res.data);
        navagate("/");
      })
      .catch((err) => {
        toast.error("User Name or Password is incorrect", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  return (
    <div className="contact pt-2">
      <Helmet>
        <title>signup</title>
      </Helmet>

      <div className="d-flex flex-column container p-3 shadow-lg  text-center contact-div ">
        <h1 className="m-5">
          <strong>Login Your Account</strong>
        </h1>
        <div className="d-flex flex-column align-items-center">
          <input
            type="email"
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
            value={state.username}
            className="m-3 input"
            placeholder="Name"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <input
            type="password"
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
            value={state.password}
            className="m-3 input "
            placeholder="Password"
          />
        </div>
        <p >
           don't have an account?  <Link to="/sign/up">Signup</Link>
        </p>
        <div>
          <button
            className="btn btn-warning  m-5"
            onClick={() => {
              sign_up();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
