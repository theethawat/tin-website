import config from "../../config.json"
import { useRouter } from "next/router"
import axios from "axios"
import Layout from "../../layout/BlogLayout"
import _ from "lodash"
import { Avatar, Divider } from "@chakra-ui/react"
import MDXComponent from "../../components/MDXComponent"
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
        <div className=' mt-8'>
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

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(config.apiURl + "/blogs/" + params.blogslag)
    const blog = await res.data
    return { props: { blog } }
  } catch (error) {
    return { props: { error } }
  }
}

export async function getStaticPaths() {
  const res = await axios.get(config.apiURl + "/blogs")
  const allBlogs = await res.data
  const paths = _.map(allBlogs, (blog) => ({
    params: { blogslag: blog.id.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}
