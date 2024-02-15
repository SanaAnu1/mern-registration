import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userDetailsAPI } from '../services/AllAPI'


function StudentList() {
    const [users,setUsers]=useState([])
    
    const user=async()=>{
      try{
        const result=await userDetailsAPI()
        if(result.status===200){
        setUsers(result.data)
      }
      }catch(err){
        console.log(err);
      }
      }
 console.log(users);
    
 useEffect(()=>{
user()
 },[])
  return (
    <div className='w-100 px-5   p-2 border-top'>
        <h2 className='text-center' style={{color:"#b4034d"}}>StudentList</h2>
        <table class="table table-striped table-danger border">
        <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">E-mail</th>
      <th scope="col">Mobile</th>
      <th scope="col">DOB</th>
      <th scope="col">Gender</th>
      <th scope="col">Course</th>
    </tr>
  </thead>
  
  {users?.length>0? users?.map((users,index)=>(
    <tbody>
    <th key={index} scope="row">{users?.name}</th>
      <td>{users?.address}</td>
      <td>{users?.email}</td>
      <td>{users?.mobile}</td>
      <td>{users?.birth}</td>
      <td>{users?.gender}</td>
      <td>{users?.course}</td>

      </tbody>

)):""}
    

</table>
<button className='py-1 px-2 rounded'><Link to={'/'} style={{ textTransform: ' none' }}><i className='fa-solid fa-arrow-left' style={{ textTransform: ' none' }}><span className='ms-2' style={{ textTransform: ' none' }} >Back To Home</span></i></Link></button>
    </div>
  )
}

export default StudentList