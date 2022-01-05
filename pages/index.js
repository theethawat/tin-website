import _ from "lodash";
import Head from "next/head";
import axios from "axios";
import NextLink from "next/link";
import { Avatar, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import Layout from "../layout/FrontLayout";
import Config from "../config.json";

export default function Home({ blogs, error, excerpt }) {
  if (error) {
    return <div>Something is Error {error.message}</div>;
  }
  let filteredBlog = _.take(blogs, 5);
  return (
    <Layout excerpt={excerpt}>
      <Head>
        <title> TheethawatSpace@TDC </title>
        <meta
          name='description'
          content='Space เล็กๆ ของ ติน ธีร์ธวัช สวาสดิ์ธรรม'
        />
        <meta
          name='keywords'
          content='The Duck Creator,TDC, ซอฟต์แวร์, ทำเล่นๆ'
        />
        <meta name='author' content='Theethawat Savastham' />
        <meta name='OG:image' content='/ogtag.jpg' />
      </Head>

      <div className='my-2'>
        <h2 className='font-display font-semibold  text-center text-cerise-600 text-3xl mb-2'>
          บทความ / Articles
        </h2>
        {filteredBlog.map((blog) => (
          <Box key={blog.id} padding='4' borderRadius='lg' className=' my-4 '>
            {" "}
            <Link className='text-3xl  font-bold font-display text-center  '>
              <NextLink href={"/blogs/" + encodeURIComponent(blog.id)}>
                <div className=''>{blog.Title}</div>
              </NextLink>
            </Link>
            <div className='flex justify-center'>
              <p className='text-gray-600 my-4 text-lg lg:w-2/3 text-center'>
                {blog.Placeholder}
              </p>
            </div>
          </Box>
        ))}
      </div>
    </Layout>
  );
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(Config.apiURl + "/blogs");
    const excerptRes = await axios.get(Config.apiURl + "/pages");

    const blogs = _.reverse(res.data);
    const excerpt = _.find(
      excerptRes.data,
      (page) => page.SlagLink === "excerpt"
    );
    return { blogs, excerpt };
  } catch (error) {
    return { error };
  }
};
