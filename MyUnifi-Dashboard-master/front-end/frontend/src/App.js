import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { AnimatePresence, motion } from 'framer-motion'; //added

import Casting from "./components/Casting";
import Creative from "./components/Creative";
import Home from "./components/Home";
import Tech from "./components/Tech";
import Logo from "./components/Logo";
import Marketing from "./components/Marketing";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router basename="">
          {/* added */}
          <AnimatePresence> 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/creative" component={Creative} />
              <Route path="/marketing" component={Marketing} />
              <Route path="/tech" component={Tech} />
              <Route path="/casting" component={Casting} />
              <Route path="/logo" component={Logo} />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
          {/* added */}
        </Router>
      </div>
    );
  }
}

export default App;
