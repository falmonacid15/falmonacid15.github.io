import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import ReactSkillBar from "react-skillbars";
import { user } from "../../../../constants/GeneralData";

const SkillArea = () => {
  const [skillBar, setSkillBar] = useState(false);
  return (
    <div className="skill__area-right">
      <ScrollTrigger
        onEnter={() => setSkillBar(true)}
        onExit={() => setSkillBar(false)}
      >
        <div className="skill__area-right-title">
          <h2>Mis Skills</h2>
        </div>
        <div className="skill__area-right-skill">
          {user.skills.map((item, index) => {
            return (
              <div className="skill__area-right-skill-item" key={index}>
                <div className="skill__area-right-skill-item-content">
                  <h6>{item.type}</h6>
                  <div className="skill__area-right-skill-item-count">
                    <>
                      {skillBar && (
                        <CountUp
                          start={0}
                          end={item.level}
                          duration={4}
                          delay={0}
                        ></CountUp>
                      )}
                      %
                    </>
                  </div>
                </div>
                <div className="skill__area-right-skill-item-bar">
                  {skillBar && (
                    <ReactSkillBar
                      skills={[{ type: item.type, level: item.level }]}
                      height={16}
                      animationDuration={2500}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default SkillArea;
