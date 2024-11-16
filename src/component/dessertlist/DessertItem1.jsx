import "./dessertitem1.style.css";
import data from "../../data.json";
import imgCart from "../../../public/assets/images/icon-add-to-cart.svg";
import addImg from "../../../public/assets/images/icon-increment-quantity.svg";
import removeImg from "../../../public/assets/images/icon-decrement-quantity.svg";
import { useState } from "react";

const DessertItem1 = () => {
  // State to track quantities for individual items
  const [itemQuantities, setItemQuantities] = useState(
    data.slice(0, 3).map(() => ({ quantity: 0, toggled: false }))
  );

  const handleToggle = (index) => {
    setItemQuantities((prevQuantities) =>
      prevQuantities.map((item, i) =>
        i === index
          ? {
              ...item,
              toggled: !item.toggled,
              quantity: !item.toggled ? 1 : 0,
            }
          : item
      )
    );
  };

  const handleIncreaseItemQuantity = (index) => {
    setItemQuantities((prevQuantities) =>
      prevQuantities.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const handleDecreaseItemQuantity = (index) => {
    setItemQuantities((prevQuantities) =>
      prevQuantities.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 0,
              toggled: item.quantity <= 1 ? false : item.toggled,
            }
          : item
      )
    );
  };

  return (
    <div className="list-items">
      {data.slice(0, 3).map((productList, index) => (
        <div
          key={productList.name}
          className={`img-wrapper ${
            itemQuantities[index].quantity > 0 ? "highlight-border" : ""
          }}`}
        >
          <img src={productList.image.mobile} alt={productList.name} />
          <div
            className="img-cart"
            style={{
              backgroundColor:
                itemQuantities[index].quantity > 0 ? "var(--color-red)" : "",
            }}
          >
            {!itemQuantities[index].toggled ? (
              <div className="cart-items" onClick={() => handleToggle(index)}>
                <img src={imgCart} alt="Add to cart" />
                <p>Add to Cart</p>
              </div>
            ) : (
              <div className="item-quantity">
                <button onClick={() => handleDecreaseItemQuantity(index)}>
                  <img src={removeImg} alt="Decrease quantity" />
                </button>
                <span>{itemQuantities[index].quantity}</span>
                <button onClick={() => handleIncreaseItemQuantity(index)}>
                  <img src={addImg} alt="Increase quantity" />
                </button>
              </div>
            )}
          </div>

          <div className="items-names">
            <span>{productList.category}</span>
            <h3>{productList.name}</h3>
            <h2>${productList.price.toFixed(2)}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DessertItem1;
