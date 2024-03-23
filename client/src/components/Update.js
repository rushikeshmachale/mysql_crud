import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [catagory, setCatagory] = useState({ name: "" });

  const {name} = catagory;
  const handleChange = (e) => {
    setCatagory({ ...catagory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/catagory/update/${id}`,catagory)
      .then(() => navigate("/catagories"))
      .catch(() => alert("something went wrong"));
  };
  return (
    <div className="container">
      <div className="w-75  m-auto">
        Update
        <div className="col-9">
          <input type="text" className="form-control m-1" value={id} readOnly />
          <input
            type="text"
            className="form-control m-1"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter catagory"
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
