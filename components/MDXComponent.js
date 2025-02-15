import ReactMarkdown from "react-markdown";
import {} from "@chakra-ui/react";
import gfm from "remark-gfm";
import config from "../config.json";

export default function MDXComponent({ children }) {
  const renderer = {
    image: (value) => {
      //  console.log(value);
      return (
        <div className='flex justify-center my-4'>
          <img
            className='max-h-80'
            src={config.apiURl + value.src}
            alt={value.alt}
          />
        </div>
      );
    },
    heading: ({ level, node, children }) => {
      if (level === 1)
        return (
          <h1 className='text-3xl font-bold font-display my-6 text-shamrock-500'>
            {children}{" "}
          </h1>
        );
      if (level === 2)
        return (
          <h2 className='text-2xl font-semibold font-sans my-4 '>
            {" "}
            {children}{" "}
          </h2>
        );
      if (level === 3)
        return (
          <h3 className='text-2xl font-sans  font-semibold my-2'>
            {" "}
            {children}{" "}
          </h3>
        );
      if (level === 4) return <h4 className='text-xl'> {children} </h4>;
      if (level === 5) return <h5 className='text-xl'> {children} </h5>;
      if (level === 6) return <h6 className='text-xl'> {children} </h6>;
      else return <p className='text-xl my-2'>{children}</p>;
    },
    paragraph: ({ children }) => {
      return <p className='my-3 text-lg'> {children} </p>;
    },
    blockquote: ({ children }) => {
      return (
        <p className='my-2 text-xl font-sans italic px-2 '> {children} </p>
      );
    },
    code: ({ language, value }) => {
      return <pre className='bg-gray-50 font-mono w-2/3 p-1'> {value} </pre>;
    },
  };

  return (
    <ReactMarkdown
      className='gap-y-3'
      children={children}
      plugins={[gfm]}
      renderers={renderer}
    />
  );
}
