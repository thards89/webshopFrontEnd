import "./style.css";
import Fan from "./Fan.png";

const Banner = () => {
  return (
    <div>
      <div className="containerBanner">
        <div className="conatinerText">
          <p>Products for every need, at the distance of a click.</p>
        </div>
        <div className="containerImg">
          <img style={{ width: 400 }} src={Fan} alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export { Banner };
