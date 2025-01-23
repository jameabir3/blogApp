import React from 'react'
import "./BlogCard.scss";

import { blogItems } from '../../faker/blog';
import { Link } from 'react-router-dom';
const BlogCard = () => {
  return (
    <>

    {blogItems.map((singleBlog, index) => 

        <div key={index} className="col-lg-4">
        <div className="single_blog">
            <div className="blog_img">
                <img className='w-100' src={singleBlog.thumbnail} alt="" />
                <div className="date">
                    <span>{singleBlog.date}</span>
                </div>
            </div>
            <div className="blog_content">
                <h3><Link to={`/blog/${singleBlog.slug}`}>{singleBlog.title}</Link></h3>
                <p>{singleBlog.summary}</p>
                
            </div>
        </div>
        </div>
    
    )}
    
    </>
  )
}

export default BlogCard