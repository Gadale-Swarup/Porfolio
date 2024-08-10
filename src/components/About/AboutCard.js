import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Swarup Gadale </span>
            from <span className="purple"> Ichalkaranji, India.</span>
            <br />
            I am currently intern as a Web developer at Scalefull Technologies LLP.
            <br />
            I have completed B.Tech in Computer Engineering at PVPIT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Swarup</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
