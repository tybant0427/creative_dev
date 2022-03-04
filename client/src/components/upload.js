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
            <label for="exampleFormControlInput1" class="form-label">Author</label>
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
            name="title"
             class="form-control"
              id="exampleFormControlInput1" 
              placeholder="What is the name of your project?"
            onChange={handleChange}>
            </input>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Live Page</label>
            <input 
            type="text"
            name="liveLink"
             class="form-control" 
             id="exampleFormControlInput1"
              placeholder="Live Link">
                  onChange={handleChange}
            </input>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Respitory</label>
            <input 
            type="text"
            name="respitoryLink"
             class="form-control" 
             id="exampleFormControlInput1"
              placeholder="Respitory Link">
                  onChange={handleChange}
            </input>
        </div> <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Image</label>
            <input 
            type="text"
            name="image"
             class="form-control" 
             id="exampleFormControlInput1"
              placeholder="paste URL here">
            </input>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Description</label>
            <input 
            type="text"
            name="description"
             class="form-control" 
             id="exampleFormControlInput1"
              placeholder="paste URL here">
            </input>
        </div>
    
  
            
        
        <button type="button" class="btn btn-primary btn-lg" onClick={back}>Submit</button>
        </form>
        
    </>
    )
}

        export default Upload;
        

