import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useMembers } from "./hooks/useMembers"; 
import { Icon } from "./Members.Styled.js";
import LinkedinIcon from "assets/linkedin2.svg";
import FacebookIcon from "assets/facebookIcon2.svg"
import "./Members.css";
import { useSkeleton } from "hooks/useSkeleton";

const Members = () => {

  const { membersData, loadingMembers } = useMembers();
  const { textSkeleton } = useSkeleton();

    return (
      <div className="container my-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          <>
            { loadingMembers ?
              <>
                { textSkeleton} 
                { textSkeleton} 
                { textSkeleton} 
                { textSkeleton} 
              </>
              :
              <>
                { membersData.map((element) => {
                      return(
                        <Card
                          key={element.id}>
                          <Card.Img 
                            src={element.image} 
                            alt={element.name}
                            height={280}
                            className="card-img-bg "
                          />
                          <Card.ImgOverlay
                            className="col-8 mx-auto">
                            <Card.Title className="text-center fw-bold bg-light bg-opacity-75 py-2 mt-5">
                              {element.name}
                            </Card.Title>
                            <p 
                              className="text-center fw-bold bg-light bg-opacity-75 py-2 mb-3"
                              dangerouslySetInnerHTML={{__html:element.description}}></p>
                            <Card.Text className="text-center">
                              <a href={element.facebookUrl} target="_blank" rel="noopener noreferrer">
                                <Icon src={ FacebookIcon } alt="icono de Twitter" />
                              </a>
                              <a href={element.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                <Icon src={ LinkedinIcon } alt="icono de Twitter" />
                              </a>
                            </Card.Text>
                          </Card.ImgOverlay>
                        </Card>
                      )
                    })
                }
              </>
            }
          </>
        </Row>
      </div>
    );
}
 
export default Members;