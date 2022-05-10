import React from "react";

function Response({ response }) {
  console.log(response);
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="first-column">
          <strong>Prompt:</strong>
        </div>
        <div className="second-column">{response.input}</div>
      </div>
      <br />
      <div className="subcontainer">
        <div className="first-column">
          <strong>Response:</strong>
        </div>
        <div className="second-column">{response.response}</div>
      </div>
    </div>
  );
}

export default Response;
