import "./style.css";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = (props) => {
  return (
    <div className="footer">
      <div>
        <h3>
          <b>Categories</b>
        </h3>
        <p>Jewelery</p>
        <p>Men's Clothing</p>
        <p>Women's Clothing</p>
        <p>Electronics</p>
      </div>
      <div>
        <h3>
          <b>My Account</b>
        </h3>
        <p>My Account</p>
        <p>My Orders</p>
      </div>
      <div>
        <p>
          <h3>
            <b>Follow Us</b>
          </h3>
        </p>
        <BsFacebook />
        &nbsp;
        <AiFillInstagram />
        &nbsp;
        <AiFillTwitterCircle />
      </div>
    </div>
  );
};
export { Footer };
