import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dashborad from "../../Assets/Projects/Dashboard.png";
import Book from "../../Assets/Projects/Book.png";
import Wedding from "../../Assets/Projects/weddinginvite.png";
import QRCode from "../../Assets/Projects/QRCode.png";

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
              imgPath={QRCode}
              isBlog={false}
              title="QR Code Generator using React"
              description="The website QR Code Generator allows users to create custom QR codes easily. With a sleek, user-friendly interface, users can input text or URLs, and the application instantly generates a corresponding QR code.And  The generated QR codes are displayed visually on the page and can be downloaded as image files. This web application is built using React.js and offers a simple yet efficient way for users to generate and download QR codes for various uses, such as sharing links, text, or other data in an encoded format."
              ghLink="https://github.com/Gadale-Swarup/Wedding-Invite"
              demoLink="https://qr-code-gen-react-js.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wedding}
              isBlog={false}
              title="Wedding Invite"
              description="Simple Wedding Invite static webpage using HTML, CSS, and JavaScript "
              ghLink="https://github.com/Gadale-Swarup/Wedding-Invite"
              demoLink="https://wedding-invite-f6tc.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashborad}
              isBlog={false}
              title="Practical-Platform"
              description="The Online Assessment System is a feature-rich web application designed to conduct exams in college or at any time where MCQ and practical exams are applicable. In this, we are provided a code editor for practical using React.js and Vite. Students can practice computer languages and show them to faculty."
              ghLink="https://github.com/Gadale-Swarup/Practical-Platform"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Book-Review"
              description="This is fully created using Reactjs.In this uses a React-Router-Dom and show books and there reviews from the user."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://book-review-reactjs.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
