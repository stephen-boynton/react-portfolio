import React, { Component } from "react";
import FullStack from "./FullStack.js";
import Modal from "./Modal";
import "../styles/Portfolio.css";

export default class Portfolio extends Component {
  state = {
    displayModal: false,
    selectedProject: 0,
    fullStack: [
      {
        title: "redString",
        description:
          "An app uses natural language processing to visually map relationships between Word documents and PDFs.",
        tech: "JavaScript ES6, Node.js, SQLite3, React, Redux, Python",
        icon: "/img/redstringforresume.png",
        website: "",
        live: false,
        number: 0
      },
      {
        title: "The Ink",
        description:
          "Blogging platform where users can sign up, log in, write posts and leave comments.",
        tech:
          "JavaScript ES6, Node.js, Express, JSON Web Token, PostgreSQL, React",
        icon: "/img/the_ink.png",
        website: "",
        live: false,
        number: 1
      },
      {
        title: "The Moon Collection",
        description:
          "Data about the solar systems moons, scraped by a JavaScript web scraper, placed into a database and hosted on Heroku.",
        tech: "JavaScript ES6, Node.js, Express, MongoDB, Bootstrap",
        icon: "/img/company-images/moon.png",
        website: "https://immense-coast-76494.herokuapp.com/",
        live: true,
        number: 2
      },
      {
        title: "",
        description: "",
        tech: "",
        icon: "",
        website: "",
        live: false,
        number: 3
      }
    ]
  };

  _toggleModal = e => {
    console.log(e.target);
    this.setState({
      displayModal: true
    });
  };

  render() {
    return (
      <div className="Portfolio">
        <div className="left">
          <h2>Full Stack Projects</h2>
          <h3>The Things I Build</h3>
        </div>
        <Modal project={this.state.selectedProject} />
        <div className="proj-row">
          {this.state.fullStack.map(proj => {
            return <FullStack click={this._toggleModal} details={proj} />;
          })}
        </div>
      </div>
    );
  }
}
