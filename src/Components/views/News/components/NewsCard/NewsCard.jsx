import { LinkReactRouter } from "Components/GlobalComponents/LinkReactRouter/LinkReactRouter";
import { routes } from "models/routes";
import { Card } from "react-bootstrap";
import { CustomImage } from "styled-components/App.styled";
import { EllipsisContentBody } from "../../styled-components/EllipsisContentBody.styled";
import {
  CardBody,
  CardFooter,
} from "../../styled-components/SectionsCard.styled";

export const NewsCard = ({ item }) => {
  return (
    <Card className="col col-12 col-sm-11">
      <CustomImage image={item.image} backgroundSize="contain" height="150px" />
      <CardBody className="col col-12">
        <Card.Title className="text-truncate">{item.name}</Card.Title>
        <EllipsisContentBody
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </CardBody>
      <CardFooter className="d-flex justify-content-center">
        <LinkReactRouter
          wrapLink="my-4 col col-7 col-sm-8 col-lg-12 "
          linkClass="btn w-100"
          color="success"
          background="success"
          text="ver más"
          icon="👀"
          to={`${routes.NEWS}/${item.id}`}
        />
      </CardFooter>
    </Card>
  );
};
