import React from 'react'
import webimg from "../src/Images/img1.jpg";
import Common from './Common'

const Home = () => {
  return(
    <>
      <Common name='Light your house with us' imgsrc={webimg} visit='/service' btname='Get started'></Common>
    </>
  );
}
export default Home;
