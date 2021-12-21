import React from 'react'     
import CallToAction from '../components/call-to-action'
import Layout from '../components/Layout'
import ServiceTabOne from '../components/nosotrosTab' 
import AboutThree from "../components/about-three";
import '../components/nosotros.css' 
 

// Export Template for use in CMS preview
export const nosotrosTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">  
  </main>
)


// Export Default nosotros for front-end
const nosotros = ( ) => (
  <Layout >
      <CallToAction/>
      <ServiceTabOne/>
      <AboutThree />
    <nosotrosTemplate /> 

 
  </Layout>
)

export default nosotros