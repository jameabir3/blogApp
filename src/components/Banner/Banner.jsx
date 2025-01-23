import React from 'react'
import "./Banner.scss";
import bannerImage from "../../assets/img/banner.jpg";
import { bannerContent } from '../../faker/banner';

const Banner = () => {
  return (
    <>
       <div className="banner__area d-flex align-items-center" style={{
        backgroundImage: `url(${bannerContent.image})`,
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
     
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="banner_content">
                            <a href="" className='category'>{bannerContent.category}</a>
                            <h1>{bannerContent.title}</h1>
                            <span>08.08.2021</span>
                            <p>{bannerContent.description}</p>
                            <a href="#" className="siteBtn">{bannerContent.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Banner