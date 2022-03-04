import React from "react";
import { Link } from 'react-router-dom';

const SubmitProject = () => {

    return (

<div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name here">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Project Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="What is the name of your project?">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">URL</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="paste URL here">
        </div>
    </br>
  
            <div class="mb-3">
                <label for="formFile" class="form-label">Upload an image</label>
                <input class="form-control" type="file" id="formFile">
              </div>
        </br>
    
          </div>
         <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
         </div>
        </br>
        <button type="button" class="btn btn-primary btn-lg">Submit</button>

        export default SignUp;
        

