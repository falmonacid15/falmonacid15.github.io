import React from "react";
import { Link } from "react-router-dom";
import { user } from "../../../constants/GeneralData";

const Banner = () => {
  return (
    <div
      className="banner__area"
      style={{ backgroundImage: `url('assets/img/banner-background.png')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner__area-content">
              <h1>
                Portafolio de <span>Felipe Almonacid</span>
              </h1>
              <Link className="theme-btn" to="/about">
                Mas sobre mi <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__area-bottom">
        <div className="banner__area-bottom-icon">
          <ul>
            {user.socialLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
