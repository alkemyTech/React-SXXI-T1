import { useRef } from "react";
import { useResize } from "hooks/useResize";
import { typeNavItems } from "utilities/navitems/navItems.util";
import { ROLE } from "MOCKAUTH";

export const useHeader = () => {
  const closeOffCanvas = useRef(null);
  const { isPhone } = useResize();

  const handleCloseOffCanvas = () => {
    closeOffCanvas.current.click();
  };

  const whatNavRender = typeNavItems[ROLE] || typeNavItems.notAuth;

  const isExpand = ROLE === "admin" ? false : "md";

  const placementOffCanvas = ROLE === "admin" ? "start" : "end";

  const dropDownDirection = ROLE === "admin" ? "up" : "down";

  return { closeOffCanvas, isPhone, handleCloseOffCanvas, whatNavRender, isExpand, placementOffCanvas, dropDownDirection };
};
