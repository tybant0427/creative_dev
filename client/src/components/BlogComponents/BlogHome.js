import Upload from "../upload";
import React from "react";
import CardProjects from './CardProjects'
import { QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from '../../utils/auth'




export default function Blog() {

  // if(!Auth.loggedIn()){
  //   window.location.assign('/')
  //     } 



    const { loading, data } = useQuery(QUERY_PROJECTS);

const projects = data?.projects || [];


console.log(projects)
  return (

    <main>
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
)
        }
