import React from 'react';
import './Footer.css';
import footerLogo from '../../assesets/imgs/logo.png';
import senticon from '../../assesets/imgs/send.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
   <>
<div className="footer_block pb-0">
    <div className="container">
        <div className="row align-items-center mb-4">
            <div className="col-lg-4">
                <div className="adress_box position-relative">
                    <img src={footerLogo} alt="" />
                    <p className='text-white mt-4'>Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.</p>
                    <h6 className='text-text-uppercase text-white'><strong>Our Location</strong></h6>
                    <h4 className='text-white mt-3'>175 10h Street, Office 375 Berlin, Devolina 21562</h4>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="foot_links">
                    <h6>Quick Links</h6>
                  <div className="d-flex justify-content-between">
                  <ul className='list-unstyled mb-4'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Service</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                    <ul className='list-unstyled mb-4'>
                    <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Service</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="news_later">
                    <p className='text-white'>Join our subscribers list to get the latest news and special offers.</p>
                    <div className="subscribe">
                        <input className='w-100' type="email" placeholder='email ID' />
                        <button>
                       <img src={senticon} alt="" />
                        </button>
                     
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    <div className="container position-relative border-gray" style={{zIndex: 1, backgroundColor: "rgb(16 29 52)"}}>
      <div className="row  align-items-center py-3">
            <div className="col-md-8">
                <p className="copy_text text-white m-0">© Copyright 1900. All Rights Reserved by SubhasisNaskar</p>
            </div>
            <div className="col-md-4">
                <ul className="social-link list-unstyled d-flex justify-content-end m-0">
                    <li className='ms-3'><a href='www.google.com'><FontAwesomeIcon icon={faFacebookF}/></a></li>
                    <li className='ms-3'><a href='www.google.com'><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li className='ms-3'><a href='www.google.com'><FontAwesomeIcon icon={faTwitter}/></a></li>
                    <li className='ms-3'><a href='www.google.com'><FontAwesomeIcon icon={faYoutube}/></a></li>
                </ul>
            </div>
        </div>
      </div>
</div>

   </>
  )
}

export default Footer
