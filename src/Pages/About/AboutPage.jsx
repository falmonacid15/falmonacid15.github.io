import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Header from "../../layout/Header";
import { pageTitle } from "../PageTitle";
import Footer from "../../layout/Footer";
import { user } from "../../constants/GeneralData";
import { skills } from "../../constants/Skills";

const AboutPage = () => {
  pageTitle("Sobre mi");
  const [skillBar, setSkillBar] = useState(false);
  return (
    <>
      <Header />
      <ScrollTrigger
        onEnter={() => setSkillBar(true)}
        onExit={() => setSkillBar(false)}
      >
        <div className="about__page section-padding pb-100">
          <div className="container">
            <div className="row mt-60">
              {/* sobre mi  */}
              <div className="col-xl-6 col-lg-6">
                <div className="about__page-left">
                  <div className="about__page-left-title">
                    <span className="subtitle">Sobre mi...</span>
                    <h2>Hola, soy {user.first_name}</h2>
                  </div>
                  <div className="about__page-left-content">
                    <p>{user.about_me}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      <div className="team__area">
        <div className="container">
          <div className="row mb-30 team__area-border">
            <div className="col-xl-12">
              <div className="team__area-title lg-t-center">
                <span className="subtitle">Experiencia laboral</span>
                <h2></h2>
              </div>
            </div>
          </div>
          <div className="row">
            {user.experiences.map((item, id) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={id}>
                <div className="team__area-item">
                  <div className="team__area-item-image">
                    <img src={item.image} alt="" />
                    <div className="team__area-item-image-social">
                      <ul>
                        {item.socialLinks.map((item, id) => (
                          <li key={id}>
                            <Link to={item.link}>
                              <i className={item.icon}></i>
                            </Link>{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="team__area-item-content">
                    <h5>{item.company}</h5>
                    <span>{item.title}</span>
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="client__area">
        <div className="container">
          <div className="row mb-30">
            <div className="col-xl-12">
              <div className="client__area-title">
                <span className="subtitle-one">Habilidades</span>
                <h2>Tecnologias que manejo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {skills.map((item, id) => (
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6" key={id}>
                <div className="client__area-item">
                  <img src={item.logo} alt={item.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
