import React from 'react'
import serviceOne from '../assesets/imgs/partner/p-1.png'
import serviceTwo from '../assesets/imgs/partner/p-2.png'
import serviceThree from '../assesets/imgs/partner/p-3.png'
import serviceFour from '../assesets/imgs/partner/p-4.png'
import serviceFive from '../assesets/imgs/partner/p-5.png'
import serviceSix from '../assesets/imgs/partner/p-6.png'

const Partner = () => {
     const cards = [
            {
                "id": 1,                
                "imageUrl":serviceOne
              },
              {
                "id": 2,
                "imageUrl":serviceTwo
              },
              {
                "id": 3,
                "imageUrl": serviceThree
              },
              {
                "id": 4,
                "imageUrl": serviceFour
              },
              {
                "id": 5,
                "imageUrl": serviceFive
              },
              {
                "id": 6,
                "imageUrl": serviceSix
              }
          ];
  return (
    <>
    {cards.map(card => (
        <div className="col-md-6 col-sm-6 mb-4 col-6"  key={card.id}>       
          <div className="card partner_box" >
          <img src={card.imageUrl} alt={card.title} className="card-img-top" />         
          </div> 
        </div>))}
        </>
  )
}

export default Partner