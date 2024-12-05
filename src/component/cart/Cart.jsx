import "./cart.style.css";
import emptyCartIMG from "../../../public/assets/images/illustration-empty-cart.svg";
import deleteImg from "../../../public/assets/images/icon-remove-item.svg";
import checkoutImg from "../../../public/assets/images/icon-carbon-neutral.svg";

const Cart = ({ cartItems, setCartItems, addToCart, toggleModal }) => {
  // Calculate total quantity by summing individual item quantities
  const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  // Calculate total price by multiplying quantity and price for each item
  const totalPrice = cartItems.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="cartItems">
      <h1 className="cart-Items-header">Your Cart: {totalQuantity}</h1>
      {totalQuantity > 0 ? (
        <>
          <div>
            <p>You have {totalQuantity} items in your cart! </p>
          </div>
          <div className="cart-list">
            {/* Cart items list */}
            <ul className="flex-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="item-wrap">
                    <h4 className="item-name">{item.name}</h4>
                    <div className="total">
                      <div className="quantity-control">
                        <strong>
                          <span className="quantity">{item.quantity}x</span>
                        </strong>
                      </div>
                      <span className="price">@{item.price}</span>
                      <p className="total-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Delete item */}
                  <div className="delete-items">
                    <img
                      onClick={() => handleDelete(item.id)}
                      src={deleteImg}
                      alt="Remove item"
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Cart summary */}
            <div className="cart-summary">
              <span className="order-total">Order Total</span>
              <h2>Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </div>

          {/* Check out */}
          <div className="check-out">
            <div className="check-out-img">
              <img src={checkoutImg} alt="" />
            </div>
            <p>
              This is a <strong>carbon-nuetral</strong> delivery
            </p>
          </div>
          <div className="comfirm-btn">
            <button onClick={toggleModal}>Comfirm Order</button>
          </div>
        </>
      ) : (
        // Empty Cart
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
