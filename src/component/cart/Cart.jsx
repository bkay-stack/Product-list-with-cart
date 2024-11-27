import "./cart.style.css";
import emptyCartIMG from "../../../public/assets/images/illustration-empty-cart.svg";

const Cart = ({ totalItems }) => {
  return (
    <div className="cartItems">
      <h1 className="cart-Items-header">Your Cart: {totalItems}</h1>
      {totalItems > 0 ? (
        <p>You have {totalItems} items in your cart!</p>
      ) : (
        <div className="empty-cart-wrapper">
          <div className="empty-cart">
            <img src={emptyCartIMG} alt="Empty Cart" />
          </div>
          <p>Your added items will appear here</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
