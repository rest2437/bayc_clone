import React, { useState } from "react";
import { Link } from "react-router-dom";

function Landing() {
  const [bgColor, setBgColor] = useState("#CEFA05");
  const style = {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: `${bgColor}`,
    width: "300px",
    height: "50px",
    borderRadius: "10px",
    border: "0px",
    cursor: "pointer",
    marginTop: "30rem",
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        height: "55rem",
        width: "100%",
        marginTop: "-1.5rem",
      }}
    >
      <h1 style={{ color: "white" }}>
        Welcome to the <br /> Blah Blah Blah
      </h1>
      <Link to="/Home">
        <button
          style={style}
          onMouseEnter={() => setBgColor("#ffffff")}
          onMouseLeave={() => setBgColor("#CEFA05")}
        >
          ENTER
        </button>
      </Link>
    </div>
  );
}

export default Landing;
