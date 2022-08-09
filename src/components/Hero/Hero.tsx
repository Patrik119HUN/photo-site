import { Fragment } from "react";
import "./Hero.css";
import HeroImage from "assets/01.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();
  return (
    <Fragment>
      <div className="heroBox">
        <img className="rounded-xl" src={HeroImage} alt="" />
        <div className="textContainer">
          <h1 className="header">{t("Photographer")}</h1>
          <p className="signature indent-3">Tukacs Patrik</p>
        </div>
      </div>
      <div className="my-10 flex w-full flex-col">
        <h1 className="mx-auto my-3 text-4xl text-white sm:my-10  sm:text-7xl">
          {t("Gallery")}
        </h1>
      </div>
    </Fragment>
  );
}

export default Hero;
