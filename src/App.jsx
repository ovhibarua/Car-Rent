import CarCategory from "./components/CarCategory/CarCategory";
import CarDetails from "./components/CarDetails/CarDetails";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Payment from "./components/Payments.jsx/Payment";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CarCategory />} />
        <Route path="/carDetails" element={<CarDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
