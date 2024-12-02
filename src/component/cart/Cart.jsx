import "./cart.style.css";
import emptyCartIMG from "../../../public/assets/images/illustration-empty-cart.svg";
import deleteImg from "../../../public/assets/images/icon-remove-item.svg";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((acc, cur) => {
    return (acc = acc + cur.price);
  }, 0);

  const totalQuantity = cartItems.length;

  const handleDelte = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    console.log("delete");
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
            <ul className="flex-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>{item.name}</div>
                  <div className="delete-items">
                    <img
                      onClick={() => handleDelte(item.id)}
                      src={deleteImg}
                      alt=""
                    />{" "}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
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
