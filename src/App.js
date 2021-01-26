import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
