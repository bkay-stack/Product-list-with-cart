import React from "react";
import "./modal.style.css";
import confirmImg from "../../../public/assets/images/icon-order-confirmed.svg";
import data from "../../data.json";
const ModalComfirmation = ({ toggleModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-wrapper">
        <div className="modal-content"></div>
        <div className="comfirm-header">
          <img src={confirmImg} alt="" />
          <h1>Order Comfirmed</h1>
          <p>We hope you enjoy your food</p>
        </div>
        <div className="order-section">
          <span>Order Total </span>
          <span></span>
        </div>
        <div className="start-new-order">
          <button onClick={toggleModal}>Start New Order</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComfirmation;
