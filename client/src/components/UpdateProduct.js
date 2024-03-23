import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", catagoryId: "" });

  const { name, catagoryId } = product;
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/product/update/${id}`, product)
      .then(() => navigate("/products"))
      .catch(() => alert("something went wrong"));
  };
  return (
    <div className="container">
      <div className="w-75 m-auto">
        Update
        <div className=" col-9">
          <input type="text" className="form-control m-1" value={id} readOnly />
          <input
            type="text"
            className="form-control m-1"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Product name"
          />
          <input
            type="text"
            className="form-control m-1"
            name="catagoryId"
            value={catagoryId}
            onChange={handleChange}
            placeholder="Enter catagoryid"
          />
          <button onClick={handleSubmit} className="btn btn-info">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
