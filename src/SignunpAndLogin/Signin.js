import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <form className=' form-signin'>

    <h3 className='text-center'>Sign In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-warning ">
        Login
      </button>
    </div><br/>
<p className='text-center mb-3 ml-3'>or</p>
    <div className="d-grid">
      <button type="submit" className="btn btn-warning ">
        create account
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <Link to="#">password?</Link>
    </p>
  </form>

    )
}

export default Signin