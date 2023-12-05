/* eslint-disable react/prop-types */
import "./style.css";
import nextIcon from "../../../assets/icons/nextButton.svg";
import previusIcon from "../../../assets/icons/previusButton.svg";
import useSlideshow from "../../../customsHooks/useSlideshow ";
import { products } from "../../../data/carousel";
import { CarrouselCardlide } from "../CarrouselCard/CarrouselCard";

const TRANSITION_DURATION = 500;
const SLIDE_OFFSET = -17.15;

// eslint-disable-next-line react/prop-types
export const DesktopCarrousel = ({ conteinerStyle, title, titleStyle, backGround }) => {
  const { slideshow, siguiente, anterior } = useSlideshow(
    TRANSITION_DURATION,
    SLIDE_OFFSET
  );

  return (
    <div style={backGround} className="backColor">
    <div style={conteinerStyle} className="desktopCarrouselConteiner">
      <h1 style={titleStyle} className="title">
        {title}
      </h1>
      {/* <div className="buttonConteiner">
        <button  className="previusNextButton">
          <img onClick={anterior} src={previusIcon} alt="" />
        </button>
        <button  className="previusNextButton">
          <img onClick={siguiente} src={nextIcon} alt="" />
        </button>
      </div> */}
      <div className="cardsConteinerBig">
        <div className="cardsConteiner" ref={slideshow}>
          {products.map((elem, index) => (
            <CarrouselCardlide key={index} {...elem} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
