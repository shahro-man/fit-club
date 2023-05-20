import React from "react";
import './Footer.css'
import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = ()=>{
    return(
        <div className="footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                     <img src={GitHub}  />
                    <img src={Instagram}  />
                    <img src={Linkedin}  />
                </div>
            
                <div className="logo-f">
                    <img src={Logo}  />
                </div>
            </div>
            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>

        </div>
    )
}

export default Footer