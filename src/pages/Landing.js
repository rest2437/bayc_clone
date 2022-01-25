import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>hello this is landing</h1>
      <Link to="/Home">
        <button>ENTER</button>
      </Link>
    </div>
  );
}

export default Landing;
