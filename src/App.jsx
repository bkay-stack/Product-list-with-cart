import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Update totalItems when cartItems changes

  const addToCart = (id) => {
    const productItem = data.find((product) => product.id === id);
    setCartItems((prevItems) => {
      return [...prevItems, productItem];
    });
  };

  console.log(cartItems);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[id] > 1) {
        updatedItems[id] -= 1;
      } else {
        delete updatedItems[id];
      }
      return updatedItems;
    });
  };

  return (
    <div className="cart-wrapper">
      <div className="dessert-card-wrap">
        <Dessert cartAdd={addToCart} />
      </div>
      <div className="cart-card">
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          setCartItems={setCartItems}
          removeFromCart={removeFromCart}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
