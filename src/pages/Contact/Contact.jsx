import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import { FaAmazon, FaFacebook, FaInstagram, FaTwitter, FaVk } from 'react-icons/fa'
import "./Contact.scss";
import SectionTitle from '../../components/SectionTitile/SectionTitle'
import { contactInfo, folowUs, openinghours } from '../../faker/contact'
import { Link } from 'react-router-dom'

const Contact = () => {


    // Mapping of icon names to React icon components
const getIconComponent = (icon) => {
    switch (icon) {
        case "facebook":
            return <FaFacebook />;
        case "twitter":
            return <FaTwitter />;
        case "instagram":
            return <FaInstagram />;
        case "amazone":
            return <FaAmazon/>
        default:
            return null;
    }
};


  return (
    <>
        <Header/>
        <Banner/>
        <div className="contact__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            titleText= "Contact Us"
                            subTitleText = "Please reach out to us for any questions or inquiries"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="contact_form">
                            <form>
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Your Email"/>
                                <textarea placeholder="Your Message"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <h3>{contactInfo.title}</h3>
                        <p>{contactInfo.address}</p>
                        <p>Phone: {contactInfo.phone}</p>
                        <p>Email: {contactInfo.email}</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>{openinghours.title}</h3>
                        <p>{openinghours.days}</p>
                        <p>Saturday: {openinghours.saturday}</p>
                        <p>Sunday: {openinghours.sunday}</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>{folowUs.title}</h3>
                       

                        <div className="social_links">
                            {folowUs.socialMedia.map((singleLink, index) => (
                                <Link key={index} to={singleLink.link} target="_blank" rel="noopener noreferrer">
                                    {getIconComponent(singleLink.icon)} {/* Render the corresponding icon */}
                                </Link>
                            ))}
                        </div>
                            
                       
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact