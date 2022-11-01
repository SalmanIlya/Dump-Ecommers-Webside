import axios from 'axios'
import React, { useState } from 'react'
import "./style.css"
const Signin = () => {
  const [state,setstate]=useState({
    name:"",
    email:"",
    Password:"",
    ConfurmPassword:""
    
  })
  const changeHandler=(e)=>{
const {name,value}=e.target
setstate({
  ...state,
  [name]:value
})
  }
  const clickhandler=()=>{
    axios.post("http://localhost:5000/api/user/",state).then((res)=>{
      alert(res.data.massage)
    })
  }

  return (

    <div className='log-form'>

<div className='d-flex flex-column container w-25 h-50  text-center card'>
<h1 className='mt-5'>
    <strong>
      Sign in
    </strong>
  </h1>
<input onChange={(e)=>{changeHandler(e)}} value={state.name} type="text" name='name' className='m-3 input' placeholder='Name'  />
<input onChange={(e)=>{changeHandler(e)}} value={state.email} type="text" name='email' className='m-3 input' placeholder='Email'  />
<input onChange={(e)=>{changeHandler(e)}} value={state.Password} type="password" name='Password' className='m-3 input' placeholder='Password'  />
<input onChange={(e)=>{changeHandler(e)}} value={state.confurmPassword} type="password" name='confurmPassword' className='m-3 input' placeholder='ConfurmPassword'/>
<button className='btn btn-warning m-3'>
  Create Account
</button>
<div className='text-center'>
or
</div>
<button className='btn btn-warning m-3'onClick={()=>{clickhandler()}}>
Signin
</button>
</div>


    </div>
  )
}

export default Signin