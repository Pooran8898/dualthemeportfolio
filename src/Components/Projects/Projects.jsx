import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/6r42XGx/Kryptobuzz.png"
                  alt="KryptoBuzz"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Krypto Buzz</h2>
              <p>
                KryptoBuzz is a website that helps you transfer the Ethereum from one wallet to another wallet. with the help of metamask you can carryout the successfull transaction.
              </p>
              <div>
                <FaReact />
                <SiBlockchaindotcom />
                <SiEthereum />
                <FaHardHat />
                <SiChai />
                <SiHtml5 />
                <SiTailwindcss/>
              </div>
              <div>
                <a
                  href="https://kryptobuzzbypooran.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pooran8898/Krytobuzz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/Gddr29J/chess-multiplayer.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Chess Multiplayer</h2>
              <p>
                Chess Multiplayer is a website where you can play chess with your loved ones that are in any part of the world just by sharing a simple link. Also you can chat while playing chess.
              </p>
              <div>
                <FaReact />
                <SiSocketdotio />
                <SiExpress />
                <SiHtml5 />
                <DiCss3 />
                <SiMaterialui />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://chessmultiplayer.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pooran8898/Multiplayer-chess"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/GRmXtzD/Sudoku.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Sudoku Solver</h2>
              <p>
                Sudoku Solver is a Website that gives you the Solution of Every
                Sudoko Problem that you input and also you can visualize each
                step of how the sudoku is getting solved.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiMaterialui />
                <VscJson />
              </div>
              <div>
                <a
                  href="https://csb-ks3rf.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pooran8898/Sudokosolver"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/CJbbtVf/chat-application.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Chat Application</h2>
              <p>
                Chat-application is an website where you can have live chatting with your loved ones and you can create your own custom room according to the requirement.
              </p>
              <div>
                <FaReact/>
                <SiHtml5 />
                <SiExpress/>
                <SiSocketdotio/>
                <SiReactrouter/>
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://chat-app-web-socket.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pooran8898/chat-application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/mFHC9kk/covidtracker.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>CovidTracker(India)</h2>
              <p>
                Covid Tracker is website that shows you the complete data of the
                Covid-19 Cases of Every State distributed in three sections
                Active, Recovered and Deaths.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiMaterialui />
                <VscJson />
              </div>
              <div>
                <a
                  href="https://covid-19-tracker-indiabypooran.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Pooran8898/Covid-19-Tracker-India"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
