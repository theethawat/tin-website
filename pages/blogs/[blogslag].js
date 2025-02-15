import config from "../../config.json";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../layout/BlogLayout";
import _ from "lodash";
import MDXComponent from "../../components/MDXComponent";
import moment from "moment";
import "moment/locale/th";
import Head from "next/head";

export default function BlogPost({ blog, error }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Layout title=''> Loading... </Layout>;
  }
  if (error) {
    return <Layout title=''> Somethings get Wrong </Layout>;
  }
  if (!blog) {
    return <Layout title=''> Data Maybe Unavailable </Layout>;
  }

  if (blog)
    return (
      <Layout title={blog.Title || ""}>
        <div className='my-4'>
          <Head>
            <title>{blog.Title}</title>
            <meta name='description' content={blog.Placeholder} />
            <meta name='OG:image' content={config.apiURl + blog.MainMedia} />
          </Head>
          <div className=' mt-8'>
            <h1 className='text-5xl font-semibold px-4 font-display  text-center text-royalblue-700'>
              {" "}
              {blog.Title}{" "}
            </h1>{" "}
            <div className='flex justify-center'>
              <div className='flex gap-2 my-2 px-4'>
                <h6 className='align-middle self-center text-gray-400 text-base font-display'>
                  ผู้เขียน
                </h6>{" "}
                <h5 className='align-middle self-center font-display'>
                  {" "}
                  {blog.Author || ""}{" "}
                </h5>
                <h6 className='align-middle self-center text-gray-400 text-base font-display'>
                  เขียนเมื่อ{" "}
                  {moment(blog.EditDate || "")
                    .locale("th")
                    .format("D MMMM YYYY")}{" "}
                </h6>
              </div>
            </div>
            <br />
            <div className='px-4'>
              <MDXComponent>{blog.Content}</MDXComponent>
            </div>
          </div>
          <br />
        </div>
      </Layout>
    );
  return <div></div>;
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(config.apiURl + "/blogs");
    const allBlogs = await res.data;
    const paths = _.map(allBlogs, (blog) => ({
      params: { blogslag: blog.id.toString() },
    }));
    return {
      paths: paths,
      fallback: true,
    };
  } catch (error) {
    return { props: { error } };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(config.apiURl + "/blogs/" + params.blogslag);
    const blog = await res.data;
    return { props: { blog }, revalidate: 1 };
  } catch (error) {
    return { props: { error } };
  }
}
