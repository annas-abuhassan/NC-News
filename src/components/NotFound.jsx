import React from "react";

const NotFound = props => {
  return (
    <div>
      Somethings gone wrong here...{" "}
      {props.location.state ? <h1>{props.location.state.message}</h1> : <></>}
    </div>
  );
};

export default NotFound;
