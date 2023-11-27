import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';


const ContactDetail = () => {
    const [contact,setContact]=useState({});
    const {id}=useParams();

const fetchContact=async()=>{
  const response=await axios.get(`http://localhost:8000/contact/${id}`)
  const data=await response.data.contact;
  setContact(data)
}

useEffect(()=>{
  fetchContact();

},[])
const {name,email,message}=contact
  return (
    <>
    <h1>{name}</h1>
    <p>{email}</p>
    <h3>{message}</h3>

    </>
  )
}

export default ContactDetail