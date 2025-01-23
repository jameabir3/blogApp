import React from 'react'


import "./Home.scss";
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/SectionTitile/SectionTitle';
import BlogCard from '../../components/BlogCard/BlogCard';

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <div className="blog__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  titleText = "Our Latest Blog"
                  subTitleText = "Check out our latest blog posts"
                />
                
              </div>
            </div>
            <div className="row my-4">
              <BlogCard/>
              
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home