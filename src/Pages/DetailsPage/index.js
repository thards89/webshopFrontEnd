import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ProductInfo } from "../../Components/ProductInfo";
import { ImagesInfo } from "../../Components";


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
    <div className="containerAll">
      <div className="picSize">
      <ImagesInfo
      mainImage= {products.mainImage}
      />
      </div>
      <div>
      <ProductInfo
      title= {products.title}
      price= {products.price}
      description= {products.description}
      rating= {products.rating}
      categoryId = {products.categoryId}
      /> 
      </div>
      </div>
  ) : (
    <p>Loading ...</p>
  );

};

export { DetailsPage };
