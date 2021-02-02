export default function Hero({ title, date }) {
  return (
    <div className='w-full h-52 tdc-header-2 '>
      <div className='flex h-full place-content-center'>
        <div className='place-self-center '>
          <h1 className='text-4xl font-semibold font-display text-white'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
