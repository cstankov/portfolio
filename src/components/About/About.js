import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="aboutSection" id="About">
      <div className="aboutContainer">
        <h1 className="aboutHeader">
          Hi there, I'm Cole. Welcome to my webpage!
        </h1>
        <p className="aboutInformation">
          I am currently living in the Vancouver area and recently graduated
          from Simon Fraser University with a degree in Software Systems. I have
          started doing some freelance web/android development work. I am
          passionate about coding and solving problems through code, and I am
          excited to work alongside other amazing programmers and learn so much
          more!
        </p>
      </div>
    </section>
  );
};

export default About;
