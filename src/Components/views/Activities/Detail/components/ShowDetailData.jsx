import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { LinkReactRouter } from "Components/GlobalComponents/LinkReactRouter/LinkReactRouter";
import { routes } from "models/routes";
import { SubtitleText } from "styled-components/App.styled";
import { defaultDetailText } from "../utilities/detailSchema.util";

export const ShowDetailData = ({ title, description, responsibles }) => {
  return (
    <>
      <CustomTitle wrapTitleClass="col col-12 h-auto" title={title} />
      <div className="col col-12 d-flex flex-column justify-content-center align-items-center ">
        <div className="col col-10 my-3" dangerouslySetInnerHTML={{ __html: description }} />
        <SubtitleText className="col col-10 mb-3">{defaultDetailText.responsibleText}:</SubtitleText>
        <div className="col col-10 mb-3">
          {responsibles.map((responsible) => (
            <span key={responsible.name}>{responsible.name}; </span>
          ))}
        </div>
        <div className="col col-10 ">
          <LinkReactRouter text={defaultDetailText.returnText} to={routes.HOME} />
        </div>
      </div>
    </>
  );
};
