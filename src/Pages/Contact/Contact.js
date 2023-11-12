import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { pageTitle } from "../PageTitle";
import Form from "./Form";

const Contact = () => {
  pageTitle("Contact Us");
  return (
    <>
      <Header></Header>
      <div className="contact__area section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-5 col-lg-6">
              <div className="contact__area-title">
                <span className="subtitle">Contact Us</span>
                <h2>Need Yor any help Contact with Us</h2>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="far fa-phone-alt"></i>
                    <span>Phone :</span>
                  </div>
                  <div className="contact__area-info-item-content">
                    <a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                    <span>Email :</span>
                  </div>
                  <div className="contact__area-info-item-content">
                    <a href="mailto:support@gamil.com">support@gamil.com</a>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="far fa-map-marker-alt"></i>
                    <span>Location :</span>
                  </div>
                  <div className="contact__area-info-item-content">
                    <Link to="#">66W3+Q4G Buxton, UK</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-bottom">
                <div className="contact__area-bottom-form page">
                  <Form></Form>
                </div>
                <div className="contact__area-bottom-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
