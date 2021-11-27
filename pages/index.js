import _ from "lodash";
import Head from "next/head";
import axios from "axios";
import NextLink from "next/link";
import { Avatar, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
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
        <h2 className='font-display font-semibold  text-3xl mb-2'>
          บทความ / Articles
        </h2>
        {filteredBlog.map((blog) => (
          <Box
            key={blog.id}
            padding='4'
            borderRadius='lg'
            className='shadow-lg  lg:w-9/12 my-4'
          >
            {" "}
            <Link className='text-2xl  font-medium font-dismono text-gray-500'>
              <NextLink href={"/blogs/" + encodeURIComponent(blog.id)}>
                <div>
                  {" "}
                  <FontAwesomeIcon icon={faCaretRight} /> {blog.Title}
                </div>
              </NextLink>
            </Link>
            <p className='text-gray-600 my-4 text-lg'>{blog.Placeholder}</p>
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
