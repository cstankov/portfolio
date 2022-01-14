import React from "react";
import "./Footer.css";
import profilePic from "../../images/profilePic.jpg";
import gitHub from "../../images/icons/github-icon.svg";
import linkedin from "../../images/icons/linkedin-icon.svg";

const Footer = () => {
  let LinkedInurl = "https://www.linkedin.com/in/cole-stankov/";
  let githuburl = "https://github.com/cstankov";
  return (
    <section className="footerSection">
      <div className="footerContainer">
        <div className="footerPictureContainer">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="footerPicture"
          ></img>
        </div>
        <div className="footerSocialContainer">
          <a href={githuburl} className="socialButton">
            <img src={gitHub} alt="Github"></img>
          </a>
          <a href={LinkedInurl} className="socialButton">
              <img src={linkedin} alt="LinkedIn"></img>
          </a>
        </div>
        <div className="footerCopyRight">
            <p>&#169; Cole Stankov 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
