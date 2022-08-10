export const ShopCardAnimation = {
  load: {
    y: -100,
    opacity: 0,
  },
  loaded: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.2,
    },
  },
  tap:{
    scale: 0.9,
    transition:{
      duration: 0.5,
      type: "spring",
      damping: 50,
      stiffness: 500,
    }
  }
};
