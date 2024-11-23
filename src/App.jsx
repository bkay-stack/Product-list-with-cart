import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
function App() {
  return (
    <div className="cart-wrapper">
      <div className="dessert-card-wrap">
        <Dessert />
      </div>
      <div className="cart-card">
        <Cart />
      </div>
    </div>
  );
}

export default App;
