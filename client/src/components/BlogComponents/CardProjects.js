import React from 'react';
import { ListGroup, Card, ListGroupItem, Button, } from 'react-bootstrap';

import CommentList from '../../components/CommentList/index';
import CommentForm from '../../components/CommentForm/index';


const Layout = ({ projects }) => {
  if (!projects.length) {
    return <h3>No project Yet</h3>;
  }

  return (
    <div>
      {/* <h3>{title}</h3> */}
      {
        projects.map((project) => (
          <Card style={{ width: '18rem' }} key={project._id}>

            <Card.Img variant="top" src="{}" />

            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>


            <Card.Body>
              <Card.Link href="#">{project.respitoryLink}</Card.Link>
              <Card.Link href="#">{project.liveLink}</Card.Link>
              <div className="my-5">
                <CommentList comments={project.comments} />
              </div>
              <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm projectId={project._id} />
              </div>
            </Card.Body>

          </Card>
        ))}
    </div>
  );
};

export default Layout;





