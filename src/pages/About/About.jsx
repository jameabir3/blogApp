import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import SectionTitle from '../../components/SectionTitile/SectionTitle'

import "./About.scss";
import Footer from '../../components/Footer/Footer';
import Team from '../../components/Team/Team';
import { teams } from '../../faker/team';
import { aboutContent } from '../../faker/about';
import { Link } from 'react-router-dom';
import Sitebtn from '../../components/SiteButton/Sitebtn';

const About = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <div className="about__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            titleText = "About Us"
                            subTitleText = "We're a team of talented and dedicated professionals"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">

                        <h2>{aboutContent.title}</h2>
                        <p>{aboutContent.content}</p>
                        <Sitebtn
                            btnText = "See More"
                            btLink = "/contact"
                        />
                    </div>
                    <div className="col-lg-6">
                        <img src={aboutContent.aboutImage} alt="" />
                    </div>
                </div>
                
            </div>
        </div>

        <div className="our_team_area">
            <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            titleText = "Our Team"
                            subTitleText = "Meet our team of experts"
                            
                        />
                    </div>
                </div>
                <div className="row">
                   

                        {teams.map((singleTeam, index) => 
                             <div key={index} className="col-lg-3">
                                <Team
                                    teamAll = {singleTeam}
                                />
                            </div>
                        )}
                            
                        
                    
                    
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default About