import React,{useState} from 'react'
import axios from "axios"

const Contactus = () => {
const [formData,setFormData]=useState({
  name:"",
  email:"",
  message:""
})

const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const onSubmit=async(e)=>{
  e.preventDefault();
  const data=await axios.post("http://localhost:8000/contact",formData);
  console.log(data)
  setFormData({
    name:"",
    email:"",
    message:""
  })
}

const {name,email,message}=formData;

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
    <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
    <textarea name="message" value={message} class="form-control" onChange={onChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className='btn btn-primary'>Submit</button>
  </form>
  )
}

export default Contactus