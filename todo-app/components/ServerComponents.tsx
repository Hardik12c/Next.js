import React from "react";

const ServerComponents = ({task:Tas}) => {
  return <div className="todo">
    <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
    </div>
  </div>;
};

export default ServerComponents;