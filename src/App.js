import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import CheckoutPage from "./routes/checkout/checkout";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;
