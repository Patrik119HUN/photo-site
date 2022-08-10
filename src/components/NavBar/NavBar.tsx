import React from "react";
import useWindowDimensions from "Hooks/useWindowDimensions";
import { NavBarProps } from "interfaces/NavBar";
import DesktopNavBar from "./resposive/Desktop/DesktopNavBar";
import MobileNavBar from "./resposive/Mobile/MobileNavBar";

function NavBar({ BreakPoint, routes }: NavBarProps) {
  const { width } = useWindowDimensions();
  var view;

  if (width <= BreakPoint) {
    view = <MobileNavBar links={routes} />;
  } else {
    view = <DesktopNavBar links={routes} />;
  }
  return <React.Fragment>{view}</React.Fragment>;
}

export default NavBar;
