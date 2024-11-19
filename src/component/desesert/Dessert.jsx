import DessertItem1 from "../dessertlist/DessertItem1";
// import Cart from "../dessertlist/cart/Cart";
import "./dessert.style.css";
const Dessert = () => {
  return (
    <div className="dessert-card">
      <div className="header">
        <h1>Dessert</h1>
        {/* <Cart /> */}
      </div>
      <div className="flex">
        <DessertItem1 />
      </div>
    </div>
  );
};

export default Dessert;
