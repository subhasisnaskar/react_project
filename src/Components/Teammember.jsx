import React, { useEffect, useState } from 'react'


const Teammember = () => {

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
    
    <div className='row'>
      {data.map(item => (
        <div className='col-lg-4' key={item.id}>
          <div className="card team_box">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className='profile_img'>
                  <img src={item.photo} alt="" className='img-fluid' />
                </div>
                <div className="contact_info">
                  <h3 className='m-0'>{item.name}</h3>
                  <p className='m-0'><strong>{item.company}</strong></p>
                </div>
              </div>

             <div className="contact_details mt-4">
             <p className='m-0'><span></span> {item.email}</p>
             <p className=''><span></span> {item.phone}</p>
             </div>
              <p className='m-0 country_name'>{item.country}</p> 
            </div>
          </div>
        </div>

      )
      )}
    </div>
  )
}

export default Teammember
