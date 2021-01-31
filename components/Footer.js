import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import { faHeart, faMailBulk } from "@fortawesome/free-solid-svg-icons"
import moment from "moment"
export default function Foorter({}) {
  return (
    <div className='w-full overflow-x-auto bg-shamrock-50 text-center p-4'>
      <div className='flex flex-row gap-2 justify-center mt-3'>
        <h5 className='text-xl'>
          {" "}
          <a href='https://facebook.com/theduckcreatorthailand'>
            {" "}
            <FontAwesomeIcon icon={faFacebook} />{" "}
          </a>
        </h5>
        <h5 className='text-xl'>
          {" "}
          <a href='https://instagram.com/theethawatspace19'>
            {" "}
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>
        </h5>
        <h5 className='text-xl'>
          {" "}
          <a href='https://github.com/TheDuckCreator'>
            {" "}
            <FontAwesomeIcon icon={faGithub} />{" "}
          </a>
        </h5>
        <h5 className='text-xl'>
          {" "}
          <a href='https://medium.com/@theethawat'>
            {" "}
            <FontAwesomeIcon icon={faMedium} />{" "}
          </a>
        </h5>
        <h5 className='text-xl'>
          {" "}
          <a href='mailto:theduckcreator@gmail.com'>
            {" "}
            <FontAwesomeIcon icon={faMailBulk} />{" "}
          </a>
        </h5>
      </div>
      <p className='mt-2 font-display font-light'>
        &copy; {moment().format("YYYY")} The Duck Creator, with{" "}
        <FontAwesomeIcon icon={faHeart} /> Using{" "}
        <a href='https://nextjs.org'>Next.JS</a> and{" "}
        <a href='https://strapi.io'>Strapi</a>
        <br /> <span className='text-sm'>This work is licensed under a </span>
        <a
          rel='license'
          className='text-sm'
          href='http://creativecommons.org/licenses/by/4.0/'
        >
          Creative Commons Attribution 4.0 International License
        </a>
        .
      </p>
      <div className='flex justify-center my-2'>
        <img
          alt='The Duck Creator,Create For Better'
          src='/TDC-CBT.png'
          className='h-12'
        />
      </div>
    </div>
  )
}
