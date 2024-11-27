import "./dessertitem1.style.css";
import data from "../../data.json";
import imgCart from "../../../public/assets/images/icon-add-to-cart.svg";
import addImg from "../../../public/assets/images/icon-increment-quantity.svg";
import removeImg from "../../../public/assets/images/icon-decrement-quantity.svg";
import { useState, useEffect } from "react";

const DessertItem1 = ({ cartAdd }) => {
  const [itemQuantities, setItemQuantities] = useState(() => {
    const savedData = localStorage.getItem("itemQuantities");
    return savedData
      ? JSON.parse(savedData)
      : data.map(() => ({ quantity: 0, toggled: false }));
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
  }, [itemQuantities]);

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

    if (!itemQuantities[index].toggled) {
      cartAdd(data[index].id);
    }
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
    cartAdd(data[index].id);
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
      {/* Product list */}
      {data.map((product, index) => (
        <div
          key={product.id}
          className={`img-wrapper ${
            itemQuantities[index].quantity > 0 ? "highlight-border" : ""
          }`}
        >
          <img src={product.image.mobile} alt={`${product.name}`} />
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
            <span>{product.category}</span>
            <h3>{product.name}</h3>
            <h2>${product.price.toFixed(2)}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DessertItem1;
