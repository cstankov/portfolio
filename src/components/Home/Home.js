import React from "react";
import avatar from "../../images/my-avatar.svg";
import "./Home.css";

const Home = () => {
  return (
    <section className="homeSection">
      <div className="homeContainer">
          <h1 className="homeHeader">
            Full-Stack Developer and Software Engineer
          </h1>
          <p className="homeSubHeader">
            Problem solver and conceptual thinker with a passion about designing
            and coding exceptional websites, applications and everything in
            between.
          </p>
          <img className="avatar" src={avatar}></img> 
      </div>
    </section>
  );
};

export default Home;