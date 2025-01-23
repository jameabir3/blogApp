import React from 'react'
import "./Footer.scss";
import { BiLogoAmazon, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoSkype, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { footerbottom, footerWidgets } from '../../faker/footer';
const Footer = () => {

    // Mapping platforms to icons
    const iconMap = {
        facebook: <BiLogoFacebook />,
        twitter: <BiLogoTwitter />,
        instagram: <BiLogoInstagram />,
        skype: <BiLogoSkype />,
        amazon: <BiLogoAmazon />,
        linkedin: <BiLogoLinkedin />,
  
    };
  return (
    <>
        <footer>
            <div className="footer_top_area">
                <div className="container">
                    <div className="row">

                        {footerWidgets.map((singleWidget, index) => 
                        <div key={index} className="col-lg-3">
                            <div className="single__footer_widget">
                                <h3 className='widget_title'>{singleWidget.title}</h3>
                                <div className="footer_widget_inner">

                                    {singleWidget.foote_Menus ? 
                                    <div className="footer_menu">
                                        <ul>
                                            {singleWidget.foote_Menus && Array.isArray(singleWidget.foote_Menus) && singleWidget.foote_Menus.map((singlemenu, index) => (
                                                <li key={index}><a href={singlemenu.link}>{singlemenu.linkText}</a></li>
                                            ))}
                                        </ul>
                                    </div> : null }




                                    {singleWidget.links ?        
                                    <div className="footer_info">
                                        <ul>
                                           
                                            {singleWidget.links && Array.isArray(singleWidget.links) && singleWidget.links.map((singleLink, index) => (
                                                <li key={index}><a href={singleLink.link}>{singleLink.linkText}</a></li>
                                            ))}
                                            
                                           
                                            
                                        </ul>
                                    </div> : null} 
                                    
                                    {singleWidget.textpara ?
                                    <div className="footer_para_Text">
                                        <p>{singleWidget.textpara}</p>
                                    </div> :null}
                                    

                                    {singleWidget.socialLinks ?
                                    <div className="footer__social__icons">
                                    {singleWidget.socialLinks?.some(icon => iconMap[icon.platform]) && (
                                        <div className="team-social">
                                            {singleWidget.socialLinks.map((singleScItem, index) => (
                                                <a key={index} href={singleScItem.url} target="_blank" rel="noopener noreferrer">
                                                    {iconMap[singleScItem.platform]}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    </div> : null
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        )}

                        
                        
                    </div>
                </div>
            </div>
            <div className="footer_bottom_area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_content">
                                <p>{footerbottom.text} <a href={footerbottom.linkText}>{footerbottom.link}</a></p>
                                <a href={footerbottom.ftrightlink}>{footerbottom.ftrightText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    </>
  )
}

export default Footer