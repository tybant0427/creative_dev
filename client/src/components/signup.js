import React, {  useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


const SignUp = ()=> {
    const [formState, setFormState] = useState({
        name: '',
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
          window.location.replace("/blog");
        } catch (e) {
          console.error(e);
          
        }
      };
    return (
        <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
            <div className="card-body">
              {data ? (
              
                  console.log(data.addUser.users._id)
                  
                  // <Link to={"/"}></Link>
                  // <Redirect to={Home} />
                
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-control"
                    placeholder="Your username"
                    name="name"
                    type="text"
                    value={formState.name}
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
                  >
                    <Link to="/blog">
                    Submit
                    </Link>
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

{/* <form onSubmit={handleFormSubmit}>
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
        ); */}