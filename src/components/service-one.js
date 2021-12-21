import React from "react";
import { Col, Row } from "react-bootstrap"; 
import ServiceCardTwo from "../components/service-card-two";


import serviceImage1 from "../../images/service-1-1.jpg";
import serviceImage2 from "../../images/service-1-2.jpg";
import serviceImage3 from "../../images/service-1-3.jpg";
import serviceImage4 from "../../images/service-1-4.jpg";
import serviceImage5 from "../../images/service-1-5.jpg";
import serviceImage6 from "../../images/service-1-6.jpg";




export const ServiceOneData = [
    {
      image: serviceImage1,
      title: "Business Cards",
      count: 50,
      price: 19.99,
      text:
        "Cut through the networking clutter and say hello with Printify Business Cards.",
      url: "/service-details"
    },
    {
      image: serviceImage2,
      title: "Postcards",
      count: 50,
      price: 19.99,
      text:
        "Cut through the networking clutter and say hello with Printify Business Cards.",
      url: "/service-details"
    },
    {
      image: serviceImage3,
      title: "Stickers and Labels",
      count: 50,
      price: 19.99,
      text:
        "Cut through the networking clutter and say hello with Printify Business Cards.",
      url: "/service-details"
    },
    {
      image: serviceImage4,
      title: "Flyers",
      count: 50,
      price: 19.99,
      text:
        "Cut through the networking clutter and say hello with Printify Business Cards.",
      url: "/service-details"
    },
    {
      image: serviceImage5,
      title: "Envelopes",
      count: 50,
      price: 19.99,
      text:
        "Cut through the networking clutter and say hello with Printify Business Cards.",
      url: "/service-details"
    },
    {
      image: serviceImage6,
      title: "Greeting Cards",
      count: 50,
      price: 19.99,
      text:
        "Cut through the networking clutter and say hello with Printify Business Cards.",
      url: "/service-details"
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
