import React, { useState } from "react";
import { featuresData } from "../../../constants/GeneralData";

const Features = () => {
  const [active, setActive] = useState(1);
  const handelActive = (index) => {
    setActive(index);
  };

  return (
    <div className="features__area-two">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          {featuresData.map((item, index) => (
            <div className="col-xl-4 col-lg-4" key={index}>
              <div
                className={`features__area-two-item ${
                  active === index ? "active" : ""
                }`}
                onMouseEnter={() => handelActive(index)}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="features__area-two-item-user">
                  {" "}
                  <img src="assets/img/user.png" alt="" />{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
