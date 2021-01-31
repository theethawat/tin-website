import Head from "next/head"
import axios from "axios"
import NextLink from "next/link"
import Layout from "../layout/FrontLayout"
import { Avatar, Box, Divider, Link } from "@chakra-ui/react"
import Config from "../config.json"
import _ from "lodash"

export default function Home({ blogs, error }) {
  if (error) {
    return <div>Something is Error {error.message}</div>
  }
  let filteredBlog = _.take(blogs, 5)
  return (
    <Layout>
      <Head>
        <title> The Duck Creator - Create For Better</title>
        <meta
          name='description'
          content='Space ซอฟต์แวร์เล็ก ๆ จากการทำอะไรเล่น ๆ ในงานที่ใครไม่ต้องการแต่เราต้องการ สู่การนำความรู้ มาสร้างสิ่งดี ๆ ให้เกิดกับสังคม'
        />
        <meta
          name='keywords'
          content='The Duck Creator,TDC, ซอฟต์แวร์, ทำเล่นๆ'
        />
        <meta name='author' content='Theethawat Savastham' />
        <meta name='OG:image' content='/ogtag.jpg' />
      </Head>
      <div className='my-2'>
        <h2 className='font-display font-semibold text-2xl mb-2'>บทความ</h2>
        {filteredBlog.map((blog) => (
          <Box
            key={blog.id}
            padding='4'
            borderRadius='lg'
            className='shadow-md lg:w-9/12 mx-4'
          >
            {" "}
            <Link className='text-lg font-medium font-display text-gray-500'>
              <NextLink href={"/blogs/" + encodeURIComponent(blog.id)}>
                {blog.Title}
              </NextLink>
            </Link>
            <p className='text-gray-400 mb-3'>{blog.Placeholder}</p>
            <Divider className='my-2' />
            <div className='flex gap-2 my-2'>
              <Avatar
                src={Config.apiURl + blog.AuthorImage}
                name={blog.Author}
                size='sm'
              />
              <h5 className='align-middle self-center'> {blog.Author} </h5>
            </div>
          </Box>
        ))}
      </div>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(Config.apiURl + "/blogs")
    const blogs = res.data
    return { blogs }
  } catch (error) {
    return { error }
  }
}
