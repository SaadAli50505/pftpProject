import React from "react";
import logo from "../img/about.jpeg";

function AboutUs() {
  return (
    <div>
      <img src={logo} className="abimg" />
      <div id="bio">
        <h1>Name : Saad Ali</h1>
        <h1>Course : Mern Stack</h1>
        <h1>Roll : pftp375412181</h1>
        <h1>Batch : 1</h1>
        <h1>Email : saadali50505@gmail.com</h1>
        <h1>Phone : 03484381533</h1>
      </div>
      <p id="para" className="container">
        "I want to become a JAVASCRIPT developer and specialise in modren
        javascript framework e.g React,Node,Express,React Native,Angular"
      </p>
    </div>
  );
}

export default AboutUs;
