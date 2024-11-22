import DessertItem1 from "../dessertlist/DessertItem1";
import Cart from "../cart/Cart";
import "./dessert.style.css";
const Dessert = () => {
  return (
    <div className="dessert-card">
      <div className="header">
        <h1>Dessert</h1>
      </div>
      <div className="header"></div>
      <DessertItem1 />
    </div>
  );
};

export default Dessert;
