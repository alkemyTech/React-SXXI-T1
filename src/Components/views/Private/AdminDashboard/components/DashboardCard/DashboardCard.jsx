import { Card, ListGroup } from "react-bootstrap";
import { CustomImage, SubtitleText } from "styled-components/App.styled";
import defaultImage from "assets/defaultImage.svg";
import { LinkReactRouter } from "Components/GlobalComponents/LinkReactRouter/LinkReactRouter";
import { DashCard } from "../../styled-components/DashCard.styled";
import { DashboardIcon } from "../../styled-components/DashboardIcon.styled";

export const DashboardCard = ({ item }) => {
  console.log(item);
  return (
    <DashCard className="col col-11">
      <Card.Header>
        <SubtitleText>{item.text}</SubtitleText>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <DashboardIcon image={item.icon} />
          {/* <CustomImage
            image={item.icon || defaultImage}
            backgroundSize="contain"
            height="140px"
          /> */}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-center">
          <LinkReactRouter
            wrapLink="col col-12 col-sm-10"
            linkClass="btn w-100"
            color="success"
            background="success"
            text="Ver"
            icon="👀"
            to={"/" + item.to}
          />
        </ListGroup.Item>
      </ListGroup>
    </DashCard>
  );
};
