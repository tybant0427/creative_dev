import React from "react";

import { QUERY_SINGLEUSER } from "../../utils/queries";

import { useQuery } from "@apollo/client";


export default function Test() {
    const { loading, data } = useQuery(QUERY_SINGLEUSER);
console.log(data);
// console.log(data.projects);
// const test = data
// const test = data?. || [];


// console.log(test)
  return (
      
   
    <main>
 <h1>hey</h1>

    {/* <div className="flex-row justify-center">
      <div className="col-12 col-md-8 mb-3">
      
        {loading ? (
          <div>Loading...</div>
        ) : (
          
          
        )}
      </div>
    </div> */}
  </main>
)
        }