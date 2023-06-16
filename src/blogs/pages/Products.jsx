import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import "../products.css";
import ReactStars from "react-rating-stars-component";
import { Input, Space, Spin, Button } from "antd";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setRecords(res.data.products);
        setLoading(false);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => {
        setError(err); // Set the error state
        setLoading(false);
      });
  }, []);

  const handleProductClick = (productId) => {
    console.log("Product clicked:", productId);
  };

  const getInputData = (event) => {
    setFilteredProducts(
      records.filter((r) =>
        r.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  if (error) {
    return <div>Error: {error.message}</div>; // Display the error message
  }

  return (
    <div className="product-container">
      <h2>Product Reviews</h2>

      <Space className="search-bar">
        <Input placeholder="Search products..." onChange={getInputData} />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Space>
      <div className="products">
        {loading ? (
          <div className="Loading">
            <Spin size="large" />
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="Empty">
            <h3>No products found</h3>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="product"
              onClick={() => handleProductClick(product.id)}
            >
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <ReactStars
                name={`rating-${product.id}`}
                value={product.rating}
                editing={false}
              />
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Products;
