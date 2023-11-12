import React from "react";
import { Link } from "react-router-dom";
import { repositories } from "../../../constants/Repositories";

const Portfolio = () => {
  return (
    <div className="portfolio__area section-padding">
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-12">
            <div className="portfolio__area-title lg-t-center">
              <span className="subtitle">Creados por mi</span>
              <h2>Repositorios</h2>
            </div>
          </div>
        </div>
        <div className="row mb-30">
          <div className="col-xl-3 col-lg-2 mb-4">
            {repositories.map((repository, index) => {
              return (
                <div key={index} className="portfolio__area-item">
                  <div className="portfolio__area-item-image">
                    <img className="img__full" src={repository.image} alt="" />
                    <div className="portfolio__area-item-image-content">
                      <div className="portfolio__area-item-image-content-text">
                        <span>{repository.title}</span>
                        <h4>
                          <Link to={repository.url} className="active">
                            {repository.name}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
