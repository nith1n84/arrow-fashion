import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/Commerce";
import './Checkout.css'

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken({
          type: "cart",
        });
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, []);
console.log(checkoutToken);
  return (
    <div>
      <form className="checkout__form" action="" >
        <h4 className="checkout__subheading">Personal Details</h4>
        <label className="checkout__label" htmlFor="firstName">First name</label>
        <input className="checkout__input" type="text" name="firstName" placeholder="Enter your first name" required />
        <label className="checkout__label" htmlFor="secondName">Second Name</label>
        <input className="checkout__input" type="text" name="secondName" placeholder="Enter your second name" required />
        <label className="checkout__label" htmlFor="email">Email</label>
        <input className="checkout__input" type="text" name="email" placeholder="Enter your email id" required />
        <h4 className="checkout__subheading">Shipping Details</h4>

        <label className="checkout__label" htmlFor="shippingName">Full name</label>
      <input className="checkout__input" type="text" name="shippingName" placeholder="Enter your shipping full name" required />

      <label className="checkout__label" htmlFor="shippingStreet">Street address</label>
      <input className="checkout__input" type="text" name="shippingStreet" placeholder="Enter your street address" required />

      <label className="checkout__label" htmlFor="shippingCity">City</label>
      <input className="checkout__input" type="text" name="shippingCity" placeholder="Enter your city" required />

      <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code</label>
      <input className="checkout__input" type="text" name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required />
      
      <h4 className="checkout__subheading">Payment information</h4>

      <label className="checkout__label" htmlFor="cardNum">Credit card number</label>
      <input className="checkout__input" type="text" name="cardNum" placeholder="Enter your card number" />

      <label className="checkout__label" htmlFor="expMonth">Expiry month</label>
      <input className="checkout__input" type="text" name="expMonth" placeholder="Card expiry month" />

      <label className="checkout__label" htmlFor="expYear">Expiry year</label>
      <input className="checkout__input" type="text" name="expYear" placeholder="Card expiry year" />

      <label className="checkout__label" htmlFor="ccv">CCV</label>
      <input className="checkout__input" type="text" name="ccv" placeholder="CCV (3 digits)" />

      <button className="checkout__btn-confirm">Confirm order</button>
      </form>
    </div>
  );
};

export default Checkout;
