import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import defaultPicture from "../../images/application-default.png";
import * as constants from "../../constants/constants";

const Projects = () => {
  return (
    <section className="projectsSection" id="Projects">
      <div className="projectsIntroContainer">
        <h1 className="projectsHeader">My Projects</h1>
        <p className="projectsDisclaimer">
          Here is a collection of notable projects that I have worked on over
          the years. Some of the projects are from my schooling and therefore
          the intellectual property is not my own to distribute. If you wish to
          see one of these projects that are locked feel free to contact me and
          I can issue an account to view them.
        </p>
      </div>
      <div className="projectsContainer">
        <ProjectCard
          name={constants.CBR_NAME}
          description={constants.CBR_DESCRIPTION}
          picture={defaultPicture}
          tech={constants.CBR_TECH}
          url={constants.CBR_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.PORTFOLIO_NAME}
          description={constants.PORTFOLIO_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.PORTFOLIO_TECH}
          url={constants.PORTFOLIO_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.EX_TRACKER_NAME}
          description={constants.EX_TRACKER_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.EX_TRACKER_TECH}
          url={constants.EX_TRACKER_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.COVID_MINING_NAME}
          description={constants.COVID_MINING_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.COVID_MINING_TECH}
          url={constants.COVID_MINING_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.DBMS_NAME}
          description={constants.DBMS_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.DBMS_TECH}
          url={constants.DBMS_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.NOTE_APP_NAME}
          description={constants.NOTE_APP_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.NOTE_APP_TECH}
          url={constants.NOTE_APP_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.COMMENT_ABUSE_NAME}
          description={constants.COMMENT_ABUSE_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.COMMENT_ABUSE_TECH}
          url={constants.COMMENT_ABUSE_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.BILBY_NAME}
          description={constants.BILBY_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.BILBY_TECH}
          url={constants.BILBY_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.PRISTINE_NAME}
          description={constants.PRISTINE_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.PRISTINE_TECH}
          url={constants.PRISTINE_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.CRYPTO_ANAL_NAME}
          description={constants.CRYPTO_ANAL_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.CRYPTO_ANAL_TECH}
          url={constants.CRYPTO_ANAL_GITHUB_LINK}
        />
        <ProjectCard
          name={constants.GEOBRAWL_NAME}
          description={constants.GEOBRAWL_DESCRIPTION1}
          picture={defaultPicture}
          tech={constants.GEOBRAWL_TECH}
          url={constants.GEOBRAWL_GITHUB_LINK}
        />
      </div>
    </section>
  );
};

export default Projects;
