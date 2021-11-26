export default function Hero({ title, date }) {
  return (
    <div className='w-full h-48 tdc-header '>
      <div className='flex h-full place-content-center'>
        <div className='place-self-center '>
          <h1 className='text-4xl font-medium italic font-dismono'>{title}</h1>
        </div>
      </div>
    </div>
  );
}
