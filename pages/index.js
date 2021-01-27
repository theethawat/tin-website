import Head from "next/head"
import axios from "axios"
import Navbar from "../components/Navbar.js"

export default function Home({ blogs, error }) {
  if (error) {
    return <div>Something is Error {error.message}</div>
  }
  return (
    <div className=''>
      <Navbar />

      <div className='container mx-auto'>
        {blogs.map((blog) => (
          <li key={blog.id}> {blog.Title} </li>
        ))}
      </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/blogs")
    const blogs = res.data
    return { blogs }
  } catch (error) {
    return { error }
  }
}
