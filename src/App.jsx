import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function App() {
    const [columns,setColumns]=useState([]);
    const [rows,setRows]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3030/users").then((res)=>{
            console.log(res.data[0]);
                setColumns(Object.keys(res.data[0]));
                setRows(res.data)
        })
    },[])
  return (
    
    <>
        
      <div className="container mt-5">
        <div className="text-end"><Link to="/create" className='btn btn-primary'>Add +</Link></div>
          <table className='table'>
            <thead>
                <tr>
                    {
                        columns.map((item,index)=>{
                            return (
                                <>
                                    <th key={index}>{item}</th>
                                </>
                                
                            )
                        })

                    }
                    <th>Actions</th>

                </tr>
            </thead>
                <tbody>
                    {
                        rows.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            
                                            <button className='btn btn-success btn-sm'>Update</button>
                                        </Link>
                                        
                                            
                                            <button onClick={(e)=>handleSumbit(item.id)} className='btn btn-danger ms-1 btn-sm'>Delete</button>
                                        
                                    
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
          </table>
      </div>
      
    </>
  );
  function handleSumbit(id){
    let conf=window.confirm("O'chirishni xohlaysanmi?");
    if(conf){
        axios.delete("http://localhost:3030/users/"+id).then((res)=>{
            alert("Malumot ochirildi!");
            navigate("/")

        }).catch((err)=>console.log(err))
    }

  }
}

export default App;
