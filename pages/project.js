import Layout from "../layout/PageLayout"
import MDXComponent from "../components/MDXComponent"
import config from "../config.json"
import _ from "lodash"
import axios from "axios"
import { Badge, Divider, Link as PageLink } from "@chakra-ui/react"
import moment from "moment"
import "moment/locale/th"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Head from "next/head"
export default function about({ project, error }) {
  if (error) {
    return <Layout>Something Went Wrong ?</Layout>
  }

  return (
    <Layout title='โปรเจกต์ของเรา'>
      <Head>
        <title> โปรเจกต์ - Project</title>
        <meta name='OG:image' content='/ogtag.jpg' />
      </Head>
      <div className='my-4 flex flex-wrap p-2 py-4'>
        {_.map(project, (proj) => (
          <div className='p-2 shadow-lg rounded-md w-full lg:w-1/3 '>
            <h3 className='text-2xl font-semibold font-display'>
              {" "}
              {proj.Name}
            </h3>

            <h5 className='text-gray-400 text-sm font-medium font-display'>
              {proj.Status}
            </h5>
            <p className='text-gray-400 '> {proj.Description} </p>
            <div className='flex gap-2 mt-3'>
              {proj.GitURL ? (
                <div className='text-sm m-2 shadow-md p-2 w-1/3'>
                  <PageLink>
                    <FontAwesomeIcon icon={faGithub} />
                    <a href={proj.GitURL}> {proj.GitURL} </a>{" "}
                  </PageLink>{" "}
                </div>
              ) : (
                " "
              )}
              {proj.Link ? (
                <div className='text-sm m-2 shadow-md p-2 w-1/3'>
                  {" "}
                  <PageLink>
                    {" "}
                    <FontAwesomeIcon icon={faGlobe} />
                    <a href={proj.Link}> Website </a>
                  </PageLink>{" "}
                </div>
              ) : (
                " "
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(config.apiURl + "/projects")
    const project = await res.data
    return {
      props: { project },
    }
  } catch (error) {
    return { prop: error }
  }
}
