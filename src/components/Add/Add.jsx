import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [inputData,setInputData]=useState({name:"",email:""})
    const navigate=useNavigate();
    const handleSumbit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3030/users",inputData).then((res)=>{
            alert("Malumot qo'shildi!")
            navigate("/")
        }).catch((err)=>console.log(err))
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-light p-5">
            <form onSubmit={handleSumbit} className='w-100' action="">
            <div className='w-100'>
                <label className='w-100' htmlFor="">
                    Name:
                    <input onChange={(e)=>setInputData({...inputData,name:e.target.value})} type="text" className='form-control w-100 mt-2' />
                </label>
            </div>
            <div className='w-100'>
                <label className='w-100' htmlFor="">
                    Email:
                    <input onChange={(e)=>setInputData({...inputData,email:e.target.value})} type="email" className='form-control w-100 mt-2 mb-2' />
                </label>
            </div>
            <button type='submit' className='btn btn-info'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Add
