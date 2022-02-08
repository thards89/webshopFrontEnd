import "./style.css";
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";



const Navbar = () => {
  return (
    <div className="container">
      <div></div>
      <div className="optionsContainer">
        <div className="linksContainer">
          <div className="links">
            <NavLink
              to="/"
              className="links"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="links"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="links"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              About
            </NavLink>
            &nbsp;
          </div>
        </div>
        <div>
          <input className="searchContainer" type="text"></input>
        </div>
      </div>
      <div className="iconsContainer">
        <div className="icons">
        <AiOutlineUser/> <AiOutlineShoppingCart /> <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
