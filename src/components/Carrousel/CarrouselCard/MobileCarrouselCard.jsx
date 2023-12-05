// eslint-disable-next-line react/prop-types
export const MobileCarrouselCard = ({ image, marca, modelo, price }) => {
  return (
    <div className="cardConteinerMobile mobile">
      <img src={image} alt="banner" />
      <div>
        <h1 className="titleCard mobile">{marca}</h1>
        <h1 className="titleCard mobile">{modelo}</h1>
      </div>
      <p className="priceCard mobile">{price}</p>
      <button className="buttonCard mobile">Comprar</button>
    </div>
  );
};
