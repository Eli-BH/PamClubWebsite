import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import IntroPage from "./components/IntroPage";
import InfoPage from "./components/InfoPage";
import GalleryComponent from "./components/GalleryComponent";
import Executives from "./components/Executives";
import Activities from "./components/Activities";
import Header from "./components/Header";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={IntroPage} />
              <Route exact path="/Home" component={InfoPage} />
              <Route exact path="/gallery" component={GalleryComponent} />
              <Route exact path="/executives" component={Executives} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
