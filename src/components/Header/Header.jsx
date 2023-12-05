import searchIcon from "../../assets/icons/search.svg";
import profileIcon from "../../assets/icons/profile.svg";
import cartIcon from "../../assets/icons/cartShopping.svg";
import "./styles.css";
import { headerData } from "../../data/headerData";
import { CategoryHeader } from "../CategoryHeader/CategoryHeader";

export const Header = () => {
  return (
    <div className="headerConteiner">
      <div className="topConteiner">
        <h1 className="headerTitle">Mi Tienda</h1>
        <div className="topRightConteinerHeader">
          <div className="searchConteiner">
            <input type="text" />
            <button>
              <img src={searchIcon} alt="Search icon" />
            </button>
          </div>
          <div className="topRightConteiner">
            <div className="profileConteiner">
              <img src={profileIcon} alt="Profile icon" />
              <h1 className="profileTitle">Mi cuenta</h1>
            </div>
          <img src={cartIcon} alt="CartShoping icon" />
          </div>
        </div>
      </div>

      <div className="bottomConteiner">
        {headerData.map((elem, index) => (
          <CategoryHeader
            key={index}
            {...elem}
            conteinerClassName={"headerCategoryConteiner"}
          />
        ))}
      </div>
    </div>
  );
};
