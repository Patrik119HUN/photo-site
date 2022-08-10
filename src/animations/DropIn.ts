export const DropIn = {
    hidden: {
      y: -100,
    },
    visible: {
      y: "0",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 0.3,
      },
    },
  };