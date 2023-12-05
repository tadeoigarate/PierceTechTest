/* eslint-disable react/prop-types */
import "./style.css";
import { mobileProducts } from "../../../data/carousel";
import useCarrouselState from "../../../customsHooks/useCarrouselState";
import { MobileCarrouselCard } from "../CarrouselCard/MobileCarrouselCard";

export const MobileCarrousel = ({ conteinerStyle, title, titleStyle, liStyle, classNameLiActive, backGround }) => {
  const { translateValue, activeIndex, handleClick } = useCarrouselState();

  const puntos = [0, -20.5, -40.5, -60.5];


  return (
    <div style={backGround} className="backColorMobile">

    <div style={conteinerStyle} className="mobileCarrouselConteiner">
      <h1 style={titleStyle} className="mobileCarrouselTitle">
        {title}
      </h1>
      <div className="cardsMobileConteiner">
        <div className="grande" style={{ transform: `translateX(${translateValue}%)` }}>
          {mobileProducts.map((elem, index) => (
            <MobileCarrouselCard key={index} {...elem} />
          ))}
        </div>
      </div>
      <ul className="carrouselPuntos">
        {puntos.map((punto, index) => (
          <li
            key={index}
            style={liStyle}
            className={`carrouselPunto ${activeIndex === index ? classNameLiActive : ""}`}
            onClick={() => handleClick(punto, index)}
          ></li>
        ))}
      </ul>
    </div>
            </div>
  );
};
