import Upload from "./upload";
import React from "react";
import CardProjects from '../components/BlogComponents/CardProjects'
import { QUERY_PROJECTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from '../utils/auth'
import Nav from "../components/BlogComponents/BlogNav"
// import Icon from '../../assets/video/icon.mp4'



const BlogHome  = () => {



    const { loading, data } = useQuery(QUERY_PROJECTS);

const projects = data?.projects || [];


console.log(projects)
  return (
    <div>
       
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
  </div>
);
        };
export default BlogHome;
