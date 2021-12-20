import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import sliderOne1 from "../../images/banner-1-1.jpg";
import sliderOne2 from "../../images/banner-1-2.jpg";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


export const SliderOneData = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/paisaje%201.png?alt=media&token=a2b697db-e48a-46c5-901c-3d4523ef7609',
      title: "  JALLPA GREEN ",
      subText: "Comprometidos hacia una cultura de conservación del medio ambiente ",
      button: {
        label: "Our Pricing",
        url: "/pricing"
      }
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/paisaje%202.png?alt=media&token=ef196514-0cc3-42b1-b71c-5114985c4a30',
      title: " JALLPA GREEN ",
      subText: "Comprometidos hacia una cultura de conservación del medio ambiente ",
      button: {
        label: "Our Pricing",
        url: "/pricing"
      }
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/jallpagreen.appspot.com/o/paisaje%203.jpg?alt=media&token=46ae81fc-cfab-4d0e-bb74-c113345ce405',
      title: " JALLPA GREEN ",
      subText: "Comprometidos hacia una cultura de conservación del medio ambiente ",
      button: {
        label: "Our Pricing",
        url: "/pricing"
      }
    }
  ];
  

SwiperCore.use([Autoplay, Navigation, EffectFade]);


const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
        {SliderOneData.map(({ image, subText, title, button }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="thm-container">
              <Row>
                <Col lg={12} className="text-center">
                  <h3 className="main-slider__title">{title}</h3>
                  <p className="main-slider__subtext">{subText}</p>
                  <Link to={button.url} className={`thm-btn`}>
                    <span>{button.label}</span>
                  </Link>
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
