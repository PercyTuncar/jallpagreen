import { Link } from "gatsby";
import React from "react";

const ListStyle = {
    listStyleType: "none", 
}
const ServiceCardTwo = ({ data }) => {
  const { image, title, count, price, text, url, l01, l02, l03, l04, l05  } = data;
  return (
    <div className="single-service-three">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box hvr-bounce-to-bottom">
        <Link to={url}>
          <h3>{title}</h3>
        </Link>
        <div className="meta-info"> </div>
      {
          /*   <div className="meta-info">
          <p>
            {count} cards from <span>${price}</span>
          </p>
        </div> */
      }
        <p>{text}</p>
        <ul style={ListStyle}>
            <li>{l01}</li>
            <li>{l02}</li>
            <li>{l03}</li>
            <li>{l04}</li>
            <li>{l05}</li>
        </ul> 
        <Link to={url} className="btnContacto">Cotizar</Link>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
