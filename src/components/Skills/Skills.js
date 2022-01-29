import React from "react";
import "./Skills.css";
import css from "./logo/css.png";
import html from "./logo/html.png";
import flutter from "./logo/flutter.png";
import git from "./logo/git.png";
import github from "./logo/github.png";
import javascript from "./logo/javascript.png";
import kotlin from "./logo/kotlin.png";
import mysql from "./logo/mysql.png";
import nodejs from "./logo/nodejs.png";
import react from "./logo/react.png";

function Skills() {
  return (
    <div id="skills" className="skills">
      <h1 className="skill_title"> Skills</h1>

      <div className="Skills_big_containor">
        <div className="Skills_containor">
          <h2 className="skill_sub_title"> Front-end</h2>
          <hr />
          <img className="Skills_box" src={css} />
          <img className="Skills_box" src={html} />
          <img className="Skills_box" src={flutter} />
          <img className="Skills_box" src={kotlin} />
          <img className="Skills_box" src={react} />
          <img className="Skills_box" src={javascript} />
        </div>
        <div className="Skills_containor">
          <h2 className="skill_sub_title">Back-end</h2>
          <hr />
          <img className="Skills_box" src={nodejs} />
          <img className="Skills_box" src={mysql} />
        </div>
        <div className="Skills_containor">
          <h2 className="skill_sub_title">etc</h2>
          <hr />
          <img className="Skills_box" src={git} />
          <img className="Skills_box" src={github} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
