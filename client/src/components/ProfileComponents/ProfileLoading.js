import { ListGroup, Card, ListGroupItem, Button } from 'react-bootstrap';
import React from "react";
import {  QUERY_SINGLEUSER } from "../../utils/queries";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';
import { useQuery } from "@apollo/client";
import ProfileNav from './ProfileNav'



export default function Profile  ()  {
 

  const [deleteButton, { err, dat}] = useMutation(DELETE_PROJECT , {
    variables: {projectId: ''}
  });
// console.log(test);
console.log(err);

//   console.log(deletes);
  
  const {error, data} = useQuery(QUERY_SINGLEUSER , {
    variables: {userId:localStorage.getItem('userId')}
  });
//   console.log(data);
  const singleUser = data?.singleUser.projects || [];
 


// console.log(singleUser);

const handlebutton =async(e) =>{
e.preventDefault()
try{
    // const test = data.singleUser._id
    console.log(singleUser);
// const  {data}= await deleteButton({
//     variables: {projectId:data }
// })

}catch(err){
console.log(err);
}
}


// const ProfileLayout = ({ singleUser, deleteing }) => {
//   if (!singleUser.length) {
//     return <h3>No project Yet</h3>;
//   }



  return (
    <div>
      <ProfileNav />
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
          <Button type="submit" onClick={()=>deleteButton} >Delete</Button>
        </Card>
        ))}
    </div>
    
  );
};
// onSubmit={()=>deleteing({ id: thought._id})}
// export default ProfileLayout;