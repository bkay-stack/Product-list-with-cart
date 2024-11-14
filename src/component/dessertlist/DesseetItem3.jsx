import "./dessertitem1.style.css";
import data from "../../data.json";
import imgCart from "../../../public/assets/images/icon-add-to-cart.svg";

const DessertItem3 = () => {
  console.log("Component rendering");
  console.log("Data:", data);
  return (
    <div className="list-items">
      {data.slice(6, 9).map((productList) => {
        console.log("Mapping item:", productList);
        return (
          <div key={productList.name} className="img-wrapper">
            <img src={productList.image.mobile} alt={productList.name} />
            <div className="img-cart">
              {/* <div className="cart-items"> */}
              <div>
                <img src={imgCart} alt="" />
              </div>
              <p>Add to Cart</p>
              {/* </div> */}
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

export default DessertItem3;
