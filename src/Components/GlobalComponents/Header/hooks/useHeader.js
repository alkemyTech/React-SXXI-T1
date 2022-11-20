import { useRef } from "react";
import { useResize } from "hooks/useResize";

export const useHeader = () => {
  const closeOffCanvas = useRef(null);
  const { isPhone } = useResize();
  
  const handleCloseOffCanvas = () => {
    closeOffCanvas.current.click();
    console.log("AQUI: ", )
  };

  return { closeOffCanvas, isPhone, handleCloseOffCanvas };
};
