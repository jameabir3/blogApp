import React from 'react'
import "./Team.scss";
import { BiLogoAmazon, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Team = ({teamAll}) => {

    const {name, image, position, socialLinks} = teamAll;

    // Mapping platforms to icons
    const iconMap = {
        facebook: <BiLogoFacebook />,
        twitter: <BiLogoTwitter />,
        instagram: <BiLogoInstagram />,
        amazone: <BiLogoAmazon />,
        
  
    };
    

  return (
    <>
        
        
            <div className="single_team_member">
                <img className='w-100' src={image} alt="" />
                <h3>{name}</h3>
                <span>{position}</span>
                {socialLinks?.some(icon => iconMap[icon.platform]) && (
                    <div className="team-social">
                        {socialLinks.map((singleScItem, index) => (
                            <Link key={index} to={singleScItem.url} target="_blank" rel="noopener noreferrer">
                                {iconMap[singleScItem.platform]}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        
    </>
  )
}

export default Team