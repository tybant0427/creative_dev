import React from 'react';
import { ListGroup, Card, ListGroupItem,  } from 'react-bootstrap';


const Layout = ({ projects }) => {
  if (!projects.length) {
    return <h3>No project Yet</h3>;
  }

  return (
    <div>
      {/* <h3>{title}</h3> */}
      {
        projects.map((thought) => (
          <Card style={{ width: '18rem' }} key={thought._id}>
          {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title>{thought.title}</Card.Title>
            <Card.Text>
              {thought.description}
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup> */}
          <Card.Body>
            <Card.Link href="#">{thought.respitoryLink}</Card.Link>
            <Card.Link href="#">{thought.liveLink}</Card.Link>
          </Card.Body>
        </Card>
        ))}
    </div>
  );
};

export default Layout;





          {/* <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.description} <br />
              <span style={{ fontSize: '1rem' }}>
                 {thought.liveLink}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
          </div> */}