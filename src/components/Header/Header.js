import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const [aboutClassName, setaboutClassName] = useState("header_li");
  const [skillsClassName, setskillsClassName] = useState("header_li");
  const [projectClassName, setprojectClassName] = useState("header_li");
  const [contactClassName, setcontactClassName] = useState("header_li");

  const aboutOnChangeBold = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setaboutClassName("onMouse_header_li");
    }
  };

  const aboutOnChangeRight = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setaboutClassName("header_li");
    }
  };

  const skillsOnChangeBold = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setskillsClassName("onMouse_header_li");
    }
  };

  const skillsOnChangeRight = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setskillsClassName("header_li");
    }
  };

  const projectOnChangeBold = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setprojectClassName("onMouse_header_li");
    }
  };

  const projectOnChangeRight = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setprojectClassName("header_li");
    }
  };

  const contactOnChangeBold = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setcontactClassName("onMouse_header_li");
    }
  };

  const contactOnChangeRight = (event: MouseEvent<HTMLLIElement>) => {
    if (event) {
      setcontactClassName("header_li");
    }
  };

  return (
    <header className="header">
      <div className="contents">
        <div className="header_title">KDG's Portfolio</div>

        <div>
          <ul className="header_menulist">
            <li
              className={aboutClassName}
              onMouseOver={aboutOnChangeBold}
              onMouseLeave={aboutOnChangeRight}
              onClick={() => {
                document.getElementById("about").scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                });
              }}
            >
              About me
            </li>
            <li
              className={skillsClassName}
              onMouseOver={skillsOnChangeBold}
              onMouseLeave={skillsOnChangeRight}
              onClick={() => {
                document.getElementById("skills").scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                });
              }}
            >
              Skills
            </li>
            <li
              className={projectClassName}
              onMouseOver={projectOnChangeBold}
              onMouseLeave={projectOnChangeRight}
              onClick={() => {
                document.getElementById("project").scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                });
              }}
            >
              Project
            </li>
            <li
              className={contactClassName}
              onMouseOver={contactOnChangeBold}
              onMouseLeave={contactOnChangeRight}
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
