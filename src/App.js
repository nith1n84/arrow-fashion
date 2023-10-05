import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/Commerce";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  console.log("Cart", cart);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const cartData = await commerce.cart.retrieve();
      setCart(cartData);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (product_id, quantity) => {
    try {
      const cart = await commerce.cart.add(product_id, quantity);
      setCart(cart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const updateCartQuantity = async (product_id, quantity) => {
    try {
      const cart = await commerce.cart.update(product_id, { quantity });
      setCart(cart);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const removeFromCart = async (product_id) => {
    try {
      const cart = await commerce.cart.remove(product_id);
      setCart(cart);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const emptyCart = async () => {
    try {
      const cart = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.error("Error emptying cart:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart?.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
