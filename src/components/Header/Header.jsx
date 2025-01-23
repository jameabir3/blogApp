import React from 'react'
import "./Header.scss";
import siteLogo from "../../assets/img/siteLogo.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className="header__area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header_top">
                            <div className="site-logo">
                                <a href=""><img src={siteLogo} alt="" /></a>
                            </div>
                            <div className="header__right">
                                <ul className="menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                <div className="header_social">
                                    <a href="#"><BiLogoFacebook/></a>
                                    <a href="#"><BiLogoTwitter/></a>
                                    <a href="#"><BiLogoInstagram/></a>
                                    <a href="#"><BiLogoYoutube/></a>
                                    <a href="#"><BiSearch/></a>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header