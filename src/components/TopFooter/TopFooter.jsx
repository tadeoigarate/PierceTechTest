import { topFooterData } from "../../data/topFooter";
import { TopFooterCard } from "../TopFooterCard/TopFooterCard";
import "./style.css";

export const TopFooter = () => {
  return (
    <div className="topFooterConteiner">
      {topFooterData.map((elem, index) => (
        <TopFooterCard
        key={index}
        {...elem}
        footerCardConteinerClass={"footerCardConteiner"}
        textConteiner={"textConteiner"}
        titleTopFooter={"titleTopFooter"}
        subTitleTopFooter={"subTitleTopFooter"}
      />
      ))}
    </div>
  );
};
