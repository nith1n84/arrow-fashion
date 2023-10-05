import React from "react";
import Product from "./Product/Product";
import "./Products.css";

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default Products;