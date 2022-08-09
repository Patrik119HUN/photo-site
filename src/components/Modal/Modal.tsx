import useLockBodyScroll from "Hooks/useLockBodyScroll";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const DropIn ={
  hidden:{
      y:-100
  },
  visible:{
      y:"0",
      transition:{
          duration:0.5,
          type:"spring",
          damping:25,
          stiffness:500
      }
  },
  exit:{
      y:"-100vh",
      transition:{
          duration:0.3
      }
  }
}
interface ModalProps {
  imageSource: string;
  imageAlt: string;
  ImageName: string;
  setOpenModal: any;
}

function Modal({ imageSource, imageAlt, ImageName, setOpenModal }: ModalProps) {
  useLockBodyScroll();
  return (
    <motion.div className="bg-black/90 fixed top-0 left-0 w-full h-full flex flex-col justify-evenly items-center z-50" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} exit={{opacity:0}} >
      <motion.div className="mx-auto w-auto h-5/6 mt-auto" variants={DropIn} initial={"hidden"} animate={"visible"} exit={"exit"}>
        <IoClose
          color="white"
          size={50}
          onClick={() => {
            setOpenModal(false);
          }}
          className="cursor-pointer"
        />
        <img className="w-full h-full" src={imageSource} alt={imageAlt} />
      </motion.div>
      <p className="text-white font-bold text-4xl mt-5 mb-auto z-10">{ImageName}</p>
    </motion.div>
  );
}
export default Modal;
