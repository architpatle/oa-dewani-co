import React from 'react'
import BlogsHero from '../components/Blogs/BlogsHero/BlogsHero'
import BlogsSection from '../components/Home/BlogsSection/BlogsSection'
import BlogEngagement from '../components/Blogs/BlogEngagement/BlogEngagement'

const Blog = () => {
  return (
    <>
      <BlogsHero />
      <BlogsSection variant="main" />
      <BlogEngagement />
    </>
  )
}

export default Blog
