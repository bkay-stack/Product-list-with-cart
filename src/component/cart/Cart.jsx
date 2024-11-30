import "./cart.style.css";
import emptyCartIMG from "../../../public/assets/images/illustration-empty-cart.svg";

const Cart = ({
  totalItems,
  cartItems,
  selectedItemIDs,
  data,
  removeFromCart,
}) => {
  return (
    <div className="cartItems">
      <h1 className="cart-Items-header">Your Cart: {totalItems}</h1>
      {totalItems > 0 ? (
        <div>
          <p>You have {totalItems} items in your cart!</p>
          <ul>
            {selectedItemIDs.map((id) => {
              // Find the product name using the id
              const product = data.find((item) => item.id === id);
              return (
                <li key={id}>
                  {product ? (
                    <>
                      Product Name: {product.name} - Quantity: {cartItems[id]}
                      <button onClick={() => removeFromCart(id)}>Remove</button>
                    </>
                  ) : (
                    <p>Product not found for ID: {id}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
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
