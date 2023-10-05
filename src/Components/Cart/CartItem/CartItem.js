import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
  const { image, name, line_total, quantity } = item;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image.url} alt={name} />
      </div>
      <h3>{name}</h3>
      {line_total.formatted_with_symbol}
      <br />
      <div className="update-button">
        <button onClick={() => updateCartQuantity(item.id, quantity - 1)}>
          -
        </button>
        {quantity}
        <button onClick={() => updateCartQuantity(item.id, quantity + 1)}>
          +
        </button>
        <button onClick={() => removeFromCart(item.id)}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
