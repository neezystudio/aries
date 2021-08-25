import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Victor Ndirangu </span>
            from <span className="purple"> Nairobi Kenya.</span>
            <br />I am currently a full-time Developer in Nairobi Kenya and pursuing my B.Tech from here. I am a self taught Full Stack mobile & Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          
          <li className="about-activity">
              <ImPointRight /> Reading autobiographies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing the guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Success is in details!"{" "}
          </p>
          <footer className="blockquote-footer">Victor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
