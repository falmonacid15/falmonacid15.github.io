import React from "react";
import SkillArea from "./SkillArea";

const Skill = () => {
  return (
    <div
      className="skill__area"
      style={{ backgroundImage: `url('assets/img/skills-background.png')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-4 lg-mb-50">
            <div className="skill__area-left">
              <div className="skill__area-left-play-icon video-pulse">
                {" "}
                <a
                  className="video-popup"
                  href="https://github.com/falmonacid15?tab=repositories"
                >
                  <i className="fas fa-play"></i>
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <SkillArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
