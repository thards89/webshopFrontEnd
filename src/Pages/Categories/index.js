import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const routeParams = useParams();
  const [categories, setCategories] = useState();

  useEffect(async () => {
    async function getProdCat() {
      const response = await axios.get(
        `http://localhost:4000/products/categories/${routeParams.cat_id}`
      );
      setCategories(response.data);
      console.log(response.data);
    }
    getProdCat();
  }, []);

  return categories ? (
    <div>
      <h2>categoryId: {categories.id}</h2>
      <h2>title: {categories.title}</h2>
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export { Categories };
