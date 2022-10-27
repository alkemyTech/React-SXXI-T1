import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import { fadeIn } from "./animation.styled";
import { themeColors } from "./Theme.styled";

const tabletStartWidth = 600;
const desktopStartWidth = 768;

const responsiveDesign = {
  tablet: `@media (min-width: ${tabletStartWidth}px)`,
  desktop: `@media (min-width: ${desktopStartWidth}px)`,
};

// ver si agregamos alguna otra propiedasd 'global' a tener en cuenta
const someOtherProperties = {
  globalRadius: "8px",
  globalShadowBoxCards: `0px 4px 4px ${themeColors.blackShadow}`,
};

const HrStyled = styled.hr`
  height: 2px !important;
  color: ${themeColors.gray};
`;

const fontFamily = "'Rubik', sans-serif";

const typography = {
  mobileTitlesStyled: () => css`
    font: 700 40px/40px ${fontFamily};
  `,
  mobileSsubTitlesStyled: () => css`
    font: 400 16px/16px ${fontFamily};
  `,
  mobileInputTexts: () => css`
    font: 400 13px/14px ${fontFamily};
  `,
  mobileSmallTexts: () => css`
    font: 300 11px/20px ${fontFamily};
  `,
  titlesStyled: () => css`
    font: 700 64px/76px ${fontFamily};
  `,
  subTitlesStyled: () => css`
    font: 400 20px/20px ${fontFamily};
  `,
  desktopInputTexts: () => css`
    font: 300 15px/19px ${fontFamily};
  `,
  desktopButtonTexts: () => css`
    font: 600 16px/19px ${fontFamily};
  `,
  desktopSmallTexts: () => css`
    font: 300 14px/20px ${fontFamily};
  `,
};

const titleCssStyle = css`
  color: ${themeColors.black} !important;
  ${typography.mobileTitlesStyled()}

  ${responsiveDesign.desktop} {
    ${typography.titlesStyled()}
  }
`;

const subtitleCssStyle = css`
  color: ${themeColors.black} !important;
  ${typography.mobileSsubTitlesStyled()}
  line-height: 30px !important;

  ${responsiveDesign.desktop} {
    ${typography.subTitlesStyled()}
  }
`;

const inputTextCssStyle = css`
  color: ${themeColors.black} !important;
  ${typography.mobileInputTexts()}

  ${responsiveDesign.desktop} {
    ${typography.desktopInputTexts()}
  }
`;

const smallTextCssStyle = css`
  color: ${themeColors.black} !important;
  ${typography.mobileSmallTexts()};

  ${responsiveDesign.desktop} {
    ${typography.desktopSmallTexts()};
  }
`;

const TitleTextStyled = styled.h1`
  ${() =>
    css`
      ${titleCssStyle}
    `};
`;

const SubtitleTextStyled = styled.h3`
  ${() =>
    css`
      ${subtitleCssStyle}
    `};
`;

const InputTextsStyled = styled.h6`
  ${() =>
    css`
      ${inputTextCssStyle}
    `};
`;

const SmallTextsStyled = styled.h6`
  ${() =>
    css`
      ${smallTextCssStyle};
    `};
`;

const RowStyled = styled(Row)`
  margin: 0;
  min-height: calc(100vh - 87px);
  padding-top: 6rem;
  ${fadeIn}
`;

const disabledCssStyle = css`
  background-color: ${themeColors.gray};
  color: ${themeColors.txtGray};
  border: 1px solid ${themeColors.txtGray} !important;

  ${typography.mobileTitlesStyled()}

  ${responsiveDesign.desktop} {
    ${typography.titlesStyled()}
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

const ImageStyled = styled.div`
  background-image: url(${({ image }) => (image ? image : "not image")});
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) =>
    backgroundSize ? backgroundSize : "cover"};
  background-position: top center;
  height: ${({ height }) => (height ? height : "250px")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "250px")};
  width: ${({ width }) => (width ? width : "100%")};

  ${fadeIn}
`;

const dropShadowStyle = css`
  filter: drop-shadow(0px 4px 4px ${themeColors.blackShadow});
`;

export {
  someOtherProperties,
  responsiveDesign,
  HrStyled,
  typography,
  RowStyled,
  ImageStyled,
  TitleTextStyled,
  SubtitleTextStyled,
  InputTextsStyled,
  SmallTextsStyled,
  smallTextCssStyle,
  titleCssStyle,
  subtitleCssStyle,
  inputTextCssStyle,
  disabledCssStyle,
  dropShadowStyle,
};
