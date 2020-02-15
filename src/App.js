import React from "react";
import Projects from "./components/projects";
import Forms from "./components/forms";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Projects} />
	<Route path="/form" component={Forms} />
      </Router>
    </div>
  );
}

export default App;
