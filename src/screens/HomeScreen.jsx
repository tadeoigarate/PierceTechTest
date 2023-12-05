import { useState, useEffect } from "react";
import { Banner } from "../components/Banner/Banner";
import { DesktopCarrousel } from "../components/Carrousel/DesktopCarrousel/DesktopCarrousel";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { PopularCategory } from "../components/PopularCategory/PopularCategory";
import { TopFooter } from "../components/TopFooter/TopFooter";

import bannerImage from "../assets/image/banner.png";
import bannerMobileImage from "../assets/image/bannerMobile.png";
import { HeaderMobile } from "../components/Header/HeaderMobile/HeaderMobile";
import { MobileCarrousel } from "../components/Carrousel/MobileCarrousel/MobileCarrousel";
import { MobileCategory } from "../components/PopularCategory/MobileCategory/MobileCategory";
import { TopFooterMobile } from "../components/TopFooter/TopFooterMobile";
import { FooterMobile } from "../components/Footer/FooterMobile";

export const HomeScreen = () => {
  const [desktop, setDesktop] = useState(window.innerWidth > 1439);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 1439);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(desktop);

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {!desktop ? <HeaderMobile /> : <Header />}

      <Banner bannerImage={desktop ? bannerImage : bannerMobileImage} />

      {!desktop ? (
        <MobileCarrousel title={"TENDENCIAS"} classNameLiActive={"active"} backGround={{background:"#dc1e0f"}}  />
      ) : (
        <DesktopCarrousel title={"TENDENCIAS"} backGround={{background:"#dc1e0f"}} />
      )}

      {!desktop ? <MobileCategory /> : <PopularCategory />} 

      {!desktop ? (
        <MobileCarrousel
          title={"LAS MAS VENDIDAS"}
          conteinerStyle={{ background: "white" }}
          titleStyle={{ color: "black" }}
          liStyle={{ border: " 1.5px solid #DC1E0F" }}
          classNameLiActive={"activeRed"}
        />
      ) : (
        <DesktopCarrousel
          title={"LAS MAS VENDIDAS"}
          conteinerStyle={{ background: "white" }}
          titleStyle={{ color: "black" }}
        />
      )} 

      {!desktop ? <TopFooterMobile /> : <TopFooter />} 

      {!desktop ? <FooterMobile /> : <Footer />} 
    </div>
  );
};
