import Dessert from "./component/desesert/Dessert";
import Cart from "./component/cart/Cart";
function App() {
  return (
    <div className="cart-wrapper">
      <Dessert />
      <div className="cart-card">
        <Cart />
      </div>
    </div>
  );
}

export default App;
