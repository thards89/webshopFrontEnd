import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ShopLayOut, ImagesInfoSmall } from "../../Components";

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
      {/* <h1>Hello from Shop Page</h1> */}
      <p>
        {!products
          ? "I am Loading"
          : products.map((product) => {
              return (
                <div className="containerAllShop" key={product.id}>
                  <div className="mainContainer">
                    <div>
                      <ImagesInfoSmall mainImage={product.mainImage} />
                    </div>
                    <div>
                      <ShopLayOut
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        description={product.description}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
      </p>
    </div>
  );
};

export { Shop };
