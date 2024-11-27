import DessertItem1 from "../dessertlist/DessertItem1";
import "./dessert.style.css";

const Dessert = ({ cartAdd }) => {
  return (
    <div className="dessert-card">
      <div className="header">
        <h1>Desserts</h1>
      </div>
      <DessertItem1 cartAdd={cartAdd} />
    </div>
  );
};

export default Dessert;
