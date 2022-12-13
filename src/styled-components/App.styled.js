import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import { fadeIn } from "./animation.styled";
import { responsiveTemplate } from "./responsiveTemplate.styled";
import { themeColors } from "./Theme.styled";

const someOtherProperties = {
  globalRadius: "8px",
  globalShadowBoxCards: `0px 4px 4px ${themeColors.blackShadow}`,
};

const Hr = styled.hr`
  height: 2px !important;
  color: ${themeColors.grayBorder};
`;

const fontFamily = "'Rubik', sans-serif";

const typography = {
  mobileTitle: () => css`
    font: 700 40px/40px ${fontFamily};
  `,
  mobileSsubTitle: () => css`
    font: 400 16px/16px ${fontFamily};
  `,
  mobileInputText: () => css`
    font: 400 13px/14px ${fontFamily};
  `,
  mobileSmallText: () => css`
    font: 300 11px/20px ${fontFamily};
  `,
  title: () => css`
    font: 700 64px/76px ${fontFamily};
  `,
  subTitle: () => css`
    font: 400 20px/20px ${fontFamily};
  `,
  desktopInputText: () => css`
    font: 300 15px/19px ${fontFamily};
  `,
  desktopButtonText: () => css`
    font: 600 16px/19px ${fontFamily};
  `,
  desktopSmallText: () => css`
    font: 300 14px/20px ${fontFamily};
  `,
};

const titleCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileTitle()}

  ${responsiveTemplate.desktop} {
    ${typography.title()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.title()}
  }
`;

const subtitleCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileSsubTitle()}
  line-height: 30px !important;

  ${responsiveTemplate.desktop} {
    ${typography.subTitle()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.subTitle()}
  }
`;

const inputTextCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileInputText()}

  ${responsiveTemplate.desktop} {
    ${typography.desktopInputText()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.desktopInputText()}
  }
`;

const smallTextCssStyle = css`
  color: ${themeColors.black};
  ${typography.mobileSmallText()};

  ${responsiveTemplate.desktop} {
    ${typography.desktopSmallText()};
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.desktopSmallText()};
  }
`;

const TitleText = styled.h1`
  ${() =>
    css`
      ${titleCssStyle}
    `};
`;

const SubtitleText = styled.h3`
  ${() =>
    css`
      ${subtitleCssStyle}
    `};
`;

const InputTexts = styled.h6`
  ${() =>
    css`
      ${inputTextCssStyle}
    `};
`;

const SmallTexts = styled.h6`
  ${() =>
    css`
      ${smallTextCssStyle};
    `};
`;

const disabledCssStyle = css`
  background-color: ${themeColors.gray};
  color: ${themeColors.txtGray};
  border: 1px solid ${themeColors.txtGray} !important;

  ${typography.mobileTitle()}

  ${responsiveTemplate.desktop} {
    ${typography.title()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.title()}
  }

  &:hover {
    background-color: ${themeColors.gray};
    color: ${themeColors.txtGray};
    filter: brightness(1.1) !important;
  }

  &:active {
    background-color: ${themeColors.gray} !important;
    color: ${themeColors.txtGray} !important;
    filter: brightness(1.25);
  }
`;

const CustomImage = styled.div`
  background-image: url(${({ image }) => (image ? image : "not image")});
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) => backgroundSize || "cover"};
  background-position: top center;
  height: ${({ height }) => height || "50px"};
  width: ${({ width }) => width || "100%"} !important;
  border-radius: ${({ borderRadius }) => borderRadius || "none"};

  ${responsiveTemplate.tablet} {
    height: ${({ heightTablet }) => heightTablet};
    width: ${({ widthTablet }) => widthTablet};
  }

  ${responsiveTemplate.desktop} {
    height: ${({ heightDesktop }) => heightDesktop};
    width: ${({ widthDesktop }) => widthDesktop};
  }

  ${responsiveTemplate.extraLarge} {
    height: ${({ heightDesktop }) => heightDesktop};
    width: ${({ widthDesktop }) => widthDesktop};
  }

  ${fadeIn}
`;

const dropShadow = css`
  filter: drop-shadow(0px 4px 4px ${themeColors.blackShadow});
`;

const WrapMainRoutes = styled(Row)`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 95%;
  padding: ${({ size: { width } }) => (width < 400 ? "5px" : "5px 1.5rem")};
  min-height: calc(100vh - 212px);

  ${responsiveTemplate.desktop} {
    max-width: 85%;
  }

  ${responsiveTemplate.extraLarge} {
    max-width: 85%;
  }

  ${fadeIn}
`;

const filterSaturate = css`
  filter: saturate(150%);
`;

const WrapFirstCol = styled.div`
  backdrop-filter: blur(4px);
  position: absolute;
  z-index: 10;

  h6 {
    font-weight: bold;
    ${responsiveTemplate.tablet} {
      font-weight: normal;
    }
    ${responsiveTemplate.desktop} {
      font-weight: normal;
    }
    ${responsiveTemplate.extraLarge} {
      font-weight: normal;
    }
  }

  ${responsiveTemplate.tablet} {
    position: initial !important;
    z-index: 1 !important;
    backdrop-filter: blur(0px) !important;
  }

  ${responsiveTemplate.desktop} {
    position: initial;
    z-index: 1;
    backdrop-filter: blur(0px);
  }

  ${responsiveTemplate.extraLarge} {
    position: initial;
    z-index: 1;
    backdrop-filter: blur(0px);
  }
`;

const WrapImageSecondCol = styled.div`
  position: absolute;
  opacity: 0.4;
  z-index: -1;
  ${responsiveTemplate.tablet} {
    position: initial !important;
    opacity: 1 !important;
    z-index: 1 !important;
  }

  ${responsiveTemplate.desktop} {
    position: initial;
    opacity: 1;
    z-index: 1;
  }
  ${responsiveTemplate.extraLarge} {
    position: initial;
    opacity: 1;
    z-index: 1;
  }

  &:hover {
    ${filterSaturate}
  }
`;

const scrollbarCssStyles = css`
  &::-webkit-scrollbar {
    width: 12px;
    background: #e4e4e4;
  }

  &::-webkit-scrollbar-thumb {
    background: hsla(187, 97%, 29%, 0.3);
    border-radius: 5px;
    border: 1px solid hsla(187, 97%, 29%, 0.55);
    border-right: 1px solid #e4e4e4;

    &:hover {
      background: hsla(187, 97%, 29%, 0.6);
      border: 1px solid hsla(187, 97%, 29%, 0.85);
      border-right: 1px solid #e4e4e4;
    }

    &:active {
      background: hsla(187, 97%, 29%, 0.8);
      border: 1px solid hsla(187, 97%, 29%, 1);
      border-right: 1px solid #e4e4e4;
    }
  }
`;

export {
  scrollbarCssStyles,
  filterSaturate,
  someOtherProperties,
  Hr,
  typography,
  CustomImage,
  TitleText,
  SubtitleText,
  InputTexts,
  SmallTexts,
  smallTextCssStyle,
  titleCssStyle,
  subtitleCssStyle,
  inputTextCssStyle,
  disabledCssStyle,
  dropShadow,
  WrapMainRoutes,
  WrapFirstCol,
  WrapImageSecondCol,
};
