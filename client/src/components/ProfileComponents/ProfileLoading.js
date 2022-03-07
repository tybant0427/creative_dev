import { ListGroup, Card, ListGroupItem, Button } from 'react-bootstrap';
import React from "react";
import {  QUERY_SINGLEUSER } from "../../utils/queries";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';
import { useQuery } from "@apollo/client";
import ProfileNav from './ProfileNav'



export default function Profile  ()  {
  const [deleteButton, { err, dat}] = useMutation(DELETE_PROJECT 
  );

console.log(err);

  
  const {error, data} = useQuery(QUERY_SINGLEUSER , {
    variables: {userId:localStorage.getItem('userId')}
  });
  const singleUser = data?.singleUser.projects || [];
 

const handlebutton =async(test) =>{

try{
const  {data} = await deleteButton({
    variables: {projectId:test }
})

  window.location.reload("/");


}catch(err){
console.log(err);
}
}


  return (
    <div>
      <ProfileNav />
      <h1>My projects</h1>
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
          <Button type="submit" onClick={()=>handlebutton(thought._id)} >Delete</Button>
        </Card>
        ))}
    </div>
    
  );
};