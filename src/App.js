import { Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Home" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
