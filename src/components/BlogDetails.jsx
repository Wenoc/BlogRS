import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          title
          date
          body
          url
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

function BlogDetails() {
  const {url} = useParams();
  const [blog, setBlog] = useState(false);
  const { loading, error, data } = useQuery(BLOGS);
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  
  useEffect(() => {
    if (data) {
      data.blogs.data.map((d) => {
        if (d.attributes.url == url) {
          setBlog(d)
        }
      })
      setisLoading(false);
    }
  }, [data]);

  if(isLoading == false && !blog) navigate("/")

  return (
    <div className="blog-details"> 
      {blog &&
        <div>
          <p className="nav-down">Home 	<span className="symobl">&#62;</span> Article</p>
          <h1 className="blog-title">{blog.attributes.title}</h1>

          <div className="main-text">
            <ReactMarkdown>{blog.attributes.body}</ReactMarkdown>
          </div>
        </div>
      }
    </div>
  );
}

export default BlogDetails;