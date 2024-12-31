import React from "react";

const Test = ({ names }) => {
  return (
    <div>
      {names.map((name) => (
        <h3>Hello {name}</h3>
      ))}
    </div>
  );
};

export default Test;
