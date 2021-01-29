import Layout from "../layout/PageLayout"
import MDXComponent from "../components/MDXComponent"
import config from "../config.json"
import _ from "lodash"
import axios from "axios"

export default function about({ aboutPage, error }) {
  if (error) {
    return <Layout>Something Went Wrong ?</Layout>
  }

  return (
    <Layout title='เกี่ยวกับเรา'>
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
