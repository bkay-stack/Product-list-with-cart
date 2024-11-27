import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
import data from "./data.json";
import { useState, useMemo } from "react";

function App() {
  const [cartItems, setCartItems] = useState({});

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

  const getTotalItems = useMemo(() => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }, [cartItems]);

  return (
    <div className="cart-wrapper">
      <div className="dessert-card-wrap">
        <Dessert cartAdd={addToCart} />
      </div>
      <div className="cart-card">
        <Cart
          totalItems={getTotalItems}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
