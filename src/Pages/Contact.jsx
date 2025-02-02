import React from "react";
import Banner from "../Components/Banner/Banner";
import banner_img from '../assesets/imgs/contact_1.jpg'
import Sectionheader from "../Components/Sectionheader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../Components/Contactform/ContactForm";
import Footer from "../Components/Footer/Footer";
import Tilt from 'react-parallax-tilt';

function Contact() {
  return (
    <>
      <Banner imageUrl={banner_img} title="Contact Me"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of
 type and scrambled it to make a type specimen book." />
      <div className="contact_block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact_info">
                <div className="text-start modify_margin">
                  <Sectionheader title="Have Questions?" subtitle="Contact Information" />
                </div>
                <p>Feel free to send me updates by submitting the form,<br />as it is connected to my email.</p>
                <div className="c_info">
                  <div className="con-details d-flex mb-4 align-items-center">
                    <div className="con-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="con_text">
                      <h4>Hotline</h4>
                      <a href="tel:8617283380">8617283380</a>
                    </div>
                  </div>
                  <div className="con-details d-flex mb-4 align-items-center">
                    <div className="con-icon">
                      <FontAwesomeIcon icon={faLocationPin} />
                    </div>
                    <div className="con_text">
                      <h4>Our Location</h4>
                      <a href="https://maps.app.goo.gl/5Cj4WLwgghPL4YAT91">NH6 Mumbai Road, Nimerhati, <br />Howrah, West Bengal 711302,
                        India</a>
                    </div>
                  </div>
                  <div className="con-details d-flex mb-4 align-items-center">
                    <div className="con-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="con_text">
                      <h4>Official Email</h4>
                      <a href="mailto:subhasis.webdesigner@gmail.com">subhasis.webdesigner</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Tilt>
              <div className="contact_form">
              <ContactForm />
              </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div className="map_block">
      <div style={{width: "100%"}}><iframe width="100%" height="600" title="map" frameborder="0"  marginheight="0" marginwidth="0"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nimerhati%20vorer%20suryo%20club+(Subhasis%20Frontend%20developer)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">real-time gps tracking</a></iframe></div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
