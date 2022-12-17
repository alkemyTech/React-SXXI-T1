import { Card, ListGroup } from "react-bootstrap";
import { CustomImage } from "styled-components/App.styled";
import { LinkReactRouter } from "Components/LinkReactRouter/LinkReactRouter";
import { DashCard } from "../../styled-components/DashCard.styled";
import { TitleDashboardCard } from "../../styled-components/DashboardIcon.styled";

export const DashboardCard = ({ item }) => {
  return (
    <DashCard className="col col-11">
      <Card.Header>
        <TitleDashboardCard>{item.text}</TitleDashboardCard>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <CustomImage image={item.icon} height="104px" backgroundSize="contain" />
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-center py-3">
          <LinkReactRouter
            wrapLink="col col-8 col-sm-10"
            linkClass="btn w-100"
            color="success"
            background="success"
            text="Ver"
            icon="👀"
            to={item.to}
          />
        </ListGroup.Item>
      </ListGroup>
    </DashCard>
  );
};
