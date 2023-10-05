import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, updateCartQuantity, removeFromCart, emptyCart }) => {
  //   const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <div className="empty-box">
      <h4>
        Your Cart is Empty. Go to{" "}
        <Link className="link homepage-link" to="/">
          homepage
        </Link>
      </h4>
    </div>
  );

  const FilledCart = () => (
    <div className="cart-wrapper">
      <div className="cart-item-wrapper">
        {cart?.line_items?.map((item) => (
          <div className="cart-item" key={item.id}>
            <CartItem
              item={item}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>
      <div className="confirm-box">
        <h2 className="subtotal-text">
          subtotal : {cart.subtotal.formatted_with_symbol}
        </h2>
        <div>
          <button className="empty-cart-button" onClick={emptyCart}>
            Empty Cart
          </button>
          <Link to="/checkout">
            <button className="checkout-cart-button">Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );

  if (!cart?.line_items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="cart-heading">Your Shopping Cart</h2>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
