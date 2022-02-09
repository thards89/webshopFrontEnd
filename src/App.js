import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage, DetailsPage, Shop } from "./Pages"; // Without the index.js in the main pages folder, this will not work
import { Navbar, Banner } from "./Components";



function App() {
  return (
    <div>
      <div>
        <Navbar /> 
      </div>
      <div>
        <Banner />
      </div>
        {/* <NavLink className="NavElement" end to="/">
      Home
    </NavLink> */}
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
