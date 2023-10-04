import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import Cart from "./containers/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
