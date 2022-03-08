import React ,{useState} from "react";
import { UPDATE_PROJECT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Update ()  {

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
      // window.location.replace('/profile')
      console.log(data);
        
        } catch (e) {
          console.error(e);
          
        }
      };









    return(
        
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
    
    
     
  );
  
    
}