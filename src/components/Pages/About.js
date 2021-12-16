import React from "react";
import "../../App.css";
import "./About.css";
import "../TypeMessage.css";
import Footer from "../Footer";
import "../Pages/Carousel.css";

const About = () => {
  return (
    <>
      <div>
        {/* Life */}
        {/* <div className="line"></div> */}
        <div className="containerLife">
          <video
            className="videoLife"
            src="images/videos/life.mp4"
            autoPlay
            loop
            muted
            playsinline
          ></video>
          <div className="SubTileRight">Renan Buzzi, tell about yourself?</div>
          <div className="PhraseRight">
            Brazilian, in my early 30’s, married and enthusiastic for
            technology. After a long journey in Australia and Panama for studies
            and work purposes, I decided to stopover in London, one of the best
            capital cities outside the US, for tech professionals. Here I worked
            for a Fintech, Red Cloud, and now I am working for one of the
            biggest and traditional Music companies in the UK, PRS for Music.
            But challenging myself, my wife and I have decided to start a new
            tech project, which is still early stage, but with big aspirations.
            Being here has inspired us to study and develop even more. Please
            get to know me better!
          </div>
        </div>
        <div className="line"></div>

        {/* Education */}
        <div className="line"></div>
        <div className="containerEducation">
          <video
            className="videoEducation"
            src="images/videos/education.mp4"
            playsinline
            autoPlay
            loop
            muted
          ></video>
          <div className="SubTileLeft">Background</div>
          <div className="PhraseLeft">
            Graduated in <b>Information System</b> at University Carlos Drummond
            de Andrade in 2010, Post Graduate in <b>Business Intelligence</b>{" "}
            from the Institution (IBTA), Brazilian Institute of Advanced
            Technology in 2012. AGILE methodology of Scrum Master and Scrum
            fundamentals. Self-learning full stack-developer.
          </div>
        </div>
        <div className="line"></div>

        {/* Skills */}
        <div className="line"></div>
        <div className="containerSkill">
          <video
            playsinline
            className="videoSkill"
            src="images/videos/Skills.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="SubTileSkill">Skills</div>
          <div className="PhraseSkill">
            • C# ASPX / Razor / MVC and .Net Core • Web API REST Services / SOAP
            / Web Services / WCF Services / Micro-services • Unit test • Swagger
            • Authorisation and Authentication • Azure • Azure DocumentDB • SQL
            Server 2016/2014/2012/2008 (SQL, T-SQL, Stored Procedures) •
            Business Intelligence • ETL • SSIS • Power BI • AWS Console/Gateway
            • AWS Lambda • Cognito • S3 • React JS • HTML / CSS • Team City •
            Octopus Deploy • GIT, Subversion, Team Foundation, and RTC • Agile:
            Scrum with Kanban • SDLC
          </div>
        </div>
        <div className="line"></div>

        {/* Hobiie */}
        <div className="line"></div>
        <div className="containerHobbie">
          <video
            playsinline
            className="videoHobiie"
            src="images/videos/hobbies.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="SubTileHobbie">Hobbies</div>
          <div className="PhraseHobbie">
            Watching Japanese animes, playing acoustic guitar special Rock n'
            Rolls songs are my favorites Keeping up to date with my Brazilian
            soccer team, Sao Paulo. Cooking and trying new recipes for my wife's
            joy.
          </div>
        </div>
      </div>
      <div className="line"></div>
      <Footer />
    </>
  );
};

export default About;
