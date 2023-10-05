import React from "react";
import "./Product.css";

function Product({ product, onAddToCart }) {
  const { image, name, price, description } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image.url} alt={name} />
      </div>
      <h3>{name}</h3>
      <div>Price : {price.formatted_with_symbol}</div>
      <div className="product-desc-wrapper">
        <span
          className="product-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => onAddToCart(product.id, 1)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
