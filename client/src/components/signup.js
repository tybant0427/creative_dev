import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


const SignUp = ()=> {
    const [formState, setFormState] = useState({
        userName: '',
        github: '',
        password: ''
      
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
          console.log("handelformsub",data);
          var userid = data.addUser.users._id;
          localStorage.setItem('userId', userid);
          Auth.login(data.addUser.token);
          window.location.replace('/blog')
          
        } catch (e) {
          console.error(e);
          
        }
      };
     
    return (
        <main className=" cardTest">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
            <div className="card-body">
              {data ? (
                  
                  <Link to={"/blog"}>click here</Link>

              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-control"
                    placeholder="Your username"
                    name="userName"
                    type="text"
                    value={formState.userName}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control"
                    placeholder="Your github"
                    name="github"
                    type="text"
                    value={formState.github}
                    onChange={handleChange}
                  />
                  <input
                    className="form-control"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    
                  >Submit
                    
                  </button>
                </form>
              )}
  
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
    };
export default SignUp;