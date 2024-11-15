import "./dessertitem1.style.css";
import data from "../../data.json";
import imgCart from "../../../public/assets/images/icon-add-to-cart.svg";
import { useState } from "react";

const DessertItem1 = () => {
  const [itemQuantity, setItemQuantity] = useState(0);

  const handleIncreaseItemQuantity = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
    console.log(itemQuantity);
  };

  const handleDecreaseItemQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="list-items">
      {data.slice(0, 3).map((productList) => {
        return (
          <div key={productList.name} className="img-wrapper">
            <img src={productList.image.mobile} alt={productList.name} />

            <div
              className="img-cart"
              style={{
                backgroundColor: itemQuantity > 0 ? "var(--color-red" : "",
              }}
            >
              {itemQuantity <= 0 && (
                <div
                  className="cart-items"
                  onClick={handleIncreaseItemQuantity}
                >
                  <img src={imgCart} alt="" />
                  <p>Add to Cart</p>
                </div>
              )}
              {itemQuantity > 0 && (
                <div className="item-quantity" style={{}}>
                  <button onClick={handleDecreaseItemQuantity}>-</button>
                  <span> {itemQuantity} </span>
                  <button onClick={handleIncreaseItemQuantity}>+</button>
                </div>
              )}
            </div>
            <div className="items-names">
              <span>{productList.category}</span>
              <h3>{productList.name}</h3>
              <h2>{productList.price}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DessertItem1;
