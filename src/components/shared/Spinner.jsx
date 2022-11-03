import React from "react";
import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="laoding..."
      style={{
        width: "100px",
        margin: "0 auto",
        display: "block",
      }}
    />
  );
}

export default Spinner;
