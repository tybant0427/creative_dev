import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
const SignUp = ()=> {
    const [formState, setFormState] = useState({
        name: '',
        github: '',
        password: '',
      });
      const [addUser, { error, data }] = useMutation(ADD_USER);
    
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
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
    return (
            <form onSubmit={handleFormSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input   name="name"
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Name" 
                    value={formState.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Github Username</label>
                    <input     value={formState.github}
                  onChange={handleChange}
                   name="github" type="text" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={formState.password}
                  onChange={handleChange}  name="password" type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>  
        );
    }
export default SignUp;