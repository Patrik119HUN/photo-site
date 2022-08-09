import { LazyMotion, domAnimation, m } from "framer-motion";

const ImageAnimation = {
  load: {
    y: -100,
    opacity: 0,
  },
  loaded: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

interface ImageProps {
  imageSource: string;
  imageAlt: string;
  imageName: string;
  imageAdress: string;
  className?: string;
  ModalVisible?: any;
  ModalImageSource?: any;
  ModalName?: any;
}
function Image({
  imageSource,
  imageAlt,
  imageName,
  imageAdress,
  className,
  ModalVisible,
  ModalImageSource,
  ModalName,
}: ImageProps) {
  return (
    <LazyMotion features={domAnimation} >
      <m.div
        className={`relative  ${className}`}
        variants={ImageAnimation}
        initial={"load"}
        whileInView={"loaded"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className="h-full w-full" src={imageSource} alt={imageAlt} />
        <div
          className="absolute inset-0 h-full w-full cursor-pointer bg-black bg-opacity-0 opacity-0 transition duration-200 ease-in-out hover:bg-opacity-50 hover:opacity-100"
          onClick={() => {
            ModalVisible(true);
            ModalImageSource(imageSource);
            ModalName(imageName);
          }}
        >
          <p className="absolute inset-1/2 w-fit -translate-x-1/2 text-center text-4xl text-white">
            {imageName}
            <br />
            {imageAdress}
          </p>
        </div>
      </m.div>
    </LazyMotion>
  );
}
export default Image;
