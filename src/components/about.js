import React from "react";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "./section-title"; 
import { Link } from "gatsby";



import aboutTwo1 from "../../images/welcome-1-1.png";

  const AboutTwoData = {
  sectionContent: {
    subText: "Bienvenido a Jallpa Green",
    title: "Dale vida a tus espacios",
    textAlignment: "left"
  },
  content:
    "En Jallpa Green nos preocupamos por crear espacios verdes que nos conecten con la naturaleza mediante la búsqueda de la mejor alternativa para cada cliente",
  url: "/about",
  image: aboutTwo1
};


const AboutTwo = () => {
  const { sectionContent, content, url, image } = AboutTwoData;
  return (
    <section className="welcome-section sec-pad">
      <div className="thm-container">
        <Row>
          <Col lg={6}>
            <div className="welcome-img-box">
              <img src={image} alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="welcome-content">
              <div className="title">
                <p>{sectionContent.subText}</p>
                <h3>{sectionContent.title}</h3>
              </div>
              <p>{content}</p>
              <Link to={url} className="thm-btn yellow-bg">
                Contactar
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutTwo;
