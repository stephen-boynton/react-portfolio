import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About">
      <div className="left">
        <h3>
          "I’m past patiently waitin’. I’m passionately smashin’ every
          expectation. Every action’s an act of creation!"
        </h3>
        <p>— Lin Manuel Miranda - Hamilton the Musical</p>
      </div>
      <div className="center">
        <h2>About</h2>
        <p>
          <strong>
            TLDR: Rebooted career from paralegal to developer, bringing
            professionalism and ability to rapidly learn anything to the field
          </strong>
        </p>
        <p>
          I graduated from The College of Charleston in 2007. My first career
          was as a paralegal where I primarily worked in litigation. I had been
          considering making the jump to law school, but after seeing lawyers in
          their natural habitat, I knew that lifestyle wasn't for me.
        </p>
      </div>
      <div className="right">
        <img src="/img/justice-code.jpg" />
      </div>
    </div>
  );
}
