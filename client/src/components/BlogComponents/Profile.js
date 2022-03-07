import React, { useEffect } from "react";
import CardProjects from "./CardProjects" 
import { useState } from "react";
import SingleUser from "./ProfileLoading"
import { QUERY_ME, QUERY_SINGLEUSER } from "../../utils/queries";
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../../utils/mutations';
import { useQuery } from "@apollo/client";


export default function Profile  ()  {
 
 
 
  
  const {loading, error, data} = useQuery(QUERY_SINGLEUSER , {
    variables: {userId:localStorage.getItem('userId')}
  });
  console.log(data);
  const singleUser = data?.singleUser.projects || [];
 


console.log(singleUser);

  return (

    <main>
    <div className="flex-row justify-center">
      <div className="col-12 col-md-8 mb-3">

        {loading ? (
          <div>Loading...</div>
        ) : (
          <SingleUser
          singleUser={singleUser}
          
          />
        )}
      </div>
    </div>
  </main>
)
        }
