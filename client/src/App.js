import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './Styles/index.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from './components/Home';
// import Blog from './pages/Blog';
import BlogHome from "./components/BlogComponents/BlogHome"
import Upload from './components/upload';
import Profile from "./components/ProfileComponents/ProfileLoading"
import Pic from "./assets/images/pexels-peter-fazekas-1170576.jpg"
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
          
          <Switch>
          <Router>
            <Route exact path='/' component={Home} />
            <Route path="/upload" component={Upload} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profile" component={Profile} />


          
           
            <Route  path="/blog" component={BlogHome} />
             </Router>
           {/* <Route path='/sign-in' component={Login} />   */}
          

          </Switch>

        </div>
      </div>
      </div>
     
   
    </ApolloProvider>
  );
}
export default App;
