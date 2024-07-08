import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../../style.css"; // Adjust path if necessary
import homebg from "../../assets/home-bg.jpg"; 
function Home2() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      className="home-about-section purple"
      id="about"
    >
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">CONNECT WITH ME</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jyotika6221"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Jyotika-Jaichand/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
