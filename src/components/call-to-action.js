import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "gatsby";


export const CallToActionThreeData = {
    title: "SOBRE NOSOTROS",
    subText: "--------",
    button: {
      label: "Get Sample",
      url: "/contact"
    }
  }; 

 

const CallToAction = () => {
  const { title, subText, button } = CallToActionThreeData;
  return (
   <Fragment>
  <section className="cta-style-three">
      <div className="thm-container text-center">
        <span>{subText}</span>
        <h2>{title}</h2>
        <Link to={button.url} className="thm-btn">
          {button.label}
        </Link>
      </div>
    </section>

  
   </Fragment>
  );
};

export default CallToAction;
