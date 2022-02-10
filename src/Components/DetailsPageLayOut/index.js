import "./style.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const DetailsPageLayOut = (props) => {
  const {openModal} = props
    return (
      <div className="general">
        <h2>{props.title}</h2>
        <div className="row">
          <img style={{width:100}} src="https://icon-library.com/images/five-stars-icon/five-stars-icon-24.jpg" />
        <button onClick={() => openModal()}>Add Review</button> 
          <span><b>Rating: </b>{props.rating}</span>
        </div>
        <p>${props.price}</p>
        <p>Description: {props.description}</p>
        <button onClick={() => console.log("Add to cart!")}><AiOutlineShoppingCart  />&nbsp;Add to Cart</button> 
        <button onClick={() => console.log("Add to cart!")}><AiOutlineHeart />&nbsp;Favorite</button>
        <p><b>Category:</b> {" "}
          {props.categoryId === 1 && "Electronics"}
          {props.categoryId === 2 && "Jewelery"}
          {props.categoryId === 3 && "Men's Clothing"}
          {props.categoryId === 4 && "Women's Clothing"}
        </p>
        <p>Share &nbsp; &nbsp;<BsFacebook />&nbsp;<AiFillInstagram />&nbsp;<AiFillTwitterCircle /></p>
      </div>
    );
  };
  
  export { DetailsPageLayOut };
  