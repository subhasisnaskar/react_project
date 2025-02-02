import React from 'react';
import Slider from "react-slick";
import './Client.css'
import partnerOne from '../../assesets/imgs/partner/dark-p-1.png'

const ClientSlider = () => {
    const cards = [
        {
            "id": 1,
            "title": "OurPartner",
            "imageUrl":partnerOne
          },
          {
            "id": 2,
            "title": "OurPartner",
            "imageUrl":partnerOne
          },
          {
            "id": 3,
            "title": "OurPartner",
            "imageUrl": partnerOne
          },
          {
            "id": 4,
            "title": "OurPartner",
            "imageUrl": partnerOne
          },
          {
            "id": 5,
            "title": "OurPartner",
            "imageUrl":partnerOne
          }

      ];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  centerPadding: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false
};


return (
  <div className="slider-container">
    <Slider {...settings}>
    {cards.map(card => (
        <div key={card.id}>
          <div className="card client_slide border-0">
          <img src={card.imageUrl} alt={card.title} className="card-img-top" />
           
          </div>
        </div>
      ))}
     
    </Slider>
  </div>
);
}

export default ClientSlider
