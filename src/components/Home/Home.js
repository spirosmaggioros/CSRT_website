import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)// passes i18n down to react-i18next
  .init({
    supportedLngs: ['en'],
    resources: {
      en: {
        translation: {
          "welcome-message": "Hi There!",
          "i-am": "We're",
          "name":"The Computer Science Research Team(CSRT) of National Technical University of Athens.",
          "introduction":"The team was founded at fall of 2023 by Spiros Maggioros as an IEEE Computer Society chapter team.The team is working on projects related to Computer Vision , Machine Learning , Algorithmic Research and More."
        }
      },
    },
    fallbackLng: "en",
    detection:{
      order: ['cookie','htmlTag' ,'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense: false,
    },
  });



function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('welcome-message')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {t('i-am')}
                <strong className="main-name"> {t("name")}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
     </section>
  );
}

export default Home;
