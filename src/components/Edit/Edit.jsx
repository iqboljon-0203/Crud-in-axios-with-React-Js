import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const Edit = () => {
    const {id}=useParams();
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3030/users/"+id).then((res)=>setData(res.data)).catch((err)=>console.log(err))
    },[id])
    const handleSumbit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3030/users/"+id,data).then((res)=>{
            alert("Ma'lumot yangilandi!")
            navigate("/")
        })
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSumbit} className='w-100' action="">
            <div className='w-100'>
                <label className='w-100' htmlFor="">
                    ID:
                    <input  type="text" disabled value={data.id} className='form-control w-100 mt-2' />
                </label>
            </div>
            <div className='w-100'>
                <label className='w-100' htmlFor="">
                    Name:
                    <input onChange={(e)=>setData({...data,name:e.target.value})} type="text" value={data.name} className='form-control w-100 mt-2' />
                </label>
            </div>
            <div className='w-100'>
                <label className='w-100' htmlFor="">
                    Email:
                    <input onChange={(e)=>setData({...data,email:e.target.value})}  type="email" value={data.email} className='form-control w-100 mt-2 mb-2' />
                </label>
            </div>
            <button type='submit' className='btn btn-info'>Updata</button>
            </form>
        </div>
      
    </div>
  )
}

export default Edit
