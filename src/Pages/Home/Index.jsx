import React from "react";
import { pageTitle } from "../PageTitle";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill/Skill";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Languages from "./components/Languages";

const Home = () => {
  pageTitle("Inicio");
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Portfolio />
      <Skill />
      <Languages />
      <Footer />
    </>
  );
};

export default Home;
