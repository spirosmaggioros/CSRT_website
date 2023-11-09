import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We're <span className="purple"> The CSRT team </span>
            from <span className="purple"> National Technical University of Athens</span>
            <br /> We are Electrical & Computer Engineering students pursuing an Integrated MSc (IMSc).
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "When something is important enough , you do it even if the odds are not in your favor"{" "}
          </p>
          <footer className="blockquote-footer">CSRT TEAM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
