import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img
                src="https://ca.slack-edge.com/TJVF93HB3-U02956F2N7L-ca50009a2c0e-512"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Pooran Suthar </span> from{" "}
                <span className="different"> Deogarh, Rajasthan</span>. I have
                completed my graduation in Bachelor of Arts Student from
                Shailendra College, Mumbai University.
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Box cricket{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Solving Problems{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning Algorithms{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Listening to Music{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
