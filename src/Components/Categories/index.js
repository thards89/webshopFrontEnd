import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineZoomIn,
} from "react-icons/ai";

const Categories = (props) => {
  return (
    <div>
      {" "}
      <ul>
        <img width="200px" src={props.mainImage} />
        <li>{props.title}</li>
        {/* <li>
          {props.price} {props.rating}
        </li>
        <li>{props.description}</li> */}
      </ul>
    </div>
  );
};

export { Categories };
