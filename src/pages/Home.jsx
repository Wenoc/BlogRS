import React from 'react'
import BlogCard from '../components/BlogCard'
import {useQuery, gql} from "@apollo/client"

const BLOGS = gql`
  query GetBlogs{
    blogs{
      data{
        id,
        attributes{
          title,
          date,
          body,
          url,
          categories{
            data{
              id,
              attributes{
                name
              }
            }
          }
        }
      }
    }
  }
`

function Home() {

  const {loading, error, data} = useQuery(BLOGS)

  if (loading) return <p> Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div className='home'>
      {data.blogs.data.map(blog => (
        <div key={blog.id}>
          <BlogCard title={blog.attributes.title} date={blog.attributes.date} categories={blog.attributes.categories} url={blog.attributes.url}/>
        </div>
      ))}
    </div>
  )
}

export default Home