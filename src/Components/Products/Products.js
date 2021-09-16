import React from "react";
import Product from "./Product/Product";
import './Products.css'



const Products = ({products,onAddToCart}) => {
  return (
    <div className="products-wrapper">
      {products.map((products)=>(
          <div key={products.id}>
              <Product product={products} onAddToCart={onAddToCart}/>
          </div>
      ))}
    </div>
  );
};

export default Products;