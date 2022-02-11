import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, About, Shop, DetailsPage, Categories } from "./Pages";
import { Navbar, Banner, Footer } from "./Components";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Banner />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/users" element={<Users />} /> */}
        <Route path="/details/:id" element={<DetailsPage />} />
        {/* <Route path="/shop/categories/:id" element={<Categories />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
