import { ListGroup, Card, ListGroupItem, Button } from 'react-bootstrap';
import React , {useState} from "react";
import {  QUERY_SINGLEUSER } from "../../utils/queries";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';
import { useQuery } from "@apollo/client";
import ProfileNav from './ProfileNav'
// import { UPDATE_PROJECT } from '../../utils/mutations';
// import { Modal } from 'react-bootstrap';



export default function UpdatedUser () {

  const {error:errorM, data:dataM} = useMutation(UPDATE_PROJECT , {
    variables: {userId:localStorage.getItem('userId')}
  });
  console.log(dataM);


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
    window.location.reload('/profile')

console.log(data);
  
  } catch (e) {
    console.error(e);
    
  }
};


return (
    <div>hey</div>
);
}