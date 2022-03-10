import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from './components/Home';
// import Blog from './pages/Blog';
import BlogHome from "./pages/BlogHome"
import Upload from './pages/upload';
import Profile from "./components/ProfileComponents/ProfileLoading"
import Pic from "./assets/images/space.jpg"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from "./utils/auth"
import { Image } from 'react-bootstrap';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
 
  const token = localStorage.getItem('id_token');
 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  

  return (
    <ApolloProvider client={client}>
  
    
    <div className="App">
      <img src={Pic} className='backImg'></img>
      <div className="auth-wrapper ">
        <div className="auth-inner ">
          
          
          <Router>
            <Route exact path='/' component={Home} />
            {/* <Switch> */}
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/profile" component={Profile} />

          <Route exact path="/blog" component={BlogHome} />
           {/* </Switch> */}
           
            
             </Router>
           {/* <Route path='/sign-in' component={Login} />   */}
          

         

        </div>
      </div>
      </div>
     
   
    </ApolloProvider>
  );
}
export default App;
