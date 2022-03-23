import { QUERY_UserComments } from '../../utils/queries';
import React , {useState} from "react";
import { useQuery } from "@apollo/client";

export default function userComments(){
    const {error:err2, data:data4} = useQuery(QUERY_UserComments , {
        variables: {userId:localStorage.getItem('userId')}
      });
      console.log(data4);



}