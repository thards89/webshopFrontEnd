import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Homepage, About, Shop } from "./Pages";

function App() {
  return (
    <div>
      <h1>Webshop Discovery</h1>
      <div>
        {/* <NavLink className="NavElement" end to="/">
      Home
    </NavLink> */}
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
