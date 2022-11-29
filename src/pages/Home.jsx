import React from 'react'
import BlogCard from '../components/BlogCard'
import {useQuery, gql} from "@apollo/client"

const CATEGORIES = gql`
  query GetCategory{
    titles{
      data{
        id,
        attributes{
          name
        }
      }
    }
  }
`

function Home() {

  const {loading, error, data} = useQuery(CATEGORIES)

  if (loading) return <p> Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)

  return (
    <div className='home'>
      <BlogCard />
    </div>
  )
}

export default Home