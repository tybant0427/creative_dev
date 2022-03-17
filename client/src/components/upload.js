import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';







const Upload = () => {


    console.log(Auth.getProfile().data.userName);
        const [formState, setFormState] = useState({
            userId: localStorage.getItem('userId'),
            userOfProject: Auth.getProfile().data.userName,
            title: '',
            description: '',
            respitoryLink: '',
            liveLink: '',
            image: ''
          });
          
          const [addProject, { error, data }] = useMutation(ADD_PROJECT);
        
          const handleChange = (event) => {
            const { name, value } = event.target;
        
            setFormState({
              ...formState,
              [name]: value,
            });
          };
        
          const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);  
        
            try {
              const { data } = await addProject({
                variables: { ...formState },
              });
              window.location.replace("/blog")
        console.log(data);
            
            } catch (e) {
              console.error(e);
              
            }
          };

   

    return (
        
      
<div className="UpdateFix ">
<form onSubmit={handleFormSubmit}>



        <div className="">
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
        
        {data ? (
              
              // console.log(data.addUser.users._id)
              
              <Link to={"/blog"}>Back to Blog</Link>
              // <Redirect to={Home} />
            
          ) : (
       
            
        
        <button type="submit" class="btn btn-primary btn-lg" >Submit</button>
          )} 

        </form>
       
    </div>
     
    )
}

        export default Upload;
        

