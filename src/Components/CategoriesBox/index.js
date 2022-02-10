import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Categories } from "../Categories";

const CategoriesBox = () => {
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categories");
      //Need to make sure that whatever is in the url of the backend, just copy paste here
      console.log("Categories Page", response.data);
      setCategories(response.data);
    } catch (e) {
      console.log(
        "Didn't get categories, there is something wrong with the getCategories()"
      );
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      {/* <h4>
        Categories Box{" "}
        {categories.map((category) => {
          return category.title;
        })}{" "}
      </h4>
      <div>
        <div>
          <Categories />{" "}
        </div>{" "}
      </div> */}
    </div>
  );
};
export { CategoriesBox };
