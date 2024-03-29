import { Fragment } from "react";
import HeroImage from "assets/Hero.jpg";
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

    </Fragment>
  );
}

export default Hero;
