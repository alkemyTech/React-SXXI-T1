import { CustomImage } from "styled-components/App.styled";
import { LinkReactRouter } from "../LinkReactRouter/LinkReactRouter";
import { EllipsisContentBody } from "./styled-components/EllipsisContentBody.styled";
import {
  CardBody,
  CardFooter,
  CardSubTitleText,
  CardText,
  CustomCard as Card,
} from "./styled-components/SectionsCard.styled";
import defaultImage from "assets/defaultImage.svg";
import { useCustomCard } from "./hooks/useCustomCard";

export const CustomCard = (props) => {
  const {
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
  } = useCustomCard(props);

  return (
    <Card className={classNameCustomCard} type={typeStyle}>
      <div className={classNameDivImage} type={typeStyle}>
        <CustomImage
          image={cardInfo.image || defaultImage}
          backgroundSize={backgroundSize}
          height={height}
        />
      </div>

      <CardBody className={classNameCardBody} type={typeStyle}>
        <CardSubTitleText
          className={classNameCardSubTitleText}
          type={typeStyle}
        >
          {cardInfo.name}
        </CardSubTitleText>

        {ellipsis ? (
          <EllipsisContentBody
            className="col col-12 text-center text-sm-start"
            dangerouslySetInnerHTML={{ __html: cardInfo.content }}
            type={typeStyle}
          />
        ) : (
          <CardText
            className="text-center text-sm-start"
            dangerouslySetInnerHTML={{ __html: cardInfo.content }}
            type={typeStyle}
          />
        )}
      </CardBody>

      <CardFooter className={classNameCardFooter} type={typeStyle}>
        <LinkReactRouter
          wrapLink={`col col-8 ${gridCard["link"][grid]}`}
          linkClass="btn w-100"
          color={color}
          background={background}
          text={textBtn}
          icon={icon}
          to={to}
        />
      </CardFooter>
    </Card>
  );
};

/**
 * ONG1-60
Descripción

COMO: Usuario
QUIERO: Visualizar los listados de forma similar en todas las secciones
PARA: Que el diseño tenga un patrón claro

Criterios de aceptación: El objetivo es utilizar este componente en los listados de Novedades, Actividades, Últimas Novedades y Relacionadas, por lo que deberá ser flexible y permitir reutilizarse al máximo. Para ello, deberá mostrar una imágen, título y descripción de forma dinámica, y un placeholder de imagen vacía en el caso de no recibir imagen

 */
