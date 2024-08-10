import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dashborad from "../../Assets/Projects/Dashboard.png";
import Book from "../../Assets/Projects/Book.png";
import Wedding from "../../Assets/Projects/weddinginvite.png";

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