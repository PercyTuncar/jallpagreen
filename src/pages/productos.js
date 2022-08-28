import React from 'react'     
import CallToAction from '../components/call-to-action'
import Layout from '../components/Layout'

import AboutThree from "../components/about-three";   
 import './productos.css' 
import ProductOne from '../components/product-one';


// Export Template for use in CMS preview
export const productosTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">  
  </main>
)
 
// Export Default productos for front-end
const productos = ( ) => (
  <Layout >
      <CallToAction/> 
      <ProductOne />
      <AboutThree />
    <productosTemplate /> 


 


 

  </Layout>
)
 
export default productos