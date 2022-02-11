import "./style.css";

const ImagesInfo = (props) => {
  return (
    <div className="picContainer">
      <div className="largePic">
        <img style={{ width: 276 }} src={props.mainImage} alt="product"></img>
      </div>
    </div>
  );
};

export { ImagesInfo };
