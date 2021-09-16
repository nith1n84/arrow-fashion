import React, { useState, useEffect } from "react";
import { commerce } from "./lib/Commerce";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Components/Checkout/Checkout";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const addToCart = async (product_id, quantity) => {
    const { cart } = await commerce.cart.add(product_id, quantity);
    setCart(cart);
  };

  const updateCartQuantity = async (product_id, quantity) => {
    const { cart } = await commerce.cart.update(product_id, { quantity });

    setCart(cart);
  };

  const removeFromCart = async (product_id) => {
    const { cart } = await commerce.cart.remove(product_id);
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  //   console.log(cart.line_items);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
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
