import React from 'react';
import '../CardListStyles.css';

const MembersList = () => {

    const membersMock = [
      {
        id: 1, 
        name: "Miembro 1", 
        image:"https://picsum.photos/200/300",
        description: "Descripcion de miembro 1", 
        facebookUrl: "https://www.facebook.com/miembro1", 
        linkedInUrl: "https://www.linkedin.com/miembro1"
      },
      {
        id: 2, 
        name: "Miembro 2", 
        image:"https://picsum.photos/200/300",
        description: "Descripcion de miembro 2", 
        facebookUrl: "https://www.facebook.com/miembro2",
        linkedInUrl: "https://www.linkedin.com/miembro2"
      },
      {
        id: 3, 
        name: "Miembro 3", 
        image:"https://picsum.photos/200/300",
        description: "Descripcion de miembro 3", 
        facebookUrl: "https://www.facebook.com/miembro3", 
        linkedInUrl: "https://www.linkedin.com/miembro3"
      }
    ];

    return (
      <div className="container my-5">
        <ul className="list-container">
            {membersMock.length > 0 ?
                membersMock.map((member) => {
                    return(
                        <li 
                          className="card-info" 
                          key={member.id}>
                            <h3>{member.name}</h3>
                            <p>{member.description}</p>
                            <p>{member.facebookUrl}</p>
                            <p>{member.linkedInUrl}</p>
                        </li>
                    )
                })
            :
                <p>No hay miembro</p>
            }
        </ul>
      </div>
    );
}
 
export default MembersList;