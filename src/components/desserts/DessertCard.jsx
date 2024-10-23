import React from "react";
import DessertCardHeader from "./dessertheader/DessertCardHeader";

const DessertCard = () => {
  return (
    <div className="dessert">
      <DessertCardHeader />
      <div className="list-items"></div>
    </div>
  );
};

export default DessertCard;
