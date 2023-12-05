import { useState } from "react";
import "./style.css";
import { topFooterData } from "../../data/topFooter";
import { TopFooterCard } from "../TopFooterCard/TopFooterCard";

export const TopFooterMobile = () => {
  const [translateValue, setTranslateValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (value, index) => {
    setTranslateValue(value);
    setActiveIndex(index);
  };

  return (
    <div className="topFooterConteinerMobile">
      <div className="conteinerBig">
        <div
          className="cardsContainer"
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {topFooterData.map((elem, index) => (
            <TopFooterCard
              key={index}
              {...elem}
              footerCardConteinerClass={"footerCardConteinerMobile"}
              textConteiner={"textConteinerMobile"}
              titleTopFooter={"titleTopFooterMobile"}
              subTitleTopFooter={"subTitleTopFooterMobile"}
            />
          ))}
        </div>
      </div>
      <ul className="categoryList">
        {topFooterData.map((_, index) => (
          <li
            key={index}
            className={`categoryItem ${activeIndex === index ? "activeBlack" : ""}`}
            onClick={() => handleClick((index * -33), index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
