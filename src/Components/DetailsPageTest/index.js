import { ImagesInfo, ProductInfo,Description, MoreDetails} from "..";
import "./style.css";

const DetailsPageTest = () => {
    return (
    <div>
        <div className="containerAll">
            <div className="containerPic">
             <ImagesInfo />
            </div>
            <div className="containerProd">
                <ProductInfo />
            </div>
            <div className="containerDescrip">
                <Description />
            </div>
            <div className="containerDescrip">
                <MoreDetails />
            </div>
        </div>
    </div>
    )};
  
  export { DetailsPageTest };