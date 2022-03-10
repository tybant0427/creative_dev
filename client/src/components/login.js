import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link, Redirect, Route, Router } from 'react-router-dom';


const Login = ()=> {
    const [formState, setFormState] = useState({
        github: '',
        password: ''
        
      });
      const [loginUser, { error, data }] = useMutation(LOGIN_USER);
    
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
          const { data } = await loginUser({
            variables: { ...formState },
          });
    console.log("logininform",data);
          var userid = data.login.users._id;
          
          localStorage.setItem('userId', userid);
          Auth.login(data.login.token);
          window.location.replace("/blog");
          
        } catch (e) {
          console.error(e);
          
        }
      };
    return (
        <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Login</h4>
            <div className="card-body">
              {data ? (
              
                  
                  <Link to={"/blog"}>You May Enter</Link>
                 
                
              ) : (
                <form onSubmit={handleFormSubmit}>
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
                  >
                    
                    Login In
                   
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
export default Login;