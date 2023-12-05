import "./style.css";
import nikeShoesImage from "../../assets/image/nikeShoes.png";
import botinesImages from "../../assets/image/botines.png";

export const PopularCategory = () => {
  return (
    <div className="popularCategoryConteiner">
      <h1 className="conteinerTitle">VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>
      <div className="categoryConteiner">
        <div style={{backgroundImage: `url(${nikeShoesImage})`}} className="bigCategory">
          <h1 className="cateoryTitle">ZAPATILLAS</h1>
        </div>
        <div>
          <div style={{backgroundImage: `url(${botinesImages})`}} className="smallCategory">
            <h1 className="cateoryTitle">FÚTBOL</h1>
          </div>
          <div className="smallCategory">
            <h1 className="cateoryTitle">CALZAS</h1>
          </div>
        </div>
        <div className="bigCategory">
          <h1 className="cateoryTitle">PELOTAS</h1>
        </div>
      </div>
    </div>
  );
};
