import React from "react";
import { Col, Row } from "react-bootstrap";  

import serviceImage1 from "../../images/jardineria-mantenimiento.jpg";
import serviceImage2 from "../../images/poda-y-tala-de-arboles.jpg";
import serviceImage3 from "../../images/sistemas-de-riego.jpg";
import serviceImage4 from "../../images/jasrdines-verticales.jpg";
import serviceImage5 from "../../images/traslado-de-arboles.jpg";
import serviceImage6 from "../../images/mantenimiento-de-ca-pos-deportivos.jpg";
import serviceImage7 from "../../images/fumigacion-y-control-de-plagas.jpg";
import ProductCard from "./product-card";





export const ProductOneData = [
    {
      image: serviceImage1,
      title: "SUSTRATOS",
      count: 50,
      price: 19.99,
      text:
        "Contamos con  sustratos según los diferentes tipos de cultivo (semilleros, viveros, sistemas de horticultura intensiva, etc.). Suministramos y distribuimos sustratos para cualquier tipo de cultivo (Plantas de interior , horticultura, plantas ornamentales, árboles frutales, etc.) Disponemos sustratos de distintas composiciones y en diversidad de tamaños y requerimientos según el tipo de planta." ,
        l01: "✓ Jardineria  empresarial y convencional ",
        l02: "✓ Plantas de interior  ",
        l03: "✓ Corte de grass  ",
        l04: "✓ Paisajismo ",
        l05: "✓ Macetería de interior ",
        url: "/contact"
    },
    {
        image: serviceImage4,
        title: "  PLANTAS DE EXTERIOR",
        count: 50,
        price: 19.99,
        text:
          "El equipo de Jallpa Green aplica todos los conocimientos agronòmicos, paisajísticos y biològicos para crear espacios innovadores y originales segùn las diversas plantas de exterior y sus necesidades con respecto a temperatura, luz y humedad.",
        url: "/contact"
      },
      {
        image: serviceImage6,
        title: "PLANTAS DE INTERIOR",
        count: 50,
        price: 19.99,
        text:
          "En JALLPA GREEN diseñamos, creamos y decoramos el interior de tu hogar u oficina",
        url: "/contact"
      },
    {
      image: serviceImage2,
      title: "GRASS",
      count: 50,
      price: 19.99,
      text:
        "Contamos  con la mejor calidad de grass y variedades  para cada tipo de clima:   Grass bermuda   Grass americano    Ray Grass  Grass japones  ",
      url: "/contact"
    },
    

    {
      image: serviceImage5,
      title: "MACETAS",
      count: 50,
      price: 19.99,
      text:
        "Disponemos de un amplio catálogo de maceteros de diversos tamaños y colores  en venta para los diferentes espacios y  ambientes de casas y oficinas, además realizamos asesoramiento con ideas decorativas.",
      url: "/contact"
    },
   
    {
        image: serviceImage7,
        title: "HERRAMIENTAS",
        count: 50,
        price: 19.99,
        text:
          "Contamos  con los mejores equipos y herramientas de alta calidad que tienen el objetivo de que las áreas verdes permanezcan en  las mejores condiciones y atractivas ",
        url: "/contact"
      }
  ];

const ProductOne = () => {
  return (
      <>
      <section className="service-style-three sec-pad">
      <div className="thm-container">
        <Row>
          {ProductOneData.map((post, index) => (
            <Col md={6} lg={4} key={index}>
              <ProductCard data={post} />
            </Col>
          ))}
        </Row>
      </div>
    </section>



      </>
    
    
  );
};

export default ProductOne;
