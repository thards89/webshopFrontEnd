import "./style.css";
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const ProductInfo = () => {
    return (
      <div>
          <div><h2>Playwood arm chair</h2></div>
          <div><img style={{width:69}} src="https://icon-library.com/images/five-stars-icon/five-stars-icon-24.jpg"></img><span>(22)</span>
          &nbsp;&nbsp;&nbsp; <button>Add Review</button>
          </div>
          <div>$32,00</div>
          <div><p>Lorem ipsum sit amet, consectetur adipiscing elit. Maurits tellus porttitor purus,
              et volupat sit.</p>
          </div>
          <div><button><AiOutlineShoppingCart  />Add to Cart</button> <button><AiOutlineHeart />Favorite</button></div>
          <div><p>Categories: This will be a component</p></div>
          <div><p>Share &nbsp; &nbsp;<BsFacebook />&nbsp;<AiFillInstagram />&nbsp;<AiFillTwitterCircle /></p></div>


      </div>
    );
  };
  
  export { ProductInfo };
  