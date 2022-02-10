import "./style.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";


const ShopLayOut = (props) => {
    return (
      <div>
          <div className="generalShopContainer">
            <h3>{props.title}</h3>
            <div className="row">
                <img style={{width:100}} src="https://icon-library.com/images/five-stars-icon/five-stars-icon-24.jpg">
                </img>
                 <span><b><i>Rating:</i> </b>{props.rating}</span>
            </div>
          <p>${props.price}</p>
          <p>Description: {props.description}</p>
          <p>
              <AiOutlineShoppingCart size={20} />
              &nbsp;<AiOutlineHeart size={20}/>&nbsp;
              <NavLink to={`/details/${props.id}`}>                     
              <AiOutlineZoomIn size={20} /></NavLink>
              </p>
          </div>
      </div>
    );
  };
  
  export { ShopLayOut };
 
