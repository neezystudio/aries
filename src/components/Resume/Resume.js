import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="LEAD SOFTWARE ENGINEER @ SAMCHI GROUP"
              date="December 2020- Present"
              content={[
                " Before my interview at samchi systems, the manager told me he was impressed with my previous contributions to open source projects and believed I would be a great fit for their team. He said they were looking for someone with experience managing distributed teams and helping multiple stakeholders work together efficiently, but most importantly, someone who is passionate about working on the tech as well as the business driven approach to software",
                // " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            />
            <Resumecontent
              title="JUNIOR SOFTWARE ENGINEER AT SAMCHI GROUP"
              date="march 2020- November 2020"
              content={[
                "Worked on creating the documentation and software quality assuarance status of previously done projects by previous developers, Javascript.",
              ]}
            />
            <h3 className="resume-title">Other Activities</h3>
            
            <Resumecontent
              title="Freelance React Native Developer with CrowdBotics co, USA Carlifornia"
              content={[
                "Operated on developing the frontend end of mobile apps, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BSC Software Engineering "
              date="2015 - 2019"
              content= {["second class Honours(Upper Division"]}
              // content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="Moringa School"
              date="2015 - 2017"
              content={["Precentage: 78%"]}
            />
            <Resumecontent
              title="10TH BOARD css and scss[Murang'a university] "
              date="2016 "
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
