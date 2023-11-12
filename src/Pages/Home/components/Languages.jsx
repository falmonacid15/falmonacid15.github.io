import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { skills } from "../../../constants/Skills";

const Languages = () => {
  return (
    <div className="sponsors__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <Swiper
              slidesPerView={3}
              loop={true}
              spaceBetween={120}
              breakpoints={{
                0: {
                  spaceBetween: 50,
                  slidesPerView: 2,
                },
                575: {
                  spaceBetween: 80,
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {skills
                .filter((item) => item.type === "language")
                .map((item, index) => (
                  <SwiperSlide
                    className="sponsors__area-brand swiper-slide"
                    key={index}
                  >
                    <div className="row text-center">
                      <Link to="#">
                        <img src={item.logo} alt="" />
                      </Link>
                      <span>{item.name}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
