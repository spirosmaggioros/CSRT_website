import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import wildfires from "../../Assets/Projects/wildfires.jpeg"
import fpo from "../../Assets/Projects/fpo.png"
import AlgoPlus from "../../Assets/Projects/algoplus.png"
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our<strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("")} 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wildfires}
              isBlog={false}
              title="Forest Fires"
              description="Forest Fire Danger Detection with analysis on Greek wildfires over the summer and fall of 2018
              and live image analysis with deep learning."
              ghLink="https://github.com/spirosmaggioros/ForestFires"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fpo}
              isBlog={false}
              title="Polynomials representation using AVL trees."
              description="We present a data structure based on AVL Trees , used for polynomial representation,
              which allows insertion to be performed in O(logn)."
              ghLink="https://github.com/spirosmaggioros/FPO"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlgoPlus}
              isBlog={false}
              title="AlgoPlus"
              description="AlgoPlus is a C++17 library for complex data structures and algorithms"
              ghLink="https://github.com/CSRT-NTUA/AlgoPlus"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
