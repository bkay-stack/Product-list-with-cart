import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
import data from "./data.json";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  // Update totalItems when cartItems changes
  useEffect(() => {
    const total = Object.values(cartItems).reduce(
      (sum, quantity) => sum + quantity,
      0
    );
    setTotalItems(total);
    console.log("Cart Item:", cartItems);
    console.log("selectedItemIDs:", Object.keys(cartItems));
  }, [cartItems]);

  const addToCart = (id) => {
    const product = data.find((product) => product.id === id);
    if (!product) {
      console.log(`Product with id ${id} not found`);
      return;
    }
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1,
    }));
  };

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

  // Extract selected item IDs
  const selectedItemIDs = Object.keys(cartItems);
  selectedItemIDs.map((id) => {
    console.log("Looking for product with ID:", id);
    const product = data.find((item) => item.id === id);
    console.log("Found Product:", product);
  });

  return (
    <div className="cart-wrapper">
      <div className="dessert-card-wrap">
        <Dessert cartAdd={addToCart} />
      </div>
      <div className="cart-card">
        <Cart
          totalItems={totalItems}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          selectedItemIDs={selectedItemIDs}
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
