import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { getIndexSlide } from "../utilities/getIndexSlide.util";

export const useModalSlide = (
  orderSlide,
  idSlide,
  setSlideToChangeSelected,
  slideToChangeSelected,
  onHide
) => {
  const indexSlide = getIndexSlide(orderSlide, idSlide) + 1;

  const handleChangeRadio = (e) => {
    setSlideToChangeSelected(e.target.value);
  };

  const handleClickChangeSlides = async () => {
    if (slideToChangeSelected === 0) return;
    const isConfirm = await handleUserConfirm();
    if (!isConfirm) return;

    onHide();
  };

  const handleCancelChangesSlides = () => {
    setSlideToChangeSelected(0);
    onHide();
  };

  return {
    indexSlide,
    handleChangeRadio,
    handleClickChangeSlides,
    handleCancelChangesSlides,
  };
};
