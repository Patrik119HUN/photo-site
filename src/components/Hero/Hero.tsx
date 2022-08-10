import { Fragment } from "react";
import HeroImage from "assets/01.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HeroAnimation } from "animations/Hero";

function Hero() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <motion.div
        className="heroBox"
        variants={HeroAnimation}
        initial={"load"}
        whileInView={"loaded"}
        viewport={{ once: true }}
      >
        <img className="rounded-xl" src={HeroImage} alt="" />
        <motion.div
          className="textContainer"
          variants={HeroAnimation}
          initial={"load"}
          whileInView={"loaded"}
          viewport={{ once: true }}
        >
          <h1 className="header">{t("Photographer")}</h1>
          <p className="signature indent-3">Tukacs Patrik</p>
        </motion.div>
      </motion.div>
      <div className="my-10 flex w-full flex-col">
        <h1 className="mx-auto my-3 text-4xl text-white sm:my-10  sm:text-7xl">
          {t("Gallery")}
        </h1>
      </div>
    </Fragment>
  );
}

export default Hero;
