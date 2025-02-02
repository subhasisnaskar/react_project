import React from 'react';
import Videobox from '../Components/Videobox';
import Counter from '../Components/Counter';
import meeting from '../assesets/imgs/meeting.jpg';
import ClientSlider from '../Components/Clientslider/ClientSlider';
import girl1 from '../assesets/imgs/girl_1.png'
import Sectionheader from '../Components/Sectionheader';
import Footer from '../Components/Footer/Footer';
import Testimonial from '../Components/Testimonial';
import Tilt from 'react-parallax-tilt';



const About = () => {
  return (
    <>

      <div className="about_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_left_banner">
                <div className="text-start modify_color">
                  <Sectionheader title="About Us" subtitle="Meet the executives driving our success." />
                </div>
                <p className="text-white" style={{ maxWidth: "600px" }}>Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature ganiay direction.</p>
                <Tilt perspective={1000}>
                <div className="about_video mt-5">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="p-3">
                        <Videobox />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="project-c">
                        <h3> <Counter maxCount={98} /> <span>%</span> </h3>
                        <p className='text-white'>Successful Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
</Tilt>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_right">
                <Tilt>
                <div className="image_shap">
                  <img src={meeting} alt="" className="w-100 img-fluid" />
                  <div className="shap_box">
                    <h4 className="text-white">Empower your business with us!</h4>
                  </div>
                </div>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why_us shap_bg">
        <div className="container padding_gap">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="client_text">
                <h3 className="text-theme">
                  Trusted brands<br />
                  work with us
                </h3>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="client_slider">
                <ClientSlider />
              </div>
            </div>
          </div>

        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="girl_img text-center">
                <img src={girl1} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-start modify_margin">
                <Sectionheader title="Why Choose Us" subtitle="Our commitment
                    is client satisfaction" />
              </div>
              <p>Continue indulged speaking the was out horrible for domestic position. Seeing
                rather her you not esteem men settle genius excuse. Deal say over you age from.
                Comparison new ham melancholy son themselves.</p>
              <ul className="list-sytle-four mt-3">
                <li>
                  <h4>Tech Solution</h4>
                  <p>Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                  </p>
                </li>
                <li>
                  <h4>Quick Support</h4>
                  <p>Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.</p>
                </li>
              </ul>
             <div className="link-btn">
             <a href="Contact" className="btn btn-theme">Learn More</a>
             </div>
            </div>

          </div>
        </div>
      </div>
      <div className="process_block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about_left_banner">
                <div className="text-start modify_color w-50">
                  <Sectionheader title="Our Process" subtitle="Building great future Together, Be with us" />
                </div>
                </div>
            </div>
        
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4 col-md-6 mb-md-4">
            <div className="procerr_box">
              <h3>Honesty</h3>
              <p>Experience and expertise, I have been recognized through the awards achieved, I am able to customize solutions to meet your specific needs</p>
              <div className="process_number">
                01
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-4">
              <Tilt>
            <div className="procerr_box">
              <h3>Unity</h3>
              <p>Experience and expertise, I have been recognized through the awards achieved, I am able to customize solutions to meet your specific needs</p>
              <div className="process_number">
                02
              </div>
            </div>
            </Tilt>
            </div>
            <div className="col-lg-4 col-md-6 mb-md-4">
            <div className="procerr_box">
              <h3>Innovation</h3>
              <p>Experience and expertise, I have been recognized through the awards achieved, I am able to customize solutions to meet your specific needs</p>
              <div className="process_number">
                03
              </div>
            </div>
            </div>
          
          </div>
        </div>
      </div>
      <section className='testimonials block_gap  bg-white'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <Sectionheader className="text-white" title="Testimonials" subtitle='What people say about us' />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="testimonials_box bg-white">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="p-4">
                <Tilt>
                <Videobox />
                </Tilt>
                </div>
              </div>
              <div className="col-md-6">
              <div className="testimonials_slide">
            <Testimonial />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<Footer />
    </>
  )

}

export default About

