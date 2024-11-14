import "./dessertitem1.style.css";
import data from "../../data.json";

const DessertItem1 = () => {
  console.log("Component rendering");
  console.log("Data:", data);

  if (!data || data.length === 0) {
    return <p>No dessert data available</p>;
  }

  return (
    <div className="list-items-one">
      <div className="item-1">
        {data.slice(0, 3).map((productList) => {
          console.log("Mapping item:", productList);
          return (
            <div key={productList.name} className="dessert-item">
              <img
                src={productList.image.mobile}
                alt={productList.name}
                className="dessert-image"
              />
              <p>{productList.name}</p>
              <p>${productList.price.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DessertItem1;
