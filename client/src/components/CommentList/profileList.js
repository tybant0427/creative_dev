import React from 'react';
import {Button} from "react-bootstrap"
import { DELETE_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';




const CommentListProfile = ({ comments = [] }) => {


    const [deleteComment, { err3, data3}] = useMutation(DELETE_COMMENT 
        );
      console.log(err3, data3);
      
      const commentId =async( commentId) =>{
          try{
            const  {data} = await deleteComment({
              variables: {commentId:commentId}
            })
            console.log( data);
            
            window.location.reload('/profile')
          }catch(err){
        JSON.stringify(err)
        console.log(err);
        }
        }


// console.log(comments);


  if (!comments.length) {
    
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      
   
      <h3 
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #fff' }}
      >
        Comments:
      </h3>
      <div  className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              
              <div id='comment-card' className="p-3">
                <h5 className="card-header">
                  {comment.commentAuthor} <br />
                  <span style={{ fontSize: '0.825rem' }}>
                   commented on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
                
              <Button  type="submit" onClick={()=>commentId(comment._id)}  >Delete Comment</Button>
              </div>
            </div>
          ))}
      </div>
     
          
    </>
  );
};

export default CommentListProfile;