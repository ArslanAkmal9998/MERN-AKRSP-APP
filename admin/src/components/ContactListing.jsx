import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const ContactListing = () => {
const [contacts,setContacts]=useState([]);

const fetchContact=async()=>{
  const response=await axios.get("http://localhost:8000/contact")
  const data=await response.data.contacts;
  setContacts(data)
}

const handleDelete=async(id)=>{
  const response=await axios.delete(`http://localhost:8000/contact/${id}`)
  fetchContact();
}
// const handleUpdate=async(id)=>{
//   const response=await axios.delete(`http://localhost:8000/contact/${id}`)
//   fetchContact();
// }
useEffect(()=>{
  fetchContact();

},[])

  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Message</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((arsl)=>{
      return(
<tr>
      <th scope="row">{arsl._id}</th>
     <Link to={`/contact/${arsl._id}`}><td>{arsl.name}</td></Link> 
      <td>{arsl.email}</td>
      <td>{arsl.message}</td>     
      <td><button className="btn btn-danger" onClick={()=>handleDelete(arsl._id)}>Delete</button></td>
      <td><Link to={`/update-contact/${arsl._id}`}>Update</Link></td>

    </tr>
      )
    })}
    

  </tbody>
</table>
  )
}

export default ContactListing