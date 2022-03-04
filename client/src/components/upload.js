import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../utils/mutations';
import { Link, Redirect, Router } from 'react-router-dom';







const Upload = () => {


    
        const [formState, setFormState] = useState({
            author: '',
            title: '',
            description: '',
            respitoryLink: '',
            liveLink: '',
            image: ''
          });
          const [addProject, { error, data }] = useMutation(ADD_PROJECT);
        
          const handleChange = (event) => {
            const { author, value } = event.target;
        
            setFormState({
              ...formState,
              [author]: value,
            });
          };
        
          const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);  
        
            try {
              const { data } = await addProject({
                variables: { ...formState },
              });
        
            //   Auth.login(data.addUser.token);
            } catch (e) {
              console.error(e);
              
            }
          };

    const back = () => {
        window.location.assign("/blog");
    }

    return (
        <>
<form onSubmit={handleFormSubmit}>
<div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input
             type="text" 
             name="author"
             class="form-control" 
             id="exampleFormControlInput1" 
             placeholder="name here"
             onChange={handleChange}>
            </input>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Project Name</label>
            <input 
            type="text"
             class="form-control"
              id="exampleFormControlInput1" 
              placeholder="What is the name of your project?">
            </input>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">URL</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="paste URL here"></input>
        </div>
    
  
            <div class="mb-3">
                <label for="formFile" class="form-label">Upload an image</label>
                <input class="form-control" type="file" id="formFile"></input>
              </div>
        
    
         
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>
        
        <button type="button" class="btn btn-primary btn-lg" onClick={back}>Submit</button>
        </form>
        
    </>
    )
}

        export default Upload;
        

