import "./style.css";
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const Navbar = (props) => {
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
            {/* <NavLink
              to="/users" 
              className="links"
              style={({ isActive }) =>
                isActive ? { color: "white" } : undefined
              }
            >
              Users
            </NavLink> */}
            &nbsp;
          </div>
        </div>
        <div>
          <input className="searchContainer" type="text"></input>
        </div>
      </div>
      <div className="iconsContainer">
        <div className="icons">
          <AiOutlineUser size={20} />
          &nbsp;&nbsp;
          <AiOutlineShoppingCart size={20} />
          &nbsp;&nbsp;
          <AiOutlineHeart size={20} />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
