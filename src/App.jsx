import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Helper from "./pages/helper";
import Footer from "./components/Footer";
import Food from "./components/Food";

function App() {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/helper">Helper</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/helper" element={<Helper />} />
      </Routes>
    </BrowserRouter>

<Footer />

    </>
  );
}

export default App;
