import React from 'react'     
import CallToAction from '../components/call-to-action'
import Layout from '../components/Layout'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'


const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  } 

const MyGallery = () => (
    <Gallery>
      <Item
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/1024/768?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          alt=""
          style={{ width: 300 }}
          src="https://placekitten.com/1024/768?image=1"
        />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          alt=""
          style={{ width: 300 }}
          src="https://placekitten.com/1024/768?image=2"
        />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          alt=""
          style={{ width: 300 }}
          src="https://placekitten.com/1024/768?image=2"
        />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          alt=""
          style={{ width: 300 }}
          src="https://placekitten.com/1024/768?image=2"
        />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          alt=""
          style={{ width: 300 }}
          src="https://placekitten.com/1024/768?image=2"
        />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          alt=""
          style={{ width: 300 }}
          src="https://placekitten.com/1024/768?image=2"
        />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <>
          <h3 style={{ width: "100%" }}>Ola</h3>
          <img
            ref={ref}
            onClick={open}
            alt=""
            style={{ width: 300 }}
            src="https://placekitten.com/1024/768?image=2"
          />
        </>
      )}
    </Item>
    </Gallery>
  )

// Export Template for use in CMS preview
export const galeriaTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">  
  </main>
)


// Export Default galeria for front-end
const galeria = ( ) => (
  <Layout >
 <MyGallery />
  </Layout>
)

export default galeria