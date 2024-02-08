import { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

function App() {
  const url = "http://localhost:3030/students"
  const [head, setHead] = useState([])
  const [body, setBody] = useState([])
  const nav=useNavigate()

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setHead(Object.keys(res.data[0]));
        setBody(res.data)
      })
  }, [])

  const deleteData=(id)=>{
    const conf=window.confirm('Are you sure want to DELETE this Data...?')
    if(conf){
      axios.delete("http://localhost:3030/students/" + id)
      .then(res=>{
        alert('Data deleted successfully')
        nav('/')
      })
    }

  }

  return (
    <div style={{textAlign:"center"}}>
      <h2>CRUD API With Axios</h2>
      <div style={{margin:"10px"}}>
        <button><Link to='/add'>ADD STUDENT DATA</Link></button>
      </div>
      
      <div style={{marginLeft:"260px"}}>
      <table border={2} >
        <thead >
          <tr >
            {head.map((item,index)=>{
              return <th key={index} >{item}</th>
            })}
            <th style={{width:"300px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {body.map((item,index)=>{
            return <tr key={index}>
              <td style={{width:"20px"}}> {item.id}</td>
              <td style={{width:"200px",color:"green"}} > {item.name}</td>
              <td style={{width:"300px" ,color:"red"}}> {item.email}</td>
              <td style={{width:"80px" ,color:"blue"}}> {item.city}</td>
              <td>
                <button style={{margin:"10px"}}><Link to={`/update/${item.id}`}>Update</Link></button>
                <button onClick={e=> deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>


      </table>
      </div>

    </div>

  );
}

export default App;
