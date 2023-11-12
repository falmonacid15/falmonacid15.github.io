import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ variant }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`header__area ${variant ? variant : ""} header__sticky ${
          isSticky ? "header__sticky-active" : ""
        }`}
      >
        <div className="container">
          <div className="header__area-box">
            <div className="header__area-box-logo">
              <Link to="/">
                <img src="/assets/img/logo-1.png" alt="logo" />
              </Link>
            </div>
            <div className="header__area-box-menu">
              <div className="header__area-box-main-menu">
                <ul
                  className="mobile__menu"
                  style={{ display: `${mobileToggle ? "block" : "none"}` }}
                >
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/about">Sobre mi</Link>
                  </li>
                  {/* <li>
                    <Link to="/portfolio-details">Proyectos</Link>
                  </li> */}
                </ul>
                <span
                  className={
                    mobileToggle
                      ? "mobile-menu mobile-menu-active"
                      : "mobile-menu"
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
