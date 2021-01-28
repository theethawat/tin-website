import ReactMarkdown from "react-markdown"
import {} from "@chakra-ui/react"
import gfm from "remark-gfm"
import config from "../config.json"
export default function MDXComponent({ children }) {
  const renderer = {
    image: (value) => {
      console.log(value)
      return (
        <img
          className='max-h-80'
          src={config.apiURl + value.src}
          alt={value.alt}
        />
      )
    },
    heading: ({ level, node, children }) => {
      if (level === 1)
        return (
          <h1 className='text-3xl font-semibold font-display'> {children} </h1>
        )
      if (level === 2)
        return (
          <h2 className='text-2xl font-semibold font-display'> {children} </h2>
        )
      if (level === 3)
        return <h3 className='text-xl font-display'> {children} </h3>
      if (level === 4) return <h4 className='text-lg'> {children} </h4>
      if (level === 5) return <h5 className='text-lg'> {children} </h5>
      if (level === 7) return <h6 className='text-lg'> {children} </h6>
    },
  }
  return (
    <ReactMarkdown children={children} plugins={[gfm]} renderers={renderer} />
  )
}
