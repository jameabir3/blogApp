import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import { useParams } from 'react-router-dom'
import { blogItems } from '../../faker/blog'
import Footer from '../../components/Footer/Footer'
import "./SingleBlog.scss";

const SingleBlog = () => {

    const {slug} = useParams();

    const {title, summary, author, date, comment, category, thumbnail, desc, commentList} = blogItems.find(data => data.slug === slug);

  return (
    <>
        <Header/>
        <Banner/>
        <div className="blog_details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <img src={thumbnail} alt="" />
                        <div className="blog_meta">
                            <span>Date: {date}</span>
                            <span>Author: {author}</span>
                            <span>Category: {category}</span>
                            <span>Comments: {comment}</span>
                        </div>
                        <h1>{title}</h1>
                        <p>{desc}</p>

                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                    <div className="blog_comment_form">
                    <h3>Leave a Comment</h3>
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Comment"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    {commentList ? 
                    <div className="comments">
                        <h3>Comments</h3>
                        
                        
                        <div className="comments_section">
                        {commentList.map((comment, index) => (
                            <div className="comment_inner">
                                <div className="single_comment" key={index}>
                                    <img src={comment.authorImage} alt={`${comment.name}'s avatar`} />
                                    <div className="comment_info">
                                        <h4>{comment.name}</h4>
                                        <span>{comment.commentDate}</span>
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                                
                                    <div className="comment_replay">
                                        {comment.commentReplay?.map((singleCommentreplay, index) => 
                                            <div className="single_comment_replay">
                                                <img src={singleCommentreplay.c_replayAuthImage} alt="" />
                                                <div className="comment_info">
                                                    <h4>{singleCommentreplay.c_replay_name}</h4>
                                                    <span>{singleCommentreplay.c_replay_commentDate}</span>
                                                    <p>{singleCommentreplay.c_replay_comment}</p>
                                                </div>  

                                            </div>
                                        )}
                                    </div>
                                
                                
                            </div>
                        ))}
                        </div> 
                           

                       
                    </div> : null
                     }
                </div>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default SingleBlog