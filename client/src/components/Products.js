import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesize = 10;
  const loadData = async () => {
    const result = await axios.get(
      `http://localhost:4000/product/get?page=${currentPage}&pagesize=${pagesize}`
    );
    setProduct(result.data);
    // console.log(result);
  };
  useEffect(() => {
    loadData();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((pre) => pre + 1);
  };

  const prePage = () => {
    setCurrentPage((pre) => Math.max(pre - 1, 1));
  };
  const deleteProductById = async (id) => {
    await axios
      .delete(`http://localhost:4000/product/delete/${id}`)
      .then(() => {
        alert("catagory deleted ");
        loadData();
      })
      .catch(() =>
        alert("catagory cant be deleted bcz it have reference to child")
      );
  };

  return (
    <div className="container">
      <nav className=" bg-black">
        <Link to="/" className="btn btn-link text-light text-decoration-none">
          Home
        </Link>{" "}
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
          to="/addp"
          className="btn btn-link text-light text-decoration-none"
        >
          Add Product
        </Link>
      </nav>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Catagory Name</th>
            <th>Catagory ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.catagoryId}</td>
              <td>
                <Link to={`/updatep/${c.id}`} className="btn btn-success mx-2">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProductById(c.id)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-info"
          onClick={prePage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <bspan>Page {currentPage}</bspan>
        <button className="btn btn-info" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
