import { ListGroup, Card, ListGroupItem, Button } from 'react-bootstrap';
import React , {useState} from "react";
import {  QUERY_SINGLEUSER } from "../../utils/queries";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';
import { useQuery } from "@apollo/client";
import ProfileNav from './ProfileNav'
import { UPDATE_PROJECT } from '../../utils/mutations';
import { Link } from 'react-router-dom';

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





  const {error:errorM, data:dataM} = useMutation(UPDATE_PROJECT , {
    variables: {userId:localStorage.getItem('userId')}
  });
  console.log(dataM);

//   const updated = data?.singleUser.projects || [];
// const handlebutton =async(test) =>{
// try{
// const  {data} = await deleteButton({
//     variables: {projectId:test }
// })
//   window.location.reload("/");
// }catch(err){
// console.log(err);
// }
// }
const [formState, setFormState] = useState({
  projectId: '',
  title: '',
  description: '',
  respitoryLink: '',
  liveLink: '',
  image: ''
});

const [updateProject, { error:error2, data:data2 }] = useMutation(UPDATE_PROJECT);

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
      variables: { ...formState},
    });
window.location.reload('/')
console.log(data);
  
  } catch (e) {
    console.error(e);
    
  }
};

  return (
    <div>
      <ProfileNav />
      <h1>My Projects</h1>
      
      {
        singleUser.map((project) => (
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
          </Card.Body>
          <Button type="submit" onClick={()=>handlebutton(project._id)}  >Delete</Button>
        {/* <div value={()=>setFormState({...formState, projectId: project._id})}  >Update</div> */}
        <Link   onClick={()=>setFormState({...formState, projectId: project._id})} to={"/update"}>Update</Link>
        </Card>
        ))}

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
    <label for="exampleFormControlInput1" className="form-label">Image</label>
    <input 
    type="File"
    name="image"
    value={formState.image}
     className="form-control" 
     id="exampleFormControlInput1"
      placeholder=" Image"
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
    </div>
     
  );
};


//make an input