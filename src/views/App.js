import React, { Component } from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
