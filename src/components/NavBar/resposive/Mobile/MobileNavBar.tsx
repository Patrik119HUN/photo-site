import { useState } from "react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../LanguageSelect";
import Cart from "components/Cart";
import { BsCart3 } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
const DropIn = {
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
interface MobileNavBarProps {
  links: any[];
}
function MobileNavBar({ links }: MobileNavBarProps) {
  const { t } = useTranslation();
  const [state, setState] = useState(false);
  const [visible, setVisibility] = useState<boolean>(false);
  return (
    <div className="flex flex-col  sticky top-0 z-30 justify-between">
      <div className={state ? "mobileNavBar-active" : "mobileNavBar"}>
        <h1 className="absolute translate-y-1/2 top-2 left-3 text-3xl text-white ml-1">
          {t("Tukacs")}
        </h1>
        <div className="flex gap-2 absolute top-2 right-3 translate-x-0 translate-y-1/2">
          <BsCart3
            color="white"
            size={35}
            onClick={() => setVisibility(!visible)}
          />
          <BiMenu
            color="white"
            size={35}
            onClick={() => setState(!state)}
            /* className="absolute top-2 right-3 translate-x-0 translate-y-1/2" */
          />
        </div>
      </div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {visible && <Cart setCartOpen={setVisibility} />}
        {state && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setState(false);
            }}
            display={"contents"}
          >
            <LazyMotion features={domAnimation}>
              <m.div
                className="absolute top-full w-full flex flex-col items-center gap-5 bg-black z-10 pb-5"
                variants={DropIn}
                initial={"hidden"}
                animate={"visible"}
                exit={"exit"}
              >
                {links.map((link) => (
                  <Link key={link.id} className="link" to={link.to}>
                    {" "}
                    {t(link.name)}{" "}
                  </Link>
                ))}
                <LanguageSelect />
              </m.div>
            </LazyMotion>
          </OutsideClickHandler>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavBar;
