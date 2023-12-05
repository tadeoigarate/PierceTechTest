// eslint-disable-next-line react/prop-types
export const CarrouselCardlide = ({ image, marca, modelo, price }) => (
    <div className="cardConteiner">
      <img src={image} alt="banner" />
      <div>
        <h1 className="titleCard">{marca}</h1>
        <h1 className="titleCard">{modelo}</h1>
      </div>
      <h1 className="priceCard">{price}</h1>
      <button className="buttonCard">Comprar</button>
    </div>
  );
  