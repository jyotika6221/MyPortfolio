import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import empowerher from "../../assets/Projects/empowerher.png";
import sustainhub from "../../assets/Projects/sustainhub.png";
import homepage from "../../assets/Projects/homepage.jpg";
import library from "../../assets/Projects/library.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homepage}
              isBlog={false}
              title="MedAI"
              description="Med-AI is an AI-driven healthcare app enhancing diagnostics, treatment planning, and delivery. It streamlines appointments, provides clear prescription summaries, ensures timely medication reminders, and automates report generation. With multi-language support, Med-AI improves patient care and operational efficiency globally."
              ghLink="https://github.com/jyotika6221/med-ai-fe"
              demoLink="https://med-ai-alpha.vercel.app/home"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empowerher}
              isBlog={false}
              title="EmpowerHER"
              description="A comprehensive platform tailored for working mothers, offering lactation center locators, diverse chat rooms, legal rights awareness, resource hub, menstrual tracker, helpline numbers, and daily scheduler for holistic support and growth."
              ghLink="https://github.com/jyotika6221/EmpowerHER"
              demoLink="https://empowerher4.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sustainhub}
              isBlog={false}
              title="SustainHub"
              description="Web platform that encourages recycling and waste reduction. It includes features for educating users about recycling articles, facilitating waste reduction, and promoting eco-friendly activities and challenges to promote environmental awareness."
              ghLink="https://github.com/jyotika6221/SustainHub"
              demoLink="https://rainbow-churros-2c9d95.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="Our library management system provides a platform for both admin and student to access all the features of a real library. Using this system, the admin can login, view, insert, update, and delete the student as well as book details. It also allows the student to issue a book, return a book, search for book recommendations, and reserve a book."
              ghLink="https://github.com/jyotika6221/LIBRARY-MANAGEMENT-SYSTEM"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
