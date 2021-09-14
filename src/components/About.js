import React from "react";
import Links from "./Links";

function About(props) {
  const isbio = props.bio;
  return (
    <div id="about">

      <h2>About Me</h2>
      <b>{isbio ? <p>{isbio}</p> : null} </b>

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
      

    </div>
  );
}


export default About;

