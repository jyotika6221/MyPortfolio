import React from "react";
import Card from "react-bootstrap/Card";
import {
  ImAirplane,
  ImArrowDownRight,
  ImArrowLeft,
  ImArrowRight,
  ImPointRight,
} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jyotika Jaichand </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            <br />I am a <span className="purple">3rd year </span>undergrad
            student pursuing B.Tech in{" "}
            <span className="purple">
              Electronics and Communication Engineering with specialization in
              Artificial Intelligence{" "}
            </span>
            from Indira Gandhi Delhi Technical University for Women.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight />
              Travelling
            </li>
            <li className="about-activity">
              <ImArrowRight /> Cooking
            </li>
            <li className="about-activity">
              <ImArrowRight /> Watching sports
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
