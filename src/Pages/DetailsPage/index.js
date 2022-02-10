import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ImagesInfo, DetailsPageLayOut, ReviewsPage, Description } from "../../Components";


const DetailsPage = () => {
  const routeParams = useParams();
  const [products, setProducts] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }

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
      {modalIsOpen && <ReviewsPage modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />}
      <div className="picSize">
        <ImagesInfo
        mainImage= {products.mainImage}
        />
      </div>
      <DetailsPageLayOut
      openModal={openModal}
      closeModal={closeModal}
      title= {products.title}
      price= {products.price}
      description= {products.description}
      rating= {products.rating}
      categoryId = {products.categoryId}
      />
      <Description />
    </div>
  ) : (
    <p>Loading ...</p>
  );

};

export { DetailsPage };
