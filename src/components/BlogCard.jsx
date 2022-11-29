import React from 'react'
import tftBg from "../assets/tftBg.webp"
import BlogTag from './BlogTag'

function BlogCard() {
  return (
    <div className='blog-card'>
        <div className="imgContainer">
            <img src={tftBg} alt="tft img" />
        </div>
        <div className='blog-card-content'>
            <h2>TFT Set 8: Monsters Attack! A First Look at the Threat Trait and Champions</h2>
            <div className='blog-card-details'>
                <div className="blog-author">
                    <p>November 15, 2022 - <span>Hower</span></p>
                </div>
            </div>
            <div className='blog-card-tags'>
                <BlogTag />
                <BlogTag />
            </div>
        </div>
    </div>
  )
}

export default BlogCard