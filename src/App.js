import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage, About, Shop } from "./Pages"; // Without the index.js in the main pages folder, this will not work
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        {/* <NavLink className="NavElement" end to="/">
      Home
    </NavLink> */}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
