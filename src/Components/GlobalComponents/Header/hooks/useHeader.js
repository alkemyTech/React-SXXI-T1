import { useRef } from "react";
import { useResize } from "hooks/useResize";
import { typeNavItems } from "utilities/navitems/navItems.util";
import { useSelector } from "react-redux";

export const useHeader = () => {
  const {
    user: {
      role: { type: typeRole },
    },
  } = useSelector((store) => store.user);
  const closeOffCanvas = useRef(null);
  const { isPhone } = useResize();

  const handleCloseOffCanvas = () => {
    closeOffCanvas.current.click();
  };

  const whatNavRender = typeNavItems[typeRole] || typeNavItems.notAuth;

  const isExpand = typeRole === "admin" ? false : "md";

  const placementOffCanvas = typeRole === "admin" ? "start" : "end";

  const dropDownDirection = typeRole === "admin" ? "up" : "down";

  return { closeOffCanvas, isPhone, handleCloseOffCanvas, whatNavRender, isExpand, placementOffCanvas, dropDownDirection, typeRole };
};
