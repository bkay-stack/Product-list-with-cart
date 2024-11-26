import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    const product = data.find((product) => product.id === id);
    if (!product) {
      console.log(`Product with id ${id} not found`);
      return;
    }
    console.log(`Adding to cart: ${product.name}`);
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="dessert-card-wrap">
        <Dessert cartAdd={addToCart} />
      </div>
      <div className="cart-card">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
