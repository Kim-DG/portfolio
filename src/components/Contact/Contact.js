import React from "react";
import "./Contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="contact_title"> Contact & git</h1>
      <div className="contact_contents">
        <div className="icon">
          <BsFillTelephoneFill size={50} />
          <IoMdMail size={50} />
          <AiFillGithub size={50} />
        </div>

        <div className="align">
          <p>010-3191-9132</p>
          <p>kdg960914@naver.com</p>
          <body link="black" vlink="black" alink="navy">
            <a href="https://github.com/Kim-DG">
              <p>https://github.com/Kim-DG</p>
            </a>
          </body>
        </div>
      </div>
    </div>
  );
}

export default Contact;
