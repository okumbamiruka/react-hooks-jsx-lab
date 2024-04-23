import React from "react";
import {name, city, image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am {name} and I am from {city}.
      </p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
