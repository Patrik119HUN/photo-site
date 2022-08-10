import About_image from "assets/About_image.jpg";
import image from "assets/22880014.jpg";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <div className="mb-10 flex w-full px-5 xl:px-0 justify-center gap-10 flex-col md:flex-row items-center md:items-start">
      <div className="flex px-5 md:w-1/2 xl:w-1/4 flex-col ">
        <img
          className="aspect-square rounded-full object-cover"
          src={About_image}
          alt="About_image1"
        />

        <p className="mt-5 whitespace-pre-line text-center text-3xl text-white">
          {t("about")}
        </p>
      </div>
      <img
        className="hidden sm:inline	md:w-1/2 xl:w-1/3 h-auto object-cover"
        src={image}
        alt="about_image2"
      />
    </div>
  );
}

export default About;
