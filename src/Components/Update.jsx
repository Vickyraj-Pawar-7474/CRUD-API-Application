import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id }=useParams()
    const [data,setData]=useState([])
    const url = "http://localhost:3030/students/" + id
    const navigate=useNavigate()

    useEffect(()=>{
       

        axios.get(url)
        .then(res=>{
            setData(res.data)
        })
    },[])

const updateData=(event)=>{
    event.preventDefault();
    
    axios.put(url,data)
    .then(res=>{
        alert('Data updated successfully....!')
        navigate('/')

    })
}


  return (
    <div>
      <form onSubmit={updateData}>
        <label htmlFor="id">ID : </label>
        <input type='number' placeholder='Enter ID' value={data.id} disabled /> <br/>
        <label htmlFor="name">Name : </label>
        <input type='text' placeholder='Enter Name' value={data.name} onChange={e=>setData({...data,name:e.target.value})}/> <br/>
        <label htmlFor="email">Email : </label>
        <input type='text' placeholder='Enter Email' value={data.email} onChange={e=>setData({...data,email:e.target.value})}/> <br/>
        <label htmlFor="city">City : </label>
        <input type='text' placeholder='Enter City' value={data.city} onChange={e=>setData({...data,city:e.target.value})} /> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Update
