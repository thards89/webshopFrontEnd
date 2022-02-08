import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const DetailsPage = () => {
  const routeParams = useParams();
  const [products, setProducts] = useState();

  useEffect(async () => {
    async function getProdDetail() {
      const response = await axios.get(
        `http://localhost:4000/products/${routeParams.id}`
      );
      setProducts(response.data);
      console.log(response.data);
    }
    getProdDetail();
  }, []);
  
  
  
  
  return products ? (
    <div>
      <p></p>
      <h2>Title: {products.title}</h2>
      <h2>Price: {products.price}</h2>
      <h2>Description: {products.description}</h2>
      <h2>Rating: {products.rating}</h2>
      </div>
  ) : (
    <p>Loading ...</p>
  );

};

export { DetailsPage };
