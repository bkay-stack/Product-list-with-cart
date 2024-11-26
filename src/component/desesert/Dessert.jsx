import DessertItem1 from "../dessertlist/DessertItem1";

import "./dessert.style.css";
const Dessert = ({ cartAdd }) => {
  return (
    <div className="dessert-card">
      <div className="header">
        <h1>Dessert</h1>
      </div>
      <div className="header"></div>
      <DessertItem1 cartAdd={cartAdd} />
    </div>
  );
};

export default Dessert;
