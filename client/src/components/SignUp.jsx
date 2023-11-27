import React,{useState} from 'react'
import axios from "axios"
import {toast} from "react-toastify"

const SignUp = () => {
const [formData,setFormData]=useState({
  name:"",
  email:"",
  phone:"",
  password:"",
  cpassword:""
})

const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const onSubmit=async(e)=>{
  e.preventDefault();
  if(password !== cpassword){
toast.warning("Your password and confirm password do not match!")
  }
  else{
  const data=await axios.post("http://localhost:8000/user",formData);
  setFormData({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""
  })
}
}

const {name,email,phone,password,cpassword}=formData;

  return (
    <form onSubmit={onSubmit}>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Name:</label>
    <input type="text" name="name" value={name} class="form-control" onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your name"/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email:</label>
    <input type="email" name="email" value={email} class="form-control" onChange={onChange} id="exampleFormControlInput1" placeholder="Enter your email"/>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Phone:</label>
    <input name="phone" value={phone} class="form-control" onChange={onChange} id="exampleFormControlTextarea1" rows="3"></input>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Password:</label>
    <input type="password" name="password" value={password} class="form-control" onChange={onChange} id="exampleFormControlTextarea1" rows="3"></input>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Confirm Password:</label>
    <input  type="password" name="cpassword" value={cpassword} class="form-control" onChange={onChange} id="exampleFormControlTextarea1" rows="3"></input>
  </div>
  <button className='btn btn-primary'>Submit</button>
  </form>
  )
}

export default SignUp