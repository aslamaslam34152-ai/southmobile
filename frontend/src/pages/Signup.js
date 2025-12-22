import axios from 'axios'
import React, { useState, } from 'react'
import { Link } from 'react-router-dom';


function Sign() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    const handleSubmit=(e)=>{
        const form=document.querySelector('form')
        e.preventDefault();
        alert(123);
        axios.post('http://localhost:8000/register',{name,email,password})
        .then(result=>{
            console.log(result)
            
        })
        
        .catch(err=>console.log(err))
     
        form.reset()

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <button type="submit" class="btn btn-primary">Register</button><br /><br />

<a href="/login">Already Have an account?</a><br /><br />
<Link to='/login' className='btn btn-primary'>Login</Link>
</form>
    </div>
  )
}

export default Sign