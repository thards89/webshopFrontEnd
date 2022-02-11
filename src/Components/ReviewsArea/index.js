import "./style.css";
import { ReviewsPage } from "..";

const ReviewsArea = (props) => {
  return (
    <div>
      <div className="containerDescrip">
        <div className="title"></div>
        <div>
          {props.id}
          {props.name}
          {props.review}
          {props.id}
        </div>
      </div>
    </div>
  );
};

export { ReviewsArea };
