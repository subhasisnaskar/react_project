

import Slider from "react-slick";
import profileOne from '../assesets/imgs/profile-image.jpg'
import profileTwo from '../assesets/imgs/profile-image2.jpg'
import profileThree from '../assesets/imgs/profile-image.jpg'
import './Testmonial.css'


function Testimonial() {
    const cards = [
          {
              "id": 1,
              "title": "Crish Jardan",
              "description": "Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.",
              "imageUrl":profileOne
            },
            {
              "id": 2,
              "title": "William Bosisto",
              "description": "Regular rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.",
              "imageUrl":profileTwo
            },
            {
              "id": 3,
              "title": "Dawid Malan",
              "description": "Patient rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.",
              "imageUrl": profileThree
            }
        ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };


  return (
    <div className="slider-container">
      <Slider {...settings}>
      {cards.map(card => (
          <div className="col-4" key={card.id}>
            <div className="card testimonil_box border-0">
            <img src={card.imageUrl} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-center">{card.title}</h5>
                <p className="card-text text-center">{card.description}</p>          
              </div>
            </div>
          </div>
        ))}
       
      </Slider>
    </div>
  );
}

export default Testimonial;
