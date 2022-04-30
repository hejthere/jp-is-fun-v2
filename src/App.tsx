import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { HomePage } from "./pages/Homepage";

// import towerimgage from '../src/Picture/fuji.jpg'
// import miseimage from '../src/Picture/mise.jpg';

class App extends Component {
  componentDidMount() {
    document.title = "Hejthere";
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <Switch>
          <Route path="/" exact render={(props) => (
            <Banner  {...props} backgrounds={towerimgage} />)} />
          <Route render={(props) => (
            <Banner  {...props} backgrounds={miseimage} />)} />
        </Switch> */}

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* default */}
          {/* <Route component={HomePage} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
