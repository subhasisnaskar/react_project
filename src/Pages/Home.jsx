import React from 'react'
import banner_img from '../assesets/imgs/banner-lady.png'
import Counter from '../Components/Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import paralx from '../assesets/imgs/parallexl.jpg';
import parallex2 from '../assesets/imgs/parallexl2.png';
import paralexTestimonial from '../assesets/imgs/calculator-bg.jpg';
import jobless from '../assesets/imgs/jobless.jpeg';
import conselt from '../assesets/imgs/conselting.jpg';
import Sectionheader from '../Components/Sectionheader';
import serviceOne from '../assesets/imgs/service/service_1.jpg';
import serviceTwo from '../assesets/imgs/service/service_2.jpg';
import serviceThree from '../assesets/imgs/service/service_3.jpg';
import Tilt from 'react-parallax-tilt';
import Footer from '../Components/Footer/Footer';
import Testimonials from '../Components/HomeTestimnial/Testimonials';
import Postdata from '../Components/Post/Postdata'

function Home() {
    const services = [
          {
              "id": 1,
              "title": "Analytic Solutions",
              "description": "Seeing rather her you not esteem men. Seeing rather her you not esteem men ",
              "imageUrl":serviceOne
            },
            {
              "id": 2,
              "title": "Risk Management",
              "description": "Regular rather her you not esteem men settle. Regular rather her you not esteem men.",
              "imageUrl":serviceTwo
            },
            {
              "id": 3,
              "title": "Firewall Advance",
              "description": "Patient rather her you not esteem men settle genius excuse. men settle genius excuse.",
              "imageUrl": serviceThree
            },
            {
              "id": 4,
              "title": "Analytic Solutions",
              "description": "Seeing rather her men settle genius excuse. Seeing rather her men settle genius excuse.",
              "imageUrl":serviceOne
            }
        ];
  return (
    <>
      <div className="home-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner_text">
                <p className='top_tag'>Business Advisor</p>
                <h1>Grow <span>Business</span>
                  <br />with great advice</h1>
                <p className='me-lg-5'>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.</p>
                <a href="/services" className='btn btn-banner'>View Services</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner_right">
                <div className="banner_thumb">
                  <img src={banner_img} alt="" />
                  <div className="stragity">
                    <div className="stragity_box">
                      <div className="stg-icon">
                        <FontAwesomeIcon icon={faChartPie} />
                      </div>
                      <div className="stg-text">
                        <h3 className='d-flex m-0'> <Counter maxCount={98} /><span>%</span> </h3>
                        <p className='m-0'>Successful Projects</p>
                      </div>
                    </div>
                    <div className="stragity_box">
                      <div className="stg-icon">
                        <FontAwesomeIcon icon={faMugHot} />
                      </div>
                      <div className="stg-text">
                        <h3 className='d-flex m-0'>  <Counter maxCount={30} intervalTime={300} /> <span>K</span> </h3>
                        <p className='m-0'>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='parallex_block'>
        <ParallaxProvider >
          <ParallaxBanner
            layers={[
              { image: paralx, speed: -20, },
              { image: parallex2, speed: -10, },
              {
                speed: -35,
                children: (
                  <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="my_info text-center">
                            <div className="my_icon">
                              <img src={jobless} alt="" />
                            </div>
                            <h2>Subhasis Naskar</h2>
                            <p className='my-3'>I am a Html Developer. I have over 8 years’ experience in crafting responsive,
                              user-friendly websites and components. Proficient in HTML5, CSS3, JavaScript, Bootstrap, React,
                              WordPress and Wix platform development. Also, deep knowledge in Photoshop, Figma.
                            </p>
                            <p className='mb-0'><strong>I am currently looking for a suitable position and am currently unemployed.</strong></p>
                            <a href="/contact" className='btn btn-banner'>Contact Me</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
            className="parallex_height">
          </ParallaxBanner>
        </ParallaxProvider>
      </div>

      <div className="client_project">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden">
                <img src={conselt} alt="" className='img-fluid w-100' />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_right ms-lg-5">
                <div className="text-start modify_margin">
                  <Sectionheader title="About Us" subtitle="Crafting unique solutions with precision and passion." />
                </div>
                <div className="right_textbox d-flex">
                  <div className="proj_count me-4">
                  <h3 className='d-flex'> <Counter maxCount={80} /> <span>K</span> </h3>
                  <p className=''><strong>Projects Complete</strong></p>
                  </div>
                  <div className="proj-text">
                    <p className='mb-0'>
                      Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast.
                    </p>
                 
                  </div>
                </div>
                <a href="/about" className='btn btn-banner mt-5'>About Page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_service">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <div className='text-center'>
                <Sectionheader title="Our Services" subtitle="Empower your business with our services." />
              </div>
            </div>          
          </div>
          <div className="row">
          {services.map(card => (
          <div className="col-lg-6 col-xl-3 col-sm-6 col-12 mb-5" key={card.id}>
            <Tilt>
            <div className="service_home">
            <img src={card.imageUrl} alt={card.title} className="card-img-top" />
              <div className="text_con">
                <h5 className="c-title">{card.title}</h5>
               <div className="serv_ovel">
               <p className="card-text">{card.description}</p>
              
               </div>             
              </div>
            </div>
            </Tilt>
           
          </div>
        ))}
        <div className="col-12 text-center">
        <a href="/contact" className='btn btn-banner'>View all Services</a>
        </div>
          </div>
        </div>
      </div>
      <ParallaxProvider >
      <ParallaxBanner
      layers={[{ image: paralexTestimonial, speed: -15 }]}
      className="testimonial_height">
    <div className="testimonial_con position-absolute w-100 h-100 top-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="testimonial_box">
               <Testimonials />
              </div>
            </div>
          </div>
        </div>
    </div>
    </ParallaxBanner>
      </ParallaxProvider>   
    <div className="post">
      <div className="container">
        <div className="row">
        <div className="col-12">
            <div className='text-center'>
                <Sectionheader title="Blog Insight" subtitle="Valuable insights to change
your startup idea" />
              </div>
            </div>  
        <Postdata />
        </div>
      </div>
      </div> 
      <Footer/>
    </>
  )
}

export default Home
