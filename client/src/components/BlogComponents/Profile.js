import React, { useEffect } from "react";

import { useState } from "react";

import { QUERY_SINGLEUSER } from "../../utils/queries";

import { useQuery } from "@apollo/client";


export default function Tests() {


  const [formState, setFormState] = useState({
    userId: localStorage.getItem('userId')
    
  });
  // setFormState({
  //   ...formState,
  //   [userId]: value,
  // });

  
  const { loading, data } = useQuery(QUERY_SINGLEUSER);
  console.log(data);
  
  // const test = data
  // const projects = data?.projects || [];     
  
  
  // console.log(projects)
  return (
      
   
    <main>
 <h1>hey</h1>

    
  </main>
)
        }