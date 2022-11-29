import React, { useEffect, useState } from 'react'

function BlogTag({name}) {

  const [bgc, setBgc] = useState('#657ED4')

  useEffect(() => {
    if(name.replaceAll(" ", "") === "SET8"){
      setBgc('#A7307E')
    }
    if(name.replaceAll(" ", "") === "Guide"){
      setBgc('#608738')
    }
  })


  return (
    <div className='blog-tag' style={{
      backgroundColor: bgc
    }}>
        <span>{name}</span>
    </div>
  )
}

export default BlogTag