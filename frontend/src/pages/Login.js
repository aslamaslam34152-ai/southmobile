import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
   
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        const form=document.querySelector('form')
        e.preventDefault()
        axios.post('http://localhost:8000/login',{email,password})
        .then(result=>{console.log(result)
        if(result.data==='success'){
          navigate('/')
        }
        }
      )
        .catch(err=>console.log(err))
      setEmail("");
      setPassword("")
        form.reset()

    }
  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
       
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}/>
  </div>

  <button type="submit" class="btn btn-primary">Login</button><br /><br />

<Link to='/register' className='btn btn-primary'>Register</Link>
</form>
    </div>
  )
}

export default Login

