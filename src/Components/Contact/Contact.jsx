import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/pooran-suthar-621370211/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/Pooran8898"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="mailto:pooran@masaischool.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a
            href="https://twitter.com/PooranSuthar4"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter" />
          </a>
          <a href="tel:+918898534718" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
      </div>
    </>
  );
};
