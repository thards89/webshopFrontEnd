import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ImagesInfo,
  DetailsPageLayOut,
  ReviewsPage,
  ReviewsArea,
} from "../../Components";

const DetailsPage = (props) => {
  const routeParams = useParams();
  const [products, setProducts] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getProdDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/products/${routeParams.id}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(
        "Didn't get products, there is something wrong with the getProducts()"
      );
    }
  };

  useEffect(() => {
    getProdDetail();
  }, []);

  return products ? (
    <div className="containerAll">
      {modalIsOpen && (
        <ReviewsPage
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      <div className="picSize">
        <ImagesInfo mainImage={products.mainImage} />
      </div>
      <DetailsPageLayOut
        openModal={openModal}
        closeModal={closeModal}
        title={products.title}
        price={products.price}
        description={products.description}
        rating={products.rating}
        categoryId={products.categoryId}
      />
      <ReviewsArea />
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export { DetailsPage };
