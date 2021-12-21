import React from "react"; 
import SectionTitle from "./section-title";
import { Link } from "gatsby";
import { Col, Row } from "react-bootstrap";



import aboutThree1 from "../../images/porqueelegirnos.jpg";

  const AboutThreeData = {
  backgroundImage: aboutThree1,
  sectionContent: {
    subText: "Allpa Green",
    title: "¿Por qué elegirnos? ",
    textAlignment: "left"
  },
  content:
    "Jallp´a Green es una empresa especializada en brindar servicios de mantenimiento y manejo de áreas verdes, alineados a una cultura de conservación del medio ambiente y prevención de riesgos laborales. \n \n Poniendo a su disposición el mejor staff de profesionales altamente calificados y capacitados, para brindar un servicio personalizado, constante y eficiente.",
  button: {
    label: "Contactanos",
    url: "/contact"
  },
  phone: "951-751-326",
  posts: [
    {
      title: "Transparencia \n y eficiencia",
      icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2Fhand.svg?alt=media&token=ad6cc63d-b724-4b29-83cd-756ea0da4fb2",
      url: "#"
    },
    {
      title: "Calidad",
      icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2Fgarantia.svg?alt=media&token=ea7a93a7-3dda-4f1d-8c5e-54297965d260",
      url: "#"
    },
    {
      title: "Innovación",
      icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2Ffoco.svg?alt=media&token=e11783c0-a02d-49a1-ad14-912f4059cae5",
      url: "#"
    },
    {
      title: "Organización",
      icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2Frompecabeza.svg?alt=media&token=f5c49063-9194-468d-8ab3-9a268bb4b95f",
      url: "#"
    }
  ]
};



 
const AboutThree = () => {
  const {
    backgroundImage,
    sectionContent,
    content,
    button,
    phone,
    posts,
  } = AboutThreeData;
  return (
    <section className="service-style-one sec-pad">
      <img
        src={backgroundImage}
        className="background-right"
        alt={sectionContent.title}
      />
      <div className="thm-container">
        <Row>
          <Col lg={6}>
            <div className="service-content">
              <SectionTitle data={sectionContent} />
              <p>{content}</p>
              <div className="btn-box">
                <Link to={button.url} className="thm-btn yellow-bg">
                  {button.label}
                </Link>
                <div className="phone-btn">
                  <i className="fas fa-phone"></i>
                  {phone}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="service-right-content">
              <div className="inner">
                <div className="divider hor"></div>
                <div className="divider ver"></div>
                <Row>
                  {posts.map(({ title, icon, url }, index) => (
                    <Col md={6} key={index}>
                      <div className="single-service-one hvr-bounce-to-bottom">
                        <img src={icon}/>
                        <Link to={url}>
                          <h3>{title}</h3>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutThree;
