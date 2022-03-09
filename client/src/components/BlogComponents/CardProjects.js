import React from 'react';
import { ListGroup, Card, ListGroupItem, Button, Container, } from 'react-bootstrap';

import CommentList from '../../components/CommentList/index';
import CommentForm from '../../components/CommentForm/index';


const Layout = ({ projects }) => {
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }


  return (
    <Container className='d-flex-row'>
      
      {
        projects.map((project) => (
          <Card className="edit spacing" style={{ width: '18rem' }} key={project._id}>

            {/* <Card.Img variant="top" src="{}" /> */}

            <Card.Body>
              <Card.Title className='title'>{project.title}</Card.Title>
              <Card.Text className='title'>
                {project.description}
              </Card.Text>
            </Card.Body>


            <Card.Body>
              <Card.Link href="#" id='title'>Respitory: {project.respitoryLink}</Card.Link>
              <br/>
              <br/>
              <Card.Link href="#" id='title'>Live Link: {project.liveLink}</Card.Link>
              <div className="my-5">
                <CommentList comments={project.comments} />
              </div>
              <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm projectId={project._id} />
              </div>
            </Card.Body>

          </Card>
        ))}
    </Container>
  );
};

export default Layout;





