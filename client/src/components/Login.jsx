import React,{useState} from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:"",
      })
      const navigate=useNavigate();
      const onChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }
      
      const onSubmit=async(e)=>{
        e.preventDefault();
        const data=await axios.post("http://localhost:8000/user/login",formData);
        const accessToken=localStorage.setItem("accessToken",data.data.token)
        const token=localStorage.getItem("accessToken")
        if(token){
            navigate("/dashboard")
        }

        setFormData({
          email:"",
          password:""
        })
      }
      
      
      const {email,password}=formData;
  return (
    <form onSubmit={onSubmit}>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email:</label>
    <input type="email" name="email" value={email} class="form-control" onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your email"/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Password:</label>
    <input type="password" name="password" value={password} class="form-control" onChange={onChange} id="exampleFormControlTextarea1" rows="3"></input>
  </div>
  <button className='btn btn-primary'>Submit</button>
  </form>
  )
}

  

export default Login