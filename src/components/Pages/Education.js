import React from "react";
import "../Pages/Experiences.css";
import CarouselAbout from "../Pages/CarouselAbout";

const Education = () => {
  return (
    <>
      <div className="mainContainer">
        <div class="imgLogo">
          <img className="imgCareer" alt="ibta" src="images/ibta.png" />
        </div>
        <div class="companyDetails">
          <div class="role">IBTA - Brazilian Technology Advanced Institute</div>
          <div class="companyInformation">
            <div className="companyInformation">
              MBA Business Intelligence - Average Score 9.5.
            </div>
            <div className="companyInformation"> Mar 2011 – Jun 2012</div>
            <div className="companyInformation">
              São Paulo, Sao Paulo, Brazil
            </div>
          </div>
          <div className="technicalSkills">Module: General Training</div>
          <div className="subtitile">Disciplines Hours</div>
          <div className="ListActivities">
            • Methods and Techniques of Research 20h.
          </div>
          <div className="ListActivities">
            • Entrepreneurship and Innovation 32h.
          </div>
          <div className="ListActivities">• Project Management 32h.</div>
          <div className="ListActivities">• Coaching and Mentoring 32h.</div>
          <div className="subtitile">TOTAL 116h</div>

          <div className="technicalSkills">Module: BI Project</div>
          <div className="subtitile">Disciplines Hours</div>
          <div className="ListActivities">
            • Data Warehouse, Data Marts and Cube Architecture 28h.
          </div>
          <div className="ListActivities">
            • Integration of Architectures - Extraction, Treatment, Loading and
            Visualization of Data 48h.
          </div>
          <div className="ListActivities">• Analytical CRM 20h.</div>
          <div className="ListActivities">• Data Mining - Data Mining 20h.</div>
          <div className="ListActivities">• Architecture of Big Data 24h.</div>
          <div className="subtitile">TOTAL 140h</div>

          <div className="technicalSkills">
            Module: Competitive Intelligence
          </div>
          <div className="subtitile">Disciplines Hours</div>
          <div className="ListActivities">• Business Games 28h.</div>
          <div className="ListActivities">• Business Modeling 28h.</div>
          <div className="ListActivities">• Statistics Applied to BI 24h.</div>
          <div className="ListActivities">
            • Performance Management - Balanced Scored Card 24h.
          </div>
          <div className="subtitile">TOTAL 104h</div>

          <div className="totalHours">TOTAL PRESENTATION 360h</div>
          <div className="totalHours">COURSE COMPLETION WORK 60h</div>
          <div className="lastItem"></div>
        </div>
      </div>

      <div className="mainContainer">
        <div class="imgLogo">
          <img
            className="imgCareerDrummond"
            alt="drummond"
            src="images/drummond.jpg"
          />
        </div>
        <div class="companyDetails">
          <div class="role">University Calros Drummond de Andrade</div>
          <div class="companyInformation">
            <div className="companyInformation">
              Information System - Average Score 8.5.
            </div>
            <div className="companyInformation"> Jun 2006 – Jun 2010</div>
            <div className="companyInformation">São Paulo, Brazil</div>
          </div>
          <div className="technicalSkills">Module: General Training</div>
          <div className="ListActivities">• Auditor de sistemas.</div>
          <div className="ListActivities">
            • Administração de banco de dados.
          </div>
          <div className="ListActivities">
            • Desenvolvimento de softwares e aplicativos.
          </div>
          <div className="ListActivities">
            • Gerente de sistemas e negócios.
          </div>
          <div className="ListActivities">• Gerente / Consultor de redes.</div>
          <div className="ListActivities">• Gerente de projeto.</div>
          <div className="ListActivities">• Analista / Gerente de Dados.</div>
          <div className="lastItem"></div>
        </div>
        <div className="certificates">Certificates</div>
        <div className="achivements">My achievements and certificates.</div>
        <CarouselAbout />
      </div>
    </>
  );
};

export default Education;
