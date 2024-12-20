import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
import data from "./data.json";
import { useState } from "react";
import ModalComfirmation from "./component/modal/ModalComfirmation";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal
  const toggleModal = () => {
    setIsModalOpen((prevModal) => !prevModal);
    console.log("clicked");
  };

  // Update totalItems when cartItems changes

  const addToCart = (id) => {
    setCartItems((prevItems) => {
      const productItem = data.find((product) => product.id === id);

      if (prevItems.length > 0) {
        const existingItem = prevItems.find((product) => product.id === id);

        if (existingItem) {
          // If item already exists in cart, increase its quantity
          return prevItems.map((prevItem) =>
            prevItem.id === id
              ? {
                  ...prevItem,
                  quantity: prevItem.quantity + 1,
                  totalPrice: (prevItem.quantity + 1) * prevItem.price,
                }
              : prevItem
          );
        } else {
          // If item is not in cart, add it with quantity 1
          return [
            ...prevItems,
            { ...productItem, quantity: 1, totalPrice: productItem.price },
          ];
        }
      } else {
        // If cart is empty, add the first item
        return [{ ...productItem, quantity: 1, totalPrice: productItem.price }];
      }
    });
  };

  console.log(cartItems);

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
          data={data}
          toggleModal={toggleModal}
        />
      </div>
      {isModalOpen && (
        <ModalComfirmation toggleModal={toggleModal} cartItems={cartItems} />
      )}
    </div>
  );
}

export default App;
