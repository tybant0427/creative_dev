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
          <Card id="radius" className="edit spacing scrolled"  key={project._id}>

            {/* <Card.Img variant="top" src="{}" /> */}

            <Card.Body>
            <Card.Title id='blog-creator'>Creator: {project.userOfProject}</Card.Title>
            <br />
              <Card.Title id='title'>{project.title}</Card.Title>
<br/><br/>
              <Card.Text id='description'>
                Description:<br /> {project.description}
              </Card.Text>
            </Card.Body>

            <br/>


            <Card.Body >
              <Card.Link className='links' href={project.respitoryLink} >Respitory Link</Card.Link>
              <br/>
              <br/>
              <Card.Link className='links' href={project.liveLink} >Live Link </Card.Link>
              <div className="my-5">
                <CommentList comments={project.comments} />
              </div>
              <div id='comment-border' className="m-3 p-4" style={{ border: '2px solid #fff' }}>
                <CommentForm projectId={project._id} />
              </div>
            </Card.Body>

          </Card>
        ))}
    </div>
  );
};

export default Layout;





