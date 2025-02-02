import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";



function Slickslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "30px",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   
  };
  const [data, setData] = useState([]);  
    useEffect(() => {
      fetch("https://fake-json-api.mock.beeceptor.com/users")
        .then((response) => response.json())
        .then((fetchedData) => {
          // Correct the error for ID = 2
          const correctedData = fetchedData.map((item) => {
            if (item.id === 2) {
              return {
                ...item,
                // Correct fields here
                name: "Corrected Name",
              };
            }
            return item;
          });
  
          setData(correctedData);
        })
  
        .catch((error) => console.error("Error in data fetch", error));
    }, []);

  return (
    <div className="slider-container">
      <Slider {...settings}>
      {data.map((item, index) => (
        <div  key={item.id} className='px-3'>    
        <div className='w-100'>
          <div className="card team_box">
            <div className="card-body p-4">
              <div className="d-flex align-items-center">
                <div className='profile_img'>
                  <img key={item.id} src={item.photo} alt="" className='img-fluid' />
                </div>
                <div className="contact_info">
                  <h3 className='m-0' key={item.id}>{item.name}</h3>
                  <p className='m-0'><strong key={item.id}>{item.company}</strong></p>
                </div>
              </div>

             <div className="contact_details mt-4">
             <p className='mb-2'><a href={"mailto:" + item.email}><span><FontAwesomeIcon icon={faEnvelopeOpen} /></span> {item.email}</a></p>
             <p className=''><a href={"tel:" + item.phone}><span>  <FontAwesomeIcon icon={faPhone} /></span> {item.phone}</a></p>
             </div>
              <p className='m-0 country_name'>{item.country}</p> 
            </div>
          </div>
        </div>
</div>
      )
      )}
       
      </Slider>
    </div>
  );
}

export default Slickslider;


