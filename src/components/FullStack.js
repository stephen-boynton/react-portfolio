import React from "react";
import "../styles/FullStack.css";

export default function FullStack(props) {
  return (
    <div
      value={props.details.number}
      className="FullStack"
      onClick={props.click}
    >
      <img src={props.details.icon} />
      <h3>{props.details.title}</h3>
      <p>{props.details.description}</p>
      <h5>{props.details.tech}</h5>
    </div>
  );
}
