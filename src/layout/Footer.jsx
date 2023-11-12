import React from "react";
import { Link } from "react-router-dom";
import { user } from "../constants/GeneralData";

const Footer = () => {
  return (
    <>
      <div className="footer__area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="footer__area-widget">
                <div className="footer__area-widget-about lg-t-center">
                  <div className="footer__area-widget-about-logo">
                    <Link to="/">
                      <img src="assets/img/logo-1.png" alt="" />
                    </Link>
                  </div>
                  <div className="footer__area-widget-about-social">
                    <ul>
                      {user.socialLinks.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link to={item.url}>
                              <i className={item.icon}></i>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="footer__area-widget-about-menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">Sobre mi</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area copyright__area-one">
        <div className="container">
          <div className="row align-items-center copyright__area-border">
            <div className="col-xl-12">
              <div className="copyright__area-left copyright__area-one-left">
                <p>
                  Copyright © 2023 Desarrollado por{" "}
                  <Link to="/">Felipe Almonacid</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
