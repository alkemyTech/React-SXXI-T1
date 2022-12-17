import { gridCard, defaultAtrBtn, defaultAtrImage } from "../utilities/cutomCardSchema";

export const useCustomCard = (props) => {
  const { cardInfo, to, grid = "twoColumn", customImage, showMoreBtn, ellipsis = true, typeStyle = "default" } = props;

  const { textBtn, color, background, icon } = showMoreBtn || defaultAtrBtn;

  const { backgroundSize = "cover", height = "250px" } = customImage || defaultAtrImage;

  const classNameCustomCard = `
        div-card col col-12 col-sm-11 d-flex flex-col flex-wrap ${gridCard["card"][grid]} py-2 `;

  const classNameDivImage = `first-col col d-flex ${gridCard[grid]["firstCol"]} justify-content-center align-items-center p-2`;

  const classNameCardBody = `second-col col col-12 d-flex  ${gridCard[grid]["secondCol"]} ${
    ellipsis ? "justify-content-center" : ""
  } align-items-center p-2`;

  const classNameCardSubTitleText = `text-center ${ellipsis ? "col col-12 text-truncate" : ""} ${gridCard["text"][grid]}`;

  const classNameCardFooter = ` col col-12
        d-flex justify-content-center align-items-center ${gridCard["cardFooter"][grid]}`;

  return {
    classNameCustomCard,
    typeStyle,
    classNameDivImage,
    cardInfo,
    backgroundSize,
    height,
    classNameCardBody,
    classNameCardSubTitleText,
    ellipsis,
    classNameCardFooter,
    gridCard,
    grid,
    color,
    background,
    textBtn,
    icon,
    to,
  };
};
