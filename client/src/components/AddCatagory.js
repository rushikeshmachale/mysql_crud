import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    const [catagory,setCatagory] = useState({name:""})
    const {name} = catagory;
    const handleChange=(e)=>{
        setCatagory({...catagory,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:4000/catagory/add',catagory).then((()=>navigate('/catagories'))).catch(()=>alert('error while adding catagory'))
    }
  return (
    <div className='container w-50'>
    <h2 className="mt-5 h1">Add New Catagory</h2>
        <input className='form-control m-1' type="text" onChange={handleChange} name='name' value={name} placeholder='Enter Catagory name'/>
        <button className='btn btn-info m-1' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddProduct