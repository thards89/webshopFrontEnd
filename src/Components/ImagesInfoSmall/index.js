import "./style.css";

const ImagesInfoSmall = (props) => {
    return (
      <div className="picContainer">
          <div className="smallPic">
        <img style={{ width: 150}} src={props.mainImage} alt="product"></img>
          </div>
     </div>
    );
  };
  
  export { ImagesInfoSmall };


