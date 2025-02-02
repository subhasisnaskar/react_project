import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import slider1 from '../../assesets/imgs/slider1.jpg';
//import slider1_mobile from '../../assesets/imgs/slider1-mobile.jpg';
import slider2 from '../../assesets/imgs/slide-01.jpg';
import slider2_mobile from '../../assesets/imgs/slide-01-mobile.jpg';
import slider3 from '../../assesets/imgs/slide-02.jpg';
import slider3_mobile from '../../assesets/imgs/slide-02-mobile.jpg';

const Slider = () => { 
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100"
          src={slider1} 
          alt="First slide" />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} 
          srcSet={`${slider2_mobile} 768w`} 
          alt="First slide" />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} 
        srcSet={`${slider3_mobile} 768w`} 
        alt="First slide" />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
