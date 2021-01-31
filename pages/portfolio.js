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
export default function about({ portfolio, error }) {
  if (error) {
    return <Layout>Something Went Wrong ?</Layout>
  }

  return (
    <Layout title='งานของเรา'>
      <Head>
        <title> งานของเรา - Portfolio</title>
        <meta name='OG:image' content='/ogtag.jpg' />
      </Head>
      <div className='my-4'>
        {_.map(portfolio, (port) => (
          <div className='p-2'>
            <h3 className='text-2xl font-semibold font-display'>
              {" "}
              {port.Name}
            </h3>

            <h5 className='text-gray-400 text-sm font-medium'>
              {" "}
              {moment(port.Date).locale("th").format("DD MMM YYYY")} |{" "}
              {port.Type}
            </h5>
            <p className='text-gray-400'> {port.Description} </p>
            <ul className='mt-4'>
              {port.GitURL ? (
                <li className='text-sm'>
                  {" "}
                  <span className='text-shamrock-800'>
                    {" "}
                    <FontAwesomeIcon icon={faGithub} /> Git:{" "}
                  </span>{" "}
                  <PageLink>
                    {" "}
                    <span className='text-shamrock-800'> Website: </span>{" "}
                    <a href={port.GitURL}> {port.GitURL} </a>{" "}
                  </PageLink>{" "}
                </li>
              ) : (
                " "
              )}
              {port.Link ? (
                <li className='text-sm'>
                  {" "}
                  <FontAwesomeIcon icon={faGlobe} /> Website:{" "}
                  <PageLink>
                    {" "}
                    <a href={port.Link}> {port.Link} </a>{" "}
                  </PageLink>{" "}
                </li>
              ) : (
                " "
              )}
            </ul>

            <Divider className='my-3' />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(config.apiURl + "/Portfolios")
    const portfolio = await res.data
    return {
      props: { portfolio },
    }
  } catch (error) {
    return { prop: error }
  }
}
