import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import "./TypeMessage.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <div className="homeImage">
        <img alt="HomeCodeImage" src="images/homeImages/codeLarge.jpg" />
      </div> */}
      <div className="video">
        {/* <video src="/videos/Coding.mp4" autoPlay loop muted></video> */}
        <video
          type="video/mp4"
          src="/videos/Coding.mp4"
          autoPlay={true}
          muted
          loop
          playsinline
        ></video>
      </div>
      <h1>Renan Buzzi</h1>
      <div class="typewriter">
        <h1>Software Engineer...</h1>
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
