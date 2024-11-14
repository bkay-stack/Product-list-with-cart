import DesseetItem3 from "../dessertlist/DesseetItem3";
import DessertItem1 from "../dessertlist/DessertItem1";
import DessertItem2 from "../dessertlist/DessertItem2";
import "./dessert.style.css";
const Dessert = () => {
  return (
    <div className="dessert-card">
      <div className="header">
        <h1>Dessert</h1>
        <div className="flex">
          <DessertItem1 />
          <DessertItem2 />
          <DesseetItem3 />
        </div>
      </div>
    </div>
  );
};

export default Dessert;
