import React from "react";
import "./Footer.css";
import profilePic from "../../images/profilePic.jpg";
import gitHub from "../../images/icons/GitHub-White-64px.png";
import linkedin from "../../images/icons/linkedin-icon-white.svg";

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
          <a href={githuburl}>
            <img src={gitHub} alt="Github" id="github"></img>
          </a>
          <a href={LinkedInurl} >
              <img src={linkedin} alt="LinkedIn" id="linkdin"></img>
          </a>
        </div>
        <div className="footerCopyRight">
            <p className="copyRight">&#169; Cole Stankov 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
