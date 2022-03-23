import { ListGroup, Card, ListGroupItem, Button, Container, Row } from 'react-bootstrap';
import React, { useState } from "react";
import { QUERY_SINGLEUSER } from "../../utils/queries";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';
import { useQuery } from "@apollo/client";
import ProfileNav from './ProfileNav'
import { UPDATE_PROJECT } from '../../utils/mutations';
import { Modal } from 'react-bootstrap';
import "../../Styles/card.scss"
// import { DELETE_COMMENT } from '../../utils/mutations';
import CommentListProfile from '../CommentList/profileList';
import { QUERY_UserComments } from '../../utils/queries';
import "../../Styles/comment.scss"
import { DELETE_COMMENT } from '../../utils/mutations';




export default function Profile() {
  const [deleteButton, { err, dat }] = useMutation(DELETE_PROJECT
  );
  console.log(err);

  const { error, data } = useQuery(QUERY_SINGLEUSER, {
    variables: { userId: localStorage.getItem('userId') }
  });
  const singleUser = data?.singleUser.projects || [];

  // console.log(data.singleUser.projects);
  const userName = data?.singleUser.userName || [];

  const handlebutton = async (test) => {
    try {
      const { data } = await deleteButton({
        variables: { projectId: test }
      })

      window.location.reload('/profile')
    } catch (err) {
      JSON.stringify(err)
      console.log(err);
    }
  }

  const { error: errorM, data: dataM } = useMutation(UPDATE_PROJECT, {
    variables: { userId: localStorage.getItem('userId') }
  });
  // console.log(dataM);


  const [formState, setFormState] = useState({
    projectId: '',
    title: '',
    description: '',
    respitoryLink: '',
    liveLink: '',
    image: ''
  });

  const [updateProject, { error: error2, data: data2 }] = useMutation(UPDATE_PROJECT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateProject({
        variables: { ...formState },


      });
      window.location.reload('/profile')

      console.log(data);

    } catch (e) {
      console.error(e);

    }
  };

  const { error: err2, data: data4 } = useQuery(QUERY_UserComments, {
    variables: { userId: localStorage.getItem('userId') }
  });
  const userComment = data4?.userComments.comments || [];
  console.log(userComment);



  const [deleteComments, { err3, data3}] = useMutation(DELETE_COMMENT 
    );
  console.log(err3, data3);
  
  const commentIds = async( commentId) =>{
    // console.log(commentId);
      try{
        const  {data} = await deleteComments({
          variables: {commentId: commentId}
        })
        console.log( data);
        
        window.location.reload('/profile')
      }catch(err){
    JSON.stringify(err)
    console.log(err.JSON);
    }
    }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <main>
      <ProfileNav />
      <Container className='cardTest'>





        <h1 className='overhead'>{userName}'s Projects</h1>


        {
          singleUser.map((project) => (
            <Card id="radius" className="edit spacing" key={project._id}>

              {/* <Card.Img variant="top" src="{}" /> */}

              <Card.Body>

                <Card.Title id='blog-creator'>{project.title}</Card.Title>
                <Card.Text id='description'>
                  {project.description}
                </Card.Text>
              </Card.Body>
              <CommentListProfile comments={project.comments} />


              <Card.Body>
                <Card.Link className='links' href={project.respitoryLink} >Respitory Link</Card.Link>
                <br />
                <br />
                <Card.Link className='links' href={project.liveLink} >Live Link</Card.Link>
              </Card.Body>
              {/* <h1>{project.comments._id} cum testt</h1> */}


              <Button id='buttons' type="submit" onClick={() => handlebutton(project._id)}  >Delete</Button>


              <Button id='buttons' onClick={() => setFormState({ ...formState, projectId: project._id })}  >Update</Button>


            </Card>
          ))}



        <Button id='buttonBG' variant="primary" className='updated' onClick={handleShow}>
          Update Form
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>



            <form onSubmit={handleFormSubmit}>

              <div className="mb-3">

                <label for="exampleFormControlInput1" className="form-label">Project Name</label>
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="What is the name of your project?"
                  onChange={handleChange}>
                </input>
                <h1 placeholder={formState.title}></h1>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Live Page</label>
                <input
                  type="text"
                  name="liveLink"
                  value={formState.liveLink}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Live Link"
                  onChange={handleChange}
                >
                </input>
              </div>
              <div
                className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Respitory</label>
                <input
                  type="text"
                  name="respitoryLink"
                  value={formState.respitoryLink}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Respitory Link"
                  onChange={handleChange}
                >
                </input>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formState.description}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Description"
                  onChange={handleChange}
                >
                </input>
              </div>




              <button type="submit" class="btn btn-primary btn-lg">Submit</button>



            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
        {/* </div>  */}
      </Container>
{/* <Col> */}
      <div className='commentStyle'>
      {userComment.map((comment) => (
           <Card id="radius" className="edit spacing" key={comment._id}>

           <Card.Body>

             <Card.Title id='blog-creator'>{comment.commentAuthor}</Card.Title>
             <Card.Text id='description'>
               {comment.commentText}
             </Card.Text>
           </Card.Body>
         
           <Card.Body>
            {comment.createdAt}
             
           </Card.Body>
          
           <Button  type="submit" onClick={()=>commentIds(comment._id)}  >Delete Comment</Button>
         </Card>
      ))}
      </div>
      {/* </Col> */}
    </main>
    

  );

};
