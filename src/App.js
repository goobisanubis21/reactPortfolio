import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/index"
import Header from "./components/Header/index"
import Choose from "./pages/Choose"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Nav />
            <Header />
            <Switch>
              <Route exact path="/" component={Choose} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer/>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
