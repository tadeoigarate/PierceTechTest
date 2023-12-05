import pierceIcon from "../../assets/icons/pierce.svg";
import vtexIcon from "../../assets/icons/vtex.svg";
import locationIcon from "../../assets/icons/location.svg";
import dataFiscalIcon from "../../assets/icons/dataFiscal.svg";
import "./styles.css"

export const Footer = () => {
  return (
    <div className="footerContainer" >
      <div className="footerSection" >
        <div>
          <p className="h1Footer">CONDICIONES</p>
          <p className="h1Footer">TRABAJA CON NOSOTROS</p>
          <p className="h1Footer">MEDIOS DE PAGO</p>
          <p className="h1Footer">PREGUNTAS FRECUENTES</p>
        </div>
        <button className="footerButton">BOTÓN DE ARREPENTIMIENTO</button>
        <div className="poweredBy"> 
          <p className="pFooter powered">Powered by Pierce commerce</p>
          <img src={pierceIcon} alt="pierceIcon" />
          <img src={vtexIcon} alt="vtexIcon" />
        </div>
      </div>

      <div style={{alignSelf:"center"}}>
        <h1 className="h1Footer primaryTitle">Mi Tienda</h1>
      </div>

      <div className="informationConteiner">
      <div className="location">
          <img src={locationIcon} alt="" />
          <p className="h1Footer locationText">SUCURSALES</p>
        </div>
        <div>
          <p className="pFooter informatioText">Whatsapp 2215137270 </p>
          <p className="pFooter informatioText">ecommerce@mateu.com.ar</p>
          <p className="pFooter informatioText">La Plata 1900, Buenos Aires, Argentina</p>
        </div>
        <div className="footerCopy">
            <p className="pFooter copyText">© 2023 MateuSports</p>
          <img src={dataFiscalIcon} alt="Data Fiscal" />
        </div>
      </div>
    </div>
  );
};
