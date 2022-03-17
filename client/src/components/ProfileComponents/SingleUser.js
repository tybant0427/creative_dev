import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { QUERY_SINGLEUSER } from '../../utils/queries';
import { Container } from 'react-bootstrap';
import '../../Styles/card.scss'
import { Button } from 'bootstrap';
// import Auth from '../../utils/auth';

export default function SingleUserLoading  ()  {
    const {error, data} = useQuery(QUERY_SINGLEUSER , {
        variables: {userId:localStorage.getItem('userId')}
      });
// console.log(data.singleUser.github);
// var github = data.singleUser.github
const github = data?.singleUser.github || [];
const nameOf = data?.singleUser.userName || [];

  return (
   
        <section className='singleUserData'>

       {github}<br />
       {nameOf}
       {/* <Button id='buttons'  onClick={()=>setFormState({...formState, projectId: project._id})}  >Update</Button> */}
      </section>
  );
};

// export default CommentForm;