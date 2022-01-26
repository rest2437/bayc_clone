import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "black", height: "700px", width: "100%" }}
    >
      <h1 style={{ color: "white" }}>
        Welcome to the <br /> Blah Blah Blah
      </h1>
      <Link to="/Home">
        <button
          style={{
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#CEFA05",
            width: "300px",
            height: "50px",
            borderRadius: "10px",
            border: "0px",
            cursor: "pointer",
            marginTop: "30rem",
          }}
        >
          ENTER
        </button>
      </Link>
    </div>
  );
}

export default Landing;
