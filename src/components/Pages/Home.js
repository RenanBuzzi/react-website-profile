import React from "react";
import "../../App.css";
// import Cards from '../Cards';
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Slider from "./SlideImages/Slider";
import { Fragment } from "react";
import "../Pages/Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Fragment>
        <div className="space"></div>
        <Slider />
      </Fragment>
      <Footer />
    </>
  );
};

export default Home;
