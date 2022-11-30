import React from 'react'
import { Link } from 'react-router-dom'
import tftBg from "../assets/tftBg.webp"
import BlogTag from './BlogTag'

function BlogCard({title, date, categories, url}) {
  return (
    <div className='blog-card'>
        <Link to={`/${url}`}>
            <div className="imgContainer">
                <img src={tftBg} alt="tft img" />
            </div>
        </Link>
        
        <div className='blog-card-content'>
            <h2>{title}</h2>
            <div className="blog-down-content">
                <div className='blog-card-details'>
                    <div className="blog-author">
                        <p>{date} - <span>Hower</span></p>
                    </div>
                </div>
                <div className='blog-card-tags'>
                    {categories.data.map(category => (
                        <div key={category.id}>
                            <BlogTag name={category.attributes.name}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard