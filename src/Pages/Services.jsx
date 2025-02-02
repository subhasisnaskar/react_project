import React from 'react'
import Banner from "../Components/Banner/Banner";
import banner_img from '../assesets/imgs/service-banner.jpg';
import check_img from '../assesets/imgs/check-mark.png';
import Sectionheader from '../Components/Sectionheader';
import Serviceitem from './Serviceitem';
import Counter from '../Components/Counter';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Partner from './Partner';
import Slickslider from '../Components/Slickslider';
import Testimonial from '../Components/Testimonial';
import Footer from '../Components/Footer/Footer';
import Videobox from '../Components/Videobox';
import Tilt from 'react-parallax-tilt';



function Services() {
  const textHeader = "Empower your business \nwith our services.";
  const textHeader_new = "Our commitment \nis client satisfaction";
  const textHeader_ptnr = "Worked with \nLargest Brands";
  const textHeader_team = "Meet the talented team \nfrom our company";
  return (
    <>
      <Banner imageUrl={banner_img} title="Service Page"
        subtitle="Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

      <section className="service_block block_gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className='text-center'>
                <Sectionheader title="Our Services" subtitle={textHeader} />
              </div>
            </div>
          </div>

          <Serviceitem />

          <div className='expertish_block block_gap'>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                <Tilt>
                  <div className="count-project">
                    <div className="project-c">
                      <h3> <Counter maxCount={98} /> <span>%</span> </h3>
                      <p className='text-white'>Successful Projects</p>
                    </div>
                    <div className=' border-bottom border-light mb-0'></div>
                    <div className="project-c">
                      <h3>  <Counter maxCount={30} intervalTime={300} /> <span>K</span> </h3>
                      <p className='text-white'>Happy Clients</p>
                    </div>
                  </div>
                  </Tilt>
                </div>
                <div className="col-lg-7">
                  <div className="text-start modify_margin">
                    <Sectionheader title="Our expertise" subtitle={textHeader_new} />
                  </div>
                  <div className="list-progress mt-5">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="list-unstyled expritesh_list">
                          <li><span className='me-3'><img src={check_img} alt="" /></span> Organizational structure model</li>
                          <li><span className='me-3'><img src={check_img} alt="" /></span> Satisfaction guarantee</li>
                          <li><span className='me-3'><img src={check_img} alt="" /></span> Ontime delivery</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <div className="container">

                          <div className="progress_bar">
                            <p className='mb-1'><strong>IT Management</strong></p>
                            <ProgressBar variant="primary" now={20} />
                            <p className='mt-3 mb-1'><strong>Data Security</strong></p>
                            <ProgressBar variant="primary" now={80} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className='partner_block block_gap'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <Tilt>
              <div className="partnet_fst-box">
                <div className="text-start modify_color">
                  <Sectionheader className="text-white" title="Our Partners" subtitle={textHeader_ptnr} />
                </div>
              </div>
              </Tilt>
            </div>
            <Partner />

          </div>
        </div>

      </section>

      <section className='team_block block_gap bg-light'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className='text-center'>
                <Sectionheader title="Team Members" subtitle={textHeader_team} />
              </div>
            </div>
          </div>
          <Slickslider />
        </div>
      </section>


      <section className='testimonials block_gap  bg-light-blue'>
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
                 <Videobox/>
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
<Footer/>
    </>
  )
}

export default Services
