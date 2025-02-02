import React from 'react'
import './Banner.css'


const Banner = ({ imageUrl, title, subtitle }) => {
    return (
        <div className='banner'>
            <div className="banner_img">
                <img src={imageUrl} alt="" className='w-100 img-fluid'/>
            </div>
            <div className="banner_text">
               <div className="container">
                <div className="row">
                    <div className="col">
                   <div className="banner_box">
                 <h2 className="banner-title">{title}</h2><p>{subtitle}</p>                
                   </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Banner;