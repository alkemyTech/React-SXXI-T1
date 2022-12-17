import styled from "styled-components";
import { SubtitleText } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const BoxInputFile = styled.div`
  border: 2px dashed ${themeColors.grayBorder};
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.15);
  width: 250px;
  height: 250px;
  cursor: pointer;
`;

const HiddenInputFile = styled.input`
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  margin: 0;
  padding: 0;
  bottom: 6px;
  z-index: -1;
`;
const WrapInputFile = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;

  &:before {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    background: #000;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &:hover:before {
    opacity: 0.75;
  }

  &:hover {
    .WrapAddImageHover {
      top: 35%;
    }
  }
`;

const WrapAddImageHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 100%;
  transition: top 0.3s linear;
`;

const CameraIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70px;
  min-height: 79px;
  width: 73px;
`;

const AddImageText = styled(SubtitleText)`
  padding: 0 22px 0 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  color: ${themeColors.white}!important;
`;

export { BoxInputFile, HiddenInputFile, WrapInputFile, WrapAddImageHover, CameraIcon, AddImageText };
