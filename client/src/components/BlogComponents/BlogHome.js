import Upload from "../upload";
import React from "react";
import CardProjects from './CardProjects'
import { QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from '../../utils/auth'
import Nav from "./BlogNav"



const BlogHome  = () => {

  // if(!Auth.loggedIn()){
  //   window.location.assign('/')
  //     } 



    const { loading, data } = useQuery(QUERY_PROJECTS);

const projects = data?.projects || [];


console.log(projects)
  return (

    <main>
      <Nav />
      <h1 className='padding'>Home Blog</h1>
    <div className="flex-row justify-center">
      <div className="col-12 col-md-8 mb-3">

        {loading ? (
          <div>Loading...</div>
        ) : (
          <CardProjects
            projects={projects}
            
          />
        )}
      </div>
    </div>
  </main>
);
        };
export default BlogHome;
