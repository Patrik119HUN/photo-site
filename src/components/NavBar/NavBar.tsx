import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import "./NavBar.css";
import Cart from "components/Cart";
import { BsCart3 } from "react-icons/bs";


interface NavBarProps {
  links: any[];
}
function NavBar({ links }: NavBarProps) {
  const [visible, setVisibility] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="py-12 top-0 backdrop-blur-xl z-10 w-full sticky">
        <h1 className="absolute text-3xl xl:text-4xl top-2 2xl:translate-x-1/2  translate-y-1/2 text-white left-3">
          {t("Tukacs")}
        </h1>
        <div className="absolute top-2 right-1/2 translate-x-1/2  translate-y-1/2  w-fit flex gap-10  xl:gap-20 ">
          {links.map((link) => (
            <Link key={link.id} className="link" to={link.to}>
              {" "}
              {t(link.name)}{" "}
            </Link>
          ))}
        </div>
        <div className="absolute top-2 right-10 translate-y-1/2 flex gap-2.5">
          <BsCart3
            color="white"
            size={40}
            onClick={() => setVisibility(true)}
          />
          {visible && <Cart setCartOpen={setVisibility} />}
          <LanguageSelect />
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;
