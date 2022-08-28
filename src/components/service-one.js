import React from "react";
import { Col, Row } from "react-bootstrap"; 
import ServiceCardTwo from "../components/service-card-two";
 

import serviceImage1 from "../../images/jardineria-mantenimiento.jpg";
import serviceImage2 from "../../images/poda-y-tala-de-arboles.jpg";
import serviceImage3 from "../../images/sistemas-de-riego.jpg";
import serviceImage4 from "../../images/jasrdines-verticales.jpg";
import serviceImage5 from "../../images/traslado-de-arboles.jpg";
import serviceImage6 from "../../images/mantenimiento-de-ca-pos-deportivos.jpg";
import serviceImage7 from "../../images/fumigacion-y-control-de-plagas.jpg";





export const ServiceOneData = [
    {
      image: serviceImage1,
      title: "✓ Jardinería y mantenimiento",
      count: 50,
      price: 19.99,
      text:
        "Nuestro objetivo es satisfacer la  creciente demanda del mercado de contar con una empresa profesional en el diseño, construcción y mantenimiento de las áreas verdes. Debido a ello contamos con procesos y técnicas eficientes para el trabajo y contamos con distintos servicios de jardinería:" ,
        l01: "✓ Jardineria  empresarial y convencional ",
        l02: "✓ Plantas de interior  ",
        l03: "✓ Corte de grass  ",
        l04: "✓ Paisajismo ",
        l05: "✓ Macetería de interior ",
        url: "/contact"
    },
    {
        image: serviceImage4,
        title: "✓ Jardines verticales y Techos verdes",
        count: 50,
        price: 19.99,
        text:
          "Ofrecemos un servicio integral para diseñar, crear,desarrollar y mantener todo tipo de jardines verticales y techos verdes. Dentro del mantenimiento realizamos labores de poda, tratamientos fitosanitarios,entresaques ,supervisión de sistema de riego,abonamientos, etc. Asimismo, contamos con personal altamente capacitado para realizar cada tipo de labores,con la finalidad de brindarles el mejor diseño y mantenimiento.",
        url: "/contact"
      },
      {
        image: serviceImage6,
        title: "✓ Mantenimiento de campos deportivos",
        count: 50,
        price: 19.99,
        text:
          "Mantenemos sus zonas deportivas en las mejores condiciones técnicas para la práctica deportiva, tanto en césped natural como artificial. Asimismo realizamos instalación de césped artificial para campos deportivos. Siguiendo nuestra filosofía de trabajo,ofrecemos un resultado inmejorable para conseguir que este césped cumpla con las exigencias requeridas.",
        url: "/contact"
      },
    {
      image: serviceImage2,
      title: "✓ Poda y tala de árboles",
      count: 50,
      price: 19.99,
      text:
        "Brindamos servicios de poda  y tala de árboles, y palmeras en sus diferentes tamaños, además de contar con los implementos y equipos certificados para las labores. Trabajamos con maquinaría según las condiciones y requisitos del servicio, como:andamios, manlift y grúas telescópicas.",
      url: "/contact"
    },
    {
      image: serviceImage3,
      title: "✓ Instalación y mantenimiento de sistemas de riego tecnificado",
      count: 50,
      price: 19.99,
      text:
        "Nuestro trabajo como empresa de jardinería es instalar el tipo de riego que su jardín necesita para rentabilizar al máximo su mantenimiento y conseguir los mejores resultados estéticos y funcionales de su espacio verde.",
      url: "/contact"
    },

    {
      image: serviceImage5,
      title: "✓ Traslado de árboles",
      count: 50,
      price: 19.99,
      text:
        "Realizamos el retiro de árboles de especies de diferentes tamaños,garantizando los cuidados y supervivencia de la especie.",
      url: "/contact"
    },
   
    {
        image: serviceImage7,
        title: "✓ Fumigaciones y control de plagas",
        count: 50,
        price: 19.99,
        text:
          "Realizamos servicios de desinfección y desratización, empleando diferentes técnicas para brindar soluciones sostenibles.",
        url: "/contact"
      }
  ];

const ServiceOne = () => {
  return (
    <section className="service-style-three sec-pad">
      <div className="thm-container">
        <Row>
          {ServiceOneData.map((post, index) => (
            <Col md={6} lg={4} key={index}>
              <ServiceCardTwo data={post} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ServiceOne;
