import React from "react";
import "../../App.css";
// import Cards from '../Cards';
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Slider from "./SlideImages/Slider";
import { Fragment } from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Fragment>
        <Slider />
      </Fragment>
      <Footer />
    </>
  );
};

export default Home;
