import './Navbar.css'
import logo from '../../assesets/imgs/logo.png'
import chat_img from '../../assesets/imgs/chat_icon.png'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar ()  {  

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive)
    };


        const [scrolled, setScrolled] = useState(false);
      
        const handleScroll = () => {
          const scrollTop = window.scrollY; // Get vertical scroll position
          if (scrollTop > 50) {
            setScrolled(true);  // Add class when scrolled down 50px
          } else {
            setScrolled(false); // Remove class when back to the top
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener
          };
        }, []);
    
    return (
       
            <header  className={scrolled ? 'header-area scrolled' : 'header-area'}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-5 col-md-2'>
                            <div className='logo_hdr'>  <img src={logo} width={150} alt='' /> </div>
                        </div>
                        <div className="col-7 col-md-7">
                            <ul  className={isActive ?  'header_menu is-active' : 'header_menu'}>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='./about'>About</NavLink></li>
                                <li><NavLink to='./services'>Services</NavLink></li>
                                <li><NavLink to='./contact'>Contact</NavLink></li>
                               
                            </ul>
                            <div className='mobile_menu'>                          
                                <div id='hamburger-1'  className={isActive ?  'hamburger is-active' : 'hamburger'}  onClick={toggleClass}>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                      </div>
                        </div>
                        <div className="col-md-3 col-6">
                        <div className="chat_box">
                            <div className="chat_img">
                                <img src={chat_img} alt="" />
                            </div>
                            <div className="chat_text">
                                <p>Have any Questions?</p>
                                <a href="mailto:subhasis.webdesigner@gmail.com">subhasis.me@gmail.com</a>
                            </div>
                        </div>
                        </div>
                       
                      
                    </div>
                </div>
            </header>
      

    )
}

export default Navbar;