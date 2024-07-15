import Nav from "../components/productsComponents/Nav";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import HomePage from "./HomePage";
import Products from "./Products";
import Footer from "../components/productsComponents/Footer";
import SingleProduct from "./SingleProduct";


const MainPage = () => {
  return (
    <div className="max-w-screen-xl m-auto mt-10 px-5 max-sm:mt-5">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:producId" element={<SingleProduct />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default MainPage;
