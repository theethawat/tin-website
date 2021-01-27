export default function Navbar({}) {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal p-6'>
      <div className='flex items-center flex-no-shrink text-white mr-6'>
        <img src='/tdclogo.png' alt='TheDuckCreatorLogo' className='h-6' />
        <span className='font-semibold font-display text-xl tracking-tight px-2'>
          TheDuckCreator
        </span>
      </div>
      <div className='block lg:hidden '>
        <button className='flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white'>
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
        <div className='text-sm lg:flex-grow'>
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
            เกี่ยวกับ
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
    </nav>
  )
}
