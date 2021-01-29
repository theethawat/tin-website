import Link from "next/link"
export default function Excerpt({}) {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:w-4/6  my-8 flex flex-wrap justify-around '>
        <div className='w-4/6'>
          <h3 className='font-display font-medium text-2xl'>
            จากการทำอะไรเล่น ๆ ในงานที่ใครไม่ต้องการแต่เราต้องการ
          </h3>
          <h2 className='font-display font-bold text-3xl'>
            สู่การนำความรู้ มาสร้างสิ่งดี ๆ ให้เกิดกับสังคม
          </h2>
          <p className='mt-3 text-gray-500 text-base font-light font-display'>
            ตอนนี้เป็นตัวเดิมยังคงอยู่ แต่โตขึ้น และจะปล่อยทุกอย่างไว้ที่นี่
          </p>
        </div>
        <div className='w-full lg:w-1/6'>
          <p className='mt-3 text-center text-lg text-gray-600'>
            ติดตามเรื่องราวของเป็ดตัวนี้{" "}
          </p>
          <div className='flex justify-center'>
            <div
              className='w-4/6 lg:w-5/6 transition transform hover:-translate-y-1 duration-500 
             bg-gradient-to-r from-shamrock-400 via-shamrock-500 to-shamrock-700
             flex place-content-center p-2 m-2 rounded-lg shadow-md
              text-white cursor-pointer   hover:from-shamrock-500 hover:via-shamrock-700 hover:to-shamrock-800
            '
            >
              <Link href='/about'>
                <h6 className='place-self-center font-display text-xl'>
                  เกี่ยวกับเรา
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
