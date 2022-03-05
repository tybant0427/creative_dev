import React from 'react';

const Layout = ({ projects }) => {
  if (!projects.length) {
    return <h3>No project Yet</h3>;
  }

  return (
    <div>
      {/* <h3>{title}</h3> */}
      {
        projects.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {thought.description} <br />
              <span style={{ fontSize: '1rem' }}>
                 {thought.liveLink}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Layout;