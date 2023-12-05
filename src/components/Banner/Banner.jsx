// import bannerImage from "../../assets/image/banner.png";
import "./style.css";

// eslint-disable-next-line react/prop-types
export const Banner = ({bannerImage}) => {
  return (
    <div className="bannerConteiner">
        
      <ul className="puntos">
        <li className="punto active"></li>
        <li className="punto"></li>
        <li className="punto"></li>
        <li className="punto"></li>
      </ul>

      <img src={bannerImage} alt="banner" />

    </div>
  );
};
