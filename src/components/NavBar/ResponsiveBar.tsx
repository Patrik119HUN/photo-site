import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import useWindowDimensions from "Hooks/useWindowDimensions";
import React from "react";
interface Props {
  BreakPoint: number;
}
const links = [
  { id: 1, to: "/", name: "Home" },
  { id: 2, to: "/shop", name: "Shop" },
  { id: 3, to: "/about", name: "About" },
  { id: 4, to: "/contact", name: "Contact" },
];
function ResponsiveBar({ BreakPoint }: Props) {
  const { width } = useWindowDimensions();
  var view;

  if (width <= BreakPoint) {
    view = <MobileNavBar links={links}/>;
  } else {
    view = <NavBar links={links} />;
  }
  return <React.Fragment>{view}</React.Fragment>;
}

export default ResponsiveBar;
