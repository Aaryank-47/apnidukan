import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ajsimg from "../../logo/ajspic.jpg"
import akimg from "../../logo/akpic.jpg"
import lknimg from "../../logo/lknpic.jpg"
import "./Footer.css"

// import {Box} from'@mui/material'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (<>
    <div className='footer_container'>
      <div className="about_container">
        <h3 className='aboutheader'>ABOUT</h3>
        <ul className="about_items">
          <li className="item1"><Link to="#">About Us</Link></li>
          <li className="item1"><Link to="#">Contact Us</Link></li>
          <li className="item1"><Link to="#">Careers</Link></li>
          <li className="item1"><Link to="#">AAD Stories</Link></li>
        </ul>
      </div>

      <div className="help_desk">
        <h3 className='helpheader'>HELP</h3>
        <ul className='helpdesk_items'>
          <li className='item2'><Link to="#">Payments</Link></li>
          <li className='item2'><Link to="#">Cancellation & Returns</Link></li>
          <li className='item2'><Link to="#">FAQ</Link></li>
        </ul>
      </div>

      <div className="consumer_container">
        <h3 className='consumerheader'>CONSUMER POLICY</h3>
        <ul className='consumer_items'>
          <li className='item3'><Link to="#">Security</Link></li>
          <li className='item3'><Link to="#">Terms of use</Link></li>
          <li className='item3'><Link to="#">Privacy</Link></li>
          <li className='item3'><Link to="#">Sitemap</Link></li>
        </ul>
      </div>

      <div className="mail_box">
        <h3 className='mailheader'>Mail Us</h3>
        <p className='mail_items'>AAD Private limited, SSIPMT College,Mujgahan,Raipur,India,111222</p>
        <span className='email_id'>abc@gmail.com</span>
      </div>

      <div className="roa_container">
      <h3 className='roaheader'>Registered Office Address</h3>
        <p className='roa_items'>AAD Private limited, SSIPMT College,Mujgahan,Raipur,India,111222
          <br />
          <span className='telephone_no'>Telephone:044-46655545 / 044-56564532</span>
        </p>
      </div>

      <div className="social_media">
        <h3 className='sm_header'>SOCIAL MEDIA</h3>
        <ul className="smIcons">
          <li className="icon"><a href="https://www.facebook.com/"><FaFacebook /></a></li>
          <li className="icon"><a href="https://www.instagram.com/"><FaInstagram /></a></li>
          <li className="icon"><a href="https://x.com/"><FaXTwitter /></a></li>
        </ul>
      </div>
    </div>
      <div className="partners_detail">
        <div id="img1" className='pic'>
          <img src={akimg} alt="akimg" />
          <p><span>Aaryan Kamalwanshi</span> <br /> Worked as  Frontend developer</p>
        </div>
        <div id="img2" className='pic'>
          <img src={ajsimg} alt="ajsimg" />
          <p><span>Aayush Jain </span><br />Worked as Technical supporter in frontend and backend</p>
        </div>
        <div id="img3" className='pic'>
          <img src={lknimg} alt="lknimg" />
          <p><span>Lemesh Kumar Nishad</span><br />Worked as Marketing Head </p>
        </div>
      </div>
        </>
  )
}

export default Footer;