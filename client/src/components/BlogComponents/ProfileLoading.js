import React from 'react';
import { ListGroup, Card, ListGroupItem,  } from 'react-bootstrap';


const ProfileLayout = ({ singleUser }) => {
  if (!singleUser.length) {
    return <h3>No project Yet</h3>;
  }
 


  return (
    <div>
      {/* <h3>{title}</h3> */}
      {
        singleUser.map((thought) => (
          <Card style={{ width: '18rem' }} key={thought._id}>

          <Card.Img variant="top" src="{}" />

          <Card.Body>
            <Card.Title>{thought.title}</Card.Title>
            <Card.Text>
              {thought.description}
            </Card.Text>
          </Card.Body>


          <Card.Body>
            <Card.Link href="#">{thought.respitoryLink}</Card.Link>
            <Card.Link href="#">{thought.liveLink}</Card.Link>
          </Card.Body>
        </Card>
        ))}
    </div>
  );
};

export default ProfileLayout;