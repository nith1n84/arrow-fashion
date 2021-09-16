import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={item.media.source} alt="" />
      </div>
      <h3>{item.name}</h3>
      {item.line_total.formatted_with_symbol}
      <br />
      <div className="update-button">
        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        {item.quantity}
        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
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
