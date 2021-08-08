import React from "react";
import "../../App.css";
import "./About.css";
import "../TypeMessage.css";
import Footer from "../Footer";
import "../Pages/Carousel.css";

const About = () => {
  return (
    <>
      <div className="AboutCenterPage">
        <div>
          <img className="images" alt="life" src="images/life.jpg" />
        </div>
        <div className="Life">Life...</div>
        <div className="SubTile">Renan Buzzi, tell about yourself?</div>
        <div className="Phrase">
          Brazilian, in my early 30’s, married and enthusiastic for technology.
          After a long journey in Australia and Panama for studies and work
          purposes, I decided to stopover in London, one of the best capital
          cities outside the US, for tech professionals. Here I worked for a
          Fintech, Red Cloud, and now I am working for one of the biggest and
          traditional Music companies in the UK, PRS for Music. But challenging
          myself, my wife and I have decided to start a new tech project, which
          is still early stage, but with big aspirations. Being here has
          inspired us to study and develop even more. Please get to know me
          better!
        </div>
        <div>
          <img className="images" alt="education" src="images/education.jpg" />
        </div>
        <div className="Education">Education</div>
        <div className="SubTile">Background.</div>
        <div className="Phrase">
          Graduated in <b>Information System</b> at University Carlos Drummond
          de Andrade in 2010, Post Graduate in <b>Business Intelligence</b> from
          the Institution (IBTA), Brazilian Institute of Advanced Technology in
          2012. AGILE methodology of Scrum Master and Scrum fundamentals.
          Self-learning full stack-developer.
        </div>
        <div>
          <img className="images" alt="skills" src="images/Skills1.jpg" />
        </div>
        <div className="Skill">Skills</div>
        <div className="SubTile">My top skills.</div>
        <div className="mainList">
          <div>• C# ASPX / Razor / MVC and .Net Core </div>
          <div>
            • Web API REST Services / SOAP / Web Services / WCF Services /
            Micro-services
          </div>
          <div>• Unit test.</div>
          <div>• Swagger.</div>
          <div>• Authorisation and Authentication.</div>
          <div>• Azure</div>
          <div>• Azure DocumentDB</div>
          <div>
            • SQL Server 2016/2014/2012/2008 (SQL, T-SQL, SSIS, Stored
            Procedures)
          </div>
          <div>• Business Intelligence.</div>
          <div>• ETL</div>
          <div>• SSIS</div>
          <div>• Power BI</div>
          <div>• AWS Console/Gateway</div>
          <div>• AWS Lambda</div>
          <div>• Cognito</div>
          <div>• S3</div>
          <div>• React JS</div>
          <div>• HTML / CSS</div>
          <div>• Team City</div>
          <div>• Octopus Deploy</div>
          <div>• GIT, Subversion, Team Foundation, and RTC.</div>
          <div>• Agile: Scrum with Kanban.</div>
          <div>• SDLC</div>
        </div>
        <div>
          <img className="images" alt="hobby" src="images/hobby.jpg" />
        </div>
        <div className="Hobbies">Hobbies</div>
        <div className="SubTile">My passions.</div>
        <div className="Phrase">
          I usually watch some Japanese animes; I also play some Rock n' Rolls
          songs and try to keep up with my Brazilian soccer team. I really love
          experimenting with food, so I take a chance on making some new dishes
          for my wife and me to try.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
