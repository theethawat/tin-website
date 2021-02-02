import config from "../../config.json"
import { useRouter } from "next/router"
import axios from "axios"
import Layout from "../../layout/BlogLayout"
import _ from "lodash"
import { Avatar, Divider } from "@chakra-ui/react"
import MDXComponent from "../../components/MDXComponent"
import moment from "moment"
import "moment/locale/th"
import Head from "next/head"

export default function BlogPost({ blog, error }) {
  const router = useRouter()
  if (router.isFallback) {
    return <Layout title=''> Loading... </Layout>
  }
  if (error) {
    return <Layout title=''> Somethings get Wrong </Layout>
  }
  if (!blog) {
    return <Layout title=''> Data Maybe Unavailable </Layout>
  }

  return (
    <Layout title={blog.Title}>
      <div className='my-4'>
        <Head>
          <title>{blog.Title}</title>
          <meta name='description' content={blog.Placeholder} />
          <meta name='OG:image' content={config.apiURl + blog.MainMedia} />
        </Head>
        <div className=' mt-8'>
          <h1 className='text-3xl font-bold font-display '> {blog.Title} </h1>
          <h6 className='text-gray-400 text-base'>
            {" "}
            {moment(blog.EditDate).locale("th").format("D MMMM YYYY")}{" "}
          </h6>
          <Divider className='my-2' />
          <br />
          <MDXComponent>{blog.Content}</MDXComponent>
        </div>
        <br />
        <Divider className='my-2' />
        <div className='flex gap-2 my-2'>
          <Avatar
            src={config.apiURl + blog.AuthorImage}
            name={blog.Author}
            size='sm'
          />
          <h5 className='align-middle self-center'> {blog.Author} </h5>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await axios.get(config.apiURl + "/blogs")
  const allBlogs = await res.data
  const paths = _.map(allBlogs, (blog) => ({
    params: { blogslag: blog.id.toString() },
  }))
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(config.apiURl + "/blogs/" + params.blogslag)
    const blog = await res.data
    return { props: { blog }, revalidate: 1 }
  } catch (error) {
    return { props: { error } }
  }
}
