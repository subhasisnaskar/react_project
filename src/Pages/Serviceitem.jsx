import React from 'react'
import serviceOne from '../assesets/imgs/service/16.png'
import serviceTwo from '../assesets/imgs/service/17.png'
import serviceThree from '../assesets/imgs/service/18.png'


function Serviceitem() {

    const cards = [
        {
            "id": 1,
            "title": "Analytic Solutions",
            "description": "Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.",
            "imageUrl":serviceOne
          },
          {
            "id": 2,
            "title": "Risk Management",
            "description": "Regular rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.",
            "imageUrl":serviceTwo
          },
          {
            "id": 3,
            "title": "Firewall Advance",
            "description": "Patient rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves the perfect connections.",
            "imageUrl": serviceThree
          }
      ];

  return (
    <div className='row'>
      {cards.map(card => (
          <div className="col-md-4 mb-5" key={card.id}>
            <div className="card h-100 service_card pt-0">
            <img src={card.imageUrl} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href="/" className='btn read-more'>Read More</a>              
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Serviceitem
