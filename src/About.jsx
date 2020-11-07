import React from 'react'
import Common from './Common'
import webimg from "../src/Images/img1.jpg";

const About = () => {
  return(
    <>
      <Common name='Welcome to about page' imgsrc={webimg} visit='/contact' btname='Contact now'></Common>
    </>
  );
}

export default About;
