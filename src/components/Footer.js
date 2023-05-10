import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaTypo3 } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to recieve our best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at anything time.
            </p>
            <div className="input-area">
                <form>
                    <input type='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
             <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
        </div>
        <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/Home' className='social-logo'>
                        CHUKWUEMEKA <FaTypo3/>
                    </Link>
                </div>
                <small className='website-rights'>All rights reserved &#169; 2023</small>
                <div className="social-icons">
                    <Link className='social-icon-link facebook'
                         to="/" target="_blank" aria-label='Facebook'>
                        {/* <i className="fab fa-facebbok-f" /> */}
                        <FaFacebookF />
                    </Link>
                    <Link className='social-icon-link instagram'
                         to="/" target="_blank" aria-label='Instagram'>
                        <FaInstagram />
                    </Link>
                    <Link className='social-icon-link youtube'
                         to="/" target="_blank" aria-label='Youtube'>
                        <FaYoutube />
                    </Link>
                    <Link className='social-icon-link twitter'
                         to="/" target="_blank" aria-label='Twitter'>
                        <FaTwitter />
                    </Link>
                    <Link className='social-icon-link linkedin'
                         to="/" target="_blank" aria-label='LinkedIn'>
                        <FaLinkedinIn />
                    </Link>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer