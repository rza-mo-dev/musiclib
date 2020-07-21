import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Library from "./components/Library";
// import { v1 as uuid } from {uuid};
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/about" component={About} />
            <Route path="/library" component={Library} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
