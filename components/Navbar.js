import React, { useState } from "react"
import Link from "next/link"
export default function Navbar({}) {
  const [openNavDrawer, setOpenNavDrawer] = useState(false)
  return (
    <div className='lg:sticky lg:top-0 '>
      <nav className='flex items-center justify-between flex-wrap p-6 bg-steel-50 '>
        <div className='flex items-center flex-no-shrink  mr-6'>
          <Link href='/'>
            <img
              src='/tdclogo.png'
              alt='TheDuckCreatorLogo'
              className='h-6 cursor-pointer'
            />
          </Link>
          <span className='font-semibold font-display text-xl tracking-tight px-2'>
            <Link href='/'>TheDuckCreator</Link>
          </span>{" "}
        </div>{" "}
        <div className='block lg:hidden '>
          <button
            onClick={() => setOpenNavDrawer(!openNavDrawer)}
            className='flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white'
          >
            <svg
              className='h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div
            className={
              openNavDrawer === true
                ? "text-sm  lg:flex lg:flex-grow"
                : "hidden text-sm  lg:flex lg:flex-grow"
            }
          >
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4'
            >
              บล็อก
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4'
            >
              <Link href='/about'>เกี่ยวกับ </Link>
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4'
            >
              แฟ้มสะสมงาน
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white'
            >
              Server
            </a>
          </div>
        </div>
      </nav>{" "}
    </div>
  )
}
