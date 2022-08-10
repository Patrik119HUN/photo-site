import useLockBodyScroll from "Hooks/useLockBodyScroll";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { ModalProps } from "interfaces/Modal";
import { DropIn } from "animations/DropIn";

function Modal({ modalData, setModalData }: ModalProps) {
  useLockBodyScroll();
  return (
    <motion.div
      className="bg-black/90 fixed top-0 left-0 w-full h-full flex flex-col justify-evenly items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute mx-auto w-auto h-3/4 mt-auto"
        variants={DropIn}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
      >
        <IoClose
          color="white"
          size={50}
          onClick={() => {
            setModalData((state) => ({ ...state, visible: false }));
          }}
          className="cursor-pointer"
        />
        <img
          className="max-w-full max-h-full block m-auto px-4"
          src={modalData.src}
          alt={modalData.alt}
        />
        <p className="font-bold text-4xl mb-auto z-10 text-center">
          {modalData.name}
        </p>
      </motion.div>
    </motion.div>
  );
}
export default Modal;
