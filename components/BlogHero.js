export default function Hero({ title, date }) {
  return (
    <div className='w-full h-72 tdc-header '>
      <div className='flex h-full place-content-center'>
        <div className='place-self-center '>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}
