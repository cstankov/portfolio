import React from "react";
import "./Skills.css";
import cplus from "../../images/icons/c++-icon.svg";
import python from "../../images/icons/python-icon.svg";
import java from "../../images/icons/java-icon.svg";
import golang from "../../images/icons/golang-icon.svg";
import javascript from "../../images/icons/javascript-icon.svg";
import html5 from "../../images/icons/html-5-icon.svg";
import css from "../../images/icons/css-icon.png";
import reactjs from "../../images/icons/react-icon.svg";
import nodejs from "../../images/icons/node-js-icon.svg";
import springBoot from "../../images/icons/spring-logo-icon.svg";
import mongo from "../../images/icons/mongodb-icon.svg";
import postgres from "../../images/icons/postgresql-icon.svg";
import mysql from "../../images/icons/mysql-icon.svg";
import linux from "../../images/icons/linux-icon.png";
import windows from "../../images/icons/windows-icon.svg";
import intellij from "../../images/icons/intellij-icon.svg";
import vscode from "../../images/icons/visual-studio-code-icon.svg";
import android from "../../images/icons/android-studio-icon.svg";
import git from "../../images/icons/git-icon.svg";

const Skills = () => {
  return (
    <section className="skillsSection" id="Skills">
      <div className="skillsContainer">
        <h1 className="skillsHeader">My Skills</h1>
        <div className="skillsCollection">
          <ul className="skillGrid">
            <li>
              <div className="skillItemContainer">
                <img src={cplus} alt="C++"></img>
                <p>C++</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={python} alt="Python"></img>
                <p>Python</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={java} alt="Java"></img>
                <p>Java</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={golang} alt="Golang"></img>
                <p>Golang</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={javascript} alt="Javascript"></img>
                <p>Javascript</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={html5} alt="HTML"></img>
                <p>HTML</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={css} alt="CSS"></img>
                <p>CSS</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={reactjs} alt="ReactJS"></img>
                <p>ReactJs</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={nodejs} alt="NodeJs"></img>
                <p>NodeJs</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={springBoot} alt="Spring Boot"></img>
                <p>Spring Boot</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={mongo} alt="MongoDB"></img>
                <p>MongoDB</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={postgres} alt="Postgresql"></img>
                <p>Postgresql</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={mysql} alt="MySQL"></img>
                <p>MySQL</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={linux} alt="Linux"></img>
                <p>Linux</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={windows} alt="Windows"></img>
                <p>Windows</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={intellij} alt="Intellij"></img>
                <p>Intellij</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={vscode} alt="VScode"></img>
                <p>VSCode</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={android} alt="Android"></img>
                <p>Android Studio</p>
              </div>
            </li>
            <li>
              <div className="skillItemContainer">
                <img src={git} alt="Git"></img>
                <p>Git</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
