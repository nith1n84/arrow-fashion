import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/Commerce";
import "./Checkout.css";

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
        console.error("Error generating token:", error);
      }
    };
    generateToken();
  }, []);

  return (
    <div>
      <form className="checkout__form" action="">
        <h4 className="checkout__subheading">Personal Details</h4>
        {renderInput("firstName", "First name", "Enter your first name")}
        {renderInput("secondName", "Second Name", "Enter your second name")}
        {renderInput("email", "Email", "Enter your email id")}

        <h4 className="checkout__subheading">Shipping Details</h4>
        {renderInput(
          "shippingName",
          "Full name",
          "Enter your shipping full name"
        )}
        {renderInput(
          "shippingStreet",
          "Street address",
          "Enter your street address"
        )}
        {renderInput("shippingCity", "City", "Enter your city")}
        {renderInput(
          "shippingPostalZipCode",
          "Postal/Zip code",
          "Enter your postal/zip code"
        )}

        <h4 className="checkout__subheading">Payment information</h4>
        {renderInput("cardNum", "Credit card number", "Enter your card number")}
        {renderInput("expMonth", "Expiry month", "Card expiry month")}
        {renderInput("expYear", "Expiry year", "Card expiry year")}
        {renderInput("ccv", "CCV", "CCV (3 digits)")}

        <button className="checkout__btn-confirm">Confirm order</button>
      </form>
    </div>
  );
};

export default Checkout;

function renderInput(name, label, placeholder) {
  return (
    <div key={name}>
      <label className="checkout__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="checkout__input"
        type="text"
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
