import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const url = "http://localhost:3030/students"
    const [input,setInput]=useState({id:null, name:'',email:'',city:''})
    const navigate=useNavigate()

const saveData=(e)=>{
    e.preventDefault();
    
    axios.post(url,input)
    .then(res=>{
        alert('Data added successfully....!')
        navigate("/")
    })
}

  return (
    <div>
        <h2>Add students Information</h2>
      <form onSubmit={saveData}>
        <label htmlFor="id">ID : </label>
        <input type='number' placeholder='Enter ID' onChange={e=> setInput({...input,id:e.target.value})}/> <br/>
        <label htmlFor="name">Name : </label>
        <input type='text' placeholder='Enter Name' onChange={e=> setInput({...input,name:e.target.value})}/> <br/>
        <label htmlFor="email">Email : </label>
        <input type='text' placeholder='Enter Email' onChange={e=> setInput({...input,email:e.target.value})}/> <br/>
        <label htmlFor="city">City : </label>
        <input type='text' placeholder='Enter City' onChange={e=> setInput({...input,city:e.target.value})}/> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Add
