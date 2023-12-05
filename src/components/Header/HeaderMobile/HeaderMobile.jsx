import menuIcon from "../../../assets/icons/menu.svg";
import profileIcon from "../../../assets/icons/profile.svg";
import cartIcon from "../../../assets/icons/cartShopping.svg";
import searchIcon from "../../../assets/icons/search.svg";
import crossIcon from "../../../assets/icons/cross.svg";

import "./styles.css";
import { useState } from "react";
import { headerData } from "../../../data/headerData";
import { MenuMobile } from "../../MenuMobile/MenuMobile";

export const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="headerMobileConteiner">
      <div className="topHeaderMobileConteiner">
        <button onClick={handleMenuClick}>
          <img src={menuIcon} alt="" />
        </button>
          <h1 className="hearderMobileTitle">Mi Tienda</h1>
        <div style={{ display: "flex" }}>
          <div className="iconConteiner">
            <img className="icon" src={profileIcon} alt="Profile icon" />
            <img className="icon" src={cartIcon} alt="CartShoping icon" />
          </div>
        </div>
      </div>
      <div className="inputConteiner">
        <input type="text" />
        <button>
          <img src={searchIcon} alt="Search icon" />
        </button>
      </div>
      {menuOpen && (
        <MenuMobile
          crossIcon={crossIcon}
          handleMenuClick={handleMenuClick}
          headerData={headerData && headerData}
        />
      )}
    </div>
  );
};
