import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Shop = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      //Need to make sure that whatever is in the url of the backend, just copy paste here
      console.log(response.data[1]);
      setProducts(response.data);
    } catch (e) {
      console.log(
        "Didn't get products, there is something wrong with the getProducts()"
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Hello from Shop Page</h1>
      <p>
        {!products
          ? "I am Loading"
          : products.map((product) => {
              return (
                <div key={product.id} className="productDetailsContainer">
                  <div className="img">
                    <img width="200px" src={product.mainImage} />
                  </div>
                  <div className="productsDetails">
                    <h3>{product.title}</h3>
                    <p>
                      $ {product.price} Rating: {product.rating}
                    </p>
                    <p>Description: {product.description}</p>
                  </div>
                  <div className="buttons">
                    {" "}
                    <AiOutlineShoppingCart /> <AiOutlineHeart />
                  </div>
                </div>
              );
            })}
      </p>
    </div>
  );
};

export { Shop };
