import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/tukio.jpg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/Shikilia.png";
import chatify from "../../Assets/Projects/sss.jpg";
import suicide from "../../Assets/Projects/exirgy.png";
import bitsOfCode from "../../Assets/Projects/avant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Samchi Systems"
              description="Spearheaded this as a Start-up Tech company under samchi Group of companies.We help companies to drive innovation from within by presenting an easy-to-use Innovation Toolkit that promotes the process & benefits of strategic planning in a way that anyone can understand it."
              link="https://github.com/samchisystems"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Tukio AI"
              description="An event ecosystem mobile app, the event ecosystem provides a single platform to take care of all your event management needs with just one click! Manage events, manage tickets, as well as get instant notifications about all changes related to the event that you wish to"
              link="https://github.com/neezystudio/tukio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shikia-ecommerce"
              description="3SaaS lets sellers manage product inventory, vendors manage goods and service orders, couriers track deliveries and customers view orders status – all at one place! The 3SaaS App is a next generation mobile app that integrates all sales channels into one cohesive system.
"
              link="https://github.com/samchisystems/shikilia-system.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Avant-Tv"
              description="Watch Series is an online real-time streaming site with a paid subscription model for full length movies and serials from its in-house production company AVANT Productions and other premium content producers. watchseries"
              link="https://github.com/samchisystems/nairobarry-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Exirgy"
              description="I am personally developing an all round ERP system under SAP technologies, which will integrate all modules in a uniform manner using SAP technology. We hope this will be a one stop shop where all the customer's requirements can be solved. Each module has its own interface and structure, making integration an expensive nightmare"
              link="https://github.com/Exirgy"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
