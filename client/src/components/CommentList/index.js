import React from 'react';

const CommentList = ({ comments = [] }) => {
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
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
