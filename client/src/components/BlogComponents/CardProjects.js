import React from 'react';
import {  Card,  Container, } from 'react-bootstrap';
import "../../Styles/card.scss"
import CommentList from '../../components/CommentList/index';
import CommentForm from '../../components/CommentForm/index';


const Layout = ({ projects }) => {
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }


  return (
    <div className='cardTest'>
      
      {
        projects.map((project) => (
          <Card className="edit spacing scrolled"  key={project._id}>

            {/* <Card.Img variant="top" src="{}" /> */}

            <Card.Body>
            <Card.Title className='title'>Created by:<br /> {project.userOfProject}</Card.Title>
            <br />
              <Card.Title className='title'>Project title:<br /> {project.title}</Card.Title>

              <Card.Text className='title'>
                Project description:<br /> {project.description}
              </Card.Text>
            </Card.Body>


            <Card.Body>
              <Card.Link href={project.respitoryLink} >Respitory Link</Card.Link>
              <br/>
              <br/>
              <Card.Link href={project.liveLink} >Live Link </Card.Link>
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





