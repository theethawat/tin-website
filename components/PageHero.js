export default function Hero({ title, date }) {
  return (
    <div className='w-full h-24  '>
      <div className='flex h-full place-content-center'>
        <div className='place-self-center '>
          <h1 className='text-5xl font-bold font-display text-cerise-600'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
