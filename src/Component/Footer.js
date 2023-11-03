import "./Footer.css";

import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaFacebook,FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            <div className="left">

                <div className="location"><FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} /><p>Erode &emsp;</p>
                    <p>   TamilNadu.</p></div>
              
           

            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
            *******629</h4>
            </div>

            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
            cosmo@gmail.com</h4>
            </div>
            </div>

            <div className="right">
                <h4>About.</h4>
                <p>Makeup products
                    Right from the mother nature to your door steps </p>
                     <div className="social">
                     <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />

                     <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />

                     <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />

                     </div>
            </div>
        </div>
    </div>
  )
}

export default Footer