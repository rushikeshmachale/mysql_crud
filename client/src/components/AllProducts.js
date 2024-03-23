import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/product/getpag?page=${currentPage}`
      );
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container">
      <nav className=" bg-black">
        <Link to="/catagories" className="btn btn-link text-light text-decoration-none">Catagories</Link>
        <Link to="/products" className="btn btn-link text-light text-decoration-none">Products</Link>
      </nav>
      <h2>Product List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ProductId}>
              <td>{product.ProductId}</td>
              <td>{product.ProductName}</td>
              <td>{product.CatagoryName}</td>
              <td>{product.CategoryId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" text-center">
        <button
          className="btn btn-info mx-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className=" fw-bold">{currentPage}</span>
        <button className="btn btn-info mx-2" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
