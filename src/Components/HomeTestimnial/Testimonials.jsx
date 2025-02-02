import React, { useEffect, useState } from 'react'
import './testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means it runs only once on mount

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={item.id || index} className='px-3'>
            <div className='w-100 box_view d-flex align-items-center'>
              <div className="photo_icon">
                {item.photo ? (
                  <img src={item.photo} alt={item.name} className='img-fluid' />
                ) : (
                  <div className="placeholder-img">No Image</div>
                )}
              </div>

              <div className="api_text">
                <h3 className='text-truncate'>{item.name || "Unknown"}</h3>
                <p>{item.company || "No Company Info"}</p>
                <p>{item.username || "No Username"}</p>
                <p>{item.address?.street || "No Address"} {item.address?.zip || ""}</p>
                <p className='mb-4'>{item.address?.state || "No State"}</p>
                {item.email && (
                  <p className='mb-2'>
                    <a href={`mailto:${item.email}`}>
                      <FontAwesomeIcon icon={faEnvelopeOpen} /> {item.email}
                    </a>
                  </p>
                )}
                {item.phone && (
                  <p className='mb-2'>
                    <a href={`tel:${item.phone}`}>
                      <FontAwesomeIcon icon={faPhone} /> {item.phone}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
