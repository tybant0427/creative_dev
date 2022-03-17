import Upload from "../upload";
import React from "react";
import CardProjects from './CardProjects'
import { QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from '../../utils/auth'
import Nav from "./BlogNav"
import Icon from '../../assets/video/icon.mp4'
import { Container } from "react-bootstrap";



const BlogHome  = () => {



    const { loading, data } = useQuery(QUERY_PROJECTS);

const projects = data?.projects || [];


console.log(projects)
  return (
    <div>
       
    <main>
      <Nav />
      <h1 className="overhead">Home Blog</h1>
    <div className="">
      <Container className="">

        {loading ? (
          <div>Loading...</div>
        ) : (
          <CardProjects
            projects={projects}
            
          />
        )}
      </Container>
    </div>
  </main>
  </div>
);
        };
export default BlogHome;
