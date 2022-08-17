import { ImageAnimation } from "animations/Image";
import { motion } from "framer-motion";
import { ImageProps } from "interfaces/Image";

function Image(image: ImageProps) {
  return (
    <motion.div
      className={`relative  ${image.className}`}
      variants={ImageAnimation}
      initial={"load"}
      whileInView={"loaded"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        className="h-full w-full"
        src={image.imageSource}
        alt={image.imageAlt}
      />
      <div
        className="absolute inset-0 h-full w-full cursor-pointer bg-black bg-opacity-0 opacity-0 transition duration-200 ease-in-out hover:bg-opacity-50 hover:opacity-100"
        onClick={() => {
          image.setModalData({
            visible: true,
            src: image.imageSource,
            alt: image.imageAlt,
            name: image.imageName,
          });
        }}
      >
        <p className="absolute inset-1/2 w-fit -translate-x-1/2 text-center text-4xl">
          {image.imageName}
          <br />
          {image.imageAdress}
        </p>
      </div>
    </motion.div>
  );
}
export default Image;
