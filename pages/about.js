import Layout from "../layout/PageLayout"
import MDXComponent from "../components/MDXComponent"
import config from "../config.json"
import _ from "lodash"
import axios from "axios"
import Head from "next/head"

export default function about({ aboutPage, error }) {
  if (error) {
    return <Layout>Something Went Wrong ?</Layout>
  }

  return (
    <Layout title='เกี่ยวกับเรา'>
      <Head>
        <title> เกี่ยวกับเรา - About</title>

        <meta name='OG:image' content='/ogtag.jpg' />
      </Head>
      <div className='my-4'>
        <div className=' mt-8'>
          <MDXComponent>{aboutPage.Content}</MDXComponent>
        </div>
        <br />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(config.apiURl + "/Pages/")
    const allPageData = await res.data
    const aboutPage = _.find(allPageData, (page) => page.SlagLink === "about")
    return {
      props: { aboutPage },
    }
  } catch (error) {
    return { prop: error }
  }
}
