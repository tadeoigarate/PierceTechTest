/* eslint-disable react/prop-types */
import { CategoryHeader } from "../CategoryHeader/CategoryHeader"

export const MenuMobile = ({handleMenuClick, crossIcon, headerData}) => {

    console.log(headerData)
    
  return (
    <div className="menu">
          <div className="menuHeader">
            <h1 className="hearderMobileTitle menuTitle">Mi Tienda</h1>
            <button onClick={handleMenuClick} className="crossMenu">
              <img src={crossIcon} alt="" />
            </button>
          </div>
          {headerData.map((elem, index) => (
            <CategoryHeader key={index} {...elem} conteinerClassName={"menuMobile"} />
          ))}
        </div>
  )
}
