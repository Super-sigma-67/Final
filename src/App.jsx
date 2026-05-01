import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Helper from "./pages/helper";
import Footer from "./components/Footer";
import Food from "./components/Food";
import TotalMoney from "./pages/TotalMoney";

function App() {

const [totalPrice, setTotalPrice] = useState(0);
   const [allSubscriptions, setAllSubscriptions] = useState([]);



  return (
    <>
    <BrowserRouter basename="/Final/">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/helper">Helper</Link> |{" "}
        <Link to="/totalmoney">Total Money</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/helper" element={<Helper totalPrice = {totalPrice} setTotalPrice = {setTotalPrice} allSubscriptions = {allSubscriptions} setAllSubscriptions = {setAllSubscriptions} />} />
        <Route path="/totalmoney" element={<TotalMoney totalPrice = {totalPrice} setTotalPrice = {setTotalPrice} allSubscriptions = {allSubscriptions} setAllSubscriptions = {setAllSubscriptions} />} />
      </Routes>
    </BrowserRouter>

<Footer />

    </>
  );
}

export default App;
