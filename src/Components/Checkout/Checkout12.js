import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Checkout = () => {
  const [shippingData, setShippingData] = useState({});
  const next = (data) => {
    setShippingData(data);
  };

  return (
    <Router>
      <div>
        <h2>Checkout</h2>
        <hr />
        <Switch>
          <Route exact path="/checkout">
            <AddressForm next={next} />
          </Route>
          <Route exact path="/payment">
            <PaymentForm shippingData={shippingData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Checkout;
