import React from "react";
import "./modal.style.css";

import confirmImg from "../../../public/assets/images/icon-order-confirmed.svg";

const ModalConfirmation = ({ toggleModal, cartItems }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div className="modal-background">
      <div className="modal-wrapper">
        {/* Confirmation Header */}
        <div className="confirm-header">
          <img src={confirmImg} alt="Order Confirmed" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food</p>
        </div>

        {/* Items Details */}
        <div className="items-details">
          <ul className="ul-items">
            {cartItems.map((item) => (
              <li key={item.id} className="item-row">
                <div className="items-content">
                  <div className="img-item-row">
                    <img
                      src={item.image.mobile}
                      alt={item.name}
                      className="item-row-img"
                    />
                  </div>
                  <div className="total">
                    <div className="quantity-control">
                      <strong>
                        <span className="quantity">{item.quantity}x</span>
                      </strong>
                    </div>
                    <span className="price">@{item.price}</span>
                    <div className="flex">
                      <p className="total-price-comfirmation">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            {/* Order Summary */}
            <div className="order-section">
              <span className="order-total">Order Total</span>
              <h2 className="total-price">${totalPrice.toFixed(2)}</h2>
            </div>
          </ul>
        </div>

        {/* Start New Order Button */}
        <div className="start-new-order">
          <button onClick={toggleModal}>Start New Order</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmation;