import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "../products.css";
import ReactStars from "react-rating-stars-component";
import { Input, Space, Spin, Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import product1 from "../../assets/products1.png";
import product2 from "../../assets/products2.png";
import product3 from "../../assets/products3.png";
import product4 from "../../assets/products4.png";
import product5 from "../../assets/products5.png";
import product6 from "../../assets/products6.png";
import product7 from "../../assets/products7.png";
import product8 from "../../assets/proudcts8.png";
import product9 from "../../assets/products9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import product13 from "../../assets/product13.png";
import product14 from "../../assets/product14.png";
import product15 from "../../assets/product15.png";
import product16 from "../../assets/products16.png";
import product17 from "../../assets/product17.png";
import product18 from "../../assets/products18.png";
import product19 from "../../assets/products19.png";
import product20 from "../../assets/products20.png";
import product21 from "../../assets/products21.png";
import product22 from "../../assets/products22.png";
import product23 from "../../assets/products23.png";
import product24 from "../../assets/products24.png";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const mockProducts = [
        {
          id: 1,
          title: "Product 1",
          image: product1,
          rating: 4,
          description: "Description of Product 1",
        },

        {
          id: 2,
          title: "Product 2",
          image: product2,
          rating: 3.5,
          description: "Description of Product 2",
        },

        {
          id: 3,
          title: "Product 3",
          image: product3,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 4,
          title: "Product 4",
          image: product4,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 5,
          title: "Product 5",
          image: product5,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 6,
          title: "Product 6",
          image: product6,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 7,
          title: "Product 7",
          image: product7,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 8,
          title: "Product 1",
          image: product8,
          rating: 4,
          description: "Description of Product 1",
        },
        {
          id: 9,
          title: "Product 2",
          image: product9,
          rating: 3.5,
          description: "Description of Product 2",
        },

        {
          id: 10,
          title: "Product 3",
          image: product10,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 11,
          title: "Product 4",
          image: product11,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 12,
          title: "Product 5",
          image: product12,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 13,
          title: "Product 6",
          image: product13,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 14,
          title: "Product 7",
          image: product14,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 15,
          title: "Product 1",
          image: product15,
          rating: 4,
          description: "Description of Product 1",
        },
        {
          id: 16,
          title: "Product 2",
          image: product16,
          rating: 3.5,
          description: "Description of Product 2",
        },

        {
          id: 17,
          title: "Product 3",
          image: product17,
          rating: 5,
          description: "Description of Product 3",
        },

        {
          id: 18,
          title: "Product 4",
          image: product18,
          rating: 3,
          description: "Description of Product 3",
        },

        {
          id: 19,
          title: "Product 5",
          image: product19,
          rating: 4,
          description: "Description of Product 3",
        },

        {
          id: 20,
          title: "Product 6",
          image: product20,
          rating: 2.8,
          description: "Description of Product 3",
        },

        {
          id: 21,
          title: "Product 7",
          image: product21,
          rating: 2,
          description: "Description of Product 3",
        },
        {
          id: 22,
          title: "Product 1",
          image: product22,
          rating: 4,
          description: "Description of Product 1",
        },

        {
          id: 23,
          title: "Product 2",
          image: product23,
          rating: 3.5,
          description: "Description of Product 2",
        },

        {
          id: 24,
          title: "Product 24",
          image: product24,
          rating: 5,
          description: "Description of Product 3",
        },
      ];

      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleProductClick = (productId) => {
    console.log("Product clicked:", productId);
  };

  const getInputData = (event) => {
    setSearchValue(event.target.value);
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
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
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product"
              onClick={() => handleProductClick(product.id)}
            >
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
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
