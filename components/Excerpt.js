import Link from "next/link";
import MDXComponent from "./MDXComponent";
export default function Excerpt({ excerpt }) {
  console.log("Excerpt ", excerpt);
  if (!excerpt) {
    return <div></div>;
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:w-4/6  my-8 flex flex-wrap justify-around '>
        <div className='w-5/6 lg:w-3/6 overflow-x-auto'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/UzKTadfPrkQ'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <div className='w-full lg:w-3/6 p-4 text-center  lg:text-left '>
          <MDXComponent>{excerpt.Content}</MDXComponent>
        </div>
      </div>
    </div>
  );
}
