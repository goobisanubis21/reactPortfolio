import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/index"
import Choose from "./pages/Choose"
import Resume  from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
        <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Choose} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resumePage" component={Resume} />
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
