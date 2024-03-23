import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Catagories = () => {
  const [catagories, setCatagories] = useState([]);
  const loadData = async () => {
    const result = await axios.get("http://localhost:4000/catagory/get");
    setCatagories(result.data);
    // console.log(result);
  };
  useEffect(() => {
    loadData();
  });

  const deleteCatagoryById = async (id) => {
    await axios
      .delete(`http://localhost:4000/catagory/delete/${id}`)
      .then(() => alert("catagory deleted "))
      .catch(() =>
        alert("catagory cant be deleted bcz it have reference to child")
      );
  };

  return (
    <div className="container">
      <nav className=" bg-black">
        <Link to="/" className="btn btn-link text-light text-decoration-none">
          Home
        </Link>
        <Link
          to="/catagories"
          className="btn btn-link text-light text-decoration-none"
        >
          Catagories
        </Link>
        <Link
          to="/products"
          className="btn btn-link text-light text-decoration-none"
        >
          Products
        </Link>
        <Link
        to="/addc"
        className="btn btn-link text-light text-decoration-none"
      >
       Add Catagory
      </Link>
      </nav>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Catagory Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {catagories.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>
                <Link to={`/update/${c.id}`} className="btn btn-success mx-2">
                  Edit
                </Link>
                <button
                  onClick={() => deleteCatagoryById(c.id)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Catagories;
