import React from "react";
import { Link } from "react-router-dom";
import { pageTitle } from "../PageTitle";

const Error = () => {
  pageTitle("Error");
  return (
    <div className="error__page">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="error__page-content">
              <h1>404</h1>
              <p>¡La página que estás buscando no existe!</p>
              <Link className="theme-btn-1" to="/">
                Volver a la página principal
                <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
