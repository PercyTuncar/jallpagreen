import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export const ServiceTabOneData = [
  {
    title: "MISIÓN",
    icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2Fmision.svg?alt=media&token=798614c0-5367-4026-81e8-21a90334960d",
    content: {
      title: "MISIÓN",
      subText: "Nuestra",
      content:
        "Brindar, crear, diseñar y ejecutar servicios de mantenimiento de áreas verdes de alta calidad siendo sostenibles y efectivos con el medioambiente, promoviendo las buenas prácticas con la mejor tecnología a fin de mejorar la calidad de vida de los usuarios y aprovechando de manera eficiente los recursos naturales."
    }
  },
  {
    title: "NOSOTROS",
    icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2F01-8.png?alt=media&token=9b2f1547-b7b3-4c48-913f-9f093782dd60",
    content: {
      title: "NOSOTROS",
      subText: "Allpa Green",
      content:
        "Jallp´a Green es una empresa especializada en brindar servicios de mantenimiento y manejo de áreas verdes, alineados a una cultura de conservación del medio ambiente y prevención de riesgos laborales. Poniendo a su disposición el mejor staff de profesionales altamente calificados y capacitados, para brindar un servicio personalizado, constante y eficiente."
    }
  },
  {
    title: "VISIÓN",
    icon: "https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/icons%2Fvision.svg?alt=media&token=c7779a26-4ef5-4ca4-af26-78563b6872aa",
    content: {
      title: "VISIÓN",
      subText: "Nuestra",
      content:
        "Ofrecer servicios con los más altos estándares de calidad, responsabilidad social y medioambiental, generando confianza en los clientes y así ser reconocidos como una empresa líder en el rubro."
    }
  } 
];

const ServiceTabOne = () => {
    const [active, setActive] = useState(1);
    return (
      <section className="video-box-design-guide sec-pad service-tab-box">
        <div className="thm-container">
          <div className="tab-title">
            <ul className="list-inline">
              {ServiceTabOneData.map(({ title, icon }, index) => (
                <li
                  key={index}
                  className={`${active === index ? "active" : " "}`}
                >
                  <a
                    className="hvr-bounce-to-bottom"
                    href={`service-tab-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(index);
                    }}
                  >
                    <img src={icon} width={'50%'}/>
                    <h3>{title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content">
            {ServiceTabOneData.map(({ content }, index) => {
              return index === active ? (
                <div
                  className="single-tab-content tab-pane show fade in active animated fadeIn"
                  key={index}
                >
                  <div className="sec-title text-center mb0">
                    <span>{content.subText}</span>
                    <h3>{content.title}</h3>
                    <p>{content.content}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceTabOne;
  