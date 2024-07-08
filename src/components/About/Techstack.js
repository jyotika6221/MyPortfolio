import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiFirebase, SiGooglesheets, SiC, SiTensorflow } from "react-icons/si";
import "./Techstack.css"; // Add this line to import the CSS file

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Sheets">
        <SiGooglesheets />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tensorflow">
        <SiTensorflow />
      </Col>
    </Row>
  );
}

export default Techstack;
