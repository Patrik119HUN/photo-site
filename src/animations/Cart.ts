export const CartAnimation = {
  hidden: {
    y: -100,
  },
  visible: {
    y: "0",
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.5,
    },
  },
};
