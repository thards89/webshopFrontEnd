import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage, DetailsPage, Shop } from "./Pages"; // Without the index.js in the main pages folder, this will not work
import { Navbar, ProductInfo, ImagesInfo, DetailsPageTest, Description } from "./Components";
import { FaBeer } from "react-icons/fa";


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
        <Route path="/details/:id" element={<DetailsPageTest />} />
      </Routes>
    </div>
  );
}

export default App;
