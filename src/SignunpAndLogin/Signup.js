import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = ({ setLoginUser }) => {
  const navagate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [img, SetImg] = useState(null);
  const [password, SetPassword] = useState("");

  const sign_up = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("img", img);
    formData.append("password", password);
    axios
      .post("http://localhost:5000/api/admin/user", formData)
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
  const handleChange = (e) => {
    SetImg(e.target.files[0]);
  };
  return (
    <div className="contact pt-2">
      <Helmet>
        <title>signup</title>
      </Helmet>

      <div className="d-flex flex-column container p-3 shadow-lg  text-center contact-div ">
        <h1 className="m-5">
          <strong>Create Your Account</strong>
        </h1>
        <div className="d-flex flex-column align-items-center">
          <input
            type="email"
            name="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={username}
            className="m-3 input"
            placeholder="Name"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <input
            type="email"
            name="email"
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
            value={email}
            className="m-3 input"
            placeholder="Email"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <input
            type="password"
            name="password"
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            value={password}
            className="m-3 input "
            placeholder="Password"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <input
            type="file"
            onChange={handleChange}
            className="m-3 input "
            placeholder="Password"
          />
        </div>
        <p>
          don't have an account? <Link to="/sign/in">Signup</Link>
        </p>
        <div>
          <button
            className="btn btn-warning  m-5"
            onClick={() => {
              sign_up();
            }}
          >
            Create accout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
