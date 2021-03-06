import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Navbar />
      <div className="hero">
        <h1>Stephen Boynton</h1>
        <h2>Full Stack React and Node.js Developer</h2>
        <p>Passionately building all things Node</p>
      </div>
    </div>
  );
}
