// import React, { Component } from "react";
// import Auth from "../utils/auth"
// export default class Login extends Component {

//     render() {
       
//         return (
//             <>
//                 <form>
//                     <h3>Sign In</h3>
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" placeholder="Enter Name" />
//                     </div>
//                     <div className="form-group">
//                         <label>Github Username</label>
//                         <input type="text" className="form-control" placeholder="Enter Username" />
//                     </div>
//                     <div className="form-group">
//                         <label>Password</label>
//                         <input type="password" className="form-control" placeholder="Enter password" />
//                     </div>
//                     <div className="form-group">
//                         <div className="custom-control custom-checkbox">
//                             <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                             <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                         </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                     <p className="forgot-password text-right">
//                         Forgot <a href="#">password?</a>
//                     </p>

//                 </form>
                
//             </>
//         );
//     }
// }

// see SignupForm.js for comments

import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link, Redirect, Router } from 'react-router-dom';


const Login = ()=> {
    const [formState, setFormState] = useState({
        github: '',
        password: '',
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
    
          Auth.login(data.login.token);
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
              
                  
                  <Link to={"/"}></Link>
                  // <Redirect to={Home} />
                
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
                    Login
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