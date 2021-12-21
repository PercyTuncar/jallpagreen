import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Col, Row } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
 


export const FooterAboutData = {
  title: "Sobre Nosotros",
  text:
    "Comprometidos hacia una cultura de conservación del medio ambiente."
};

export const FooterLinksData = {
  title: "Explorar",
  links: [
    {
      label: "Nosotros",
      url: "/about"
    },
    {
      label: "Contacto",
      url: "/contact"
    },
    {
      label: "Servicios",
      url: "/services"
    }, 
    {
      label: "Nosotros",
      url: "/about"
    }
  ]
};

export const FooterPostsData = {
  title: "Publicaciones de interés",
  posts: [
    {
      title: "A Clean Website Gives More Experience To The Visitors",
      date: "Dic 20, 2021",
      url: "/blog-details"
    },
    {
      title: "A Clean Website Gives More Experience To The Visitors",
      date: "Dic 20, 2021",
      url: "/blog-details"
    }
  ]
};

export const FooterContactData = {
  title: "Contacto", 
  infos: [
    {
      text: "951-751-326",
      url: "tel:951751326"
    },
    {
      text: "902-521-823",
      url: "tel:902521823"
    },
    
    {
      text: "953-966-300",
      url: "tel:953966300"
    },
    {
      text: "ventas@jallpagreen.com",
      url: "mailto:ventas@jallpagreen.com"
    },
    {
      text: "Jr. Huari 764 - Cercado de Lima ",
      url: ""
    }
  ]
};

export const FooterBottomData = {
  social: [
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/"
    },
    {
      icon: "fab fa-pinterest",
      url: "https://www.pinterest.com/"
    },
    {
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/"
    },
    {
      icon: "fab fa-youtube",
      url: "https://www.youtube.com/channel/UC-n4NjRX-oq-zU4FkJd0rvg"
    }
  ]
};



export default () => (
  <Fragment>
  <footer className="footer">
    <div className="thm-container">
      <Row>
        <Col lg={4}>
          <div className="footer-widget about-widget">
            <div className="title">
              <h3>{FooterAboutData.title}</h3>
            </div>
            <p>{FooterAboutData.text}</p>

            <form action="#" className="footer-subscribe">
              <input type="text" name="email" placeholder="Email address" />
              <button type="submit">
                <i className="fa fa-angle-right"></i>
              </button>
            </form>
          </div>
        </Col>
        <Col lg={2}>
          <div className="footer-widget links-widget explore">
            <div className="title">
              <h3>{FooterLinksData.title}</h3>
            </div>
            <ul className="link-list">
              {FooterLinksData.links.map(({ url, label }, index) => {
                return (
                  <li key={index}>
                    <Link to={url}>{label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col lg={3}>
          <div className="footer-widget post-widget services">
            <div className="title">
              <h3>{FooterPostsData.title}</h3>
            </div>
            <div className="post-widget">
              {FooterPostsData.posts.map(({ date, title, url }, index) => {
                return (
                  <div className="single-post-widget" key={index}>
                    <Link to={url} className="date">
                      {date}
                    </Link>
                    <h3 className="post-title">
                      <Link to={url}>{title}</Link>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="footer-widget contact-widget">
            <div className="title">
              <h3>{FooterContactData.title}</h3>
            </div>
            {FooterContactData.infos.map(({ text, url }, index) => {
              return (
                <p key={index}>
                  <a to={url}>{text}</a>
                </p>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  </footer>
  <div className="footer-bottom">
    <div className="thm-container clearfix">
      <div className="float-left copy-text">
        <p>
          &copy; Copyright {new Date().getFullYear()} Aplicación Web creada por El equipo de{" "}
          <a href="https://tuncardev.com" target="_blank">tuncardev</a>
        </p> 
      </div>
      <div className="social-box float-right">
        {FooterBottomData.social.map(({ icon, url }, index) => {
          return (
            <a key={index} href={url} target="_blank" className={`${icon} hvr-pulse`}></a>
          );
        })}
      </div>
    </div>
  </div>
</Fragment>
)
