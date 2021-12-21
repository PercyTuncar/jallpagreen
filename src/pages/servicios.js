import React from 'react'     
import CallToAction from '../components/call-to-action'
import Layout from '../components/Layout'

import AboutThree from "../components/about-three"; 
import ServiceOne from '../components/service-one';
 

// Export Template for use in CMS preview
export const serviciosTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">  
  </main>
)


// Export Default servicios for front-end
const servicios = ( ) => (
  <Layout >
      <CallToAction/> 
      <ServiceOne />
      <AboutThree />
    <serviciosTemplate /> 

 
  </Layout>
)

export default servicios