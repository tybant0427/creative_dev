import Upload from "../upload";
import React from "react";
import { Card } from "react-bootstrap";
import CardProjects from './CardProjects'
// import Auth from "../../utils/auth"
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QUERY_PROJECTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";


export default function Test() {
    const { loading, data } = useQuery(QUERY_PROJECTS);
// console.log(data);
// console.log(data.projects);
// const test = data
const projects = data?.projects || [];


console.log(projects)
  return (
      
    // <h1>hey</h1>
    <main>
    <div className="flex-row justify-center">
      <div className="col-12 col-md-8 mb-3">
        {/* If the data is still loading, render a loading message */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CardProjects
            projects={projects}
            // title="Some Feed for Thought(s)..."
          />
        )}
      </div>
    </div>
  </main>
)
        }
