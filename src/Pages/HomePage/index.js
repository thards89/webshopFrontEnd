import "./style.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <NavLink to="/shop">
      <img
        className="image"
        style={{ width: 650 }}
        src="https://kidzzeyezz.nl/images/news/originals/sale_2017_05_24_122833.png"
        alt="sale"
      />
    </NavLink>
  );
};

export { HomePage };
