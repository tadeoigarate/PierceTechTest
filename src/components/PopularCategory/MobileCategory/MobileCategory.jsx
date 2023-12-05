import "./style.css";
import { useState } from "react";
import { imagesData } from "../../../data/mobileCategory";

export const MobileCategory = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (value, index) => {
    setTranslateValue(value);
    setActiveIndex(index);
  };

  return (
    <div className="categoryMobileConteiner">
      <h1 className="mobileCategoryTitle">
        VISITÁ LAS CATEGORÍAS MÁS POPULARES
      </h1>
      <div className="conteinerBig">
        <div
          className="cardsCategoryConteiner"
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {imagesData.map((elem, index) => (
            <div
              key={index}
              className="categoryImageMobile"
              style={{ backgroundImage: `url(${elem.image})` }}
            >
              <p>{elem.title}</p>
            </div>
          ))}
        </div>
      </div>

      <ul className="categoryList">
        {imagesData.map((_, index) => (
          <li
            key={index}
            className={`categoryItem ${
              activeIndex === index ? "activeBlack" : ""
            }`}
            onClick={() => handleClick(index * -25, index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
