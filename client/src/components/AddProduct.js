import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()
    const [product,setProduct] = useState({name:"",catagoryId:""})
    const {name,catagoryId} = product;
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        await axios.post('http://localhost:4000/product/add',product).then((()=>navigate('/products'))).catch(()=>alert('error while adding product'))
    }
  return (
    <div className='container w-50'>
    <h2 className="mt-5 h1">Add New Product</h2>
        <input className='form-control m-1' type="text" onChange={handleChange} name='name' value={name} placeholder='Enter Product name'/>
        <input className='form-control m-1' type="text" onChange={handleChange} name='catagoryId' value={catagoryId} placeholder='Enter Catagory Id'/>
        <button className='btn btn-info m-1' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddProduct