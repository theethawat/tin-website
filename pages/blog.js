import Layout from "../layout/PageLayout";
import config from "../config.json";
import _ from "lodash";
import axios from "axios";
import NextLink from "next/link";
import { Divider, Link, Box, Avatar } from "@chakra-ui/react";
import moment from "moment";
import "moment/locale/th";
import Head from "next/head";
export default function about({ blogs, error }) {
  if (error) {
    return <Layout>Something Went Wrong ?</Layout>;
  }

  return (
    <Layout title='บล็อก'>
      <Head>
        <title> บล็อก - ฺBlogs</title>
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
      <div className='my-4'>
        {_.map(blogs, (blog) => (
          <Box
            key={blog.id}
            padding='4'
            borderRadius='lg'
            className='shadow-md lg:w-10/12'
          >
            {" "}
            <Link className='text-lg font-medium font-display text-gray-500'>
              <NextLink href={"/blogs/" + encodeURIComponent(blog.id)}>
                {blog.Title}
              </NextLink>
            </Link>
            <h6 className='text-sm '>
              {" "}
              {moment(blog.EditDate).locale("th").format("DD MMM YYYY")}{" "}
            </h6>
            <p className='text-gray-400 mb-3'>{blog.Placeholder}</p>
            <Divider className='my-2' />
            <div className='flex gap-2 my-2'>
              <Avatar
                src={config.apiURl + blog.AuthorImage}
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

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(config.apiURl + "/blogs");
    const blogs = _.reverse(res.data);
    return {
      props: { blogs },
    };
  } catch (error) {
    return { prop: error };
  }
}
